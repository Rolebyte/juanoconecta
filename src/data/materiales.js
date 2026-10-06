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
      // { titulo: 'Presentación de la jornada', detalle: 'PDF con todas las diapositivas', href: '/descargas/emprender-con-ia/presentacion.pdf' },
    ],
    regalos: [
      { titulo: '5 prompts para arrancar con IA', detalle: 'PDF · Para crear contenido en minutos', href: '/5-prompts-gratis.pdf' },
      { titulo: 'Calendario de contenido con IA', detalle: 'PDF · Planificá un mes de publicaciones', href: '/calendario-contenido-ia-juanoconecta.pdf' },
    ],
    herramientas: [
      { nombre: 'ChatGPT', uso: 'Textos, ideas y respuestas', href: 'https://chatgpt.com' },
      { nombre: 'Claude', uso: 'Textos largos, análisis y documentos', href: 'https://claude.ai' },
      { nombre: 'Gemini', uso: 'Asistente de Google, integrado a Gmail y Drive', href: 'https://gemini.google.com' },
      { nombre: 'Canva', uso: 'Diseño de piezas para redes con IA', href: 'https://www.canva.com' },
      { nombre: 'CapCut', uso: 'Edición de videos y reels', href: 'https://www.capcut.com' },
    ],
  },
]
