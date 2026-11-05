// Planes públicos de gestión de redes. Los usan /redes-sociales-para-negocios-rafaela y /community-manager-rafaela,
// así las dos páginas muestran siempre lo mismo. La pauta de Meta Ads se paga aparte.
// Se venden por objetivo (Juan, 5/11/2026): cada plan tiene una meta del mes con números que controlamos
// (alcance, conversaciones, respuesta). Las ventas se miden en el reporte, nunca se prometen.

// Lo que se le dice al cliente si no se llega a la meta (confirmado por Juan, 5/11/2026).
export const REGLA_META = 'Si no llegamos a la meta por algo de nuestro lado, el mes siguiente lo ajustamos sin costo.'

export const PLANES_REDES = [
  {
    nombre: 'Presencia',
    objetivo: 'Que te vean',
    metas: [['Cuentas alcanzadas', '3.000'], ['Publicaciones al día', '8 de 8'], ['Perfil ordenado', 'Bio y destacadas']],
    precio: '$146.000',
    etiqueta: 'PARA EMPRENDEDORES',
    descripcion: 'Para el que hoy publica cuando puede o no publica.',
    features: ['1 red social (Instagram o Facebook)', '8 publicaciones por mes', 'Diseño de piezas incluido', 'Reporte mensual: meta contra logrado'],
    color: '#22D3EE',
  },
  {
    nombre: 'Conecta',
    objetivo: 'Que te escriban',
    metas: [['Cuentas alcanzadas', '10.000'], ['Conversaciones nuevas', '30'], ['Consultas respondidas', '100%']],
    precio: '$320.000',
    descripcion: 'Para el negocio que ya publica pero no le escriben.',
    features: ['2 redes sociales', '12 publicaciones por mes', '1 campaña a mensajes por mes (pauta aparte)', 'Respuestas guardadas para Instagram y WhatsApp', 'Reporte corto cada semana'],
    color: '#6A8FC4',
  },
  {
    nombre: 'Conecta Pro',
    objetivo: 'Que respondas y cobres',
    metas: [['Cuentas alcanzadas', '20.000'], ['Conversaciones nuevas', '60'], ['Respuesta en menos de 1 h', '9 de cada 10'], ['Segundo mensaje a quien no contestó', '100%']],
    precio: '$550.000',
    destacado: true,
    descripcion: 'Para el que ya recibe consultas y se le escapan.',
    features: ['3 redes sociales', '20 publicaciones con reels animados', 'Campaña a mensajes (pauta aparte)', 'Respuestas automáticas en WhatsApp', 'Link de pago o catálogo listo', 'Seguimiento de cada consulta'],
    color: '#3D7BFF',
  },
  {
    nombre: 'Full',
    objetivo: 'A medida',
    metas: [['Metas', 'las armamos juntos'], ['Reporte', 'semanal']],
    precio: '$850.000',
    descripcion: 'Estrategia integral, con publicidad avanzada y branding.',
    features: ['4 redes sociales', 'Publicaciones ilimitadas', 'Meta Ads avanzado', 'Branding integral', 'Gestión completa de la comunidad', 'Reporte semanal y soporte 7 días'],
    color: '#8FC46A',
  },
]
