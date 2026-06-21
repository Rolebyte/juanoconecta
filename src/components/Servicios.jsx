import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTilt } from '../hooks/useTilt'

const WA_BASE = 'https://wa.me/543492627811?text=Hola%20Juan%2C%20me%20interesa%20el%20servicio%20de%20'

const servicios = [
  {
    titulo: 'Community Management',
    descripcion: 'Gestión profesional de tus redes. Contenido, respuestas y crecimiento orgánico que fideliza.',
    icono: '💬',
    color: '#6A8FC4',
    wa: WA_BASE + 'Community%20Management',
  },
  {
    titulo: 'Meta Ads',
    descripcion: 'Campañas en Facebook e Instagram optimizadas con IA. Más leads, menos desperdicio de presupuesto.',
    icono: '🎯',
    color: '#C4846A',
    wa: WA_BASE + 'Meta%20Ads',
    destacado: true,
  },
  {
    titulo: 'Diseño Gráfico',
    descripcion: 'Piezas visuales para redes, historias, flyers y banners. Identidad visual coherente y profesional.',
    icono: '🎨',
    color: '#8FC46A',
    wa: WA_BASE + 'Diseño%20Gráfico',
  },
  {
    titulo: 'Web Design con IA',
    descripcion: 'Sitios web modernos, rápidos y orientados a conversión, potenciados con inteligencia artificial.',
    icono: '🖥️',
    color: '#C46AAD',
    wa: WA_BASE + 'Web%20Design%20con%20IA',
  },
  {
    titulo: 'Branding',
    descripcion: 'Construcción de identidad de marca: logo, paleta, tipografía y manual de marca completo.',
    icono: '✨',
    color: '#C4B86A',
    wa: WA_BASE + 'Branding',
  },
  {
    titulo: 'Copywriting + IA',
    descripcion: 'Textos persuasivos para redes, emails y landing pages. Escritura que convierte potenciada con IA.',
    icono: '✍️',
    color: '#6AC4B8',
    wa: WA_BASE + 'Copywriting%20con%20IA',
  },
]

function ServicioCard({ servicio, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const tilt = useTilt(10)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`relative rounded-2xl p-7 flex flex-col group overflow-hidden transition-colors duration-500 ${
        servicio.destacado ? 'row-span-1' : ''
      }`}
      style={{
        background: servicio.destacado
          ? 'linear-gradient(135deg, rgba(196,132,106,0.15) 0%, rgba(196,132,106,0.05) 100%)'
          : 'rgba(255,255,255,0.025)',
        border: servicio.destacado
          ? '1px solid rgba(196,132,106,0.4)'
          : '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Glow de color en hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 0% 0%, ${servicio.color}15 0%, transparent 60%)`,
        }}
      />

      {/* Badge "popular" para destacado */}
      {servicio.destacado && (
        <div className="absolute top-5 right-5 bg-acento text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider">
          POPULAR
        </div>
      )}

      {/* Ícono */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${servicio.color}15`, border: `1px solid ${servicio.color}25` }}
      >
        {servicio.icono}
      </div>

      <h3 className="text-lg font-bold text-crema mb-2 group-hover:text-acento transition-colors duration-300">
        {servicio.titulo}
      </h3>
      <p className="text-crema/45 text-sm leading-relaxed flex-1 mb-7">{servicio.descripcion}</p>

      <a
        href={servicio.wa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold group/link"
        style={{ color: servicio.destacado ? '#C4846A' : '#F5F0EB99' }}
      >
        <span className="group-hover/link:text-acento transition-colors">Consultar precio</span>
        <motion.svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </motion.svg>
      </a>

      {/* Línea inferior de color */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: `linear-gradient(to right, ${servicio.color}80, transparent)` }}
      />
    </div>
    </motion.div>
  )
}

export default function Servicios() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="servicios" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(196,132,106,0.06) 0%, transparent 60%)',
      }} />
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #0A0A0A, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-acento text-sm font-semibold tracking-widest uppercase">Lo que hago</span>
          <h2 className="text-3xl md:text-5xl font-bold text-crema mt-4 mb-5">Servicios</h2>
          <p className="text-crema/35 max-w-md mx-auto leading-relaxed">
            Soluciones digitales integrales para hacer crecer tu negocio en el mundo online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicios.map((s, i) => (
            <ServicioCard key={s.titulo} servicio={s} index={i} />
          ))}
        </div>

        {/* CTA central */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-crema/30 text-sm mb-5">¿No sabés qué servicio necesitás?</p>
          <a
            href="https://wa.me/543492627811?text=Hola%20Juan%2C%20no%20sé%20qué%20servicio%20necesito%2C%20¿podemos%20hablar?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-acento hover:text-acento/80 font-semibold text-sm transition-colors"
          >
            Hablemos y te oriento gratis
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
