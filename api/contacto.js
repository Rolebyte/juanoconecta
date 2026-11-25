// Formulario de contacto del inicio (#contacto). Guarda la consulta en `seguimientos`
// (origen 'contacto'), así aparece en el panel /admin → Seguimientos y en Hoy, y le avisa a Juan por mail.
import { limite, origenAjeno, cuerpo } from './_seguridad.js'

const texto = (v, max) => String(v ?? '').trim().slice(0, max)
const html = (s) => String(s ?? '-').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (origenAjeno(req)) return res.status(403).json({ error: 'Origen no permitido' })
  if (limite(req, 'contacto', 5, 10 * 60 * 1000)) return res.status(429).json({ error: 'Demasiados envíos. Probá en unos minutos.' })
  const b = cuerpo(req)
  if (b.sitio) return res.status(200).json({ ok: true }) // campo trampa para bots

  const nombre = texto(b.nombre, 120)
  const email = texto(b.email, 160)
  const whatsapp = texto(b.whatsapp, 40)
  const servicio = texto(b.servicio, 80)
  const mensaje = texto(b.mensaje, 2000)
  if (!nombre) return res.status(400).json({ error: 'Falta el nombre' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'El correo no es válido' })
  if (!mensaje) return res.status(400).json({ error: 'Falta el mensaje' })

  const { SUPABASE_URL, SUPABASE_SERVICE_KEY, RESEND_API_KEY } = process.env
  const fila = {
    origen: 'contacto',
    ref_id: `f${Date.now()}${Math.random().toString(36).slice(2, 6)}`,
    nombre,
    contacto: [whatsapp, email].filter(Boolean).join(' · '),
    etapa: 'nuevo',
    proximo: new Date().toISOString().slice(0, 10),
    notas: `${servicio ? `Le interesa: ${servicio}. ` : ''}Mensaje: ${mensaje}`,
  }
  const r = await fetch(`${SUPABASE_URL}/rest/v1/seguimientos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`, Prefer: 'return=minimal' },
    body: JSON.stringify(fila),
  })
  if (!r.ok) {
    console.error('contacto supabase', r.status, await r.text())
    return res.status(500).json({ error: 'No se pudo guardar' })
  }

  if (RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${RESEND_API_KEY}` },
        body: JSON.stringify({
          from: 'JuanoConecta <onboarding@resend.dev>',
          to: ['jgallino1@gmail.com'],
          reply_to: email,
          subject: `Consulta desde la web: ${nombre}`,
          html: `<div style="font-family:Arial,sans-serif;padding:24px"><h2 style="margin:0 0 12px">Nueva consulta desde el formulario de la web</h2>
            <p><b>Nombre:</b> ${html(nombre)}<br><b>Correo:</b> ${html(email)}<br><b>WhatsApp:</b> ${html(whatsapp || '-')}<br><b>Servicio:</b> ${html(servicio || '-')}</p>
            <p><b>Mensaje:</b><br>${html(mensaje).replace(/\n/g, '<br>')}</p>
            <p>Ya está en el panel, en Seguimientos.</p></div>`,
        }),
      })
    } catch (e) {
      console.error('contacto mail', e?.message)
    }
  }
  return res.status(200).json({ ok: true })
}
