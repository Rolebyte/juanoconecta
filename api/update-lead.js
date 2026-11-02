import { claveAdmin, cortarAdmin } from './_seguridad.js';

// Solo lo usa el panel /admin (mismo dominio): sin CORS abierto.
export default async function handler(req, res) {
  if (req.method !== 'PATCH') return res.status(405).json({ error: 'Method not allowed' });

  const corte = claveAdmin(req, req.headers['x-admin-secret']);
  if (corte) return cortarAdmin(res, corte);

  const { id, ...fields } = req.body || {};
  if (!id) return res.status(400).json({ error: 'Falta id' });

  const allowed = ['label', 'status', 'notes'];
  const update = Object.fromEntries(Object.entries(fields).filter(([k]) => allowed.includes(k)));
  if (!Object.keys(update).length) return res.status(400).json({ error: 'Nada que actualizar' });

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

  try {
    await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
      body: JSON.stringify(update),
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: 'Error interno' });
  }
}
