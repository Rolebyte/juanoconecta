// Material descargable de cada capacitación. Se accede por QR, no aparece en el menú.
// Para sumar archivos: copialos a public/descargas/<slug>/ (no en public/material, que pisaría la página) y agregalos en "archivos".
export const MATERIALES = [
  {
    slug: 'emprender-con-ia',
    titulo: 'Emprender con IA',
    bajada: 'Herramientas prácticas para potenciar tu negocio',
    contexto: 'Programa de Mentorías para el Desarrollo Emprendedor 2026 · CCIRR',
    fecha: 'Miércoles 7 de octubre de 2026',
    archivos: [
      { titulo: 'Presentación de la jornada', detalle: 'PDF · Las 24 diapositivas con la fórmula de prompts, los ejemplos y los prompts listos', href: '/descargas/emprender-con-ia/emprender-con-ia-presentacion.pdf' },
    ],
    regalos: [
      { titulo: '5 prompts para crear contenido con IA', detalle: 'PDF · Para crear contenido en minutos', href: '/5-prompts-gratis.pdf' },
      { titulo: 'Calendario de contenido con IA', detalle: 'PDF · Planificá un mes de publicaciones', href: '/calendario-contenido-ia-juanoconecta.pdf' },
    ],
    beneficio: {
      porcentaje: 20,
      vence: '2026-11-07T23:59:59-03:00',
      venceTexto: '7 de noviembre de 2026',
      detalle: 'En el primer mes de cualquier plan de redes, en la Auditoría IA de tu perfil o en tu web.',
      // Los servicios con precio se pagan con Mercado Pago (api/crear-pago.js); "A cotizar" sigue por WhatsApp.
      servicios: [
        { id: 'starter', nombre: 'Plan Starter de redes', detalle: 'Precio emprendedor · Primer mes · 2 redes, 12 publicaciones', precio: 145900 },
        { id: 'pro', nombre: 'Plan Pro de redes', detalle: 'Precio emprendedor · Primer mes · 3 redes, 20 publicaciones, Meta Ads básico', precio: 203700 },
        { id: 'full', nombre: 'Plan Full de redes', detalle: 'Precio emprendedor · Primer mes · 4 redes, publicaciones ilimitadas, Meta Ads avanzado', precio: 262700 },
        { id: 'auditoria', nombre: 'Auditoría IA de tu perfil', detalle: 'Diagnóstico, sesión 1 a 1 con Juan y plan de 30 días', precio: 120000 },
        { id: 'web', nombre: 'Tu web o web app', detalle: 'Se cotiza a medida; el descuento se aplica sobre el presupuesto', precio: null },
      ],
    },
    herramientas: [
      { nombre: 'ChatGPT', uso: 'Textos, ideas y respuestas', href: 'https://chatgpt.com' },
      { nombre: 'Claude', uso: 'Textos largos, análisis y documentos', href: 'https://claude.ai' },
      { nombre: 'Gemini', uso: 'Asistente de Google, integrado a Gmail y Drive', href: 'https://gemini.google.com' },
      { nombre: 'Canva', uso: 'Diseño de piezas para redes con IA', href: 'https://www.canva.com' },
      { nombre: 'CapCut', uso: 'Edición de videos y reels', href: 'https://www.capcut.com' },
    ],
  },
]
