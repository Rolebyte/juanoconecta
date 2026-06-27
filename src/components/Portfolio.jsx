import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { projects } from '../data/portfolio'

function Modal({ project, onClose }) {
  const [iframeError, setIframeError] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const showFallback = !project.live || iframeError

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-[#111] rounded-2xl overflow-hidden flex flex-col"
          style={{ height: '80vh', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <span className="text-crema/40 text-sm font-mono truncate max-w-xs">
                {project.url || project.name}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crema/40 hover:text-acento text-xs font-medium transition-colors"
                >
                  Abrir en nueva pestaña ↗
                </a>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-crema/50 hover:text-crema flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 relative overflow-hidden">
            {showFallback ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8 text-center"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.color}18 0%, transparent 60%)` }}>
                <div className="text-5xl">🚧</div>
                <div>
                  <p className="text-crema font-bold text-xl mb-2">{project.name}</p>
                  <p className="text-crema/40 text-sm max-w-sm">
                    {project.live
                      ? 'El sitio no permite previsualizarse en iframe. Abrilo en una nueva pestaña.'
                      : 'Este proyecto está actualmente en desarrollo.'}
                  </p>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white transition-all hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)` }}
                  >
                    Abrir {project.name} ↗
                  </a>
                )}
              </div>
            ) : (
              <iframe
                src={project.url}
                title={project.name}
                className="w-full h-full border-0"
                onError={() => setIframeError(true)}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ProjectCard({ project, index, onClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group relative rounded-xl p-7 cursor-pointer flex flex-col gap-5 transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      whileHover={{ y: -3, borderColor: 'rgba(196,132,106,0.4)' }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 0% 0%, ${project.color}12 0%, transparent 60%)` }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: project.color + 'bb' }}>
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-crema mt-1 group-hover:text-acento transition-colors duration-300">
            {project.name}
          </h3>
        </div>
        <span className={`flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider ${
          project.live
            ? 'bg-acento/20 text-acento border border-acento/30'
            : 'bg-white/5 text-crema/30 border border-white/10'
        }`}>
          {project.live ? 'LIVE' : 'EN DESARROLLO'}
        </span>
      </div>

      {/* Description */}
      <p className="text-crema/45 text-sm leading-relaxed flex-1">{project.desc}</p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2">
        {project.highlights.map((h) => (
          <span key={h} className="text-xs px-3 py-1 rounded-full font-medium"
            style={{ background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}30` }}>
            ✦ {h}
          </span>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11px] text-crema/25 font-mono">{tag}</span>
        ))}
      </div>

      {/* Click hint */}
      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-crema/30 text-xs flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        Ver sitio
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [selected, setSelected] = useState(null)
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="portfolio" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(196,132,106,0.05) 0%, transparent 60%)',
      }} />
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #0A0A0A, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-acento text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-crema mt-4 mb-5">
            Proyectos que hablan solos
          </h2>
          <p className="text-crema/35 max-w-md mx-auto leading-relaxed">
            Hacé click para interactuar con el sitio real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
