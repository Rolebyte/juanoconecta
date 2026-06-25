import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const WA = 'https://wa.me/5493492627811?text=Hola%20Juan%2C%20me%20interesa%20hacer%20publicidad%20en%20Instagram%20para%20mi%20negocio%20en%20Rafaela'

const servicios = [
  { titulo: 'Community Management', descripcion: 'Gestión profesional de tus redes. Contenido, respuestas y crecimiento orgánico que fideliza.', icono: '💬', color: '#6A8FC4' },
  { titulo: 'Meta Ads', descripcion: 'Campañas en Facebook e Instagram optimizadas con IA. Más leads, menos desperdicio de presupuesto.', icono: '🎯', color: '#C4846A' },
  { titulo: 'Diseño Gráfico', descripcion: 'Piezas visuales para redes, historias, flyers y banners. Identidad visual coherente y profesional.', icono: '🎨', color: '#8FC46A' },
  { titulo: 'Web Design con IA', descripcion: 'Sitios web modernos, rápidos y orientados a conversión, potenciados con inteligencia artificial.', icono: '🖥️', color: '#C46AAD' },
  { titulo: 'Branding', descripcion: 'Construcción de identidad de marca: logo, paleta, tipografía y manual de marca completo.', icono: '✨', color: '#C4B86A' },
  { titulo: 'Copywriting + IA', descripcion: 'Textos persuasivos para redes, emails y landing pages. Escritura que convierte potenciada con IA.', icono: '✍️', color: '#6AC4B8' },
]

export default function PublicidadInstagramRafaela() {
  useEffect(() => {
    document.title = 'Publicidad en Instagram Rafaela | Meta Ads para negocios | JuanoConecta'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Publicidad en Instagram y Facebook para negocios en Rafaela, Santa Fe. Campañas Meta Ads optimizadas con IA. Más clientes, menos desperdicio de presupuesto.')
  }, [])

  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(143,196,106,0.07) 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Meta Ads · Rafaela · Santa Fe</span>
            <h1 className="text-4xl md:text-6xl font-bold text-crema mt-4 mb-6 leading-tight">
              Publicidad en Instagram Rafaela
            </h1>
            <p className="text-crema/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              Campañas en Instagram y Facebook para llegar exactamente a tus clientes en Rafaela. Sin desperdiciar presupuesto.
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

      {/* Texto SEO */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-crema mb-6">¿Por qué hacer publicidad en Instagram si tenés un negocio en Rafaela?</h2>
            <div className="space-y-4 text-crema/55 leading-relaxed text-base">
              <p>La <strong className="text-crema/80">publicidad en Instagram en Rafaela</strong> es hoy la herramienta más poderosa para que un negocio local llegue a nuevos clientes de forma rápida y medible. A diferencia del boca a boca o el cartel en la vidriera, una campaña bien configurada en Meta Ads puede mostrar tu negocio exactamente a las personas que viven en Rafaela, tienen interés en tu rubro y están listas para comprar.</p>
              <p>El problema es que muchos negocios en Rafaela y Santa Fe han probado "poner plata en Instagram" sin resultados. Y el motivo es siempre el mismo: impulsar una publicación sin estrategia no es lo mismo que armar una campaña de Meta Ads bien segmentada. La diferencia entre los dos puede ser el doble o el triple de resultados con el mismo presupuesto.</p>
              <p>En JuanoConecta usamos inteligencia artificial para analizar qué audiencias responden mejor para tu tipo de negocio en Rafaela, qué creatividades convierten más, en qué horarios mostrar los anuncios y cómo optimizar el gasto para que cada peso invertido trabaje al máximo. No se trata de gastar más — se trata de gastar mejor.</p>
              <p>El proceso empieza con una auditoría de tu situación actual: qué está haciendo tu competencia en Rafaela, quién es tu cliente ideal, qué mensaje necesita escuchar para tomar acción. Con eso definido, armamos la campaña, la ejecutamos y medimos resultados semana a semana para hacer ajustes continuos.</p>
              <p>Tatitos Pañalera lo vio en sus números: con una estrategia de contenido + Meta Ads segmentada por zona, lograron <strong className="text-crema/80">+340% de alcance orgánico en 60 días</strong> y ventas directas generadas desde Instagram. El presupuesto publicitario lo pone el cliente — yo cobro la gestión estratégica para que ese presupuesto rinda al máximo.</p>
              <p>Si tenés un negocio en Rafaela y querés empezar a ver resultados reales de la publicidad en Instagram, escribime. En 15 minutos te cuento exactamente qué haría para tu caso específico.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-acento text-sm font-semibold tracking-widest uppercase">Lo que hago</span>
            <h2 className="text-3xl md:text-4xl font-bold text-crema mt-4 mb-4">Servicios disponibles</h2>
            <p className="text-crema/35 max-w-md mx-auto">Publicidad y estrategia digital para negocios en Rafaela</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicios.map((s, i) => (
              <motion.div key={s.titulo} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl p-7 group relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5" style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>{s.icono}</div>
                <h3 className="text-lg font-bold text-crema mb-2">{s.titulo}</h3>
                <p className="text-crema/45 text-sm leading-relaxed mb-6">{s.descripcion}</p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-crema/50 hover:text-acento transition-colors">Consultar →</a>
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
            <span className="text-acento text-xs font-bold tracking-widest uppercase">Caso de éxito</span>
            <div className="text-6xl font-bold mt-4 mb-1" style={{ color: '#C4846A' }}>+340%</div>
            <p className="text-crema/50 text-sm mb-6">de alcance en 60 días con Meta Ads</p>
            <div className="h-px bg-white/5 mb-6" />
            <div className="flex items-start gap-3">
              <div className="w-1 h-14 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(to bottom, #C4846A, transparent)' }} />
              <div>
                <div className="text-crema font-bold text-base">🛍️ Tatitos Pañalera</div>
                <div className="text-xs font-medium mb-2 mt-0.5" style={{ color: '#C4846Aaa' }}>Comercio minorista · Rafaela</div>
                <p className="text-crema/35 text-sm leading-relaxed">Contenido estratégico diario + Meta Ads segmentada por zona. En dos meses triplicaron su visibilidad, generaron ventas directas y consolidaron su posicionamiento en el rubro.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-crema mb-4">¿Querés publicidad que realmente venda?</h2>
            <p className="text-crema/40 mb-8">Hablemos y te cuento qué haría para tu negocio en Rafaela. Sin compromiso.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #C4846A, #E8A882)' }}>
              Hablar con Juan por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
