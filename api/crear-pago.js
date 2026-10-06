// Crea un pago de Mercado Pago (Checkout Pro) para un servicio con cupón de capacitación.
// El precio y el cupón se validan acá, nunca se confía en lo que manda el navegador.
import { MATERIALES } from '../src/data/materiales.js'

const SITE = 'https://juanoconecta.ar'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN
  if (!MP_ACCESS_TOKEN) return res.status(503).json({ error: 'pagos_no_configurados' })

  const { material, servicio, codigo } = req.body || {}
  const m = MATERIALES.find((x) => x.slug === material)
  const b = m?.beneficio
  const s = b?.servicios.find((x) => x.id === servicio)
  if (!s || !s.precio) return res.status(400).json({ error: 'servicio_invalido' })
  if (String(codigo || '').trim().toUpperCase() !== b.codigo) return res.status(400).json({ error: 'codigo_invalido' })
  if (Date.now() > new Date(b.vence).getTime()) return res.status(400).json({ error: 'codigo_vencido' })

  const total = Math.round(s.precio * (1 - b.porcentaje / 100))
  const referencia = `${m.slug}|${s.id}|${b.codigo}|${Date.now()}`
  const vuelta = `${SITE}/material/${m.slug}`

  const mpRes = await fetch('https://api.mercadopago.com/checkout/preferences', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${MP_ACCESS_TOKEN}` },
    body: JSON.stringify({
      items: [{ id: s.id, title: `${s.nombre} (${b.porcentaje}% off ${b.codigo})`, quantity: 1, currency_id: 'ARS', unit_price: total }],
      external_reference: referencia,
      statement_descriptor: 'JUANOCONECTA',
      back_urls: { success: `${vuelta}?pago=aprobado`, pending: `${vuelta}?pago=pendiente`, failure: `${vuelta}?pago=rechazado` },
      auto_return: 'approved',
      notification_url: `${SITE}/api/webhook-mp`,
    }),
  })
  const pref = await mpRes.json()
  if (!mpRes.ok || !pref.init_point) {
    console.error('MP preference error', mpRes.status, pref?.message)
    return res.status(502).json({ error: 'mp_error' })
  }
  return res.status(200).json({ url: pref.init_point })
}
