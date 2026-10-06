import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { valor: 20, pre: '+', suf: '', label: 'Marcas acompañadas' },
  { valor: 340, pre: '+', suf: '%', label: 'Alcance orgánico promedio' },
  { valor: 3, pre: '', suf: '', label: 'Años de trayectoria' },
  { valor: 4, pre: '', suf: '', label: 'Áreas de servicio' },
]

function Contador({ valor, pre, suf }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(valor)
  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame
    const start = performance.now()
    const dur = 1600
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1)
      setN(Math.round(valor * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, valor])
  return <span ref={ref} className="tabular-nums">{pre}{n}{suf}</span>
}

export default function StatsNx() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#121A30] to-[#0B1020] grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`p-8 md:p-10 text-center ${i % 2 ? 'border-l border-white/10' : ''} ${i > 1 ? 'border-t lg:border-t-0 border-white/10' : ''} ${i === 2 ? 'lg:border-l' : ''}`}>
            <div className="text-4xl md:text-6xl font-bold text-crema">
              <Contador {...s} />
            </div>
            <div className="text-crema/55 text-sm mt-3">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
