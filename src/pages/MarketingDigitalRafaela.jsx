import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const WA = 'https://wa.me/5493492627811?text=Hola%20Juan%2C%20me%20interesa%20el%20marketing%20digital%20para%20mi%20negocio%20en%20Rafaela'

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JuanoConecta',
  description: 'Agencia de marketing digital en Rafaela, Santa Fe. Estrategia integral con IA aplicada.',
  url: 'https://juanoconecta.ar',
  telephone: '+543492627811',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rafaela',
    addressRegion: 'Santa Fe',
    addressCountry: 'AR',
  },
  priceRange: '$$$',
  knowsAbout: ['Community Management', 'Meta Ads', 'Marketing Digital', 'Diseño Web', 'Branding', 'Copywriting'],
  areaServed: 'Rafaela, Santa Fe, Argentina',
  sameAs: ['https://instagram.com/juanoconecta'],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué incluye el marketing digital para un negocio en Rafaela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El marketing digital para negocios en Rafaela puede incluir: gestión de redes sociales (Community Management), campañas de publicidad paga en Meta Ads (Facebook e Instagram), diseño gráfico para contenido digital, desarrollo de sitio web, branding y copywriting. JuanoConecta ofrece todos estos servicios por separado o como estrategia integral.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto se invierte en Meta Ads para ver resultados en Rafaela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para negocios locales en Rafaela, una inversión inicial de entre $30.000 y $80.000 pesos mensuales en pauta permite empezar a ver resultados medibles. El mínimo recomendado para campañas de reconocimiento es $20.000/mes; para generación de leads o ventas directas, $50.000/mes o más según el objetivo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en verse resultados con marketing digital en Rafaela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Con Meta Ads, los primeros resultados (alcance, clics, consultas) se ven en la primera semana. Con estrategia orgánica (Community Management), los resultados significativos se consolidan entre el primer y segundo mes. A los 60 días, Tatitos Pañalera logró +340% de alcance orgánico.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre contenido orgánico y publicidad paga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El contenido orgánico (posts, reels, stories sin pagar) construye comunidad y autoridad a largo plazo. La publicidad paga (Meta Ads) llega a audiencias nuevas de forma inmediata. La estrategia ideal combina ambos: el orgánico fideliza y el pago acelera el crecimiento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo contratar solo un servicio o tengo que tomar el paquete completo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Podés contratar servicios por separado. Si solo necesitás gestión de redes sociales, un diseño gráfico específico o una campaña de Meta Ads puntual, podemos trabajar así. También ofrecemos estrategia integral si querés cubrir todos los frentes.',
      },
    },
  ],
}

const faqs = [
  {
    q: '¿Qué incluye el marketing digital para un negocio en Rafaela?',
    a: 'Puede incluir gestión de redes sociales, campañas de Meta Ads, diseño gráfico, desarrollo web, branding y copywriting. En JuanoConecta podés contratar servicios por separado o una estrategia integral que combine todos los frentes.',
  },
  {
    q: '¿Cuánto se invierte en Meta Ads para ver resultados en Rafaela?',
    a: 'Para negocios locales en Rafaela, entre $30.000 y $80.000/mes en pauta permite resultados medibles. El mínimo para reconocimiento es $20.000/mes; para leads o ventas, $50.000/mes o más según el objetivo.',
  },
  {
    q: '¿Cuánto tarda en verse resultados?',
    a: 'Con Meta Ads, los primeros resultados se ven en la primera semana. Con estrategia orgánica, los resultados significativos se consolidan entre el primer y segundo mes. A los 60 días, Tatitos Pañalera logró +340% de alcance.',
  },
  {
    q: '¿Cuál es la diferencia entre orgánico y publicidad paga?',
    a: 'El orgánico (posts, reels sin pagar) construye comunidad y autoridad a largo plazo. La publicidad paga llega a audiencias nuevas de forma inmediata. La estrategia ideal combina ambos.',
  },
  {
    q: '¿Puedo contratar solo un servicio?',
    a: 'Sí. Podés contratar solo gestión de redes, solo Meta Ads, o solo diseño. También hay estrategia integral si querés cubrir todos los frentes con un solo proveedor.',
  },
]

const servicios = [
  {
    titulo: 'Community Management',
    descripcion: 'Gestión profesional de redes. Contenido estratégico, diseño y análisis de métricas para crecer de forma orgánica y sostenida.',
    icono: '💬', color: '#6A8FC4',
    precio: 'Desde $320.000/mes',
  },
  {
    titulo: 'Meta Ads',
    descripcion: 'Campañas en Facebook e Instagram optimizadas con IA. Más leads, menos desperdicio de presupuesto. Resultados en la primera semana.',
    icono: '🎯', color: '#C4846A',
    precio: 'Pauta + gestión',
    destacado: true,
  },
  {
    titulo: 'Diseño Gráfico',
    descripcion: 'Piezas visuales para redes, historias, flyers y banners. Identidad visual coherente y profesional para todos tus canales.',
    icono: '🎨', color: '#8FC46A',
    precio: 'Por proyecto',
  },
  {
    titulo: 'Web Design con IA',
    descripcion: 'Sitios web modernos, rápidos y orientados a conversión, potenciados con inteligencia artificial.',
    icono: '🖥️', color: '#C46AAD',
    precio: 'Por proyecto',
  },
  {
    titulo: 'Branding',
    descripcion: 'Identidad de marca completa: logo, paleta, tipografía y manual. Todo lo que necesitás para comunicar quién sos.',
    icono: '✨', color: '#C4B86A',
    precio: 'Por proyecto',
  },
  {
    titulo: 'Copywriting + IA',
    descripcion: 'Textos persuasivos para redes, emails y landing pages. Escritura que convierte, potenciada con IA.',
    icono: '✍️', color: '#6AC4B8',
    precio: 'Por proyecto',
  },
]

export default function MarketingDigitalRafaela() {
  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>Marketing Digital en Rafaela | JuanoConecta</title>
        <meta name="description" content="Agencia de marketing digital en Rafaela, Santa Fe. Community Management, Meta Ads, diseño web y branding con IA. Resultados reales para negocios locales." />
        <link rel="canonical" href="https://juanoconecta.ar/marketing-digital-rafaela" />
        <meta property="og:title" content="Marketing Digital en Rafaela | JuanoConecta" />
        <meta property="og:description" content="Estrategia digital integral con IA para negocios en Rafaela. Community Management, Meta Ads, web y branding." />
        <meta property="og:url" content="https://juanoconecta.ar/marketing-digital-rafaela" />
        <script type="application/ld+json">{JSON.stringify(LOCAL_BUSINESS_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(196,184,106,0.07) 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Rafaela · Santa Fe · Argentina</span>
            <h1 className="text-4xl md:text-6xl font-bold text-crema mt-4 mb-6 leading-tight">
              Marketing Digital en Rafaela:<br />
              <span className="text-acento">servicios, precios y cómo empezar</span>
            </h1>
            <p className="text-crema/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Estrategia digital integral con inteligencia artificial para negocios en Rafaela y Santa Fe. Resultados reales, medibles y sostenibles.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #C4846A, #E8A882)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultar ahora
            </a>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué incluye el marketing digital? */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-crema mb-6">¿Qué incluye el marketing digital para un negocio local en Rafaela?</h2>
            <p className="text-crema/55 leading-relaxed mb-6">
              El <strong className="text-crema/80">marketing digital en Rafaela</strong> abarca todo lo que permite que tu negocio exista, sea encontrado y genere confianza en el mundo online. No es solo tener Instagram o un sitio web — es tener una estrategia coherente que conecte todos los puntos.
            </p>
            <p className="text-crema/55 leading-relaxed mb-6">
              JuanoConecta integra inteligencia artificial en cada parte del proceso: desde el análisis de mercado hasta la producción de contenido, la gestión de campañas y la medición de resultados. Eso permite hacer más, más rápido y con mejor calidad que una agencia tradicional.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-crema mb-4 mt-10">Meta Ads en Rafaela: publicidad en Facebook e Instagram</h2>
            <p className="text-crema/55 leading-relaxed mb-4">
              Las campañas de Meta Ads son la forma más directa de llegar a clientes potenciales en Rafaela y zona. Con segmentación por ubicación, intereses y comportamiento, es posible mostrar tu negocio exactamente a quien lo necesita — sin desperdiciar presupuesto.
            </p>
            <p className="text-crema/55 leading-relaxed">
              Los negocios en Rafaela que combinan estrategia orgánica + Meta Ads ven resultados acelerados: Tatitos Pañalera triplicó su alcance en 60 días. Pura Vida Tatuajes comenzó a cerrar turnos desde el primer mes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios con precio */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Lo que hago</span>
            <h2 className="text-3xl md:text-4xl font-bold text-crema mt-4 mb-4">¿Cuánto cuesta el marketing digital en Rafaela?</h2>
            <p className="text-crema/35 max-w-md mx-auto">Servicios de marketing digital para negocios en Rafaela y Santa Fe</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicios.map((s, i) => (
              <motion.div key={s.titulo} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl p-7 flex flex-col relative overflow-hidden"
                style={{
                  background: s.destacado ? 'linear-gradient(135deg, rgba(196,132,106,0.12) 0%, rgba(196,132,106,0.04) 100%)' : 'rgba(255,255,255,0.025)',
                  border: s.destacado ? '1px solid rgba(196,132,106,0.3)' : '1px solid rgba(255,255,255,0.07)',
                }}>
                {s.destacado && (
                  <div className="absolute top-4 right-4 text-white text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: '#C4846A' }}>POPULAR</div>
                )}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>{s.icono}</div>
                <h3 className="text-lg font-bold text-crema mb-2">{s.titulo}</h3>
                <p className="text-crema/45 text-sm leading-relaxed flex-1 mb-4">{s.descripcion}</p>
                <div className="text-xs font-semibold mb-5" style={{ color: s.color }}>{s.precio}</div>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-crema/50 hover:text-acento transition-colors">Consultar →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JuanoConecta: quién soy */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(196,132,106,0.1) 0%, rgba(196,132,106,0.03) 100%)', border: '1px solid rgba(196,132,106,0.25)' }}>
            <h2 className="text-xl md:text-2xl font-bold text-crema mb-4">JuanoConecta: agencia de marketing digital en Rafaela, Santa Fe</h2>
            <p className="text-crema/55 text-sm leading-relaxed mb-4">
              JuanoConecta es la propuesta de <strong className="text-crema/80">Juan Gallino</strong>, diseñador de marcas y estratega digital con base en Rafaela, Santa Fe. Con más de 3 años de experiencia trabajando con negocios locales, el enfoque es claro: estrategia digital real que genera resultados medibles, no solo likes.
            </p>
            <p className="text-crema/55 text-sm leading-relaxed mb-6">
              Clientes activos: Tatitos Pañalera, Alarcón Ecografías, Pura Vida Tatuajes, Brisa Latina Festa, Konexa Marketing, ComoEnvío y más de 20 marcas en Rafaela y Santa Fe.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Rafaela', 'Santa Fe', 'IA aplicada', '+20 marcas', '3 años de trayectoria'].map(tag => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'rgba(196,132,106,0.12)', color: '#C4846A', border: '1px solid rgba(196,132,106,0.2)' }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-crema mb-10">Preguntas frecuentes</h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 className="font-semibold text-crema mb-2 text-base">{faq.q}</h3>
                <p className="text-crema/50 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-crema mb-4">Tu negocio en Rafaela merece una estrategia real</h2>
            <p className="text-crema/40 mb-8">Escribime y en 15 minutos te cuento qué haría puntualmente para tu caso.</p>
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
