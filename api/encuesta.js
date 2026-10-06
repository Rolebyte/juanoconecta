// Encuesta de satisfacción de una capacitación. Guarda la respuesta en Supabase, avisa a Juan por mail
// y devuelve el código de descuento, que solo se entrega después de responder.
import { MATERIALES } from '../src/data/materiales.js'
import { CUPONES } from './_cupones.js'

const INTERESES = ['redes', 'web', 'ia-equipo', 'auditoria', 'nada']
const RECOMIENDA = { si: 'Sí', 'tal-vez': 'Tal vez', no: 'No' }
const texto = (v, max) => String(v ?? '').trim().slice(0, max) || null
const html = (s) => String(s ?? '-').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const b = req.body || {}
  const m = MATERIALES.find((x) => x.slug === b.material)
  const codigo = CUPONES[m?.slug]
  if (!m?.beneficio || !codigo) return res.status(400).json({ error: 'material_invalido' })
  if (Date.now() > new Date(m.beneficio.vence).getTime()) return res.status(400).json({ error: 'beneficio_vencido' })

  const puntaje = Number(b.puntaje)
  if (!Number.isInteger(puntaje) || puntaje < 1 || puntaje > 5) return res.status(400).json({ error: 'puntaje_invalido' })
  if (!RECOMIENDA[b.recomienda]) return res.status(400).json({ error: 'recomienda_invalido' })

  const fila = {
    material: m.slug,
    puntaje,
    recomienda: b.recomienda,
    lo_mas_util: texto(b.lo_mas_util, 1000),
    mejoras: texto(b.mejoras, 1000),
    intereses: (Array.isArray(b.intereses) ? b.intereses : []).filter((x) => INTERESES.includes(x)).slice(0, 5),
    nombre: texto(b.nombre, 120),
    contacto: texto(b.contacto, 160),
  }

  const { SUPABASE_URL, SUPABASE_SERVICE_KEY, RESEND_API_KEY } = process.env
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/encuestas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}` },
      body: JSON.stringify(fila),
    })
    if (!r.ok) console.error('encuesta supabase', r.status, await r.text())
  } catch (e) {
    console.error('encuesta supabase', e?.message)
  }

  if (RESEND_API_KEY) {
    const nombres = { redes: 'Redes sociales', web: 'Página web', 'ia-equipo': 'Capacitación en IA para su equipo', auditoria: 'Auditoría de su perfil', nada: 'Nada por ahora' }
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'JuanoConecta Encuestas <onboarding@resend.dev>',
        to: ['jgallino1@gmail.com'],
        subject: `Encuesta ${m.titulo}: ${'★'.repeat(puntaje)}${fila.nombre ? ' · ' + fila.nombre : ''}`,
        html: `<div style="font-family:Arial,sans-serif;max-width:560px;padding:24px">
          <h2 style="margin:0 0 12px">Nueva respuesta de la encuesta</h2>
          <p><b>Capacitación:</b> ${html(m.titulo)}<br><b>Puntaje:</b> ${puntaje} de 5<br><b>¿La recomendaría?</b> ${RECOMIENDA[fila.recomienda]}</p>
          <p><b>Lo más útil:</b><br>${html(fila.lo_mas_util)}</p>
          <p><b>Qué mejoraría:</b><br>${html(fila.mejoras)}</p>
          <p><b>Le interesa:</b> ${html(fila.intereses.map((x) => nombres[x]).join(', ') || '-')}</p>
          <p><b>Nombre:</b> ${html(fila.nombre)}<br><b>Contacto:</b> ${html(fila.contacto)}</p></div>`,
      }),
    }).catch((e) => console.error('encuesta mail', e?.message))
  }

  return res.status(200).json({ codigo })
}
