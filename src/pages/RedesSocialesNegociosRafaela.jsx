import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const WA = 'https://wa.me/5493492627811?text=Hola%20Juan%2C%20me%20interesa%20gestionar%20las%20redes%20sociales%20de%20mi%20negocio%20en%20Rafaela'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JuanoConecta',
  description: 'Gestión de redes sociales para negocios en Rafaela y Santa Fe. Estrategia digital con IA aplicada.',
  url: 'https://juanoconecta.ar/redes-sociales-para-negocios-rafaela',
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
      name: '¿Cuánto cuesta gestionar las redes sociales de un negocio en Rafaela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La gestión de redes sociales en Rafaela con JuanoConecta tiene planes desde $320.000 por mes (plan Starter, 2 redes, 12 publicaciones), hasta $850.000 por mes (plan Full, 4 redes, publicaciones ilimitadas con Meta Ads incluido). El precio depende de la cantidad de redes, la frecuencia de publicación y si se incluye publicidad paga.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué redes sociales son las mejores para un negocio en Rafaela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para la mayoría de los negocios en Rafaela, Instagram y Facebook son las más efectivas porque concentran la mayor parte del público local activo. TikTok suma si el rubro apunta a un público menor de 35 años. WhatsApp Business es esencial como canal de cierre. La combinación correcta depende del rubro y el perfil de tu cliente ideal.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo tarda en verse resultados con gestión de redes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los primeros resultados medibles en alcance y engagement se ven entre 30 y 60 días de gestión consistente. Para resultados en ventas directas desde redes, el plazo es de 2 a 4 meses dependiendo del rubro. Pura Vida Tatuajes en Rafaela empezó a cerrar turnos por Instagram desde el primer mes de trabajo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El servicio incluye diseño gráfico para las publicaciones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Todos los planes de gestión de redes sociales de JuanoConecta incluyen diseño gráfico de las publicaciones. Se trabaja con una identidad visual coherente con tu marca: paleta de colores, tipografías, formato de posts, stories y Reels. No necesitás contratar un diseñador por separado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia hay entre gestión profesional y manejar las redes yo mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La diferencia principal es la estrategia y la consistencia. Manejar las redes uno mismo generalmente resulta en publicaciones irregulares, sin análisis de métricas ni optimización. La gestión profesional incluye planificación mensual de contenido, análisis de qué funciona, diseño de calidad, copywriting persuasivo y seguimiento de resultados. En la práctica, un negocio con gestión profesional crece entre 3 y 5 veces más rápido que uno sin estrategia.',
      },
    },
  ],
}

const planes = [
  { nombre: 'Starter', precio: '$320.000', features: ['2 redes sociales', '12 publicaciones/mes', 'Diseño gráfico incluido', 'Reporte mensual'] },
  { nombre: 'Pro', precio: '$550.000', features: ['3 redes sociales', '20 publicaciones/mes', 'Diseño + Reels/Stories', 'Meta Ads básico', 'Reporte semanal'], destacado: true },
  { nombre: 'Full', precio: '$850.000', features: ['4 redes sociales', 'Publicaciones ilimitadas', 'Meta Ads avanzado', 'Branding integral', 'Soporte 7 días'] },
]

const faqs = faqSchema.mainEntity

export default function RedesSocialesNegociosRafaela() {
  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>Redes Sociales para Negocios en Rafaela: gestión, estrategia y precios | JuanoConecta</title>
        <meta name="description" content="Gestión profesional de redes sociales para negocios en Rafaela y Santa Fe. Planes desde $320.000/mes. Diseño, contenido y estrategia con IA aplicada. Consultá gratis." />
        <link rel="canonical" href="https://juanoconecta.ar/redes-sociales-para-negocios-rafaela" />
        <meta property="og:title" content="Redes Sociales para Negocios en Rafaela | JuanoConecta" />
        <meta property="og:description" content="Gestión profesional de redes sociales para negocios en Rafaela. Planes desde $320.000/mes con diseño, contenido y estrategia con IA." />
        <meta property="og:url" content="https://juanoconecta.ar/redes-sociales-para-negocios-rafaela" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(106,143,196,0.08) 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Rafaela · Santa Fe</span>
            <h1 className="text-4xl md:text-6xl font-bold text-crema mt-4 mb-6 leading-tight">
              Redes Sociales para Negocios en Rafaela: gestión, estrategia y precios
            </h1>
            <p className="text-crema/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Gestión profesional de Instagram, Facebook y más. Contenido que convierte, diseño coherente y métricas reales.
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
              <a href="#precios-redes" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-white/10 bg-white/5 text-crema hover:bg-white/10 transition-all duration-300">
                Ver precios
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-crema mb-6">¿Qué incluye la gestión de redes sociales para negocios en Rafaela?</h2>
            <div className="space-y-4 text-crema/55 leading-relaxed text-base">
              <p>Las <strong className="text-crema/80">redes sociales para negocios en Rafaela</strong> dejaron de ser opcionales. Hoy son el primer punto de contacto entre un cliente y tu marca. Antes de entrar a un local, antes de llamar, la gente mira Instagram — y lo que ve ahí define si da el siguiente paso o sigue buscando.</p>
              <p>La gestión profesional de redes incluye planificación mensual de contenido, diseño gráfico de cada publicación, copywriting persuasivo, publicación en los horarios de mayor alcance, gestión de comentarios y mensajes, y reporte mensual de métricas para optimizar continuamente.</p>
              <p>Usamos inteligencia artificial para analizar qué contenido funciona mejor para tu rubro, identificar tendencias locales en Rafaela y Santa Fe, y redactar textos que generan engagement real — no solo likes.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {[
                { label: 'Planificación de contenido', icon: '📅' },
                { label: 'Diseño gráfico incluido', icon: '🎨' },
                { label: 'Copywriting con IA', icon: '✍️' },
                { label: 'Gestión de comunidad', icon: '💬' },
                { label: 'Reels y Stories', icon: '🎬' },
                { label: 'Métricas mensuales', icon: '📊' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-4 flex items-center gap-3 text-sm text-crema/70"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios-redes" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Inversión</span>
            <h2 className="text-3xl md:text-4xl font-bold text-crema mt-4 mb-4">¿Cuánto cuesta gestionar redes en Rafaela?</h2>
            <p className="text-crema/35 max-w-md mx-auto">Sin contratos largos. Sin sorpresas. Empezás cuando querés.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planes.map((plan, i) => (
              <motion.div key={plan.nombre}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl p-7 flex flex-col"
                style={{
                  background: plan.destacado ? 'linear-gradient(135deg, rgba(196,132,106,0.15) 0%, rgba(196,132,106,0.05) 100%)' : 'rgba(255,255,255,0.025)',
                  border: plan.destacado ? '1px solid rgba(196,132,106,0.4)' : '1px solid rgba(255,255,255,0.07)',
                }}>
                {plan.destacado && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-acento text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-wider whitespace-nowrap">MÁS ELEGIDO</div>
                )}
                <h3 className="text-lg font-bold text-crema mb-1">{plan.nombre}</h3>
                <div className="text-3xl font-bold text-crema mb-6">{plan.precio}<span className="text-crema/35 text-sm font-normal">/mes</span></div>
                <ul className="space-y-2.5 flex-1 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-crema/65">
                      <svg className="w-4 h-4 text-acento flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={`${WA}%20-%20plan%20${plan.nombre}`} target="_blank" rel="noopener noreferrer"
                  className="block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300"
                  style={plan.destacado ? { background: 'linear-gradient(135deg, #C4846A, #E8A882)', color: '#fff' } : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F0EB' }}>
                  Quiero este plan
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Resultados reales</span>
            <h2 className="text-2xl md:text-3xl font-bold text-crema mt-4">Negocios de Rafaela que ya crecieron</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { stat: '+340%', label: 'alcance orgánico en 60 días', nombre: 'Tatitos Pañalera', rubro: 'Comercio minorista · Rafaela', desc: 'Contenido estratégico diario + Meta Ads segmentada. Triplicaron visibilidad y generaron ventas directas desde Instagram.', color: '#C4846A' },
              { stat: '100%', label: 'imagen profesional desde cero', nombre: 'Alarcón Ecografías', rubro: 'Profesional de la salud · Rafaela', desc: 'Partieron sin presencia digital. Hoy tienen identidad visual coherente en todas sus redes y una comunidad activa.', color: '#6A8FC4' },
            ].map((r) => (
              <motion.div key={r.nombre} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${r.color}15 0%, ${r.color}05 100%)`, border: `1px solid ${r.color}30` }}>
                <div className="text-4xl font-bold mb-1" style={{ color: r.color }}>{r.stat}</div>
                <p className="text-crema/40 text-xs mb-5">{r.label}</p>
                <div className="h-px mb-5" style={{ background: `${r.color}20` }} />
                <div className="font-bold text-crema text-sm mb-0.5">{r.nombre}</div>
                <div className="text-xs mb-3" style={{ color: `${r.color}99` }}>{r.rubro}</div>
                <p className="text-crema/40 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-bold text-crema mt-4">Preguntas frecuentes</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-crema mb-4">Empezá a crecer en redes hoy</h2>
            <p className="text-crema/40 mb-8 leading-relaxed">Tu negocio en Rafaela merece una presencia digital que trabaje para vos las 24 horas. Consultá sin compromiso.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C4846A, #E8A882)' }}>
                Hablar con Juan por WhatsApp
              </a>
              <a href="/sobre-juanoconecta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-white/10 bg-white/5 text-crema hover:bg-white/10 transition-all duration-300">
                Conocer más →
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
