import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const casos = [
  {
    cliente: 'Tatitos Pañalera',
    rubro: 'Comercio minorista',
    resultado: '+340%',
    descripcion: 'de alcance orgánico en 60 días',
    detalle: 'Contenido estratégico diario + Meta Ads segmentada por zona. En dos meses triplicaron su visibilidad, generaron ventas directas y consolidaron su posicionamiento en el rubro.',
    emoji: '🛍️',
    color: '#C4846A',
    metrica: '340',
    sufijo: '%',
    prefijo: '+',
  },
  {
    cliente: 'Alarcón Ecografías',
    rubro: 'Profesional de la salud',
    resultado: '100%',
    descripcion: 'imagen profesional construida desde cero',
    detalle: 'Partieron sin presencia digital. Creamos su identidad visual, perfiles, contenido y estrategia completa. Hoy tienen una imagen profesional y consistente en redes.',
    emoji: '🏥',
    color: '#6A8FC4',
    metrica: '100',
    sufijo: '%',
    prefijo: '',
  },
  {
    cliente: 'Pura Vida Tatuajes',
    rubro: 'Estudio de tatuajes',
    resultado: '1er mes',
    descripcion: 'ventas cerradas, turnos agendados y alcance expandido',
    detalle: 'Desde el primer mes generaban consultas reales, cerraban turnos por Instagram y expandían su alcance orgánico de forma sostenida.',
    emoji: '🎨',
    color: '#8FC46A',
    metrica: null,
    sufijo: '',
    prefijo: '',
  },
]

function AnimatedCounter({ target, prefix = '', suffix = '', inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || target === null) return
    const num = parseInt(target)
    if (isNaN(num)) return
    const duration = 1800
    const steps = 60
    const increment = num / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + increment, num)
      setCount(Math.floor(current))
      if (current >= num) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  if (target === null) return null
  return <>{prefix}{count}{suffix}</>
}

function CasoCard({ caso, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-3xl p-8 overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Glow de color en la esquina */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"
        style={{ background: caso.color }}
      />

      {/* Emoji grande flotando */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
        className="text-5xl mb-6"
      >
        {caso.emoji}
      </motion.div>

      {/* Número grande */}
      <div
        className="text-6xl md:text-7xl font-bold mb-1 leading-none"
        style={{ color: caso.color }}
      >
        {caso.metrica !== null ? (
          <AnimatedCounter
            target={caso.metrica}
            prefix={caso.prefijo}
            suffix={caso.sufijo}
            inView={inView}
          />
        ) : (
          <span className="text-5xl md:text-6xl">{caso.resultado}</span>
        )}
      </div>

      <p className="text-crema/50 text-sm mb-6">{caso.descripcion}</p>

      <div className="h-px bg-white/5 mb-5" />

      <div className="flex items-start gap-3">
        <div
          className="w-1 h-12 rounded-full flex-shrink-0 mt-1"
          style={{ background: `linear-gradient(to bottom, ${caso.color}, transparent)` }}
        />
        <div>
          <div className="text-crema font-bold text-base">{caso.cliente}</div>
          <div className="text-[11px] font-medium mb-2 mt-0.5" style={{ color: caso.color + 'aa' }}>{caso.rubro}</div>
          <p className="text-crema/35 text-sm leading-relaxed">{caso.detalle}</p>
        </div>
      </div>

      {/* Borde inferior de color al hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: `linear-gradient(to right, ${caso.color}, transparent)` }}
      />
    </motion.div>
  )
}

export default function Resultados() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="resultados" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0E0E0E]" />
      {/* Grilla de puntos */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C4846A 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Gradiente acento centro-abajo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(196,132,106,0.12) 0%, transparent 60%)',
        }}
      />
      {/* Fade superior para fusionar con sección anterior */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #0A0A0A, transparent)' }} />

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-acento text-sm font-semibold tracking-widest uppercase">Casos reales</span>
          <h2 className="text-3xl md:text-5xl font-bold text-crema mt-4 mb-5">Lo que pasa cuando<br />la estrategia es correcta</h2>
          <p className="text-crema/35 max-w-lg mx-auto">
            Estos son resultados reales de clientes reales en Rafaela. Sin promesas vacías — cada número tiene una historia de trabajo detrás.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {casos.map((c, i) => (
            <CasoCard key={c.cliente} caso={c} index={i} />
          ))}
        </div>

        {/* Barra de confianza */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(196,132,106,0.08) 0%, rgba(196,132,106,0.03) 100%)',
            border: '1px solid rgba(196,132,106,0.2)',
          }}
        >
          <p className="text-crema/50 text-base mb-6">¿Querés resultados como estos para tu negocio?</p>
          <a
            href="https://wa.me/543492627811?text=Hola%20Juan%2C%20quiero%20resultados%20como%20los%20de%20tus%20clientes%20para%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #C4846A, #E8A882)' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Empezar mi estrategia
          </a>
        </motion.div>
      </div>
    </section>
  )
}
