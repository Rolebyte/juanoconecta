import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import OpinionesNx from '../components/home/OpinionesNx'
import { Eyebrow, GridGlow, SectionTitle, BtnPrimary, BtnGhost, Reveal } from '../components/home/ui'
import { PLANES_REDES } from '../data/planesRedes'
import { productos } from '../data/tienda'

// Página de SEO por zona: comercios y emprendedores del centro-oeste santafesino, alrededor de Rafaela.
// Una sola página para toda la región (no una por localidad). Los precios salen de los mismos datos
// que usan las páginas de redes y la tienda, así no quedan desactualizados.
const URL = 'https://juanoconecta.ar/webs-y-redes-region-rafaela'
const WA = (texto) => 'https://wa.me/5493492627811?text=' + encodeURIComponent(texto)
const WA_GENERAL = WA('Hola Juan, tengo un negocio en la región de Rafaela y quiero saber cómo me pueden ayudar.')

const redesDesde = PLANES_REDES[0].precio
const auditoriaDesde = productos.find((p) => p.tarifas)?.tarifas[0].ars

const SERVICIOS = [
  {
    titulo: 'Web o tienda online',
    texto: 'Una web clara, rápida y lista para aparecer en Google, o una tienda con Mercado Pago. Presupuesto cerrado antes de empezar.',
    precio: 'Presupuesto a medida',
    link: '/#servicios', linkTexto: 'Ver servicios',
  },
  {
    titulo: 'Gestión de redes sociales',
    texto: 'Contenido con tu marca, publicaciones todos los meses y respuesta a comentarios y mensajes, según el plan.',
    precio: `Desde ${redesDesde} por mes`,
    link: '/redes-sociales-para-negocios-rafaela#precios-redes', linkTexto: 'Ver planes',
  },
  {
    titulo: 'Publicidad en Instagram y Facebook',
    texto: 'Campañas de Meta Ads para llegar a la gente de tu localidad y de los pueblos vecinos, con un presupuesto que vos definís.',
    precio: 'Según la campaña',
    link: '/publicidad-instagram-rafaela', linkTexto: 'Cómo funciona',
  },
  {
    titulo: 'Auditoría IA de tu perfil',
    texto: 'Revisamos tu Instagram con IA y te damos una lista de qué cambiar primero, con una sesión 1 a 1 con Juan.',
    precio: auditoriaDesde ? `Desde ${auditoriaDesde}` : 'Ver precios',
    link: '/tienda', linkTexto: 'Ver la auditoría',
  },
]

// Departamentos del centro-oeste santafesino (sin Sunchales, a pedido de Juan).
const ZONAS = [
  {
    nombre: 'Castellanos',
    lugares: 'Rafaela, Frontera, San Vicente, Humberto Primo, Susana, Lehmann, Bella Italia, Aurelia, Presidente Roca, Ataliva',
    texto: 'El departamento de Rafaela, en plena cuenca lechera. Comercios de barrio, industrias y emprendedores que compiten con las cadenas y con las compras online.',
  },
  {
    nombre: 'Las Colonias',
    lugares: 'Esperanza, Pilar, San Jerónimo Norte, Humboldt, Franck, San Carlos Centro, Sa Pereira',
    texto: 'Ciudades con mucha vida comercial y un ecosistema emprendedor activo. El cliente compara en el celular antes de salir de su casa.',
  },
  {
    nombre: 'San Martín',
    lugares: 'San Jorge, El Trébol, Sastre, Carlos Pellegrini, María Susana, Piamonte',
    texto: 'Ciudades industriales con comercio fuerte. Cuando alguien busca un rubro en Google o en Instagram, el negocio que aparece bien presentado es el que recibe la consulta.',
  },
  {
    nombre: 'San Cristóbal',
    lugares: 'Suardi, San Cristóbal, Ceres, Hersilia, San Guillermo, Arrufó',
    texto: 'Al norte de la región, con distancias largas entre localidades. Una buena ficha de Google y un WhatsApp ordenado ahorran viajes y llamadas.',
  },
]

const PASOS = [
  { titulo: 'Nos escribís', texto: 'Nos contás qué vendés, en qué localidad estás y qué te gustaría resolver.' },
  { titulo: 'Miramos tu presencia', texto: 'Revisamos tu Instagram, tu ficha de Google y tu web si tenés, y te decimos qué conviene hacer primero.' },
  { titulo: 'Propuesta con precio', texto: 'Te pasamos una propuesta clara, con lo que incluye y cuánto cuesta. Sin letra chica.' },
  { titulo: 'Manos a la obra', texto: 'Trabajamos con tu marca y te mostramos los avances. Nos juntamos en persona o por videollamada.' },
]

const PREGUNTAS = [
  {
    q: '¿Trabajan con negocios de fuera de Rafaela?',
    a: 'Sí. Trabajamos con comercios, emprendedores y pymes de todo el centro-oeste santafesino: Esperanza, San Jorge, El Trébol, Frontera, San Vicente, Pilar, San Jerónimo Norte, Suardi y muchas localidades más. Según la distancia, nos juntamos en persona o por videollamada.',
  },
  {
    q: '¿Cuánto cuesta que manejen las redes de mi negocio?',
    a: `Los planes de redes arrancan en ${redesDesde} por mes para emprendedores, y suben según la cantidad de redes, publicaciones y si incluyen publicidad. La pauta de Meta Ads se paga aparte, directo a Meta.`,
  },
  {
    q: '¿Cuánto cuesta una página web para mi comercio?',
    a: 'Depende de lo que necesites: una web institucional, una página para una promo o una tienda online. Antes de empezar te pasamos un presupuesto cerrado con todo lo que incluye.',
  },
  {
    q: '¿Me garantizan más ventas?',
    a: 'No, y desconfiá de quien lo prometa. Lo que sí hacemos es que te encuentren en Google y en redes, que se entienda bien lo que vendés y que estés listo para responder y cobrar rápido. Las ventas llegan como consecuencia de eso.',
  },
  {
    q: '¿Por dónde conviene empezar?',
    a: 'Si no sabés qué te falta, la auditoría IA de tu perfil es el mejor primer paso: te dice qué cambiar primero y en qué orden. Si ya lo tenés claro, escribinos y armamos la propuesta.',
  },
  {
    q: '¿Para qué usan la inteligencia artificial?',
    a: 'Para trabajar más rápido y probar más ideas: textos, diseños, análisis de tu cuenta y respuestas para tus clientes. Todo lo que sale con tu marca lo revisamos y lo ajustamos nosotros.',
  },
  {
    q: '¿Pueden dar una capacitación en IA en mi localidad?',
    a: 'Sí. Damos charlas y talleres de IA para emprendedores y comercios, organizados por el municipio, la comuna o el centro comercial. La primera fue "Emprender con IA", en Rafaela, en octubre de 2026.',
  },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${URL}#servicio`,
      name: 'Webs, redes sociales e IA para comercios de la región de Rafaela',
      serviceType: 'Marketing digital para comercios, emprendedores y pymes',
      description: 'Páginas web y tiendas online, gestión de redes sociales, publicidad en Instagram y Facebook, auditoría de perfiles con IA y capacitaciones en IA para comercios y emprendedores del centro-oeste de Santa Fe.',
      url: URL,
      provider: { '@id': 'https://juanoconecta.ar/#negocio' },
      areaServed: [
        ...ZONAS.map((z) => ({ '@type': 'AdministrativeArea', name: `Departamento ${z.nombre}, Santa Fe, Argentina` })),
        ...['Rafaela', 'Esperanza', 'San Jorge', 'El Trébol', 'Frontera', 'San Vicente', 'San Jerónimo Norte', 'Pilar'].map((name) => ({ '@type': 'City', name })),
      ],
      audience: { '@type': 'BusinessAudience', name: 'Comercios, emprendedores y pymes' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: PREGUNTAS.map((p) => ({ '@type': 'Question', name: p.q, acceptedAnswer: { '@type': 'Answer', text: p.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://juanoconecta.ar/' },
        { '@type': 'ListItem', position: 2, name: 'Webs y redes para comercios de la región', item: URL },
      ],
    },
  ],
}

export default function RegionRafaela() {
  const titulo = 'Webs y redes para comercios cerca de Rafaela | JuanoConecta'
  const descripcion = 'Webs, redes, Meta Ads y capacitaciones en IA para comercios de Esperanza, San Jorge, El Trébol, Frontera y todo el centro-oeste santafesino.'

  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>{titulo}</title>
        <meta name="description" content={descripcion} />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descripcion} />
        <meta property="og:url" content={URL} />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <Navbar />

      {/* Hero: la respuesta completa en el primer párrafo */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <GridGlow />
        <div className="relative max-w-4xl mx-auto text-center">
          <Eyebrow>Castellanos · Las Colonias · San Martín · San Cristóbal</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mt-6 mb-6" style={{ textWrap: 'balance' }}>
            Webs, redes e IA para comercios de la región de Rafaela
          </h1>
          <p className="text-crema/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Ayudamos a comercios, emprendedores y pymes de Esperanza, San Jorge, El Trébol, Frontera, San Vicente y todo el centro-oeste santafesino
            a que los encuentren en Google y en Instagram, a mostrar bien lo que venden y a responder rápido por WhatsApp. Estamos en Rafaela, a un rato de tu localidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BtnPrimary href="#servicios">Ver qué hacemos</BtnPrimary>
            <BtnGhost href={WA_GENERAL} external>Consultar por WhatsApp</BtnGhost>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 px-6 bg-[#080C18] scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Servicios" title="Lo que necesita tu negocio para que lo encuentren"
            sub="Podés contratar un servicio solo o combinarlos. Usamos IA para trabajar rápido, pero todo se arma con tu marca." />
          <div className="grid sm:grid-cols-2 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.titulo} delay={i * 0.06} className="rounded-3xl border border-white/10 bg-[#0F1629] p-7 flex flex-col">
                <h3 className="text-xl font-bold text-crema">{s.titulo}</h3>
                <p className="text-crema/60 leading-relaxed mt-2 text-[15px] flex-1">{s.texto}</p>
                <div className="mt-5 flex items-center justify-between gap-4 flex-wrap">
                  <span className="font-semibold text-teal">{s.precio}</span>
                  <a href={s.link} className="text-sm font-semibold text-crema/70 hover:text-white transition-colors">{s.linkTexto} →</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cerca */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <SectionTitle eyebrow="Por qué alguien de la zona" title="Conocemos cómo se compra en los pueblos y ciudades de la región" />
          <Reveal className="grid gap-5 text-crema/70 text-lg leading-relaxed">
            <p>En una localidad chica, el cliente te conoce, pero igual te busca en el celular: el horario, si tenés lo que necesita, cómo pagar. Si no te encuentra, le escribe al que sí aparece.</p>
            <p>Estamos en Rafaela, así que podemos juntarnos en persona, entender tu negocio de cerca y hablarle a tu cliente como le hablás vos.</p>
            <p>No te prometemos ventas. Te prometemos lo que controlamos: que te encuentren, que se entienda lo que ofrecés y que estés listo para responder y cobrar.</p>
          </Reveal>
        </div>
      </section>

      {/* Zonas */}
      <section id="zonas" className="py-24 px-6 bg-[#080C18] scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Zonas" title="Trabajamos en todo el centro-oeste santafesino" />
          <div className="grid md:grid-cols-2 gap-5">
            {ZONAS.map((z, i) => (
              <Reveal key={z.nombre} delay={i * 0.06} className="rounded-3xl border border-white/10 bg-[#0F1629] p-7">
                <h3 className="text-2xl font-bold text-crema">Departamento {z.nombre}</h3>
                <p className="text-crema/65 leading-relaxed mt-3">{z.texto}</p>
                <p className="text-crema/40 text-sm leading-relaxed mt-5">{z.lugares}.</p>
              </Reveal>
            ))}
          </div>
          <p className="text-crema/45 text-sm mt-6">¿Tu localidad no está en la lista? Escribinos igual: trabajamos con toda la provincia y, a distancia, con todo el país.</p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Cómo trabajamos" title="Del primer mensaje a tu negocio bien presentado" />
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

      {/* Capacitaciones */}
      <section className="px-6 pb-24">
        <Reveal className="max-w-6xl mx-auto rounded-2xl border border-dashed border-teal/40 px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-crema/85 text-lg"><span className="font-bold text-teal">¿Sos de un municipio, comuna o centro comercial? </span>Llevamos capacitaciones en IA para los emprendedores y comercios de tu localidad.</p>
          <a href="/capacitaciones" className="text-sm font-semibold text-teal hover:text-white transition-colors whitespace-nowrap">Ver capacitaciones →</a>
        </Reveal>
      </section>

      <OpinionesNx className="py-24 px-6 bg-[#080C18]" />

      {/* Preguntas */}
      <section id="preguntas" className="py-24 px-6 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <SectionTitle center eyebrow="Preguntas frecuentes" title="Lo que nos preguntan los comercios de la región" />
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto" style={{ textWrap: 'balance' }}>¿Qué le falta a tu negocio para que lo encuentren?</h2>
            <p className="text-crema/65 text-lg max-w-xl mx-auto mt-5 mb-10">Contanos qué vendés y en qué localidad estás. Te decimos por dónde empezar, sin compromiso.</p>
            <BtnPrimary href={WA_GENERAL} external>Escribir por WhatsApp</BtnPrimary>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
