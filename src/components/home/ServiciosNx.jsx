import { SectionTitle, Reveal, Check } from './ui'

const WA_BASE = 'https://wa.me/543492627811?text=Hola%20Juan%2C%20me%20interesa%20'

const servicios = [
  {
    n: '01',
    titulo: 'IA para negocios',
    desc: 'Formación y herramientas para que tu equipo aproveche la inteligencia artificial en el día a día.',
    items: ['Curso de IA aplicada', 'Capacitaciones para equipos', 'Asistentes y chatbots', 'Automatizaciones de tareas', 'Contenido creado con IA'],
    wa: 'IA%20para%20negocios',
  },
  {
    n: '02',
    titulo: 'Webs y web apps',
    desc: 'Sitios rápidos y orientados a conversión, y aplicaciones web a medida construidas con IA.',
    items: ['Sitios institucionales', 'Landing pages', 'Tiendas online con Mercado Pago', 'Web apps a medida', 'SEO y posicionamiento en Google'],
    wa: 'una%20web%20o%20web%20app',
  },
  {
    n: '03',
    titulo: 'Diseño y marca',
    desc: 'Una identidad visual coherente en cada punto de contacto con tus clientes.',
    items: ['Identidad visual y logo', 'Branding y manual de marca', 'Diseño para redes', 'Piezas gráficas y flyers', 'Presentaciones comerciales'],
    wa: 'dise%C3%B1o%20y%20marca',
  },
  {
    n: '04',
    titulo: 'Redes y publicidad',
    desc: 'Gestión de redes, contenido y campañas pagas con estrategia y métricas reales.',
    items: ['Community management', 'Estrategia y calendario de contenido', 'Copywriting con IA', 'Campañas en Meta Ads', 'Reportes mensuales'],
    wa: 'redes%20y%20publicidad',
  },
]

export default function ServiciosNx() {
  return (
    <section id="servicios" className="py-28 px-6 bg-[#080C18]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionTitle eyebrow="Servicios" title="Soluciones digitales para cada etapa de tu negocio" />
          <Reveal className="lg:mb-14 lg:max-w-sm">
            <p className="text-crema/55 leading-relaxed">Elegí un área o combinalas. Todo se planifica con la misma estrategia.</p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicios.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 0.08} className="h-full">
              <article className="group relative h-full flex flex-col rounded-3xl border border-white/10 bg-[#121A30] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-acento/50 hover:shadow-[0_30px_80px_-30px_rgba(61,123,255,0.6)] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-acento to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-acento font-bold text-sm tabular-nums">{s.n}</span>
                <h3 className="text-xl font-bold text-crema mt-4">{s.titulo}</h3>
                <p className="text-crema/55 text-sm leading-relaxed mt-3">{s.desc}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-crema/80"><Check />{it}</li>
                  ))}
                </ul>
                <a href={WA_BASE + s.wa} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal group-hover:text-crema transition-colors">
                  Consultar
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
