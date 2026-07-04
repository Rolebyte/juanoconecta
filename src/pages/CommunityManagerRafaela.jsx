import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const WA = 'https://wa.me/5493492627811?text=Hola%20Juan%2C%20me%20interesa%20el%20servicio%20de%20Community%20Manager%20en%20Rafaela'

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JuanoConecta',
  description: 'Agencia de community management y marketing digital en Rafaela, Santa Fe',
  url: 'https://juanoconecta.ar',
  telephone: '+543492627811',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rafaela',
    addressRegion: 'Santa Fe',
    addressCountry: 'AR',
  },
  priceRange: '$$$',
  knowsAbout: ['Community Management', 'Meta Ads', 'Marketing Digital', 'Diseño Web', 'Branding'],
  areaServed: 'Rafaela, Santa Fe, Argentina',
  sameAs: ['https://instagram.com/juanoconecta'],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué hace exactamente un Community Manager en Rafaela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un Community Manager planifica y publica contenido en redes sociales, responde comentarios y mensajes, analiza métricas de alcance e interacción, gestiona campañas de publicidad paga (Meta Ads), y adapta la estrategia según los resultados. En Rafaela, también implica conocer el mercado local y las tendencias de consumo de la región.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un Community Manager en Rafaela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En JuanoConecta los planes de Community Management en Rafaela arrancan en $320.000/mes (plan Starter, 1 red social, 12 publicaciones mensuales), el plan Pro cuesta $550.000/mes (2 redes, 20 publicaciones, reels incluidos) y el plan Full es $850.000/mes (todas las redes, contenido diario, Meta Ads incluido). El presupuesto de pauta en Meta Ads se acuerda por separado según el objetivo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué resultados se pueden esperar en los primeros meses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los resultados dependen del punto de partida, pero en general: en el primer mes se estabiliza la identidad visual y la frecuencia de publicación. En el segundo mes empieza a verse crecimiento orgánico en alcance e interacción. A los 60 días, Tatitos Pañalera logró un +340% de alcance orgánico. Pura Vida Tatuajes comenzó a cerrar turnos por Instagram desde el primer mes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito tener muchos seguidores para contratar un Community Manager?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. De hecho, muchos clientes en Rafaela arrancan con cuentas pequeñas o sin presencia previa. Lo importante no es la cantidad de seguidores sino la estrategia y la consistencia. Alarcón Ecografías construyó su presencia digital desde cero con nosotros.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo es el proceso para empezar con JuanoConecta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El proceso tiene 3 pasos: 1) Escribís por WhatsApp y acordamos una llamada de diagnóstico de 15 minutos sin costo. 2) Presentamos una propuesta concreta con estrategia y precios. 3) Arrancamos con un período de prueba de 30 días. Sin contratos largos ni letra chica.',
      },
    },
  ],
}

const faqs = [
  {
    q: '¿Qué hace exactamente un Community Manager en Rafaela?',
    a: 'Planifica y publica contenido, responde comentarios y mensajes, analiza métricas, gestiona campañas de Meta Ads y adapta la estrategia según resultados. En Rafaela, también implica conocer el mercado local y las tendencias de consumo de la región.',
  },
  {
    q: '¿Cuánto cuesta un Community Manager en Rafaela?',
    a: 'Los planes arrancan en $320.000/mes (Starter: 1 red, 12 publicaciones), $550.000/mes (Pro: 2 redes, 20 publicaciones + reels) y $850.000/mes (Full: todas las redes + Meta Ads incluido). El presupuesto de pauta se acuerda aparte.',
  },
  {
    q: '¿Qué resultados puedo esperar en los primeros meses?',
    a: 'En el primer mes se estabiliza la identidad visual y frecuencia. Al segundo mes crece el alcance orgánico. A los 60 días, Tatitos Pañalera logró +340% de alcance. Pura Vida Tatuajes empezó a cerrar turnos por Instagram desde el primer mes.',
  },
  {
    q: '¿Necesito muchos seguidores para empezar?',
    a: 'No. Muchos clientes arrancan desde cero. Lo importante es la estrategia y la consistencia, no el punto de partida. Alarcón Ecografías construyó su presencia digital desde cero.',
  },
  {
    q: '¿Cómo es el proceso para arrancar?',
    a: '3 pasos: llamada de diagnóstico de 15 min sin costo → propuesta concreta con estrategia y precios → período de prueba de 30 días. Sin contratos largos ni letra chica.',
  },
]

const planes = [
  {
    nombre: 'Starter',
    precio: '$320.000',
    periodo: '/mes',
    descripcion: 'Para negocios que quieren arrancar con presencia profesional.',
    items: ['1 red social (Instagram o Facebook)', '12 publicaciones mensuales', 'Diseño de piezas incluido', 'Análisis mensual de métricas', 'Respuesta a comentarios'],
    color: '#6A8FC4',
  },
  {
    nombre: 'Pro',
    precio: '$550.000',
    periodo: '/mes',
    descripcion: 'Para negocios que quieren crecer con estrategia y contenido.',
    items: ['2 redes sociales', '20 publicaciones mensuales', 'Reels y stories incluidos', 'Análisis quincenal', 'Respuesta a DMs y comentarios', 'Informe de competencia'],
    color: '#C4846A',
    destacado: true,
  },
  {
    nombre: 'Full',
    precio: '$850.000',
    periodo: '/mes',
    descripcion: 'Estrategia integral con publicidad incluida.',
    items: ['Todas las redes sociales', 'Contenido diario', 'Meta Ads incluido', 'Análisis semanal', 'Gestión completa de comunidad', 'Copywriting + diseño'],
    color: '#8FC46A',
  },
]

export default function CommunityManagerRafaela() {
  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>Community Manager en Rafaela | JuanoConecta</title>
        <meta name="description" content="Community Manager profesional en Rafaela, Santa Fe. Gestión de redes sociales con IA aplicada. Planes desde $320.000/mes. Resultados medibles para negocios locales." />
        <link rel="canonical" href="https://juanoconecta.ar/community-manager-rafaela" />
        <meta property="og:title" content="Community Manager en Rafaela | JuanoConecta" />
        <meta property="og:description" content="Gestión profesional de redes sociales para negocios en Rafaela y Santa Fe, potenciada con IA." />
        <meta property="og:url" content="https://juanoconecta.ar/community-manager-rafaela" />
        <script type="application/ld+json">{JSON.stringify(LOCAL_BUSINESS_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(196,132,106,0.08) 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Rafaela · Santa Fe</span>
            <h1 className="text-4xl md:text-6xl font-bold text-crema mt-4 mb-6 leading-tight">
              Community Manager en Rafaela:<br />
              <span className="text-acento">qué es, cuánto cuesta y cómo contratar uno</span>
            </h1>
            <p className="text-crema/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              JuanoConecta es la propuesta de gestión de redes sociales para negocios en Rafaela y Santa Fe, con inteligencia artificial aplicada a cada parte del proceso.
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

      {/* ¿Qué hace un Community Manager? */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-crema mb-6">¿Qué hace un Community Manager?</h2>
            <p className="text-crema/55 leading-relaxed mb-6">
              Un <strong className="text-crema/80">Community Manager en Rafaela</strong> es el profesional encargado de gestionar la presencia digital de un negocio en redes sociales. No es solo alguien que "sube fotos" — es quien define la estrategia de contenido, mantiene la voz de la marca, interactúa con la comunidad y mide resultados para optimizar continuamente.
            </p>
            <ul className="space-y-3">
              {[
                'Planificación y publicación de contenido estratégico (posts, reels, stories)',
                'Respuesta profesional a comentarios, mensajes directos y reseñas',
                'Diseño de piezas visuales alineadas con la identidad de la marca',
                'Gestión y optimización de campañas de Meta Ads (Facebook e Instagram)',
                'Análisis de métricas: alcance, interacción, crecimiento y conversión',
                'Reportes mensuales con datos reales y recomendaciones accionables',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-crema/60 text-sm leading-relaxed">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold" style={{ background: 'rgba(196,132,106,0.15)', color: '#C4846A' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Precios */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Transparencia total</span>
            <h2 className="text-3xl md:text-4xl font-bold text-crema mt-4 mb-4">¿Cuánto cuesta un Community Manager en Rafaela?</h2>
            <p className="text-crema/35 max-w-lg mx-auto">Precios en pesos argentinos, sin sorpresas. El presupuesto de pauta de Meta Ads se acuerda por separado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {planes.map((plan, i) => (
              <motion.div key={plan.nombre}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-7 flex flex-col relative overflow-hidden"
                style={{
                  background: plan.destacado ? 'linear-gradient(135deg, rgba(196,132,106,0.12) 0%, rgba(196,132,106,0.04) 100%)' : 'rgba(255,255,255,0.025)',
                  border: plan.destacado ? '1px solid rgba(196,132,106,0.35)' : '1px solid rgba(255,255,255,0.07)',
                }}>
                {plan.destacado && (
                  <div className="absolute top-4 right-4 text-white text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: '#C4846A' }}>MÁS POPULAR</div>
                )}
                <div className="mb-5">
                  <div className="text-sm font-semibold mb-1" style={{ color: plan.color }}>{plan.nombre}</div>
                  <div className="text-3xl font-bold text-crema">{plan.precio}<span className="text-base font-normal text-crema/40">{plan.periodo}</span></div>
                  <p className="text-crema/40 text-xs mt-2 leading-relaxed">{plan.descripcion}</p>
                </div>
                <ul className="space-y-2.5 flex-1 mb-7">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-crema/55 text-sm">
                      <span className="flex-shrink-0 mt-0.5" style={{ color: plan.color }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="block text-center py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                  style={plan.destacado
                    ? { background: 'linear-gradient(135deg, #C4846A, #E8A882)', color: '#fff' }
                    : { background: 'rgba(255,255,255,0.06)', color: '#F5F0EB', border: '1px solid rgba(255,255,255,0.1)' }}>
                  Consultar plan {plan.nombre}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-crema mb-8">¿Qué resultados esperar?</h2>
          <div className="space-y-5">
            {[
              {
                cliente: 'Tatitos Pañalera',
                tag: 'Comercio · Rafaela',
                resultado: '+340% de alcance orgánico en 60 días',
                detalle: 'Contenido estratégico diario + Meta Ads segmentada. Aparece en el AI Overview de Google para "pañalera online Rafaela".',
                color: '#C4846A',
              },
              {
                cliente: 'Pura Vida Tatuajes',
                tag: 'Estudio · Rafaela',
                resultado: 'Turnos cerrados por Instagram desde el 1er mes',
                detalle: 'Perfil construido desde cero con identidad visual coherente y estrategia de contenido orientada a conversión.',
                color: '#6A8FC4',
              },
              {
                cliente: 'Alarcón Ecografías',
                tag: 'Salud · Rafaela',
                resultado: 'Presencia digital construida desde cero',
                detalle: 'Sin presencia previa en redes. En 3 meses lograron una imagen profesional consolidada y consultas orgánicas semanales.',
                color: '#8FC46A',
              },
            ].map((caso, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-1 h-full rounded-full flex-shrink-0 self-stretch min-h-[60px]" style={{ background: `linear-gradient(to bottom, ${caso.color}, transparent)` }} />
                <div>
                  <div className="font-bold text-crema text-sm">{caso.cliente}</div>
                  <div className="text-xs mb-1" style={{ color: caso.color + 'aa' }}>{caso.tag}</div>
                  <div className="font-semibold text-crema/80 text-base mb-1">{caso.resultado}</div>
                  <p className="text-crema/40 text-sm leading-relaxed">{caso.detalle}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-crema mb-4">¿Listo para crecer en Rafaela?</h2>
            <p className="text-crema/40 mb-8">Escribime por WhatsApp y en 15 minutos analizamos tu situación sin compromiso.</p>
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
