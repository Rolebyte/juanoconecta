import { SectionTitle, Reveal, GlowCard } from './ui'

const razones = [
  {
    titulo: 'Enfoque en resultados',
    texto: 'Cada acción tiene un objetivo medible: más consultas, más ventas o más alcance. Te mostramos los números todos los meses.',
    icono: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    titulo: 'IA aplicada de verdad',
    texto: 'Usamos IA para investigar, crear y automatizar. Eso nos permite entregar más rápido y con mejor calidad, sin perder el criterio humano.',
    icono: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
  },
  {
    titulo: 'Casos reales y cercanos',
    texto: 'Trabajamos con comercios, profesionales y marcas de Rafaela y la región. Conocemos el mercado local y sus clientes.',
    icono: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

export default function PorQueNx() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle center eyebrow="Por qué elegirnos" title="La forma correcta de hacer crecer tu negocio" sub="No vendemos paquetes genéricos. Armamos soluciones a medida con tecnología y estrategia." />
        <div className="grid md:grid-cols-3 gap-6">
          {razones.map((r, i) => (
            <Reveal key={r.titulo} delay={i * 0.1}>
              <GlowCard className="h-full" inner="p-8">
                <span className="w-14 h-14 rounded-2xl bg-acento/15 text-acento group-hover:bg-acento group-hover:text-white transition-colors duration-500 flex items-center justify-center">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={r.icono} /></svg>
                </span>
                <h3 className="text-xl font-bold text-crema mt-6">{r.titulo}</h3>
                <p className="text-crema/55 leading-relaxed mt-3">{r.texto}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
