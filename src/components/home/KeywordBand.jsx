const palabras = ['Inteligencia artificial', 'Web apps', 'Diseño web', 'Branding', 'Meta Ads', 'Automatizaciones', 'Contenido', 'SEO']

function Fila({ reverse = false, outline = false }) {
  const items = [...palabras, ...palabras]
  return (
    <div className={`flex w-max gap-10 items-center ${reverse ? 'animate-marquee-rev' : 'animate-marquee'} motion-reduce:animate-none`}>
      {items.map((p, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span
            className="text-4xl md:text-6xl font-bold tracking-tight"
            style={outline ? { color: 'transparent', WebkitTextStroke: '1.5px rgba(234,240,255,0.55)' } : { color: '#EAF0FF' }}
          >
            {p}
          </span>
          <span className="text-teal text-3xl" aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function KeywordBand() {
  return (
    <section className="py-20 overflow-hidden" aria-hidden="true">
      <div className="-rotate-2 w-[110%] -ml-[5%] bg-acento py-5 shadow-[0_0_80px_-10px_rgba(61,123,255,0.7)]">
        <Fila />
      </div>
      <div className="rotate-1 w-[110%] -ml-[5%] mt-4 py-5 border-y border-white/10 bg-[#080C18]">
        <Fila reverse outline />
      </div>
    </section>
  )
}
