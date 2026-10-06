import { Reveal, Eyebrow, BtnPrimary, Check } from './ui'

const puntos = [
  ['Estrategias con resultados', 'Medimos ventas, consultas y alcance, no solo likes.'],
  ['IA en cada proceso', 'Usamos inteligencia artificial para crear más rápido y con más precisión.'],
  ['Todo en un mismo lugar', 'Web, diseño, redes y publicidad con una sola estrategia.'],
  ['Cerca tuyo', 'Estamos en Rafaela y trabajamos con marcas de toda la región.'],
]

export default function SobreNx() {
  return (
    <section id="sobre-mi" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[5/4] bg-[#121A30]">
            <img src="/hero.jpg" alt="Juan Gallino trabajando" className="w-full h-full object-cover object-[center_20%]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-fondo/80 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 right-6 md:right-10 rounded-2xl bg-acento text-white px-6 py-5 shadow-[0_20px_60px_-20px_rgba(61,123,255,0.9)]">
            <div className="text-4xl font-bold leading-none">3</div>
            <div className="text-white/85 text-sm mt-1">años creando marcas</div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>Quiénes somos</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-crema mt-4 leading-[1.1] tracking-tight" style={{ textWrap: 'balance' }}>
              Tu socio digital para crecer con IA
            </h2>
            <p className="text-crema/60 text-lg leading-relaxed mt-6">
              JuanoConecta es el estudio de comunicación digital e inteligencia artificial de Juan Gallino. Acompañamos a emprendedores y empresas a tener una presencia online profesional que genere resultados.
            </p>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-6 mt-10">
            {puntos.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.08} className="flex gap-3">
                <Check />
                <div>
                  <div className="text-crema font-semibold">{t}</div>
                  <div className="text-crema/55 text-sm leading-relaxed mt-1">{d}</div>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.3} className="mt-10">
            <BtnPrimary href="/sobre-juanoconecta">Conocé más sobre nosotros</BtnPrimary>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
