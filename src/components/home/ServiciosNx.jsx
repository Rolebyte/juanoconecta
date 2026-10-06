import { useState } from 'react'
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
    planes: { texto: 'Planes desde $320.000 por mes', href: '/redes-sociales-para-negocios-rafaela#precios-redes' },
  },
]

export default function ServiciosNx() {
  const [open, setOpen] = useState(0)
  return (
    <section id="servicios" className="relative py-28 px-6 bg-[#080C18] overflow-hidden">
      <div className="absolute -left-40 top-40 w-[480px] h-[480px] rounded-full bg-acento/10 blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionTitle eyebrow="Servicios" title="Soluciones digitales para cada etapa de tu negocio" />
          <Reveal className="lg:mb-14 lg:max-w-sm">
            <p className="text-crema/55 leading-relaxed">Elegí un área o combinalas. Todo se planifica con la misma estrategia.</p>
          </Reveal>
        </div>
        <div className="border-t border-white/10">
          {servicios.map((s, i) => {
            const activo = open === i
            return (
              <Reveal key={s.titulo} delay={i * 0.06}>
                <div className={`group border-b border-white/10 transition-colors duration-500 ${activo ? 'bg-gradient-to-r from-acento/10 via-transparent to-transparent' : 'hover:bg-white/[0.02]'}`}>
                  <button type="button" onClick={() => setOpen(activo ? -1 : i)} aria-expanded={activo}
                    className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-10 py-7 md:py-9 px-2 md:px-6 text-left">
                    <span className={`w-14 md:w-32 text-4xl md:text-7xl font-bold tabular-nums leading-none transition-colors duration-500 ${activo ? 'text-acento' : 'text-transparent [-webkit-text-stroke:1px_rgba(234,240,255,0.35)] group-hover:[-webkit-text-stroke:1px_#3D7BFF]'}`}>{s.n}</span>
                    <span>
                      <span className="block text-2xl md:text-4xl font-bold text-crema tracking-tight">{s.titulo}</span>
                      <span className="hidden md:block text-crema/50 mt-2 max-w-xl">{s.desc}</span>
                    </span>
                    <span className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border transition-all duration-500 ${activo ? 'bg-acento border-acento rotate-45' : 'border-white/20 group-hover:border-acento group-hover:bg-acento/20'}`}>
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-crema -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ease-out ${activo ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-end px-2 md:pl-[12rem] md:pr-6 pb-9">
                        <div>
                          <p className="md:hidden text-crema/60 mb-5">{s.desc}</p>
                          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                            {s.items.map((it) => (
                              <li key={it} className="flex gap-3 text-crema/80"><Check />{it}</li>
                            ))}
                          </ul>
                          {s.planes && (
                            <a href={s.planes.href} tabIndex={activo ? 0 : -1} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-crema transition-colors">
                              {s.planes.texto} · Ver planes →
                            </a>
                          )}
                        </div>
                        <a href={WA_BASE + s.wa} target="_blank" rel="noopener noreferrer" tabIndex={activo ? 0 : -1}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-crema text-fondo font-semibold px-6 py-3 hover:bg-teal transition-colors whitespace-nowrap">
                          Consultar por WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
