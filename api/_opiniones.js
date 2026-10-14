// Opiniones de clientes: las recibe la página /opinion y las muestra el home.
// Vive dentro de api/encuesta.js (?tipo=opinion) para no sumar funciones en Vercel (Hobby, tope 12).
// Se publican solas; desde /admin (pestaña Opiniones) se pueden ocultar.
import { SERVICIOS_OPINION, nombreServicio } from '../src/data/opiniones.js'

const texto = (v, max) => String(v ?? '').trim().replace(/\s+/g, ' ').slice(0, max) || null
const html = (s) => String(s ?? '-').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))
const PUBLICAS = 'id,created_at,nombre,negocio,servicio,estrellas,texto'

export async function opiniones(req, res) {
  const { SUPABASE_URL, SUPABASE_SERVICE_KEY, RESEND_API_KEY } = process.env
  const headers = { 'Content-Type': 'application/json', apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}` }

  if (req.method === 'GET') {
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/opiniones?select=${PUBLICAS}&visible=eq.true&order=created_at.desc&limit=30`, { headers })
      if (!r.ok) throw new Error(`${r.status} ${await r.text()}`)
      res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300')
      return res.status(200).json(await r.json())
    } catch (e) {
      console.error('opiniones get', e?.message)
      return res.status(200).json([])
    }
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
  if (b.web) return res.status(200).json({ ok: true }) // campo trampa: solo lo completan los bots

  const estrellas = Number(b.estrellas)
  if (!Number.isInteger(estrellas) || estrellas < 1 || estrellas > 5) return res.status(400).json({ error: 'estrellas_invalidas' })
  if (!SERVICIOS_OPINION.some((s) => s.id === b.servicio)) return res.status(400).json({ error: 'servicio_invalido' })
  const fila = {
    estrellas,
    servicio: b.servicio,
    nombre: texto(b.nombre, 80),
    negocio: texto(b.negocio, 80),
    texto: texto(b.texto, 600),
    contacto: texto(b.contacto, 160),
  }
  if (!fila.nombre) return res.status(400).json({ error: 'falta_nombre' })
  if (!fila.texto || fila.texto.length < 10) return res.status(400).json({ error: 'falta_texto' })
  if (/https?:\/\/|www\./i.test(fila.texto)) return res.status(400).json({ error: 'sin_links' })

  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/opiniones`, { method: 'POST', headers, body: JSON.stringify(fila) })
    if (!r.ok) throw new Error(`${r.status} ${await r.text()}`)
  } catch (e) {
    console.error('opiniones post', e?.message)
    return res.status(500).json({ error: 'no_guardada' })
  }

  if (RESEND_API_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'JuanoConecta Opiniones <onboarding@resend.dev>',
        to: ['jgallino1@gmail.com'],
        subject: `Nueva opinión: ${'★'.repeat(estrellas)} · ${fila.nombre}`,
        html: `<div style="font-family:Arial,sans-serif;max-width:560px;padding:24px">
          <h2 style="margin:0 0 12px">Nueva opinión en la web</h2>
          <p><b>${html(fila.nombre)}</b>${fila.negocio ? ' · ' + html(fila.negocio) : ''}<br><b>Servicio:</b> ${html(nombreServicio(fila.servicio))}<br><b>Estrellas:</b> ${estrellas} de 5</p>
          <p>${html(fila.texto)}</p>
          <p><b>Contacto:</b> ${html(fila.contacto)}</p>
          <p style="color:#666">Ya se ve en el home. Si querés ocultarla, entrá a juanoconecta.ar/admin, pestaña Opiniones.</p></div>`,
      }),
    }).catch((e) => console.error('opiniones mail', e?.message))
  }

  return res.status(200).json({ ok: true })
}
