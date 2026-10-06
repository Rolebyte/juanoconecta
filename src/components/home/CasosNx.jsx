import { SectionTitle, Reveal, Check, BtnGhost, GlowCard } from './ui'

const casos = [
  {
    rubro: 'Tienda online',
    titulo: 'Tatitos Pañalera: #1 en Google y +340% de alcance',
    problema: 'Necesitaba vender online y hacerse conocida fuera del local.',
    solucion: ['Tienda online con catálogo, carrito y Mercado Pago', 'SEO local hasta el puesto #1 en Google y el AI Overview', 'Contenido diario y Meta Ads segmentados por zona'],
    link: 'https://tatitos.com.ar',
  },
  {
    rubro: 'Salud',
    titulo: 'Alarcón Ecografías: imagen profesional desde cero',
    problema: 'No tenía ninguna presencia digital.',
    solucion: ['Identidad visual y perfiles en redes', 'Estrategia y contenido profesional', 'Consultas orgánicas semanales desde el tercer mes'],
  },
  {
    rubro: 'Estudio de tatuajes',
    titulo: 'Pura Vida Tatuajes: turnos por Instagram desde el primer mes',
    problema: 'Las redes no se convertían en clientes.',
    solucion: ['Estrategia de contenido orientada a consultas', 'Respuesta y seguimiento por Instagram', 'Alcance orgánico en crecimiento sostenido'],
  },
]

export default function CasosNx() {
  return (
    <section id="resultados" className="py-28 px-6 bg-[#080C18]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Casos de éxito" title="Resultados reales de clientes reales" sub="Algunos de los proyectos que hicimos crecer con estrategia, diseño e IA." />
        <div className="grid lg:grid-cols-3 gap-6">
          {casos.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 0.1} className="h-full">
              <GlowCard className="h-full" inner="p-8 flex flex-col">
                <span className="absolute right-7 top-5 text-7xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(234,240,255,0.12)] group-hover:[-webkit-text-stroke:1px_rgba(61,123,255,0.6)] transition-all duration-500 tabular-nums" aria-hidden="true">0{i + 1}</span>
                <span className="self-start text-[11px] font-semibold tracking-[0.18em] uppercase text-teal border border-teal/40 rounded-full px-3 py-1">{c.rubro}</span>
                <h3 className="text-xl font-bold text-crema mt-6 leading-snug">{c.titulo}</h3>
                <div className="mt-6">
                  <div className="text-xs font-semibold tracking-widest uppercase text-crema/40">Desafío</div>
                  <p className="text-crema/70 mt-2">{c.problema}</p>
                </div>
                <div className="mt-6 flex-1">
                  <div className="text-xs font-semibold tracking-widest uppercase text-crema/40">Qué hicimos</div>
                  <ul className="mt-3 space-y-3">
                    {c.solucion.map((s) => <li key={s} className="flex gap-3 text-sm text-crema/80"><Check />{s}</li>)}
                  </ul>
                </div>
                {c.link && (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="mt-8 text-sm font-semibold text-acento hover:text-crema transition-colors">Ver el sitio →</a>
                )}
              </GlowCard>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-12">
          <BtnGhost href="#portfolio">Ver más proyectos</BtnGhost>
        </Reveal>
      </div>
    </section>
  )
}
