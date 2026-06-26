// api/sequence-emails.js
// Cron job que se ejecuta diariamente — busca leads que necesitan el email del dia 3 o dia 7
// Configurar en vercel.json como cron: "0 10 * * *" (10am UTC = 7am ARG)

export default async function handler(req, res) {
  // Solo acepta llamadas desde Vercel Cron o con el secret
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  try {
    const now = new Date();
    const results = { day3: 0, day7: 0, errors: 0 };

    // Buscar leads enviados hace 3 dias (sequence_day = 0)
    const threeDaysAgo = new Date(now);
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    const threeDaysAgoStr = threeDaysAgo.toISOString().slice(0, 10);

    const res3 = await fetch(
      `${SUPABASE_URL}/rest/v1/leads?status=eq.enviado&sequence_day=eq.0&sent_at=gte.${threeDaysAgoStr}T00:00:00&sent_at=lte.${threeDaysAgoStr}T23:59:59&select=id,email`,
      { headers: { 'apikey': SUPABASE_SERVICE_KEY, 'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}` } }
    );
    const leads3 = await res3.json();

    for (const lead of leads3) {
      const ok = await sendDay3Email(lead.email, RESEND_API_KEY);
      if (ok) {
        await updateSequenceDay(SUPABASE_URL, SUPABASE_SERVICE_KEY, lead.id, 3);
        results.day3++;
      } else results.errors++;
    }

    // Buscar leads enviados hace 7 dias (sequence_day = 3)
    const sevenDaysAgo = new Date(now);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const sevenDaysAgoStr = sevenDaysAgo.toISOString().slice(0, 10);

    const res7 = await fetch(
      `${SUPABASE_URL}/rest/v1/leads?status=eq.enviado&sequence_day=eq.3&sent_at=gte.${sevenDaysAgoStr}T00:00:00&sent_at=lte.${sevenDaysAgoStr}T23:59:59&select=id,email`,
      { headers: { 'apikey': SUPABASE_SERVICE_KEY, 'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}` } }
    );
    const leads7 = await res7.json();

    for (const lead of leads7) {
      const ok = await sendDay7Email(lead.email, RESEND_API_KEY);
      if (ok) {
        await updateSequenceDay(SUPABASE_URL, SUPABASE_SERVICE_KEY, lead.id, 7);
        results.day7++;
      } else results.errors++;
    }

    return res.status(200).json({ ok: true, results });
  } catch (err) {
    console.error('Error en sequence-emails:', err);
    return res.status(500).json({ error: 'Error interno' });
  }
}

async function sendDay3Email(email, apiKey) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({
      from: 'Juan Gallino <onboarding@resend.dev>',
      to: [email],
      subject: 'Te regalo una auditoría gratuita de tu perfil',
      html: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#0A0A0A;color:#F5F0EB;">
        <p style="color:#888;font-size:13px;margin-bottom:20px">Hace 3 días te mandé los 5 prompts de IA ✅</p>
        <h1 style="font-size:22px;font-weight:500;margin-bottom:12px;color:#F5F0EB;">¿Ya los probaste?</h1>
        <p style="color:#aaa;font-size:15px;line-height:1.7;margin-bottom:20px;">Si los usaste, genial. Si todavía no tuviste tiempo — te entiendo, pasa.</p>
        <p style="color:#aaa;font-size:15px;line-height:1.7;margin-bottom:20px;">Lo que sí quiero ofrecerte hoy es algo concreto:</p>
        <div style="background:#161616;border:1px solid #2a2a2a;border-radius:10px;padding:20px 24px;margin-bottom:24px;">
          <p style="font-size:17px;font-weight:500;color:#F5F0EB;margin-bottom:8px;">🎯 Auditoría gratuita de tu Instagram o web</p>
          <p style="color:#888;font-size:14px;line-height:1.6;">Revisamos juntos tu perfil y te digo exactamente qué cambiaría para conseguir más clientes. Sin venta, sin presión. Solo valor concreto.</p>
        </div>
        <p style="color:#aaa;font-size:15px;line-height:1.7;margin-bottom:24px;">Son 20 minutos por WhatsApp o Google Meet. Completamente gratis.</p>
        <a href="https://wa.me/5493492627811?text=Hola%20Juan%2C%20quiero%20la%20auditor%C3%ADa%20gratuita" 
           style="display:inline-block;background:#C4846A;color:#fff;text-decoration:none;padding:12px 28px;border-radius:8px;font-size:15px;font-weight:500;margin-bottom:28px;">
          Quiero mi auditoría gratuita →
        </a>
        <p style="color:#555;font-size:13px;line-height:1.6;border-top:1px solid #1e1e1e;padding-top:20px;">
          — Juan Gallino<br>
          <a href="https://juanoconecta.ar" style="color:#C4846A;">juanoconecta.ar</a> · +54 9 3492 627811
        </p>
      </div>`
    }),
  });
  return res.ok;
}

async function sendDay7Email(email, apiKey) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({
      from: 'Juan Gallino <onboarding@resend.dev>',
      to: [email],
      subject: 'Cómo Tatitos pasó de 0 a vender todos los días por Instagram',
      html: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#0A0A0A;color:#F5F0EB;">
        <p style="color:#888;font-size:13px;margin-bottom:20px">Caso de éxito — cliente de JuanoConecta</p>
        <h1 style="font-size:22px;font-weight:500;margin-bottom:16px;color:#F5F0EB;">Cómo una pañalera local empezó a vender todos los días sin salir de Rafaela</h1>
        <p style="color:#aaa;font-size:15px;line-height:1.7;margin-bottom:16px;">Cuando Tatitos Pañalera llegó a JuanoConecta, tenía presencia en redes pero sin estrategia. Publicaban cuando podían, con fotos del celular, sin llamada a la acción clara.</p>
        <div style="background:#161616;border-left:3px solid #C4846A;padding:16px 20px;margin:20px 0;border-radius:0 8px 8px 0;">
          <p style="color:#F5F0EB;font-size:15px;font-style:italic;line-height:1.7;margin:0;">"Antes publicaba y nadie me escribía. Ahora tengo pedidos todos los días por Instagram y WhatsApp. El cambio fue real."</p>
          <p style="color:#666;font-size:13px;margin-top:8px;margin-bottom:0">— Tatitos Pañalera, Rafaela</p>
        </div>
        <p style="color:#aaa;font-size:15px;line-height:1.7;margin-bottom:12px;"><strong style="color:#F5F0EB;">Qué hicimos:</strong></p>
        <ul style="color:#aaa;font-size:15px;line-height:1.9;padding-left:20px;margin-bottom:20px;">
          <li>Estrategia de contenido con pilares definidos</li>
          <li>Carruseles educativos que generan guardados y consultas</li>
          <li>Optimización del perfil y bio para convertir visitas</li>
          <li>Tienda online con Mercado Pago integrado</li>
          <li>SEO local → hoy aparecen primeros en Google para "pañalera Rafaela"</li>
        </ul>
        <p style="color:#aaa;font-size:15px;line-height:1.7;margin-bottom:24px;">¿Tu negocio podría tener resultados similares? Charlemos.</p>
        <a href="https://wa.me/5493492627811?text=Hola%20Juan%2C%20vi%20el%20caso%20de%20Tatitos%20y%20quiero%20saber%20c%C3%B3mo%20trabajar%20juntos" 
           style="display:inline-block;background:#C4846A;color:#fff;text-decoration:none;padding:12px 28px;border-radius:8px;font-size:15px;font-weight:500;margin-bottom:28px;">
          Quiero resultados así →
        </a>
        <p style="color:#555;font-size:13px;line-height:1.6;border-top:1px solid #1e1e1e;padding-top:20px;">
          — Juan Gallino · <a href="https://juanoconecta.ar" style="color:#C4846A;">juanoconecta.ar</a><br>
          <span style="font-size:11px;color:#444">Si no querés recibir más emails, respondé con "cancelar"</span>
        </p>
      </div>`
    }),
  });
  return res.ok;
}

async function updateSequenceDay(supabaseUrl, serviceKey, leadId, day) {
  await fetch(`${supabaseUrl}/rest/v1/leads?id=eq.${leadId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'apikey': serviceKey,
      'Authorization': `Bearer ${serviceKey}`,
    },
    body: JSON.stringify({ sequence_day: day }),
  });
}
