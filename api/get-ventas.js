// Panel de admin: devuelve la tabla `ventas`. Misma contraseña que los leads (ADMIN_SECRET).
export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  const { ADMIN_SECRET, SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env
  const secret = req.headers['x-admin-secret']
  if (!ADMIN_SECRET || secret !== ADMIN_SECRET) return res.status(401).json({ error: 'No autorizado' })

  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/ventas?select=*&order=created_at.desc`, {
      headers: { apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}` },
    })
    if (!r.ok) return res.status(500).json({ error: 'Error al leer la base' })
    return res.status(200).json(await r.json())
  } catch (err) {
    return res.status(500).json({ error: 'Error interno' })
  }
}
