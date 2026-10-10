// Promos de temporada: cada una tiene su página (/navidad, /verano) y aparece en la franja de la tienda
// y de la home mientras no venza. Precios del análisis de mercado de octubre de 2026 (propuesta, a confirmar con Juan).
// Escalones como la auditoría: Emprendedor / PyME ≈1,5x / Empresa ≈2x. En cabañas, por cantidad de unidades.

const WA = (texto) => 'https://wa.me/5493492627811?text=' + encodeURIComponent(texto)

export const PROMOS = [
  {
    slug: 'navidad',
    eyebrow: 'Promo Navidad 2026 · Comercios y emprendedores',
    titulo: 'Tu marca lista para vender en Navidad',
    bajada: 'Preparamos tu Instagram, tu WhatsApp y tu forma de cobrar para que diciembre sea el mejor mes del año. Con IA, en pocos días y con fecha de entrega garantizada.',
    seoTitulo: 'Promo Navidad: tu marca lista para vender | JuanoConecta',
    seoDescripcion: 'Instagram, WhatsApp Business, link de pago y tienda online listos antes de las fiestas. Paquetes para emprendedores, comercios y pymes.',
    banda: 'Promo Navidad: dejá tu marca lista para vender en las fiestas',
    vence: '2026-12-15',
    cierre: 'Tienda hasta el 20/11 · Puesta a punto hasta el 30/11',
    tono: 'navidad',
    tarifas: [
      { id: 'emprendedor', nombre: 'Emprendedor', para: 'Emprendedores y profesionales' },
      { id: 'pyme', nombre: 'PyME', para: 'Comercios y pymes con equipo' },
      { id: 'empresa', nombre: 'Empresa', para: 'Empresas y cadenas' },
    ],
    datos: [
      { valor: '9 de 10', texto: 'comercios hicieron promos en la Navidad pasada; sin ellas, las ventas habrían caído (CAME).' },
      { valor: '44%', texto: 'compra recién la última semana antes de Navidad: hay que estar listo antes (Naranja X).' },
      { valor: '+19,4%', texto: 'creció la venta online de los comercios con local en septiembre de 2026 (CAME).' },
    ],
    niveles: [
      {
        id: 'kit', nombre: 'Kit Navidad', etiqueta: 'Digital', resumen: 'Todo lo que necesitás para publicar en diciembre, listo para usar con IA.',
        precio: { unico: 19900 }, lanzamiento: { precio: 14900, hasta: 'hasta el 4/11' },
        incluye: ['Prompts para posts, historias y reels navideños', 'Plantillas editables para Canva', 'Calendario de publicaciones de diciembre', 'Ideas de promos que funcionan en las fiestas'],
        cta: 'Quiero el Kit Navidad',
      },
      {
        id: 'puesta', nombre: 'Puesta a punto', etiqueta: 'El más elegido', destacado: true,
        resumen: 'Dejamos tu cuenta y tus canales listos para vender, y te damos las piezas de la temporada.',
        precio: { emprendedor: 190000, pyme: 285000, empresa: 380000 },
        incluye: ['Auditoría de tu Instagram con IA', 'Bio y destacados optimizados', 'Link de pago de Mercado Pago o catálogo', 'WhatsApp Business con respuestas rápidas', '6 piezas navideñas diseñadas', 'Kit Navidad de regalo'],
        entrega: 'Entrega en 5 días hábiles',
        cta: 'Quiero la puesta a punto',
      },
      {
        id: 'tienda', nombre: 'Tienda online express', etiqueta: 'Vendé las 24 horas',
        resumen: 'Una tienda simple con pagos y envíos, entregada antes del 10 de diciembre.',
        precio: { emprendedor: 280000, pyme: 420000, empresa: 560000 },
        detalle: { emprendedor: 'Hasta 30 productos', pyme: 'Hasta 80 productos, con envíos', empresa: 'Más de 100 productos, dominio e integraciones' },
        incluye: ['Tienda en Tiendanube o Empretienda', 'Carga de productos y fotos', 'Pagos con Mercado Pago y envíos', 'Capacitación para manejarla vos'],
        nota: 'El plan mensual de la plataforma se paga aparte (desde $10.490).',
        cta: 'Quiero mi tienda',
      },
    ],
    combo: 'Tienda + Puesta a punto: 15% off en el total.',
    pasos: [
      { titulo: 'Escribís por WhatsApp', texto: 'Nos contás tu negocio y elegís el paquete.' },
      { titulo: 'Diagnóstico', texto: 'Revisamos tu cuenta y te pedimos lo que necesitamos.' },
      { titulo: 'Armado', texto: 'Trabajamos con IA para entregarte rápido y bien.' },
      { titulo: 'Listo para vender', texto: 'Te entregamos todo y te explicamos cómo usarlo.' },
    ],
    preguntas: [
      { q: '¿Hasta cuándo puedo contratar?', a: 'La tienda online hasta el 20 de noviembre, para entregarla antes del 10 de diciembre. La puesta a punto hasta el 30 de noviembre. El Kit Navidad se vende hasta el 15 de diciembre.' },
      { q: '¿Puedo pagar en cuotas?', a: 'Sí. Podés pagar con Mercado Pago en cuotas o en dos pagos: la mitad al empezar y la mitad en la entrega.' },
      { q: '¿Cuál es mi tarifa: Emprendedor, PyME o Empresa?', a: 'Emprendedor si trabajás solo o con una persona; PyME si tenés local o equipo; Empresa si tenés varias sucursales o es una industria.' },
      { q: '¿Sirve si no vendo productos sino servicios?', a: 'Sí. La puesta a punto funciona igual para servicios: en lugar de catálogo armamos tu link de turnos o de pago.' },
    ],
    waTexto: (nivel, tarifa) => WA(`Hola Juan, me interesa la Promo Navidad: ${nivel}${tarifa ? ` (tarifa ${tarifa})` : ''}.`),
  },
  {
    slug: 'verano',
    eyebrow: 'Promo Verano 2027 · Cabañas y complejos',
    titulo: 'Tu cabaña llena este verano',
    bajada: 'Instagram, WhatsApp, Google Maps y una web de reservas propia para que te encuentren, te consulten y reserven directo, sin dejarle el 15% a las plataformas.',
    seoTitulo: 'Promo Verano: tu cabaña llena este verano | JuanoConecta',
    seoDescripcion: 'Marketing para cabañas y complejos: Instagram, WhatsApp, Google Maps y web de reservas propia. Reservas directas sin comisión.',
    banda: 'Promo Verano para cabañas y complejos: llená la temporada con reservas directas',
    vence: '2026-12-15',
    cierre: 'Contratación hasta el 21/11 · Precio de lanzamiento hasta el 31/10',
    tono: 'verano',
    tarifas: [
      { id: 'emprendedor', nombre: '1 a 3 unidades', para: 'Cabañas y casas' },
      { id: 'pyme', nombre: '4 a 8 unidades', para: 'Complejos' },
      { id: 'empresa', nombre: '9 o más', para: 'Complejos grandes y hoteles' },
    ],
    datos: [
      { valor: '15%', texto: 'es la comisión promedio de Booking, y en Argentina la paga el alojamiento (iGMS).' },
      { valor: '3-4 meses', texto: 'antes se reservan las vacaciones de verano: la decisión se toma ahora (MDZ).' },
      { valor: '60-80%', texto: 'de las plazas de enero ya estaban reservadas a mediados de diciembre pasado.' },
    ],
    niveles: [
      {
        id: 'kit', nombre: 'Kit Temporada', etiqueta: 'Digital', resumen: 'Contenido para mostrar tu lugar de noviembre a febrero, listo para usar con IA.',
        precio: { unico: 18000 }, lanzamiento: { precio: 14900, hasta: 'hasta el 31/10' },
        incluye: ['Prompts y plantillas para reels de tu cabaña', 'Respuestas modelo para consultas de reservas', 'Calendario de noviembre a febrero', 'Ideas de promos para fines de semana largos'],
        cta: 'Quiero el Kit Temporada',
      },
      {
        id: 'puesta', nombre: 'Puesta a punto para reservas', etiqueta: 'El más elegido', destacado: true,
        resumen: 'Que te encuentren en Instagram y en Google, y que cada consulta termine en reserva.',
        precio: { emprendedor: 220000, pyme: 330000, empresa: 440000 }, descuento: '15% off hasta el 31/10',
        incluye: ['Auditoría de tu Instagram con IA', 'Bio con link de reserva', 'Destacados: cabañas, tarifas, cómo llegar, opiniones', 'WhatsApp Business con respuestas rápidas', 'Ficha de Google Maps revisada', '6 piezas de temporada', 'Kit Temporada de regalo'],
        entrega: 'Entrega en 7 días hábiles',
        cta: 'Quiero la puesta a punto',
      },
      {
        id: 'web', nombre: 'Web de reservas express', etiqueta: 'Sin comisiones',
        resumen: 'Tu propia web con fotos, tarifas y disponibilidad, con consulta directa por WhatsApp.',
        precio: { emprendedor: 450000, pyme: 675000, empresa: 900000 }, descuento: '15% off hasta el 31/10',
        incluye: ['Web propia con tu dominio', 'Galería de fotos de cada unidad', 'Tarifas por temporada y disponibilidad', 'Consulta y reserva por WhatsApp', 'Lista para aparecer en Google'],
        nota: 'Mantenimiento opcional: $25.000 por mes (cambios de tarifas y disponibilidad).',
        cta: 'Quiero mi web',
      },
    ],
    combo: 'Puesta a punto + Web: 10% off adicional y el Kit Temporada de regalo.',
    pasos: [
      { titulo: 'Escribís por WhatsApp', texto: 'Nos contás cuántas unidades tenés y dónde están.' },
      { titulo: 'Fotos y datos', texto: 'Nos pasás fotos, tarifas y cómo reservás hoy.' },
      { titulo: 'Armado', texto: 'Dejamos todo listo en pocos días, con IA.' },
      { titulo: 'Temporada', texto: 'Recibís consultas directas, sin comisión.' },
    ],
    preguntas: [
      { q: '¿Tengo que dejar Booking o Airbnb?', a: 'No. La idea es que una parte de tus reservas llegue directo, sin comisión. Las plataformas pueden seguir como un canal más.' },
      { q: '¿Hasta cuándo puedo contratar?', a: 'Hasta el 21 de noviembre, para que todo esté funcionando antes del 10 de diciembre. El precio de lanzamiento vale hasta el 31 de octubre.' },
      { q: '¿Necesito fotos profesionales?', a: 'Ayudan, pero no es obligatorio. Trabajamos con las fotos que tengas y te decimos cuáles conviene renovar.' },
      { q: '¿Puedo pagar en cuotas?', a: 'Sí. Con Mercado Pago en cuotas o en dos pagos: la mitad al empezar y la mitad en la entrega.' },
    ],
    waTexto: (nivel, tarifa) => WA(`Hola Juan, me interesa la Promo Verano para cabañas: ${nivel}${tarifa ? ` (${tarifa})` : ''}.`),
  },
]

export const promoPorSlug = (slug) => PROMOS.find((p) => p.slug === slug)

// Promos vigentes para la franja de la tienda y la home.
export const promosActivas = (hoy = new Date()) => PROMOS.filter((p) => hoy <= new Date(`${p.vence}T23:59:59-03:00`))
