// Mercado Pago avisa acá cada pago. Se consulta el pago a la API (no se confía en el aviso)
// y si está aprobado se guarda en la tabla `ventas` (panel de admin) y se le manda un mail a Juan.
// Los datos del comprador los escribe él mismo en Mercado Pago: se escapan antes de ir al mail.
const html = (s) => String(s ?? '-').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))

export default async function handler(req, res) {
  const { MP_ACCESS_TOKEN, RESEND_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env
  const tipo = req.query?.type || req.query?.topic || req.body?.type
  const id = req.query?.['data.id'] || req.query?.id || req.body?.data?.id
  if (!MP_ACCESS_TOKEN || tipo !== 'payment' || !id) return res.status(200).end()

  try {
    const pRes = await fetch(`https://api.mercadopago.com/v1/payments/${encodeURIComponent(id)}`, {
      headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` },
    })
    if (!pRes.ok) return res.status(200).end()
    const p = await pRes.json()
    if (p.status !== 'approved') return res.status(200).end()

    const [material, servicio, codigo] = String(p.external_reference || '').split('|')
    const payer = p.payer || {}
    const nombre = [payer.first_name, payer.last_name].filter(Boolean).join(' ') || 'Sin nombre'

    // Mercado Pago repite los avisos: mp_id es único, así que un aviso repetido no se guarda
    // ni manda otro mail. Si la base no responde, el mail sale igual.
    let nueva = true
    if (SUPABASE_URL && SUPABASE_SERVICE_KEY) {
      try {
        const r = await fetch(`${SUPABASE_URL}/rest/v1/ventas?on_conflict=mp_id`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
            Prefer: 'return=representation,resolution=ignore-duplicates',
          },
          body: JSON.stringify({
            mp_id: String(p.id), servicio: p.description || servicio || null, monto: p.transaction_amount ?? null,
            cupon: codigo || null, material: material || null, cliente: nombre, email: payer.email || null,
          }),
        })
        if (r.ok) nueva = (await r.json()).length > 0
      } catch (e) {
        console.error('webhook-mp ventas', e?.message)
      }
    }

    if (RESEND_API_KEY && nueva) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${RESEND_API_KEY}` },
        body: JSON.stringify({
          from: 'JuanoConecta Ventas <onboarding@resend.dev>',
          to: ['jgallino1@gmail.com'],
          subject: `Nueva venta: ${p.description || servicio} ($${p.transaction_amount})`,
          html: `<div style="font-family:Arial,sans-serif;max-width:560px;padding:24px">
            <h2 style="margin:0 0 12px">Pago aprobado en Mercado Pago</h2>
            <p><b>Servicio:</b> ${html(p.description || servicio)}<br><b>Monto:</b> $${html(p.transaction_amount)} ARS<br>
            <b>Cupón:</b> ${html(codigo || '-')} (${html(material || '-')})<br><b>Cliente:</b> ${html(nombre)}<br>
            <b>Email:</b> ${html(payer.email || '-')}<br><b>ID de pago:</b> ${html(p.id)}</p>
            <p>Escribile para coordinar el arranque.</p></div>`,
        }),
      })
    }
  } catch (e) {
    console.error('webhook-mp', e?.message)
  }
  return res.status(200).end()
}
