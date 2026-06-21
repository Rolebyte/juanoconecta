import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTilt } from '../hooks/useTilt'

const WA_AUDITORIA = 'https://wa.me/543492627811?text=Hola%20Juan%2C%20quiero%20la%20Auditoría%20IA%20de%20mi%20perfil'

const TEAL = '#00C9A7'

const productoGratis = {
  nombre: '5 Prompts para Arrancar con IA',
  descripcion: 'No sabés por dónde empezar con la IA. Estos 5 prompts te dan el punto de partida exacto para generar contenido real en menos de 10 minutos — sin experiencia previa.',
  badge: 'GRATIS',
  badgeStyle: { background: 'rgba(0,201,167,0.15)', color: '#00C9A7', border: '1px solid rgba(0,201,167,0.4)' },
  precioARS: null,
  precioUSD: null,
  tipo: 'gratis',
  emoji: '🎁',
  includes: ['5 prompts listos para usar hoy', 'Funciona en ChatGPT, Claude y Gemini', 'Resultados desde el primer uso', 'Sin tarjeta. Sin registro. 100% gratis'],
  color: TEAL,
}

const productos = [
  {
    nombre: 'Kit Contenido IA',
    descripcion: 'Publicás, pero el algoritmo no te acompaña. El problema no es tu producto — es cómo lo comunicás. Estos 30 prompts te dan el lenguaje exacto para conectar con tu audiencia y generar contenido que vende.',
    badge: 'MÁS VENDIDO',
    badgeStyle: { background: 'rgba(196,132,106,0.2)', color: '#C4846A', border: '1px solid rgba(196,132,106,0.4)' },
    precioARS: '$8.000 ARS',
    precioUSD: '$7 USD',
    btnARS: 'https://mpago.la/327WvYV',
    btnUSD: 'https://juano1.gumroad.com/l/mmpvaw',
    tipo: 'digital',
    emoji: '⚡',
    includes: ['30 prompts probados en cuentas reales', 'Guía de implementación paso a paso', 'Ejemplos aplicados por industria', 'Acceso a actualizaciones futuras'],
    compatible: ['ChatGPT', 'Claude', 'Gemini', 'Grok'],
    color: '#C4846A',
  },
  {
    nombre: 'Prompt Power Pack',
    descripcion: 'Manejar múltiples cuentas sin un sistema claro consume tiempo, energía y resultados. Este pack te da la estructura para producir más en menos tiempo — con calidad constante y sin depender de la inspiración.',
    badge: null,
    precioARS: '$25.000 ARS',
    precioUSD: '$22 USD',
    btnARS: 'https://mpago.la/2ibu57G',
    btnUSD: 'https://juano1.gumroad.com/l/rokkgk',
    tipo: 'digital',
    emoji: '🚀',
    includes: ['90 prompts para feed, historias y reels', 'Templates de copy listos para usar', 'Banco de ganchos de alto impacto', 'Framework de estrategia de contenido'],
    compatible: ['ChatGPT', 'Claude', 'Gemini', 'Grok'],
    color: '#6A8FC4',
  },
  {
    nombre: 'Auditoría IA de tu perfil',
    descripcion: 'Invertís tiempo en redes, pero los números no reflejan ese esfuerzo. Con esta auditoría identificamos con precisión los puntos de fuga en tu estrategia y te entregamos un plan concreto para revertirlo.',
    badge: 'PREMIUM',
    badgeStyle: { background: 'rgba(234,179,8,0.15)', color: '#EAB308', border: '1px solid rgba(234,179,8,0.3)' },
    precioARS: '$45.000 ARS',
    precioUSD: '$40 USD',
    btnWA: WA_AUDITORIA,
    tipo: 'servicio',
    emoji: '🏆',
    includes: ['Análisis completo del perfil con IA', 'Informe PDF con diagnóstico detallado', 'Sesión 1:1 de 30 min con Juan', 'Plan de acción para los próximos 30 días'],
    auditai: true,
    color: '#EAB308',
    destacado: true,
  },
]

function ProductoCard({ producto, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const tilt = useTilt(8)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="relative rounded-3xl p-8 flex flex-col group overflow-hidden h-full"
      style={{
        background: producto.destacado
          ? 'linear-gradient(160deg, rgba(234,179,8,0.08) 0%, rgba(234,179,8,0.02) 100%)'
          : 'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        border: producto.destacado
          ? '1px solid rgba(234,179,8,0.25)'
          : '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Glow */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity duration-500"
        style={{ background: producto.color }}
      />

      {/* Badge */}
      {producto.badge && (
        <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-5" style={producto.badgeStyle}>
          {producto.badge}
        </span>
      )}

      {/* Emoji */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
        className="text-4xl mb-5"
      >
        {producto.emoji}
      </motion.div>

      <h3 className="text-xl font-bold text-crema mb-3">{producto.nombre}</h3>
      <p className="text-crema/45 text-sm leading-relaxed mb-6">{producto.descripcion}</p>

      {/* Qué incluye */}
      <ul className="space-y-2 mb-7 flex-1">
        {producto.includes.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-crema/50">
            <svg className="w-4 h-4 flex-shrink-0" style={{ color: producto.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      {/* AuditAI block con neón */}
      {producto.auditai && (
        <motion.div
          animate={{ boxShadow: ['0 0 8px rgba(234,179,8,0.3), 0 0 20px rgba(234,179,8,0.1)', '0 0 16px rgba(234,179,8,0.55), 0 0 40px rgba(234,179,8,0.2)', '0 0 8px rgba(234,179,8,0.3), 0 0 20px rgba(234,179,8,0.1)'] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-xl px-4 py-3 mb-6"
          style={{
            background: 'linear-gradient(135deg, rgba(234,179,8,0.07) 0%, rgba(196,132,106,0.05) 100%)',
            border: '1px solid rgba(234,179,8,0.35)',
          }}
        >
          <div className="flex items-center gap-3">
            {/* Isologo AuditAI — reemplazá este SVG con tu imagen real */}
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-black text-xs tracking-tighter"
              style={{
                background: 'linear-gradient(135deg, rgba(234,179,8,0.2), rgba(196,132,106,0.15))',
                border: '1px solid rgba(234,179,8,0.4)',
                color: '#EAB308',
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '-0.05em',
              }}
            >
              A·I
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-crema text-xs font-bold">Potenciado con AuditAI</span>
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded-full tracking-wider"
                  style={{ background: 'rgba(234,179,8,0.18)', color: '#EAB308' }}
                >
                  EXCLUSIVO
                </span>
              </div>
              <p className="text-crema/35 text-[11px] mt-0.5 leading-snug">Datos reales, métricas verificables — sin suposiciones ni estimaciones genéricas</p>
            </div>
          </div>
          {/* Powered by ligado al bloque */}
          <div className="flex items-center gap-2 mt-3 pt-3" style={{ borderTop: '1px solid rgba(234,179,8,0.12)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse flex-shrink-0" />
            <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(234,179,8,0.4)' }}>
              Powered by JuanoConecta
            </span>
          </div>
        </motion.div>
      )}

      {/* Compatible con — solo para los digitales */}
      {producto.compatible && !producto.auditai && (
        <div className="mb-6">
          <p className="text-crema/25 text-[10px] tracking-widest uppercase mb-2">Compatible con</p>
          <div className="flex flex-wrap gap-1.5">
            {producto.compatible.map((ia) => (
              <span
                key={ia}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(245,240,235,0.5)',
                }}
              >
                {ia}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Precios */}
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-crema font-bold text-lg">{producto.precioARS}</span>
        <span className="text-crema/25 text-sm">|</span>
        <span className="font-bold" style={{ color: producto.color }}>{producto.precioUSD}</span>
      </div>

      {/* Botones */}
      {producto.tipo === 'digital' ? (
        <div className="flex gap-3">
          <a
            href={producto.btnARS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 text-crema/70 text-sm font-semibold rounded-xl text-center transition-all duration-200 hover:text-crema"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Pagar ARS
          </a>
          <a
            href={producto.btnUSD}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 text-white text-sm font-semibold rounded-xl text-center transition-all duration-200 hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${producto.color}, ${producto.color}cc)` }}
          >
            Pagar USD
          </a>
        </div>
      ) : (
        <a
          href={producto.btnWA}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 text-white font-semibold rounded-xl text-center flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{ background: 'linear-gradient(135deg, #25D366, #1da851)' }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Quiero la Auditoría IA
        </a>
      )}
    </div>
    </motion.div>
  )
}

function ProductoGratisCard({ onOpenPopup }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const tilt = useTilt(8)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0, ease: [0.16, 1, 0.3, 1] }}
      className="md:col-span-3"
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="relative rounded-3xl p-8 group overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(0,201,167,0.08) 0%, rgba(0,201,167,0.02) 100%)',
          border: '1px solid rgba(0,201,167,0.25)',
        }}
      >
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ background: TEAL }} />

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Izquierda */}
          <div className="flex-1">
            <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4" style={productoGratis.badgeStyle}>
              {productoGratis.badge}
            </span>
            <div className="flex items-center gap-3 mb-3">
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="text-4xl"
              >
                {productoGratis.emoji}
              </motion.span>
              <h3 className="text-xl font-bold text-crema">{productoGratis.nombre}</h3>
            </div>
            <p className="text-crema/45 text-sm leading-relaxed">{productoGratis.descripcion}</p>
          </div>

          {/* Centro — qué incluye */}
          <ul className="flex-1 space-y-2">
            {productoGratis.includes.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-crema/50">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          {/* Derecha — CTA */}
          <div className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenPopup}
              className="px-10 py-4 rounded-2xl font-bold text-sm text-white transition-all duration-200"
              style={{ background: `linear-gradient(135deg, ${TEAL}, #00a88e)`, boxShadow: `0 0 30px rgba(0,201,167,0.25)` }}
            >
              Descargar gratis →
            </motion.button>
            <p className="text-crema/25 text-[11px] text-center mt-2">Sin tarjeta. Sin compromiso.</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Tienda({ onOpenPopup }) {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="tienda" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-acento text-sm font-semibold tracking-widest uppercase">Recursos digitales</span>
          <h2 className="text-3xl md:text-5xl font-bold text-crema mt-4 mb-5">Lo que uso cada día<br />para hacer crecer marcas</h2>
          <p className="text-crema/35 max-w-lg mx-auto">
            Metodología probada en marcas argentinas y de latinoamérica, aplicando recursos que traccionan desde el primer día — con o sin experiencia previa en IA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductoGratisCard onOpenPopup={onOpenPopup} />
          {productos.map((p, i) => (
            <ProductoCard key={p.nombre} producto={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
