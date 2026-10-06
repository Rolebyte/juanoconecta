// Mercado Pago avisa acá cada pago. Se consulta el pago a la API (no se confía en el aviso)
// y si está aprobado se le manda un mail a Juan con los datos del cliente.
export default async function handler(req, res) {
  const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN
  const RESEND_API_KEY = process.env.RESEND_API_KEY
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
    if (RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${RESEND_API_KEY}` },
        body: JSON.stringify({
          from: 'JuanoConecta Ventas <onboarding@resend.dev>',
          to: ['jgallino1@gmail.com'],
          subject: `Nueva venta: ${p.description || servicio} ($${p.transaction_amount})`,
          html: `<div style="font-family:Arial,sans-serif;max-width:560px;padding:24px">
            <h2 style="margin:0 0 12px">Pago aprobado en Mercado Pago</h2>
            <p><b>Servicio:</b> ${p.description || servicio}<br><b>Monto:</b> $${p.transaction_amount} ARS<br>
            <b>Cupón:</b> ${codigo || '-'} (${material || '-'})<br><b>Cliente:</b> ${nombre}<br>
            <b>Email:</b> ${payer.email || '-'}<br><b>ID de pago:</b> ${p.id}</p>
            <p>Escribile para coordinar el arranque.</p></div>`,
        }),
      })
    }
  } catch (e) {
    console.error('webhook-mp', e?.message)
  }
  return res.status(200).end()
}
