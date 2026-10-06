import { Reveal, Eyebrow, BtnPrimary } from './ui'
import { CAPACITACIONES } from '../../data/capacitaciones'

function Dato({ label, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0F1629] px-5 py-4">
      <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-crema/45">{label}</div>
      <div className="text-crema font-semibold mt-1">{children}</div>
    </div>
  )
}

function Anterior({ c }) {
  return (
    <article className="group flex gap-4 items-center rounded-2xl border border-white/10 bg-[#0F1629] p-3 pr-5 hover:border-acento/50 transition-colors">
      <img src={c.imagen} alt={`Flyer de ${c.titulo}`} loading="lazy" className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
      <div className="min-w-0">
        <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-teal">{c.fechaCorta}</div>
        <h4 className="text-crema font-bold leading-snug mt-1">{c.titulo}</h4>
        <p className="text-crema/50 text-sm leading-snug mt-0.5">{c.contexto}</p>
      </div>
    </article>
  )
}

export default function ProximaCapacitacion() {
  const ahora = Date.now()
  const ordenadas = [...CAPACITACIONES].sort((a, b) => new Date(a.fin) - new Date(b.fin))
  const proximas = ordenadas.filter((c) => new Date(c.fin).getTime() >= ahora)
  const pasadas = ordenadas.filter((c) => new Date(c.fin).getTime() < ahora).reverse()
  // Destacada: la próxima que viene; si no hay ninguna, la última que se dio
  const destacada = proximas[0] || pasadas[0]
  if (!destacada) return null
  const pasada = !proximas.length
  const anteriores = pasadas.filter((c) => c !== destacada)
  const c = destacada

  return (
    <section id="capacitaciones" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-acento/15 blur-[140px] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-acento via-teal/60 to-acento/20 opacity-60 blur-xl" />
          <img
            src={c.imagen}
            alt={`Flyer de la capacitación ${c.titulo}, a cargo de Juan Gallino`}
            width="1080"
            height="1090"
            loading="lazy"
            className="relative w-full rounded-[1.75rem] border border-white/15 shadow-2xl"
          />
          <span className="absolute -top-4 -left-4 rounded-full bg-acento text-white text-xs font-bold tracking-wider uppercase px-4 py-2 shadow-[0_10px_40px_-10px_rgba(61,123,255,0.9)]">
            {pasada ? 'Realizada' : c.diaCorto}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>{pasada ? 'Última capacitación' : 'Próxima capacitación'}</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-bold text-crema mt-5 leading-[1.05] tracking-tight">{c.titulo}</h2>
          <p className="text-acento text-xl md:text-2xl font-semibold mt-3">{c.bajada}</p>
          <p className="text-crema/60 leading-relaxed mt-5 max-w-xl">A cargo de Juan Gallino. {c.descripcion}</p>
          <div className="grid sm:grid-cols-2 gap-3 mt-8">
            <Dato label="Fecha">{c.dia}</Dato>
            <Dato label="Horario">{c.horario}</Dato>
            <div className="sm:col-span-2"><Dato label="Lugar">{c.lugar}</Dato></div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
            <BtnPrimary href="/capacitaciones">Capacitaciones para tu localidad o institución</BtnPrimary>
            <a href="/curso-ia" className="text-sm font-semibold text-teal hover:text-crema transition-colors">Ver el curso de IA →</a>
          </div>
        </Reveal>
      </div>

      {anteriores.length > 0 && (
        <div className="relative max-w-6xl mx-auto mt-20">
          <Reveal className="flex items-end justify-between gap-4 border-t border-white/10 pt-10 mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-crema tracking-tight">Capacitaciones anteriores</h3>
            <span className="text-crema/45 text-sm whitespace-nowrap">{anteriores.length} {anteriores.length === 1 ? 'jornada' : 'jornadas'}</span>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {anteriores.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}><Anterior c={a} /></Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
