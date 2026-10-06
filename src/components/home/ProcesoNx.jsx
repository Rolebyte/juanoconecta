import { SectionTitle, Reveal, GlowCard } from './ui'

const pasos = [
  { n: '01', titulo: 'Diagnóstico', texto: 'Charlamos sobre tu negocio, revisamos tus redes, tu web y a tu competencia para entender desde dónde arrancamos.' },
  { n: '02', titulo: 'Estrategia', texto: 'Definimos objetivos medibles, público, mensajes y canales. Te llevás un plan claro con prioridades.' },
  { n: '03', titulo: 'Creación con IA', texto: 'Diseñamos, desarrollamos y producimos contenido apoyándonos en IA para entregar más rápido y con mejor calidad.' },
  { n: '04', titulo: 'Medición y mejora', texto: 'Seguimos los números todos los meses y ajustamos lo que haga falta para que los resultados sigan creciendo.' },
]

export default function ProcesoNx() {
  return (
    <section id="proceso" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute right-0 top-10 w-[520px] h-[520px] rounded-full bg-teal/10 blur-[140px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <SectionTitle center eyebrow="Cómo trabajamos" title="Un proceso simple, de la idea a los resultados" sub="Cuatro pasos claros para que sepas en todo momento qué estamos haciendo y por qué." />
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="hidden lg:block absolute left-[12%] right-[12%] top-[52px] h-px bg-gradient-to-r from-acento/0 via-acento/60 to-acento/0" />
          {pasos.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.12} className="h-full">
              <GlowCard className="h-full" inner="p-7 flex flex-col">
                <span className="relative z-10 w-14 h-14 rounded-2xl bg-fondo border border-acento/50 text-acento font-bold text-lg flex items-center justify-center shadow-[0_0_30px_-6px_rgba(61,123,255,0.8)] group-hover:bg-acento group-hover:text-white transition-colors duration-500">{p.n}</span>
                <h3 className="text-xl font-bold text-crema mt-6">{p.titulo}</h3>
                <p className="text-crema/55 leading-relaxed mt-3 text-[15px]">{p.texto}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
