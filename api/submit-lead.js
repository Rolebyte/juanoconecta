export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, source = 'popup' } = req.body;
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'Email invalido' });

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const PDF_URL = process.env.PDF_URL;
  const CALLMEBOT_API_KEY = process.env.CALLMEBOT_API_KEY; // se agrega despues

  try {
    // 1. Verificar duplicados
    const checkRes = await fetch(
      `${SUPABASE_URL}/rest/v1/leads?email=eq.${encodeURIComponent(email)}&select=id,status`,
      { headers: { 'apikey': SUPABASE_SERVICE_KEY, 'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}` } }
    );
    const existing = await checkRes.json();
    if (existing.length > 0) {
      return res.status(200).json({ ok: true, status: existing[0].status, duplicate: true });
    }

    // 2. Guardar en Supabase
    const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Prefer': 'return=representation',
      },
      body: JSON.stringify({ email, status: 'pendiente', source }),
    });
    const leads = await dbRes.json();
    const lead = leads[0];

    // 3. Enviar PDF al usuario
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'Juan Gallino <onboarding@resend.dev>',
        to: [email],
        subject: 'Tus 5 prompts de IA para redes sociales',
        html: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#0A0A0A;color:#F5F0EB;">
          <h1 style="font-size:22px;font-weight:500;color:#F5F0EB;margin-bottom:8px;">Aca estan tus 5 prompts</h1>
          <p style="color:#aaa;font-size:15px;line-height:1.6;margin-bottom:24px;">Gracias por descargarlo. Disenados para que cualquier negocio genere contenido profesional con IA en minutos.</p>
          <a href="${PDF_URL}" style="display:inline-block;background:#C4846A;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:15px;font-weight:500;margin-bottom:24px;">Descargar PDF</a>
          <p style="color:#666;font-size:13px;border-top:1px solid #222;padding-top:20px;">Cualquier consulta escribime al <a href="https://wa.me/5493492627811" style="color:#C4846A;">WhatsApp</a>.<br>Juan, JuanoConecta</p>
        </div>`,
      }),
    });

    // 4. Actualizar estado
    const newStatus = emailRes.ok ? 'enviado' : 'error';
    if (lead?.id) {
      await fetch(`${SUPABASE_URL}/rest/v1/leads?id=eq.${lead.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_SERVICE_KEY, 'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}` },
        body: JSON.stringify({ status: newStatus, sent_at: newStatus === 'enviado' ? new Date().toISOString() : null }),
      });
    }

    // 5. Notificacion WhatsApp a Juan via Callmebot (no bloquea si falla)
    if (CALLMEBOT_API_KEY) {
      const waMsg = encodeURIComponent(`🎯 Nuevo lead JuanoConecta!\nEmail: ${email}\nOrigen: ${source}\nEstado: ${newStatus}`);
      fetch(`https://api.callmebot.com/whatsapp.php?phone=5493492627811&text=${waMsg}&apikey=${CALLMEBOT_API_KEY}`)
        .catch(() => {}); // fire and forget
    }

    // 6. Notificacion email a Juan
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'JuanoConecta Leads <onboarding@resend.dev>',
        to: ['jgallino1@gmail.com'],
        subject: `Nuevo lead: ${email}`,
        html: `<p>Nuevo lead:<br><strong>${email}</strong><br>Origen: ${source}<br>Estado: ${newStatus}</p>`,
      }),
    }).catch(() => {});

    return res.status(200).json({ ok: true, status: newStatus, duplicate: false });

  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
}
