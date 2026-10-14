// Productos de la tienda (/tienda). Lo usan la página, sus datos estructurados (Recursos.jsx)
// y el panel de admin (api/admin.js), que reconoce las ventas de Mercado Pago por nombre o precio.
export const WA_AUDITORIA = 'https://wa.me/5493492627811?text=Hola%20Juan%2C%20quiero%20la%20Auditoría%20IA%20de%20mi%20perfil'

const TEAL = '#22D3EE'

export const productoGratis = {
  nombre: '5 prompts para crear contenido con IA',
  descripcion: '¿No sabés por dónde empezar con la IA? Estos 5 prompts te dan el punto de partida exacto para generar contenido real en menos de 10 minutos — sin experiencia previa.',
  badge: 'GRATIS',
  badgeStyle: { background: 'rgba(34,211,238,0.15)', color: '#22D3EE', border: '1px solid rgba(34,211,238,0.4)' },
  precioARS: null,
  precioUSD: null,
  tipo: 'gratis',
  emoji: '🎁',
  includes: ['5 prompts listos para usar hoy', 'Funciona en ChatGPT, Claude y Gemini', 'Resultados desde el primer uso', 'Gratis: solo te pedimos tu correo'],
  color: TEAL,
}

export const productos = [
  {
    nombre: 'Kit Contenido IA',
    descripcion: '¿Publicás pero el algoritmo no te acompaña? El problema no es tu producto — es cómo lo comunicás. Estos 30 prompts te dan el lenguaje exacto para conectar con tu audiencia y generar contenido que vende.',
    badge: 'MÁS VENDIDO',
    badgeStyle: { background: 'rgba(61,123,255,0.2)', color: '#3D7BFF', border: '1px solid rgba(61,123,255,0.4)' },
    precioARS: '$8.000 ARS',
    precioUSD: '$7 USD',
    btnARS: 'https://mpago.la/327WvYV',
    btnUSD: 'https://juano1.gumroad.com/l/mmpvaw',
    tipo: 'digital',
    emoji: '⚡',
    includes: ['30 prompts probados en cuentas reales', 'Guía de implementación paso a paso', 'Ejemplos aplicados por industria', 'Acceso a actualizaciones futuras'],
    compatible: ['ChatGPT', 'Claude', 'Gemini', 'Grok'],
    color: '#3D7BFF',
  },
  {
    nombre: 'Prompt Power Pack',
    descripcion: '¿Manejás múltiples cuentas sin un sistema claro? Consume tiempo, energía y resultados. Este pack te da la estructura para producir más en menos tiempo — con calidad constante y sin depender de la inspiración.',
    badge: null,
    precioARS: '$25.000 ARS',
    precioUSD: '$22 USD',
    btnARS: 'https://mpago.la/2ibu57G',
    btnUSD: 'https://juano1.gumroad.com/l/rokkgk',
    tipo: 'digital',
    emoji: '🚀',
    includes: ['90 prompts para feed, historias y reels', 'Templates de copy listos para usar', 'Banco de ganchos de alto impacto', 'Framework de estrategia de contenido'],
    compatible: ['ChatGPT', 'Claude', 'Gemini', 'Grok'],
    color: '#6A8FC4',
  },
  {
    nombre: 'Auditoría IA de tu perfil',
    descripcion: '¿Invertís tiempo en redes pero los números no reflejan ese esfuerzo? Usamos IA para analizar tu perfil en profundidad — contenido, métricas, competencia y oportunidades — y te entregamos un diagnóstico preciso con un plan de acción concreto para los próximos 30 días. No es una revisión genérica: es una sesión personalizada con Juan donde identificamos exactamente qué está frenando tu crecimiento y cómo revertirlo.',
    badge: 'PREMIUM',
    badgeStyle: { background: 'rgba(234,179,8,0.15)', color: '#EAB308', border: '1px solid rgba(234,179,8,0.3)' },
    // Escalones según el tarifario de la Cámara de Diseñadores de Rafaela (Particular / PyME / Empresa).
    tarifas: [
      { id: 'emprendedor', nombre: 'Emprendedor', para: 'Emprendedores y profesionales independientes', ars: '$120.000', usd: '$110' },
      { id: 'pyme', nombre: 'PyME', para: 'Comercios y pymes con equipo', ars: '$185.000', usd: '$170' },
      { id: 'empresa', nombre: 'Empresa', para: 'Empresas e industrias', ars: '$250.000', usd: '$230' },
    ],
    btnWA: WA_AUDITORIA,
    tipo: 'servicio',
    emoji: '🏆',
    includes: ['Análisis completo del perfil con IA', 'Auditoría de competencia y oportunidades', 'Informe PDF con diagnóstico detallado', 'Sesión 1:1 de 40 min con Juan (WhatsApp o videollamada)', 'Plan de acción para los próximos 30 días', 'Seguimiento por 7 días post-sesión'],
    auditai: true,
    color: '#EAB308',
    destacado: true,
  },
]

// Precio en pesos como número: '$8.000 ARS' → 8000.
export const precioNumero = (s) => Number(String(s || '').replace(/\D/g, '')) || null
