import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import OpinionesNx from '../components/home/OpinionesNx'
import { Eyebrow, GridGlow, SectionTitle, BtnPrimary, BtnGhost, Check, Reveal } from '../components/home/ui'

// Página de entrada al mercado mexicano (noviembre de 2026).
// Oferta principal: asistente de IA en WhatsApp Business ("Vendedor que no se olvida"), con precios en dólares.
// Textos en "tú" para México (excepción a la guía de voz). Sin prometer ventas.
// Los clics a WhatsApp quedan registrados en /admin con la página /mx y el texto del botón.
const URL = 'https://juanoconecta.ar/mx'
const WA = (texto) => 'https://wa.me/5493492383024?text=' + encodeURIComponent(texto)
const WA_GENERAL = WA('Hola Juan, tengo un negocio en México y quiero saber del asistente de WhatsApp.')

const PLANES = [
  {
    id: 'auditoria',
    nombre: 'Revisión de tu WhatsApp',
    para: 'Para saber por dónde empezar',
    precio: 'US$120',
    detalle: 'Pago único',
    incluye: [
      'Reviso cómo respondes hoy en WhatsApp e Instagram',
      'Te digo qué preguntas se repiten y cuáles puede contestar la IA',
      'Videollamada 1 a 1 de 45 minutos en tu horario',
      'Lista de cambios en orden de importancia',
    ],
    nota: 'Si después contratas el asistente, te descuento lo que pagaste.',
    cta: 'Quiero la revisión',
  },
  {
    id: 'asistente',
    nombre: 'Asistente de WhatsApp',
    para: 'Para que nadie se quede sin respuesta',
    precio: 'US$450',
    detalle: 'Pago único + US$60 al mes desde el segundo mes (opcional)',
    incluye: [
      'Ficha de tu negocio: precios, horarios, envíos y preguntas frecuentes',
      'Respuestas con tu tono, revisadas contigo',
      'Tú decides cuándo la conversación pasa a ti',
      'Planilla con los datos de cada cliente que escribe',
      'Recordatorio de a quién darle seguimiento cada día',
      'Primer mes de ajustes incluido y guía en PDF',
    ],
    nota: 'Listo en 7 días desde que me pasas la información.',
    cta: 'Quiero el asistente',
    destacado: true,
  },
  {
    id: 'web',
    nombre: 'Web con WhatsApp conectado',
    para: 'Para que te encuentren en Google',
    precio: 'US$750',
    detalle: 'Pago único',
    incluye: [
      'Dominio .com o .mx a tu nombre',
      'Hosting el primer año',
      'Diseño y textos con tus fotos',
      'Catálogo o servicios con precios',
      'Botón directo a tu WhatsApp y alta en Google',
    ],
    nota: 'Lista en 10 días. Mantenimiento opcional: US$35 al mes.',
    cta: 'Quiero mi web',
  },
]

const PROBLEMAS = [
  { titulo: 'Contestas mientras atiendes', texto: 'El celular suena mientras cobras, cocinas o estás con un cliente. La respuesta llega tarde y esa persona ya le compró a otro.' },
  { titulo: 'Las mismas preguntas todo el día', texto: '¿Precio? ¿Hacen envíos? ¿Hasta qué hora abren? Escribir lo mismo veinte veces te quita el tiempo que necesitas para lo demás.' },
  { titulo: 'Clientes que se enfrían', texto: 'Alguien pidió precio, dijo "lo pienso" y nadie le volvió a escribir. No por falta de ganas, sino porque no hay quien lleve la cuenta.' },
]

const PASOS = [
  { titulo: 'Me escribes', texto: 'Me cuentas qué vendes, cómo te llegan las consultas y qué te gustaría que se responda solo.' },
  { titulo: 'Videollamada de 30 minutos', texto: 'En tu horario. Vemos tu WhatsApp juntos y te paso un precio cerrado.' },
  { titulo: 'Lo armo y lo pruebo', texto: 'Cargo la información de tu negocio, escribo las respuestas con tu tono y lo pruebo con mensajes reales antes de activarlo.' },
  { titulo: 'Te lo entrego funcionando', texto: 'Sesión 1 a 1 para que sepas cambiar precios y respuestas. El primer mes ajusto lo que haga falta.' },
]

const PREGUNTAS = [
  {
    q: '¿Cuánto cuesta el asistente de WhatsApp?',
    a: 'US$450 en un pago único, que incluye el primer mes de ajustes. Desde el segundo mes, el acompañamiento es opcional y cuesta US$60 al mes: reviso conversaciones, actualizo precios y mejoro las respuestas. Si prefieres empezar con algo más chico, la revisión de tu WhatsApp cuesta US$120 y se descuenta si después contratas el asistente.',
  },
  {
    q: '¿El asistente responde solo, sin que yo esté?',
    a: 'Contesta las preguntas que se repiten (precios, horarios, envíos, disponibilidad) y toma los datos de quien escribe. Tú defines qué temas pasan a ti: un precio especial, un reclamo o una venta grande los ves tú. No es un robot que decide por tu negocio.',
  },
  {
    q: '¿Me garantizas más ventas?',
    a: 'No. Lo que sí te aseguro es que cada persona que escribe recibe respuesta en minutos y que nadie se queda sin seguimiento. Vender depende de tu producto, tu precio y cómo atiendes. Lo mío es que estés listo para responder y cobrar.',
  },
  {
    q: '¿Funciona con el WhatsApp Business que ya tengo?',
    a: 'Sí, en la mayoría de los casos trabajamos sobre tu mismo número. Meta ya activó herramientas de IA para WhatsApp Business en México y, según lo que necesites, usamos esas o un asistente aparte. Lo vemos juntos en la videollamada antes de que pagues.',
  },
  {
    q: 'Estás en Argentina, ¿cómo trabajamos?',
    a: 'Todo es a distancia, por WhatsApp y videollamada, y las reuniones se agendan en tu horario. Argentina está 3 horas adelante del centro de México, así que coincidimos todo el día hábil.',
  },
  {
    q: '¿Cómo pago?',
    a: 'En dólares, con tarjeta o transferencia internacional. Puedes pagar la mitad al empezar y la otra mitad cuando te lo entrego funcionando.',
  },
  {
    q: '¿Me das factura?',
    a: 'Te facturo desde Argentina con factura de exportación de servicios. No emito CFDI, así que si tu contador lo necesita, platícalo con él antes de contratar.',
  },
  {
    q: '¿Para qué negocios sirve?',
    a: 'Para negocios de 1 a 10 personas que venden o agendan por WhatsApp: tiendas de ropa, estéticas y barberías, consultorios, comida con envío, talleres y servicios a domicilio. Si recibes más de 10 consultas al día, te va a ahorrar tiempo.',
  },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${URL}#servicio`,
      name: 'Asistente de IA para WhatsApp Business en México',
      serviceType: 'Configuración de asistentes de inteligencia artificial para atención por WhatsApp',
      description: 'Asistente de IA en WhatsApp Business para negocios en México: responde precios, horarios y envíos en minutos, toma los datos de cada cliente y recuerda los seguimientos. Listo en 7 días, trabajo 100% a distancia.',
      url: URL,
      provider: { '@id': 'https://juanoconecta.ar/#negocio' },
      areaServed: { '@type': 'Country', name: 'México' },
      audience: { '@type': 'BusinessAudience', name: 'Pequeños negocios y emprendedores que venden por WhatsApp' },
      offers: [
        { '@type': 'Offer', name: 'Revisión de tu WhatsApp', price: 120, priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Asistente de WhatsApp', price: 450, priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Web con WhatsApp conectado', price: 750, priceCurrency: 'USD' },
      ].map((o) => ({ ...o, availability: 'https://schema.org/InStock', seller: { '@id': 'https://juanoconecta.ar/#negocio' } })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: PREGUNTAS.map((p) => ({ '@type': 'Question', name: p.q, acceptedAnswer: { '@type': 'Answer', text: p.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://juanoconecta.ar/' },
        { '@type': 'ListItem', position: 2, name: 'Asistente de WhatsApp para negocios en México', item: URL },
      ],
    },
  ],
}

function Plan({ p }) {
  return (
    <div className={`relative h-full rounded-3xl p-px ${p.destacado ? 'bg-gradient-to-br from-acento via-teal/50 to-white/5' : 'bg-gradient-to-br from-white/15 via-white/5 to-white/0'}`}>
      <div className="h-full rounded-[calc(1.5rem-1px)] bg-[#0F1629] p-7 flex flex-col">
        {p.destacado && <span className="self-start text-[11px] font-bold tracking-[0.12em] uppercase text-teal mb-3">El más pedido</span>}
        <h3 className="text-2xl font-bold text-crema">{p.nombre}</h3>
        <p className="text-crema/55 mt-1">{p.para}</p>
        <div className="mt-6">
          <div className="text-4xl font-bold text-crema tracking-tight tabular-nums">{p.precio}</div>
          <p className="text-crema/45 text-sm mt-1">{p.detalle}</p>
        </div>
        <ul className="mt-6 grid gap-3 content-start flex-1">
          {p.incluye.map((it) => (
            <li key={it} className="flex gap-3 items-start text-crema/70 text-[15px] leading-relaxed"><Check />{it}</li>
          ))}
        </ul>
        <p className="text-crema/45 text-sm mt-5">{p.nota}</p>
        <a href={WA(`Hola Juan, tengo un negocio en México y me interesa: ${p.nombre}.`)}
          target="_blank" rel="noopener noreferrer" aria-label={`mx: ${p.nombre}`}
          className={`mt-6 py-3.5 rounded-full text-sm font-semibold text-center transition-colors duration-300 ${p.destacado ? 'bg-acento hover:bg-acento-dark text-white' : 'border border-white/15 hover:border-teal/60 text-crema'}`}>
          {p.cta}
        </a>
      </div>
    </div>
  )
}

export default function Mexico() {
  const titulo = 'Asistente de WhatsApp con IA para negocios en México | JuanoConecta'
  const descripcion = 'Configuro un asistente de IA en tu WhatsApp Business que responde en minutos, toma los datos de cada cliente y te recuerda los seguimientos. Listo en 7 días, desde US$450.'

  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <html lang="es-MX" />
        <title>{titulo}</title>
        <meta name="description" content={descripcion} />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descripcion} />
        <meta property="og:url" content={URL} />
        <meta property="og:locale" content="es_MX" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <GridGlow />
        <div className="relative max-w-4xl mx-auto text-center">
          <Eyebrow>Para negocios en México</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mt-6 mb-6" style={{ textWrap: 'balance' }}>
            Que ningún cliente se quede sin respuesta en tu WhatsApp
          </h1>
          <p className="text-crema/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Configuro un asistente con IA en tu WhatsApp Business que contesta precios, horarios y envíos en minutos,
            guarda los datos de cada cliente y te recuerda a quién darle seguimiento. Tú revisas y cierras.
            Listo en 7 días, desde US$450.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BtnPrimary href="#planes">Ver planes</BtnPrimary>
            <BtnGhost href={WA_GENERAL} external>Escribirme por WhatsApp</BtnGhost>
          </div>
        </div>
      </section>

      {/* El problema */}
      <section className="py-24 px-6 bg-[#080C18]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Te suena" title="Vendes por WhatsApp, pero WhatsApp no espera" />
          <div className="grid md:grid-cols-3 gap-5">
            {PROBLEMAS.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 0.08} className="rounded-3xl border border-white/10 bg-[#0F1629] p-7">
                <h3 className="text-lg font-bold text-crema">{p.titulo}</h3>
                <p className="text-crema/55 leading-relaxed mt-2 text-[15px]">{p.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Qué cambia */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <SectionTitle eyebrow="Qué hago" title="La IA ya llegó a WhatsApp Business. Falta que responda como tú" />
          <Reveal className="grid gap-5 text-crema/70 text-lg leading-relaxed">
            <p>Meta activó en México herramientas de IA para WhatsApp Business. Activarlas es fácil. Que respondan bien es otra cosa: necesitan la información de tu negocio ordenada, respuestas con tu forma de hablar y un límite claro de cuándo la conversación pasa a ti.</p>
            <p>Eso es lo que armo contigo. Una ficha con todo lo que tu cliente pregunta, respuestas probadas con mensajes reales y una planilla donde queda cada persona que escribió, con el día en que le toca un segundo mensaje.</p>
            <p>No te prometo ventas, porque eso depende de tu producto y de tu precio. Te prometo que cada persona que escribe recibe respuesta en minutos y que nadie se queda sin seguimiento.</p>
          </Reveal>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="py-24 px-6 scroll-mt-24 bg-[#080C18]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Planes" title="Precios en dólares, cerrados y sin letra chica" />
          <div className="grid lg:grid-cols-3 gap-5 items-stretch">
            {PLANES.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08} className="h-full"><Plan p={p} /></Reveal>
            ))}
          </div>
          <p className="text-crema/40 text-xs mt-6">Precios en dólares estadounidenses. Pagas con tarjeta o transferencia internacional, 50% al empezar y 50% al entregar. Facturo desde Argentina con factura de exportación (no emito CFDI). El plan de la IA, si tu negocio lo necesita, se paga aparte.</p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Cómo funciona" title="De tu mensaje a tu asistente funcionando en 7 días" />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PASOS.map((p, i) => (
              <Reveal as="li" key={p.titulo} delay={i * 0.08} className="rounded-3xl border border-white/10 bg-[#0F1629] p-7">
                <span className="font-bold text-sm tabular-nums text-teal">Paso {i + 1}</span>
                <h3 className="text-lg font-bold text-crema mt-3">{p.titulo}</h3>
                <p className="text-crema/55 leading-relaxed mt-2 text-[15px]">{p.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Quién soy */}
      <section className="py-24 px-6 bg-[#080C18]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <SectionTitle eyebrow="Quién soy" title="Juan, de JuanoConecta" />
          <Reveal className="grid gap-5 text-crema/70 text-lg leading-relaxed">
            <p>Trabajo desde Argentina con negocios de varios países: webs, redes, anuncios y asistentes de IA para comercios y emprendedores que hacen todo solos.</p>
            <p>Doy capacitaciones de IA para emprendedores y comercios, y armo cada asistente pensando en el dueño que contesta desde el celular entre una cosa y otra. Todo el trabajo es a distancia y en tu horario.</p>
          </Reveal>
        </div>
      </section>

      <OpinionesNx excepto={['capacitacion']} className="py-24 px-6" sub="Opiniones de negocios que trabajaron con JuanoConecta, escritas por ellos mismos." />

      {/* Preguntas */}
      <section id="preguntas" className="py-24 px-6 bg-[#080C18] scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <SectionTitle center eyebrow="Preguntas frecuentes" title="Lo que más me preguntan" />
          <div className="grid gap-3">
            {PREGUNTAS.map((p) => (
              <details key={p.q} className="group rounded-2xl border border-white/10 bg-[#0F1629] px-6 py-5">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-crema">
                  {p.q}<span className="text-acento text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-crema/60 leading-relaxed mt-3">{p.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#14244A] via-[#121A30] to-[#0B1020] px-6 py-16 md:px-16 md:py-20 text-center">
          <GridGlow />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto" style={{ textWrap: 'balance' }}>¿Cuántas consultas te llegan por día?</h2>
            <p className="text-crema/65 text-lg max-w-xl mx-auto mt-5 mb-10">Escríbeme y cuéntame qué vendes. En una videollamada corta te digo qué puede responder el asistente y cuánto te cuesta, sin compromiso.</p>
            <BtnPrimary href={WA_GENERAL} external>Escribirme por WhatsApp</BtnPrimary>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton texto="Hola Juan, tengo un negocio en México y quiero saber del asistente de WhatsApp." />
    </div>
  )
}
