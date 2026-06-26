// api/resend-lead.js
// Reenvío manual desde el panel admin

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Validar token admin simple
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const { leadId, email } = req.body;

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const PDF_URL = process.env.PDF_URL;

  try {
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Juan Gallino <hola@juanoconecta.ar>',
        to: [email],
        subject: '📋 Tus 5 prompts de IA para redes sociales',
        html: `
          <div style="font-family: DM Sans, Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #0A0A0A; color: #F5F0EB;">
            <h1 style="font-size: 22px; font-weight: 500; margin-bottom: 8px; color: #F5F0EB;">
              Acá están tus 5 prompts 🎯
            </h1>
            <p style="color: #aaa; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
              Gracias por descargarlo. Estos prompts están diseñados para que cualquier negocio pueda generar contenido profesional con IA en minutos.
            </p>
            <a href="${PDF_URL}" 
               style="display: inline-block; background: #C4846A; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 15px; font-weight: 500; margin-bottom: 24px;">
              📄 Descargar PDF
            </a>
            <p style="color: #666; font-size: 13px; line-height: 1.6; border-top: 1px solid #222; padding-top: 20px; margin-top: 8px;">
              Cualquier consulta respondeme por acá o escribime al 
              <a href="https://wa.me/5493492627811" style="color: #C4846A;">WhatsApp</a>.<br>
              — Juan, <a href="https://juanoconecta.ar" style="color: #C4846A;">JuanoConecta</a>
            </p>
          </div>
        `,
      }),
    });

    const newStatus = emailRes.ok ? 'enviado' : 'error';

    // Actualizar estado en Supabase
    await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${leadId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
      body: JSON.stringify({
        status: newStatus,
        sent_at: newStatus === 'enviado' ? new Date().toISOString() : null,
      }),
    });

    return res.status(200).json({ ok: true, status: newStatus });

  } catch (err) {
    console.error('Error en resend-lead:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
}
