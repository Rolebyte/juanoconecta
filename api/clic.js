// Registra un clic en un botón de WhatsApp o de pago de la tienda (lo manda src/main.jsx con sendBeacon).
// Público a propósito: solo guarda la página y el texto corto del botón, sin datos personales.
// También cuenta descargas: GET /prompts-navidad o /pedidos-ia (vercel.json) registra la descarga y redirige al PDF.
const DESCARGAS = { 'prompts-navidad': '/prompts-navidad.pdf', 'pedidos-ia': '/pedidos-ia.pdf' }
const BOTS = /bot|crawl|spider|facebookexternalhit|meta-externalagent|preview|whatsapp|telegram|slack|discord/i

async function guardar(fila) {
  const { SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env
  return fetch(`${SUPABASE_URL}/rest/v1/clics`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`, Prefer: 'return=minimal' },
    body: JSON.stringify(fila),
  })
}

export default async function handler(req, res) {
  if (req.method === 'GET' && DESCARGAS[req.query?.descarga]) {
    const archivo = DESCARGAS[req.query.descarga]
    if (!BOTS.test(req.headers['user-agent'] || '')) {
      try {
        const r = await guardar({ pagina: archivo, destino: 'descarga', boton: String(req.query.origen || '').slice(0, 60) || null })
        // Si la tabla no acepta el destino 'descarga', la guarda igual sin destino (el panel la reconoce por el .pdf).
        if (!r.ok) await guardar({ pagina: archivo, boton: 'descarga' })
      } catch (e) {
        console.error('descarga', e?.message)
      }
    }
    res.setHeader('Cache-Control', 'no-store')
    return res.redirect(302, archivo)
  }
  if (req.method !== 'POST') return res.status(405).end()
  try {
    const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
    const pagina = String(b.pagina || '').replace(/[?#].*$/, '').slice(0, 120)
    if (!pagina.startsWith('/')) return res.status(400).end()
    await guardar({ pagina, destino: ['mercadopago', 'gumroad'].includes(b.destino) ? b.destino : 'whatsapp', boton: String(b.boton || '').trim().slice(0, 60) || null })
  } catch (e) {
    console.error('clic', e?.message)
  }
  return res.status(204).end()
}
