import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Importar fotos (placeholder si no existen)
// Si colocás tus imágenes en /src/assets/ se usarán automáticamente
const heroImg = '/hero.png'
const foto1 = null
const foto2 = null
const foto3 = null

const logros = [
  { num: '+20', label: 'Clientes atendidos', icon: '🏆' },
  { num: '+5', label: 'Años capacitándome', icon: '📚' },
  { num: '3', label: 'Años de trayectoria', icon: '⚡' },
  { num: '6', label: 'Servicios digitales', icon: '🎯' },
]

const toolGroups = [
  {
    categoria: 'IA Generativa',
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Grok', 'Midjourney', 'DALL·E 3', 'Sora', 'ElevenLabs', 'Runway ML', 'Kling AI'],
  },
  {
    categoria: 'Marketing & Ads',
    tools: ['Meta Ads', 'Google Ads', 'Meta Business Suite', 'Ads Manager', 'Pixel de Meta'],
  },
  {
    categoria: 'Diseño & Video',
    tools: ['Canva Pro', 'Adobe Express', 'CapCut', 'Spline', 'Figma', 'Remove.bg'],
  },
  {
    categoria: 'Productividad & Automatización',
    tools: ['Notion AI', 'Make.com', 'Zapier', 'Airtable', 'Trello', 'Buffer', 'Later'],
  },
]

// Imagen placeholder con gradiente cuando no hay foto real
function FotoPlaceholder({ label, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #141414 100%)',
        border: '1px solid rgba(196,132,106,0.15)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 30%, rgba(196,132,106,0.15) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="w-16 h-16 rounded-full bg-acento/20 border border-acento/30 flex items-center justify-center">
          <svg className="w-8 h-8 text-acento/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <span className="text-crema/20 text-xs">{label}</span>
      </div>
    </motion.div>
  )
}

function FotoReal({ src, alt, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{ border: '1px solid rgba(196,132,106,0.15)' }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 50%)' }}
      />
    </motion.div>
  )
}

function Foto({ src, alt, label, className, delay }) {
  if (src) return <FotoReal src={src} alt={alt} className={className} delay={delay} />
  return <FotoPlaceholder label={label} className={className} delay={delay} />
}

export default function SobreMi() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="sobre-mi" className="py-24 px-6 relative overflow-hidden">
      {/* Orbe de fondo */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-acento/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-acento text-sm font-semibold tracking-widest uppercase">El equipo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-crema mt-3">Sobre mí</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Mosaico de fotos ── */}
          <div className="relative">
            {/* Foto principal grande */}
            <Foto
              src={heroImg}
              alt="Juan Gallino - JuanoConecta"
              label="Foto principal"
              className="w-full h-[420px]"
              delay={0}
            />

            {/* Foto secundaria superpuesta abajo derecha */}
            <Foto
              src={foto1}
              alt="Juan trabajando"
              label="foto1.png"
              className="absolute -bottom-8 -right-6 w-44 h-44 md:w-52 md:h-52 shadow-2xl"
              delay={0.15}
            />

            {/* Foto terciaria superpuesta arriba derecha */}
            <Foto
              src={foto2}
              alt="Juan en acción"
              label="foto2.png"
              className="absolute -top-6 -right-4 w-32 h-32 md:w-40 md:h-40 shadow-xl"
              delay={0.3}
            />

          </div>

          {/* ── Texto y datos ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-crema mb-2">
              Hola, soy <span className="text-acento">Juan</span> 👋
            </h3>
            <p className="text-crema/50 text-base leading-relaxed mb-6">
              Especialista en marketing digital con IA, basado en Rafaela, Santa Fe. Trabajo con marcas y emprendedores para que su presencia en redes no sea solo linda, sino que venda.
            </p>
            <p className="text-crema/40 text-base leading-relaxed mb-10">
              Combiné años de experiencia en gestión de comunidades con las últimas herramientas de inteligencia artificial para crear estrategias que generan resultados reales y medibles.
            </p>

            {/* Logros en grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {logros.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="rounded-xl p-4 border"
                  style={{
                    background: 'rgba(196,132,106,0.05)',
                    borderColor: 'rgba(196,132,106,0.15)',
                  }}
                >
                  <div className="text-xl mb-1">{l.icon}</div>
                  <div className="text-2xl font-bold text-acento">{l.num}</div>
                  <div className="text-crema/40 text-xs mt-0.5">{l.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Herramientas por categoría */}
            <div className="space-y-4">
              <p className="text-crema/30 text-xs tracking-widest uppercase">Herramientas que uso</p>
              {toolGroups.map((grupo, gi) => (
                <div key={grupo.categoria}>
                  <p className="text-acento/70 text-[11px] font-semibold tracking-wider uppercase mb-2">
                    {grupo.categoria}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {grupo.tools.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.03 * i + 0.05 * gi }}
                        className="px-3 py-1.5 rounded-full text-xs font-medium text-crema/55 border border-white/8 bg-white/3 hover:border-acento/40 hover:text-acento transition-all cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Foto 3 al fondo como banner */}
        {foto3 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 relative rounded-3xl overflow-hidden h-48 md:h-64"
            style={{ border: '1px solid rgba(196,132,106,0.15)' }}
          >
            <img src={foto3} alt="JuanoConecta en acción" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.7) 0%, transparent 50%, rgba(10,10,10,0.7) 100%)' }} />
          </motion.div>
        )}
      </div>
    </section>
  )
}
