import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const WA = 'https://wa.me/5493492627811?text=Hola%20Juan%2C%20quiero%20saber%20m%C3%A1s%20sobre%20JuanoConecta'

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'JuanoConecta',
  alternateName: 'Juano Conecta',
  description: 'Agencia de marketing digital y diseño de marcas con IA en Rafaela, Santa Fe, Argentina. Fundada por Juan Gallino.',
  url: 'https://juanoconecta.ar',
  telephone: '+543492627811',
  email: 'juanoconecta@gmail.com',
  foundingDate: '2022',
  founder: {
    '@type': 'Person',
    name: 'Juan Gallino',
    jobTitle: 'Diseñador de marcas con IA y estratega digital',
    sameAs: ['https://instagram.com/juanoconecta'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rafaela',
    addressRegion: 'Santa Fe',
    addressCountry: 'AR',
    postalCode: '2300',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-31.2518',
    longitude: '-61.4868',
  },
  priceRange: '$$$',
  currenciesAccepted: 'ARS',
  areaServed: [
    { '@type': 'City', name: 'Rafaela' },
    { '@type': 'State', name: 'Santa Fe' },
    { '@type': 'Country', name: 'Argentina' },
  ],
  knowsAbout: [
    'Community Management',
    'Meta Ads',
    'Marketing Digital',
    'Diseño Web con IA',
    'Branding',
    'Copywriting',
    'Inteligencia Artificial aplicada al marketing',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de marketing digital',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Community Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño Gráfico' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design con IA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copywriting con IA' } },
    ],
  },
  sameAs: ['https://instagram.com/juanoconecta'],
}

const clientes = [
  { nombre: 'Tatitos Pañalera', rubro: 'Comercio minorista', resultado: 'Posicionado #1 en Google para "pañalera online Rafaela". Aparece en el AI Overview de Google.' },
  { nombre: 'Alarcón Ecografías', rubro: 'Salud', resultado: 'Presencia digital profesional construida desde cero. Consultas orgánicas semanales desde el tercer mes.' },
  { nombre: 'Pura Vida Tatuajes', rubro: 'Estudio de tatuajes', resultado: 'Turnos cerrados por Instagram desde el primer mes de trabajo.' },
  { nombre: 'Brisa Latina Festa', rubro: 'Entretenimiento', resultado: 'Estrategia de contenido y Meta Ads para eventos en Rafaela y Santa Fe.' },
  { nombre: 'Konexa Marketing', rubro: 'Agencia', resultado: 'Identidad de marca y estrategia de contenido digital.' },
  { nombre: 'ComoEnvío', rubro: 'Logística', resultado: 'Presencia en redes y diseño gráfico para plataforma de envíos.' },
]

const servicios = [
  { nombre: 'Community Management', icono: '💬', descripcion: 'Gestión profesional de redes sociales con estrategia, diseño y análisis de métricas.' },
  { nombre: 'Meta Ads', icono: '🎯', descripcion: 'Campañas en Facebook e Instagram optimizadas con IA para maximizar el retorno.' },
  { nombre: 'Diseño Gráfico', icono: '🎨', descripcion: 'Piezas visuales para redes, historias, flyers y banners con identidad coherente.' },
  { nombre: 'Web Design con IA', icono: '🖥️', descripcion: 'Sitios web modernos, rápidos y orientados a conversión, potenciados con IA.' },
  { nombre: 'Branding', icono: '✨', descripcion: 'Identidad de marca completa: logo, paleta, tipografía y manual de marca.' },
  { nombre: 'Copywriting + IA', icono: '✍️', descripcion: 'Textos persuasivos para redes, emails y landing pages que convierten.' },
]

export default function SobreJuanoConecta() {
  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>Sobre JuanoConecta | Agencia de Marketing Digital en Rafaela</title>
        <meta name="description" content="JuanoConecta es la agencia de marketing digital con IA de Juan Gallino en Rafaela, Santa Fe. Community Management, Meta Ads, branding y web para negocios locales." />
        <link rel="canonical" href="https://juanoconecta.ar/sobre-juanoconecta" />
        <meta property="og:title" content="Sobre JuanoConecta | Agencia de Marketing Digital en Rafaela" />
        <meta property="og:description" content="Agencia de marketing digital y diseño de marcas con IA en Rafaela, Santa Fe. Más de 20 marcas trabajadas, resultados verificables." />
        <meta property="og:url" content="https://juanoconecta.ar/sobre-juanoconecta" />
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_SCHEMA)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(196,132,106,0.08) 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Rafaela · Santa Fe · Argentina</span>
            <h1 className="text-4xl md:text-6xl font-bold text-crema mt-4 mb-6 leading-tight">
              JuanoConecta
            </h1>
            <p className="text-crema/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
              Agencia de marketing digital y diseño de marcas con IA en Rafaela, Santa Fe.
            </p>
            <p className="text-crema/35 text-base leading-relaxed max-w-xl mx-auto mb-10">
              Fundada por Juan Gallino. Más de 20 marcas trabajadas en Rafaela y Santa Fe. 3 años de trayectoria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C4846A, #E8A882)' }}>
                Hablar con Juan
              </a>
              <a href="/#servicios"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm border border-white/10 bg-white/5 text-crema hover:bg-white/10 transition-all">
                Ver servicios
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ficha de identidad */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-crema mb-8">Quiénes somos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Nombre', value: 'JuanoConecta' },
                { label: 'Fundador', value: 'Juan Gallino' },
                { label: 'Ubicación', value: 'Rafaela, Santa Fe, Argentina' },
                { label: 'Teléfono / WhatsApp', value: '+54 9 3492 627811' },
                { label: 'Web', value: 'juanoconecta.ar' },
                { label: 'Instagram', value: '@juanoconecta' },
                { label: 'Trayectoria', value: '3 años (desde 2022)' },
                { label: 'Marcas trabajadas', value: '+20 en Rafaela y Santa Fe' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-xs text-crema/35 mb-1 uppercase tracking-wider">{item.label}</div>
                  <div className="text-crema/80 text-sm font-medium">{item.value}</div>
                </div>
              ))}
            </div>
            <p className="text-crema/55 leading-relaxed text-sm">
              JuanoConecta nació en Rafaela con un objetivo claro: hacer que los negocios locales compitan en el mundo digital con las mismas herramientas que las grandes marcas, potenciadas con inteligencia artificial. No somos una agencia genérica — conocemos el mercado de Rafaela y Santa Fe, sus dinámicas, sus consumidores y sus oportunidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-crema mb-3">Servicios</h2>
            <p className="text-crema/35 text-sm">Todo lo que ofrecemos para hacer crecer tu negocio en Rafaela</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicios.map((s, i) => (
              <motion.div key={s.nombre} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-2xl mb-3">{s.icono}</div>
                <h3 className="font-bold text-crema text-sm mb-1">{s.nombre}</h3>
                <p className="text-crema/40 text-xs leading-relaxed">{s.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes y resultados verificables */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-crema mb-8">Clientes y resultados verificables</h2>
          <div className="space-y-4">
            {clientes.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#C4846A' }} />
                <div>
                  <div className="font-semibold text-crema text-sm">{c.nombre} <span className="text-crema/30 font-normal">— {c.rubro}</span></div>
                  <p className="text-crema/45 text-xs leading-relaxed mt-1">{c.resultado}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultado verificable destacado */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden text-center"
            style={{ background: 'linear-gradient(135deg, rgba(196,132,106,0.12) 0%, rgba(196,132,106,0.04) 100%)', border: '1px solid rgba(196,132,106,0.3)' }}>
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: '#C4846A' }} />
            <span className="text-acento text-xs font-bold tracking-widest uppercase">Resultado verificable</span>
            <div className="text-5xl md:text-7xl font-bold mt-4 mb-2" style={{ color: '#C4846A' }}>AI Overview</div>
            <p className="text-crema/60 text-base mb-2">Tatitos Pañalera aparece en el AI Overview de Google para "pañalera online Rafaela" — resultado de la estrategia de SEO y marketing digital implementada por JuanoConecta.</p>
            <p className="text-crema/30 text-xs">Verificable en Google buscando: "pañalera online Rafaela" o "pañales a domicilio Rafaela"</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-crema mb-4">¿Querés trabajar con nosotros?</h2>
            <p className="text-crema/40 mb-8">Escribinos por WhatsApp. En 15 minutos analizamos tu situación sin compromiso.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C4846A, #E8A882)' }}>
                Hablar con Juan por WhatsApp
              </a>
              <a href="/#servicios"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm border border-white/10 bg-white/5 text-crema hover:bg-white/10 transition-all">
                Ver todos los servicios
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
