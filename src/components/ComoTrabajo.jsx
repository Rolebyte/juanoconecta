import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pasos = [
  {
    num: '01',
    titulo: 'Analizo tu marca',
    descripcion: 'Auditoría completa de tu presencia digital, audiencia y competencia. Usamos herramientas de IA para extraer insights que a simple vista no se ven.',
    icono: '🔍',
    color: '#6A8FC4',
    items: ['Auditoría de redes sociales', 'Análisis de competencia', 'Definición de buyer persona'],
  },
  {
    num: '02',
    titulo: 'Diseño la estrategia',
    descripcion: 'Plan de contenido personalizado y calendario editorial basado en los datos del análisis. Sin templates genéricos — estrategia a medida.',
    icono: '🧠',
    color: '#C4846A',
    items: ['Plan de contenido 30 días', 'Calendario editorial', 'Estrategia de crecimiento'],
  },
  {
    num: '03',
    titulo: 'Ejecuto y optimizo',
    descripcion: 'Producción de contenido de calidad, gestión de comunidad activa y reportes mensuales con métricas reales que importen a tu negocio.',
    icono: '⚡',
    color: '#8FC46A',
    items: ['Contenido semanal', 'Gestión de comunidad', 'Reportes de resultados'],
  },
]

function PasoCard({ paso, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex-1 rounded-3xl p-8 group overflow-hidden"
      style={{
        background: 'rgba(10,10,10,0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {/* Glow de color en esquina superior */}
      <div
        className="absolute -top-10 -left-10 w-32 h-32 rounded-full blur-3xl opacity-25 group-hover:opacity-45 transition-opacity duration-500"
        style={{ background: paso.color }}
      />

      {/* Número grande de fondo */}
      <div
        className="absolute top-5 right-6 text-8xl font-black select-none leading-none pointer-events-none"
        style={{ color: `${paso.color}10` }}
      >
        {paso.num}
      </div>

      {/* Ícono */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.7 }}
        className="text-4xl mb-6"
      >
        {paso.icono}
      </motion.div>

      <div
        className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 tracking-wider"
        style={{ background: `${paso.color}20`, color: paso.color, border: `1px solid ${paso.color}30` }}
      >
        PASO {paso.num}
      </div>

      <h3 className="text-xl font-bold text-crema mb-3">{paso.titulo}</h3>
      <p className="text-crema/45 text-sm leading-relaxed mb-6">{paso.descripcion}</p>

      {/* Lista de ítems */}
      <ul className="space-y-2">
        {paso.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-crema/50">
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: paso.color }} />
            {item}
          </li>
        ))}
      </ul>

      {/* Borde inferior animado */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: `linear-gradient(to right, ${paso.color}, transparent)` }}
      />
    </motion.div>
  )
}

export default function ComoTrabajo() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="como-trabajo" className="py-28 px-6 relative overflow-hidden">

      {/* Particle Nebula de fondo — sin pointer-events-none para que el mouse active la animación */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/particlenebula-MFUp6OzxDSweXGeAXZ2BNOrz/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Fondo partículas"
          style={{ display: 'block', opacity: 0.55 }}
        />
        {/* Overlays con pointer-events-none para no bloquear clics en los cards */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.6) 100%)',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, transparent 0%, #0A0A0A 70%)',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-fondo pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{
          background: 'linear-gradient(to top, transparent 0%, #0A0A0A 100%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-acento text-sm font-semibold tracking-widest uppercase">Metodología</span>
          <h2 className="text-3xl md:text-5xl font-bold text-crema mt-4 mb-5">Cómo trabajo</h2>
          <p className="text-crema/35 max-w-md mx-auto">
            Un proceso claro, transparente y orientado a resultados — desde el análisis inicial hasta los reportes mensuales
          </p>
        </motion.div>

        {/* Pasos */}
        <div className="flex flex-col lg:flex-row gap-6 relative">

          {/* Línea conectora desktop */}
          <div className="hidden lg:flex absolute top-[72px] left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] items-center justify-center pointer-events-none z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
              className="h-px flex-1 origin-left"
              style={{ background: 'linear-gradient(to right, #6A8FC430, #C4846A80, #8FC46A30)' }}
            />
          </div>

          {pasos.map((paso, i) => (
            <PasoCard key={paso.num} paso={paso} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
