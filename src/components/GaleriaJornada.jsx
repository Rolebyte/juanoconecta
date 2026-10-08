import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Fotos de la jornada "Emprender con IA" en el CCIRR (7/10/2026). Se ven en /capacitaciones.
const FOTOS = [
  { src: '/img/capacitaciones/ccirr-grupo.webp', alt: 'Juan Gallino con participantes y organizadores de la capacitación Emprender con IA en el CCIRR', clase: 'md:col-span-2 md:row-span-2' },
  { src: '/img/capacitaciones/ccirr-sala.webp', alt: 'Apertura de la capacitación en el salón del Centro Comercial e Industrial de Rafaela', clase: '' },
  { src: '/img/capacitaciones/ccirr-participantes.webp', alt: 'Participantes de la capacitación escuchando la presentación', clase: '' },
]

export default function GaleriaJornada() {
  const [abierta, setAbierta] = useState(null)

  useEffect(() => {
    if (abierta === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setAbierta(null)
      if (e.key === 'ArrowRight') setAbierta((i) => (i + 1) % FOTOS.length)
      if (e.key === 'ArrowLeft') setAbierta((i) => (i - 1 + FOTOS.length) % FOTOS.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [abierta])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-[230px_230px] lg:grid-rows-[290px_290px] gap-4">
        {FOTOS.map((f, i) => (
          <motion.button
            key={f.src}
            type="button"
            onClick={() => setAbierta(i)}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 aspect-[3/2] md:aspect-auto ${i === 0 ? 'sm:col-span-2' : ''} ${f.clase}`}
            aria-label={`Ampliar foto: ${f.alt}`}
          >
            <img src={f.src} alt={f.alt} loading="lazy" width="1600" height="1067"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" aria-hidden>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" /></svg>
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {abierta !== null && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setAbierta(null)}
            role="dialog" aria-modal="true" aria-label="Foto ampliada"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={abierta}
                src={FOTOS[abierta].src}
                alt={FOTOS[abierta].alt}
                className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => { e.stopPropagation(); setAbierta((abierta + 1) % FOTOS.length) }}
              />
            </AnimatePresence>
            <button type="button" onClick={() => setAbierta(null)} aria-label="Cerrar"
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white text-xl flex items-center justify-center hover:bg-white/20">×</button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {FOTOS.map((f, i) => (
                <button key={f.src} type="button" aria-label={`Ver foto ${i + 1}`}
                  onClick={(e) => { e.stopPropagation(); setAbierta(i) }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === abierta ? 'w-6 bg-white' : 'w-2 bg-white/40'}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
