import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const WA = 'https://wa.me/5493492627811?text=Hola%20Juan%2C%20me%20interesa%20hacer%20publicidad%20en%20Instagram%20para%20mi%20negocio%20en%20Rafaela'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JuanoConecta',
  description: 'Publicidad en Instagram y Facebook para negocios en Rafaela. Meta Ads optimizado con IA aplicada.',
  url: 'https://juanoconecta.ar/publicidad-instagram-rafaela',
  telephone: '+543492627811',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rafaela',
    addressRegion: 'Santa Fe',
    addressCountry: 'AR',
  },
  founder: { '@type': 'Person', name: 'Juan Gallino' },
  areaServed: ['Rafaela', 'Santa Fe', 'Argentina'],
  priceRange: '$320.000 - $850.000 ARS/mes',
  sameAs: ['https://www.instagram.com/juanoconecta'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto presupuesto necesito para publicidad en Instagram en Rafaela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para ver resultados reales con publicidad en Instagram en Rafaela, se recomienda un presupuesto mínimo de $30.000 a $50.000 ARS mensuales en pauta. Con menos presupuesto el alcance es limitado. La gestión estratégica de JuanoConecta se cobra aparte y va desde $320.000/mes. El presupuesto de pauta lo ponés vos directamente en Meta; yo cobro la gestión para que ese presupuesto rinda al máximo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En cuánto tiempo se ven resultados con Meta Ads en Rafaela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los primeros resultados con Meta Ads en Rafaela se ven entre 7 y 14 días de campaña activa. En ese periodo el algoritmo de Meta aprende qué audiencia convierte mejor. Los resultados óptimos se alcanzan entre el mes 1 y el mes 2, cuando tenemos suficientes datos para optimizar segmentación, creatividades y presupuesto. Tatitos Pañalera logró +340% de alcance en 60 días con esta metodología.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es mejor para un negocio en Rafaela: contenido orgánico o publicidad paga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La combinación de ambos es lo más efectivo. El contenido orgánico construye confianza y comunidad a largo plazo; la publicidad paga genera resultados inmediatos y alcanza personas que todavía no te conocen. En la práctica, las cuentas con buen contenido orgánico tienen mejor performance en sus campañas pagas porque Meta premia los perfiles con engagement real. Lo ideal es arrancar con ambos desde el inicio.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Meta Ads funciona para cualquier tipo de negocio en Rafaela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, Meta Ads funciona para la gran mayoría de negocios en Rafaela: comercios, profesionales de la salud, gastronómicos, servicios, emprendimientos y más. La clave está en la segmentación correcta por zona geográfica, intereses y comportamiento. Los rubros con ticket alto (estética, salud, educación) suelen ver el ROI más rápido. Los comercios minoristas necesitan más volumen de inversión para resultados comparables.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo hacer publicidad en Instagram con poco presupuesto en Rafaela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, es posible hacer publicidad efectiva en Instagram en Rafaela con presupuestos ajustados. La ventaja de Rafaela como ciudad mediana es que el costo por impresión local es menor que en grandes ciudades. Con una segmentación muy precisa (radio geográfico + intereses específicos), presupuestos de $20.000 a $30.000 ARS mensuales pueden generar resultados medibles en rubros muy segmentados.',
      },
    },
  ],
}

const faqs = faqSchema.mainEntity

const pasos = [
  { num: '01', titulo: 'Auditoría', desc: 'Analizamos tu situación actual, la competencia en Rafaela y tu cliente ideal.' },
  { num: '02', titulo: 'Estrategia', desc: 'Definimos objetivos, audiencias, creatividades y presupuesto óptimo.' },
  { num: '03', titulo: 'Lanzamiento', desc: 'Creamos y activamos las campañas. Primera semana: fase de aprendizaje.' },
  { num: '04', titulo: 'Optimización', desc: 'Ajustes semanales basados en datos. Más resultados con el mismo presupuesto.' },
]

export default function PublicidadInstagramRafaela() {
  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>Publicidad en Instagram Rafaela: Meta Ads para negocios locales | JuanoConecta</title>
        <meta name="description" content="Publicidad en Instagram y Facebook para negocios en Rafaela, Santa Fe. Campañas Meta Ads optimizadas con IA. Más clientes, menos desperdicio de presupuesto. Consultá gratis." />
        <link rel="canonical" href="https://juanoconecta.ar/publicidad-instagram-rafaela" />
        <meta property="og:title" content="Publicidad en Instagram Rafaela | Meta Ads | JuanoConecta" />
        <meta property="og:description" content="Campañas Meta Ads para negocios en Rafaela. Más leads, menos desperdicio de presupuesto. Estrategia con IA aplicada." />
        <meta property="og:url" content="https://juanoconecta.ar/publicidad-instagram-rafaela" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(196,132,106,0.09) 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Meta Ads · Rafaela · Santa Fe</span>
            <h1 className="text-4xl md:text-6xl font-bold text-crema mt-4 mb-6 leading-tight">
              Publicidad en Instagram Rafaela: Meta Ads para negocios locales
            </h1>
            <p className="text-crema/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Campañas en Instagram y Facebook que llegan exactamente a tus clientes en Rafaela. Sin desperdiciar presupuesto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C4846A, #E8A882)' }}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Consultar gratis
              </a>
              <a href="#proceso-ads"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-white/10 bg-white/5 text-crema hover:bg-white/10 transition-all duration-300">
                Ver cómo funciona
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Por qué Meta Ads */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-crema mb-6">¿Por qué hacer publicidad en Instagram si tenés un negocio en Rafaela?</h2>
            <div className="space-y-4 text-crema/55 leading-relaxed text-base">
              <p>La <strong className="text-crema/80">publicidad en Instagram en Rafaela</strong> es hoy la herramienta más poderosa para que un negocio local llegue a nuevos clientes de forma rápida y medible. Una campaña bien configurada puede mostrar tu negocio exactamente a las personas que viven en Rafaela, tienen interés en tu rubro y están listas para comprar.</p>
              <p>El problema es que muchos negocios han probado "poner plata en Instagram" sin resultados. El motivo siempre es el mismo: impulsar una publicación sin estrategia no es lo mismo que armar una campaña de Meta Ads bien segmentada. La diferencia puede ser el doble o el triple de resultados con el mismo presupuesto.</p>
              <p>En JuanoConecta usamos inteligencia artificial para analizar qué audiencias responden mejor para tu rubro en Rafaela, qué creatividades convierten más y cómo optimizar el gasto para que cada peso trabajje al máximo.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso-ads" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Metodología</span>
            <h2 className="text-2xl md:text-3xl font-bold text-crema mt-4">¿Cómo trabajo las campañas de Meta Ads en Rafaela?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pasos.map((p, i) => (
              <motion.div key={p.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-5xl font-bold mb-3" style={{ color: 'rgba(196,132,106,0.15)' }}>{p.num}</div>
                <h3 className="font-bold text-crema mb-2">{p.titulo}</h3>
                <p className="text-crema/45 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Caso de éxito */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(196,132,106,0.1) 0%, rgba(196,132,106,0.03) 100%)', border: '1px solid rgba(196,132,106,0.25)' }}>
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20" style={{ background: '#C4846A' }} />
            <span className="text-acento text-xs font-bold tracking-widest uppercase">Caso verificado · AI Overview Google</span>
            <div className="text-6xl font-bold mt-4 mb-1" style={{ color: '#C4846A' }}>+340%</div>
            <p className="text-crema/50 text-sm mb-6">de alcance orgánico en 60 días con estrategia de contenido + Meta Ads</p>
            <div className="h-px bg-white/5 mb-6" />
            <div className="flex items-start gap-3">
              <div className="w-1 h-14 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(to bottom, #C4846A, transparent)' }} />
              <div>
                <div className="text-crema font-bold text-base">🛍️ Tatitos Pañalera</div>
                <div className="text-xs font-medium mb-2 mt-0.5" style={{ color: '#C4846Aaa' }}>Comercio minorista · Rafaela, Santa Fe</div>
                <p className="text-crema/35 text-sm leading-relaxed">Contenido estratégico diario más Meta Ads segmentada por zona geográfica en Rafaela. En dos meses triplicaron su visibilidad, generaron ventas directas desde Instagram y consolidaron su posicionamiento en el rubro.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-bold text-crema mt-4">Preguntas frecuentes sobre Meta Ads en Rafaela</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <motion.div key={faq.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 className="font-bold text-crema mb-3 text-sm md:text-base">{faq.name}</h3>
                <p className="text-crema/50 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-crema mb-4">¿Querés publicidad que realmente venda?</h2>
            <p className="text-crema/40 mb-8 leading-relaxed">Hablemos y te cuento qué haría para tu negocio en Rafaela. Sin compromiso, sin venta de humo.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C4846A, #E8A882)' }}>
                Hablar con Juan por WhatsApp
              </a>
              <a href="/marketing-digital-rafaela"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-white/10 bg-white/5 text-crema hover:bg-white/10 transition-all duration-300">
                Ver servicios completos →
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
