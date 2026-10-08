// Registra un clic en un botón de WhatsApp de la web (lo manda src/main.jsx con sendBeacon).
// Público a propósito: solo guarda la página y el texto corto del botón, sin datos personales.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env
  try {
    const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
    const pagina = String(b.pagina || '').replace(/[?#].*$/, '').slice(0, 120)
    if (!pagina.startsWith('/')) return res.status(400).end()
    await fetch(`${SUPABASE_URL}/rest/v1/clics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`, Prefer: 'return=minimal' },
      body: JSON.stringify({ pagina, destino: 'whatsapp', boton: String(b.boton || '').trim().slice(0, 60) || null }),
    })
  } catch (e) {
    console.error('clic', e?.message)
  }
  return res.status(204).end()
}
