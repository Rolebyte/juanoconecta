import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import OpinionesNx from '../components/home/OpinionesNx'
import { Eyebrow, GridGlow, SectionTitle, BtnPrimary, BtnGhost, Check, Reveal } from '../components/home/ui'

// Página de SEO por zona: web "todo incluido" para alojamientos de las Sierras de Córdoba.
// Una sola página por región (no una por pueblo) con contenido propio de cada zona.
// Las preguntas salen de las consultas reales de la campaña Verano Córdoba (octubre de 2026).
const URL = 'https://juanoconecta.ar/web-para-alojamientos-cordoba'
const WA = (texto) => 'https://wa.me/5493492627811?text=' + encodeURIComponent(texto)
const WA_GENERAL = WA('Hola Juan, tengo un alojamiento en las Sierras de Córdoba y quiero saber más sobre la web todo incluido.')
const IMAGEN = 'https://images.unsplash.com/photo-1694184023356-e1edfd130269?auto=format&fit=crop&q=70'

// El 15% de lanzamiento se oculta solo cuando vence.
const DESCUENTO_HASTA = '2026-10-31'
const pesos = (n) => '$' + Math.round(n).toLocaleString('es-AR')

const PLANES = [
  { id: 'chico', nombre: '1 a 3 unidades', para: 'Casas, departamentos y cabañas', cuantas: 'hasta 3 unidades', precio: 450000, promo: 382500 },
  { id: 'mediano', nombre: '4 a 8 unidades', para: 'Complejos de cabañas, hosterías y posadas', cuantas: 'de 4 a 8 unidades', precio: 675000, promo: 573750, destacado: true },
]

const INCLUYE = [
  { titulo: 'Dominio .com.ar a tu nombre', texto: 'Lo registramos en NIC Argentina a tu nombre: la dirección es tuya, no nuestra.' },
  { titulo: 'Hosting el primer año', texto: 'La web queda publicada y funcionando sin que tengas que contratar nada aparte.' },
  { titulo: 'Diseño y textos', texto: 'Con tus fotos, tus colores y textos que cuentan lo que tiene tu lugar.' },
  { titulo: 'Cada unidad con fotos y tarifas', texto: 'Una ficha por cabaña o habitación: capacidad, qué incluye, fotos y precios por temporada.' },
  { titulo: 'Consultas directo a tu WhatsApp', texto: 'Quien te elige te escribe a vos, con la unidad y las fechas ya elegidas.' },
  { titulo: 'Alta en Google', texto: 'La web se presenta a Google y se vincula con tu ficha de Google Maps.' },
]

const ZONAS = [
  {
    nombre: 'Punilla',
    lugares: 'Villa Carlos Paz, San Antonio de Arredondo, Tanti, Cosquín, Valle Hermoso, La Falda, Huerta Grande, Villa Giardino, La Cumbre, Capilla del Monte',
    texto: 'El valle más buscado de Córdoba y también el que tiene más oferta. Quien busca acá compara mucho: río cerca, pileta, distancia al centro y si se puede ir con chicos o con mascotas. Tu web tiene que mostrar eso en la primera pantalla.',
  },
  {
    nombre: 'Calamuchita',
    lugares: 'Villa General Belgrano, Santa Rosa de Calamuchita, Villa Rumipal, Embalse, Los Reartes, La Cumbrecita, Yacanto, Villa Ciudad Parque, Los Molinos',
    texto: 'Lagos, bosques y pueblos de montaña. Muchos huéspedes llegan buscando descanso, fiestas como la Oktoberfest o escapadas en pareja, y deciden por las fotos del entorno y de la unidad.',
  },
  {
    nombre: 'Traslasierra',
    lugares: 'Mina Clavero, Villa Cura Brochero, Nono, Panaholma, San Javier, Yacanto de San Javier, Villa de las Rosas, Los Hornillos',
    texto: 'Ríos de agua cristalina, cielo limpio y menos ruido. El huésped que viene suele quedarse más días, así que valora ver bien la unidad, la cocina y cómo se llega desde las Altas Cumbres.',
  },
]

const PASOS = [
  { titulo: 'Nos escribís', texto: 'Nos contás qué tenés, cuántas unidades y en qué localidad. Te pasamos el precio cerrado.' },
  { titulo: 'Nos pasás tu material', texto: 'Fotos, tarifas, qué incluye cada unidad y tu logo si tenés. Si falta algo, te ayudamos a ordenarlo.' },
  { titulo: 'Armamos tu web', texto: 'Diseño, textos, fichas de cada unidad, dominio y publicación. Vos revisás y pedís cambios.' },
  { titulo: 'Lista en 10 días', texto: 'Te la entregamos publicada, con tu dominio, y te explicamos cómo compartirla en tus redes y en Google.' },
]

// Preguntas reales que llegaron por mensaje en la campaña de verano.
const PREGUNTAS = [
  {
    q: '¿Cuánto cuesta una web para mi cabaña o alojamiento en Córdoba?',
    a: 'La web todo incluido cuesta $450.000 para 1 a 3 unidades y $675.000 para 4 a 8 unidades, en un pago único. Hasta el 31 de octubre tiene 15% de descuento: $382.500 y $573.750. Para 9 unidades o más armamos un presupuesto a medida.',
  },
  {
    q: '¿Es un pago único o se paga por mes?',
    a: 'Es un pago único. Incluye el dominio y el hosting del primer año. Desde el segundo año se renuevan el dominio (lo pagás vos directo en NIC Argentina, porque está a tu nombre) y el hosting, y te avisamos el costo antes de que venza. El mantenimiento mensual es opcional: $25.000 por mes si querés que nos ocupemos de cambiar tarifas, fotos y disponibilidad.',
  },
  {
    q: 'Tengo una sola casa o un solo departamento, ¿me sirve?',
    a: 'Sí. El plan de 1 a 3 unidades está pensado para eso: una casa, un departamento o un par de cabañas con su propia web, su dominio y las consultas directo a tu WhatsApp.',
  },
  {
    q: '¿Qué incluye exactamente?',
    a: 'Dominio .com.ar a tu nombre, hosting el primer año, diseño, textos, una ficha por unidad con fotos, capacidad, servicios y tarifas, botón de consulta a tu WhatsApp y alta en Google. Queda lista en 10 días desde que nos pasás el material.',
  },
  {
    q: '¿Tengo que dejar Booking o Airbnb?',
    a: 'No. La web suma un canal propio: los huéspedes que repiten, los que te encuentran en Google y los que llegan desde tu Instagram te pueden escribir directo, y en esas reservas no pagás comisión. Las plataformas pueden seguir como un canal más.',
  },
  {
    q: 'Ya tengo una web, ¿la pueden renovar?',
    a: 'Sí. Revisamos la que tenés y la rehacemos con fotos de día, la información ordenada por unidad y el botón de consulta bien a la vista. Si el dominio ya es tuyo, lo seguimos usando.',
  },
  {
    q: '¿Puedo pagar en partes?',
    a: 'Sí. Podés pagar la mitad al arrancar y la otra mitad cuando te entregamos la web.',
  },
  {
    q: '¿Necesito fotos profesionales?',
    a: 'Ayudan, pero no son obligatorias. Trabajamos con las fotos que tengas, te decimos cuáles conviene renovar y te damos consejos para sacarlas con el celular.',
  },
  {
    q: 'Ustedes son de Rafaela, ¿trabajan con alojamientos de Córdoba?',
    a: 'Sí. Todo el trabajo se hace a distancia, por WhatsApp y videollamada, y la web se publica en internet, así que no importa en qué localidad esté tu alojamiento.',
  },
  {
    q: '¿Hay algo más económico para empezar?',
    a: 'Sí. El Kit Temporada arma el contenido de tus redes para el verano con tus fotos, tus tarifas y respuestas listas para las consultas. Está en la página de la Promo Verano.',
  },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${URL}#servicio`,
      name: 'Web para alojamientos en las Sierras de Córdoba',
      serviceType: 'Diseño de páginas web para cabañas, hosterías y alquileres temporarios',
      description: 'Web todo incluido para cabañas, hosterías, casas y departamentos de alquiler temporario: dominio .com.ar a nombre del dueño, hosting el primer año, diseño, textos, fichas de cada unidad con fotos y tarifas, consultas directo a WhatsApp y alta en Google. Lista en 10 días.',
      url: URL,
      provider: { '@id': 'https://juanoconecta.ar/#negocio' },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Valle de Punilla, Córdoba, Argentina' },
        { '@type': 'City', name: 'Villa Carlos Paz' },
        { '@type': 'AdministrativeArea', name: 'Valle de Calamuchita, Córdoba, Argentina' },
        { '@type': 'AdministrativeArea', name: 'Valle de Traslasierra, Córdoba, Argentina' },
        { '@type': 'State', name: 'Córdoba, Argentina' },
      ],
      audience: { '@type': 'BusinessAudience', name: 'Cabañas, hosterías, posadas y alquileres temporarios' },
      offers: PLANES.map((p) => ({
        '@type': 'Offer',
        name: `Web todo incluido, ${p.nombre}`,
        price: p.precio,
        priceCurrency: 'ARS',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://juanoconecta.ar/#negocio' },
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: PREGUNTAS.map((p) => ({ '@type': 'Question', name: p.q, acceptedAnswer: { '@type': 'Answer', text: p.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://juanoconecta.ar/' },
        { '@type': 'ListItem', position: 2, name: 'Web para alojamientos en Córdoba', item: URL },
      ],
    },
  ],
}

function Plan({ p, conDescuento }) {
  return (
    <div className={`relative h-full rounded-3xl p-px ${p.destacado ? 'bg-gradient-to-br from-acento via-teal/50 to-white/5' : 'bg-gradient-to-br from-white/15 via-white/5 to-white/0'}`}>
      <div className="h-full rounded-[calc(1.5rem-1px)] bg-[#0F1629] p-7 flex flex-col">
        <h3 className="text-2xl font-bold text-crema">{p.nombre}</h3>
        <p className="text-crema/55 mt-1">{p.para}</p>
        <div className="mt-6">
          {conDescuento ? (
            <>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl font-bold text-crema tracking-tight">{pesos(p.promo)}</span>
                <span className="text-crema/40 line-through">{pesos(p.precio)}</span>
              </div>
              <p className="text-sm font-semibold text-teal mt-1">15% off hasta el 31/10 · Pago único</p>
            </>
          ) : (
            <>
              <div className="text-4xl font-bold text-crema tracking-tight">{pesos(p.precio)}</div>
              <p className="text-crema/45 text-sm mt-1">Pago único</p>
            </>
          )}
        </div>
        <p className="text-crema/60 text-[15px] leading-relaxed mt-5 flex-1">Todo lo de la lista de arriba, para {p.cuantas}. Podés pagar 50% al arrancar y 50% al recibirla.</p>
        <a href={WA(`Hola Juan, tengo un alojamiento en las Sierras de Córdoba (${p.nombre}) y me interesa la web todo incluido.`)}
          target="_blank" rel="noopener noreferrer" aria-label={`web alojamientos: ${p.nombre}`}
          className={`mt-6 py-3.5 rounded-full text-sm font-semibold text-center transition-colors duration-300 ${p.destacado ? 'bg-acento hover:bg-acento-dark text-white' : 'border border-white/15 hover:border-teal/60 text-crema'}`}>
          Quiero mi web
        </a>
      </div>
    </div>
  )
}

export default function WebAlojamientosCordoba() {
  const conDescuento = new Date() <= new Date(`${DESCUENTO_HASTA}T23:59:59-03:00`)
  const desde = conDescuento ? PLANES[0].promo : PLANES[0].precio
  const titulo = 'Web para cabañas y alojamientos en Córdoba | JuanoConecta'
  const descripcion = 'Web propia para tu cabaña, hostería o alquiler en Punilla, Carlos Paz, Calamuchita o Traslasierra: dominio a tu nombre, hosting y consultas a tu WhatsApp.'

  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>{titulo}</title>
        <meta name="description" content={descripcion} />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descripcion} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={`${IMAGEN}&w=1200&h=630`} />
        <meta name="twitter:image" content={`${IMAGEN}&w=1200&h=630`} />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <Navbar />

      {/* Hero: la respuesta completa en el primer párrafo */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <img src={`${IMAGEN}&w=1920`} srcSet={`${IMAGEN}&w=800 800w, ${IMAGEN}&w=1400 1400w, ${IMAGEN}&w=1920 1920w`} sizes="100vw"
          alt="Valle verde entre las sierras de Córdoba" fetchpriority="high" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020]/85 via-[#0B1020]/75 to-[#0B1020]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Eyebrow>Punilla · Carlos Paz · Calamuchita · Traslasierra</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mt-6 mb-6" style={{ textWrap: 'balance' }}>
            Web para cabañas y alojamientos en las Sierras de Córdoba
          </h1>
          <p className="text-crema/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Armamos la web propia de tu cabaña, hostería, casa o departamento de alquiler: dominio .com.ar a tu nombre, hosting el primer año,
            cada unidad con fotos y tarifas, y las consultas directo a tu WhatsApp. Lista en 10 días, desde {pesos(desde)} en un pago único.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BtnPrimary href="#precios">Ver precios</BtnPrimary>
            <BtnGhost href={WA_GENERAL} external>Consultar por WhatsApp</BtnGhost>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section id="incluye" className="py-24 px-6 bg-[#080C18] scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Todo incluido" title="Tu web propia, sin comisiones y sin sorpresas"
            sub="Nos encargamos de la parte técnica para que vos sigas haciendo lo que mejor sabés: recibir bien a la gente." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INCLUYE.map((it, i) => (
              <Reveal key={it.titulo} delay={i * 0.06} className="rounded-3xl border border-white/10 bg-[#0F1629] p-7">
                <div className="flex gap-3 items-start">
                  <Check />
                  <div>
                    <h3 className="text-lg font-bold text-crema">{it.titulo}</h3>
                    <p className="text-crema/55 leading-relaxed mt-2 text-[15px]">{it.texto}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Qué cambia */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <SectionTitle eyebrow="Para qué sirve" title="Un lugar propio en internet que hable de vos" />
          <Reveal className="grid gap-5 text-crema/70 text-lg leading-relaxed">
            <p>Sabemos lo que es atender el teléfono mientras preparás una habitación y contestar la misma consulta cinco veces por día.</p>
            <p>Con tu web, quien te busca encuentra todo en un solo lugar: las fotos de cada unidad, qué incluye, las tarifas de la temporada y cómo llegar. Cuando te escribe, ya sabe qué quiere.</p>
            <p>No te prometemos reservas: eso depende de tu lugar y de cómo atendés. Lo que sí hacemos es que te encuentren, que se entienda lo que ofrecés y que estés listo para responder rápido.</p>
          </Reveal>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="py-24 px-6 scroll-mt-24 bg-[#080C18]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Precios" title="Un precio cerrado según cuántas unidades tenés" />
          <div className="grid md:grid-cols-2 gap-5 items-stretch">
            {PLANES.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08} className="h-full"><Plan p={p} conDescuento={conDescuento} /></Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <div className="rounded-2xl border border-dashed border-teal/40 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-crema/85"><span className="font-bold text-teal">9 unidades o más · </span>hoteles y complejos grandes: te armamos un presupuesto a medida.</p>
              <a href={WA('Hola Juan, tengo un alojamiento de 9 unidades o más en Córdoba y quiero un presupuesto de web.')} target="_blank" rel="noopener noreferrer"
                aria-label="web alojamientos: 9 o más" className="text-sm font-semibold text-teal hover:text-white transition-colors whitespace-nowrap">Pedir presupuesto →</a>
            </div>
          </Reveal>
          <p className="text-crema/40 text-xs mt-4">Precios en pesos argentinos. Mantenimiento opcional: $25.000 por mes (cambios de tarifas, fotos y disponibilidad).</p>
        </div>
      </section>

      {/* Zonas */}
      <section id="zonas" className="py-24 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Zonas" title="Trabajamos con alojamientos de todas las Sierras"
            sub="Cada valle tiene su huésped. La web se arma pensando en qué busca quien viaja a tu zona." />
          <div className="grid lg:grid-cols-3 gap-5">
            {ZONAS.map((z, i) => (
              <Reveal key={z.nombre} delay={i * 0.08} className="rounded-3xl border border-white/10 bg-[#0F1629] p-7">
                <h3 className="text-2xl font-bold text-crema">Valle de {z.nombre}</h3>
                <p className="text-crema/65 leading-relaxed mt-3">{z.texto}</p>
                <p className="text-crema/40 text-sm leading-relaxed mt-5">{z.lugares}.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 px-6 bg-[#080C18]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Cómo funciona" title="De tu mensaje a tu web publicada en 10 días" />
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

      <OpinionesNx excepto={['capacitacion']} className="py-24 px-6" />

      {/* Preguntas */}
      <section id="preguntas" className="py-24 px-6 bg-[#080C18] scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <SectionTitle center eyebrow="Preguntas frecuentes" title="Lo que más nos preguntan los dueños de alojamientos" />
          <div className="grid gap-3">
            {PREGUNTAS.map((p) => (
              <details key={p.q} className="group rounded-2xl border border-white/10 bg-[#0F1629] px-6 py-5">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-crema">
                  {p.q}<span className="text-acento text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-crema/60 leading-relaxed mt-3">
                  {p.a}
                  {p.q.startsWith('¿Hay algo más económico') && <> <a href="/verano#paquetes" className="text-teal hover:text-white underline underline-offset-4">Ver el Kit Temporada</a>.</>}
                </p>
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto" style={{ textWrap: 'balance' }}>¿Querés ver cómo quedaría la web de tu alojamiento?</h2>
            <p className="text-crema/65 text-lg max-w-xl mx-auto mt-5 mb-10">Contanos qué tenés y dónde está. Te pasamos el precio cerrado y una muestra con tus fotos, sin compromiso.</p>
            <BtnPrimary href={WA_GENERAL} external>Escribir por WhatsApp</BtnPrimary>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
