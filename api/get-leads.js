import { claveAdmin, cortarAdmin } from './_seguridad.js';

// Solo lo usa el panel /admin (mismo dominio): sin CORS abierto.
export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const corte = claveAdmin(req, req.headers['x-admin-secret']);
  if (corte) return cortarAdmin(res, corte);
  res.setHeader('Cache-Control', 'no-store');

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/leads?select=*&order=created_at.desc`, {
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
    });
    const leads = await r.json();
    return res.status(200).json(leads);
  } catch (err) {
    return res.status(500).json({ error: 'Error interno' });
  }
}
