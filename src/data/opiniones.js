// Servicios que el cliente puede elegir al dejar su opinión (/opinion). Lo usan la página,
// la sección de opiniones del home y la API (api/_opiniones.js), que solo acepta estos ids.
// Para pedir una opinión de un servicio puntual: juanoconecta.ar/opinion?servicio=<id>
export const SERVICIOS_OPINION = [
  { id: 'redes', nombre: 'Gestión de redes sociales' },
  { id: 'meta-ads', nombre: 'Publicidad en Meta Ads' },
  { id: 'web', nombre: 'Página web' },
  { id: 'web-app', nombre: 'Web app con IA' },
  { id: 'diseno', nombre: 'Diseño y branding' },
  { id: 'capacitacion', nombre: 'Capacitación de IA' },
  { id: 'auditoria', nombre: 'Auditoría de perfil' },
  { id: 'kit', nombre: 'Kit o plantillas' },
  { id: 'otro', nombre: 'Otro servicio' },
]

export const nombreServicio = (id) => SERVICIOS_OPINION.find((s) => s.id === id)?.nombre || 'Otro servicio'
