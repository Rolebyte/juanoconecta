// Lista de espera del curso de IA (/curso-ia). Guarda nombre y contacto en `seguimientos`
// (origen 'curso'), así aparece en el panel /admin → Seguimientos, y le avisa a Juan por mail.
const texto = (v, max) => String(v ?? '').trim().slice(0, max)
const html = (s) => String(s ?? '-').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
  if (b.sitio) return res.status(200).json({ ok: true }) // campo trampa para bots

  const nombre = texto(b.nombre, 120)
  const whatsapp = texto(b.whatsapp, 40)
  const email = texto(b.email, 160)
  if (!nombre) return res.status(400).json({ error: 'Falta el nombre' })
  if (whatsapp.replace(/\D/g, '').length < 8) return res.status(400).json({ error: 'Falta un WhatsApp válido' })
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'El correo no es válido' })

  const { SUPABASE_URL, SUPABASE_SERVICE_KEY, RESEND_API_KEY } = process.env
  const fila = {
    origen: 'curso',
    ref_id: `c${Date.now()}${Math.random().toString(36).slice(2, 6)}`,
    nombre,
    contacto: [whatsapp, email].filter(Boolean).join(' · '),
    etapa: 'nuevo',
    proximo: new Date().toISOString().slice(0, 10),
    notas: 'Lista de espera del curso de IA',
  }
  const r = await fetch(`${SUPABASE_URL}/rest/v1/seguimientos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`, Prefer: 'return=minimal' },
    body: JSON.stringify(fila),
  })
  if (!r.ok) {
    console.error('lista-espera supabase', r.status, await r.text())
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
          subject: `Lista de espera del curso: ${nombre}`,
          html: `<div style="font-family:Arial,sans-serif;padding:24px"><h2 style="margin:0 0 12px">Nueva persona en la lista de espera</h2>
            <p><b>Nombre:</b> ${html(nombre)}<br><b>WhatsApp:</b> ${html(whatsapp)}<br><b>Correo:</b> ${html(email || '-')}</p>
            <p>Ya está en el panel, en Seguimientos.</p></div>`,
        }),
      })
    } catch (e) {
      console.error('lista-espera mail', e?.message)
    }
  }
  return res.status(200).json({ ok: true })
}
