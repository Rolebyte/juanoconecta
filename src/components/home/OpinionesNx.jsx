import { useEffect, useState } from 'react'
import { SectionTitle, Reveal, GlowCard } from './ui'
import { nombreServicio } from '../../data/opiniones'

// Opiniones que dejan los clientes en /opinion. Se cargan al abrir la página (api/encuesta.js?tipo=opinion)
// y la sección no aparece mientras no haya ninguna. Desde /admin se pueden ocultar.
// En las páginas de servicio se filtran por servicio (solo / excepto), con el título que corresponda.
const mes = (iso) => new Date(iso).toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })

function Estrellas({ n, className = 'w-4 h-4' }) {
  return (
    <span className="flex gap-0.5" aria-label={`${n} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={`${className} ${i <= n ? 'text-amber-400' : 'text-white/15'}`} fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  )
}

export default function OpinionesNx({
  solo, excepto, className = 'pt-28 pb-8 px-6',
  eyebrow = 'Opiniones', title = 'Lo que dicen los negocios que trabajaron con nosotros',
  sub = 'Opiniones reales, escritas por cada cliente al terminar su proyecto.',
}) {
  const [lista, setLista] = useState([])
  const [todas, setTodas] = useState(false)

  useEffect(() => {
    fetch('/api/encuesta?tipo=opinion').then((r) => (r.ok ? r.json() : [])).then((d) => {
      const todas = Array.isArray(d) ? d : []
      setLista(todas.filter((o) => (!solo || solo.includes(o.servicio)) && !(excepto || []).includes(o.servicio)))
    }).catch(() => {})
  }, [])

  if (!lista.length) return null
  const promedio = lista.reduce((a, o) => a + o.estrellas, 0) / lista.length
  const visibles = todas ? lista : lista.slice(0, 6)

  return (
    <section id="opiniones" className={`${className} scroll-mt-24`}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow={eyebrow} title={title} sub={sub} />
        <Reveal className="flex flex-wrap items-center gap-4 -mt-6 mb-10">
          <Estrellas n={Math.round(promedio)} className="w-6 h-6" />
          <span className="text-crema font-bold text-xl">{promedio.toFixed(1).replace('.', ',')}</span>
          <span className="text-crema/50">{lista.length === 1 ? '1 opinión' : `${lista.length} opiniones`}</span>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibles.map((o, i) => (
            <Reveal key={o.id} delay={(i % 3) * 0.1} className="h-full">
              <GlowCard className="h-full" inner="p-7 flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <Estrellas n={o.estrellas} />
                  <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-teal border border-teal/40 rounded-full px-3 py-1 text-right">{nombreServicio(o.servicio)}</span>
                </div>
                <p className="text-crema/85 mt-5 leading-relaxed flex-1">“{o.texto}”</p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="font-semibold text-crema">{o.nombre}</div>
                  <div className="text-sm text-crema/50">{[o.negocio, mes(o.created_at)].filter(Boolean).join(' · ')}</div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          {lista.length > 6 && (
            <button type="button" onClick={() => setTodas((v) => !v)} className="text-sm font-semibold text-acento hover:text-crema transition-colors">
              {todas ? 'Ver menos' : `Ver las ${lista.length} opiniones`}
            </button>
          )}
          <a href="/opinion" className="text-sm font-semibold text-crema/60 hover:text-crema transition-colors">¿Trabajaste con nosotros? Dejá tu opinión →</a>
        </div>
      </div>
    </section>
  )
}
