import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTilt } from '../hooks/useTilt'

const WA_BASE = 'https://wa.me/543492627811?text=Hola%20Juan%2C%20me%20interesa%20el%20%C3%A1rea%20de%20'

const servicios = [
  {
    area: 'IA para negocios',
    titulo: 'Usá la IA con criterio',
    descripcion: 'Formación y herramientas para que tu equipo aproveche la inteligencia artificial en el día a día.',
    items: ['Cursos y capacitaciones', 'Asistentes y automatizaciones', 'Contenido creado con IA'],
    icono: '🤖',
    color: '#3D7BFF',
    wa: WA_BASE + 'IA%20para%20negocios',
    destacado: true,
  },
  {
    area: 'Webs y web apps',
    titulo: 'Tu negocio online y funcionando',
    descripcion: 'Sitios rápidos y orientados a conversión, y aplicaciones web a medida construidas con IA.',
    items: ['Sitios institucionales', 'Landings y tiendas online', 'Web apps a medida'],
    icono: '🖥️',
    color: '#22D3EE',
    wa: WA_BASE + 'Webs%20y%20web%20apps',
  },
  {
    area: 'Diseño y marca',
    titulo: 'Una imagen que se recuerda',
    descripcion: 'Identidad visual coherente en cada punto de contacto con tus clientes.',
    items: ['Identidad visual y branding', 'Diseño gráfico para redes', 'Manual de marca'],
    icono: '🎨',
    color: '#8FB3FF',
    wa: WA_BASE + 'Dise%C3%B1o%20y%20marca',
  },
  {
    area: 'Redes y publicidad',
    titulo: 'Presencia que convierte',
    descripcion: 'Gestión de redes, contenido y campañas pagas con estrategia y métricas reales.',
    items: ['Community management', 'Estrategia y copywriting', 'Meta Ads'],
    icono: '🎯',
    color: '#22D3EE',
    wa: WA_BASE + 'Redes%20y%20publicidad',
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
          ? 'linear-gradient(135deg, rgba(61,123,255,0.15) 0%, rgba(61,123,255,0.05) 100%)'
          : 'rgba(255,255,255,0.025)',
        border: servicio.destacado
          ? '1px solid rgba(61,123,255,0.4)'
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

      {/* Badge para destacado */}
      {servicio.destacado && (
        <div className="absolute top-5 right-5 bg-acento text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider">
          NUEVO
        </div>
      )}

      {/* Ícono */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${servicio.color}15`, border: `1px solid ${servicio.color}25` }}
      >
        {servicio.icono}
      </div>

      <span className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: servicio.color }}>
        {servicio.area}
      </span>
      <h3 className="text-lg font-bold text-crema mb-2 group-hover:text-acento transition-colors duration-300">
        {servicio.titulo}
      </h3>
      <p className="text-crema/55 text-sm leading-relaxed mb-5">{servicio.descripcion}</p>
      <ul className="flex-1 mb-7 space-y-1.5">
        {servicio.items.map((item) => (
          <li key={item} className="text-crema/70 text-sm flex items-start gap-2">
            <span className="mt-2 w-1 h-1 rounded-full bg-teal flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={servicio.wa}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold group/link"
        style={{ color: servicio.destacado ? '#3D7BFF' : '#EAF0FF99' }}
      >
        <span className="group-hover/link:text-acento transition-colors">Consultar</span>
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
      <div className="absolute inset-0 bg-[#0B1020]" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(61,123,255,0.06) 0%, transparent 60%)',
      }} />
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #0B1020, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to top, #0B1020, transparent)' }} />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-teal text-sm font-semibold tracking-widest uppercase">Qué hacemos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-crema mt-4 mb-5">Cuatro áreas, una misma estrategia</h2>
          <p className="text-crema/35 max-w-md mx-auto leading-relaxed">
            Combinamos inteligencia artificial, desarrollo web, diseño y redes para que tu negocio crezca con una sola visión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
