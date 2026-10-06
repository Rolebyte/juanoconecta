import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { CURSO } from '../data/curso'
import { Eyebrow, GridGlow, GlowCard, SectionTitle, BtnPrimary, BtnGhost, Check } from '../components/home/ui'

const COURSE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: CURSO.nombre,
  description: CURSO.bajada,
  inLanguage: 'es',
  provider: {
    '@type': 'Organization',
    name: 'JuanoConecta',
    url: 'https://juanoconecta.ar',
  },
}

export default function CursoIAPage() {
  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>Curso de Inteligencia Artificial aplicada | JuanoConecta</title>
        <meta name="description" content="Curso de IA aplicada de JuanoConecta en Rafaela: contenido con IA, automatizaciones para tu negocio y cómo crear tu propia web o web app sin programar." />
        <link rel="canonical" href="https://juanoconecta.ar/curso-ia" />
        <meta property="og:title" content="Curso de Inteligencia Artificial aplicada | JuanoConecta" />
        <meta property="og:description" content={CURSO.bajada} />
        <meta property="og:url" content="https://juanoconecta.ar/curso-ia" />
        <script type="application/ld+json">{JSON.stringify(COURSE_SCHEMA)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <GridGlow />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <Eyebrow>Formación · JuanoConecta</Eyebrow>
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.05] tracking-tight mt-6 mb-6" style={{ textWrap: 'balance' }}>
            {CURSO.nombre.replace('Inteligencia Artificial aplicada', '')}
            <span className="text-acento">Inteligencia Artificial aplicada</span>
          </h1>
          <p className="text-crema/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">{CURSO.bajada}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BtnPrimary href={CURSO.wa} external>Sumarme a la lista de espera</BtnPrimary>
            <BtnGhost href="#temario">Ver el temario</BtnGhost>
          </div>
          <p className="text-crema/45 text-sm mt-6">{CURSO.estado} · {CURSO.modalidad}</p>
        </motion.div>
      </section>

      {/* Para quién */}
      <section className="py-24 px-6 bg-[#080C18]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Para quién es" title="Pensado para quienes quieren usar la IA en serio" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CURSO.paraQuien.map((p) => (
              <li key={p}>
                <GlowCard className="h-full" inner="p-6 flex gap-4 items-start">
                  <Check />
                  <span className="text-crema/85 leading-relaxed">{p}</span>
                </GlowCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Temario */}
      <section id="temario" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-10 w-[520px] h-[520px] rounded-full bg-acento/10 blur-[140px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <SectionTitle eyebrow="Temario" title="Qué vas a aprender" sub="Cuatro módulos prácticos. Salís con herramientas que podés usar al día siguiente." />
          <ol className="border-t border-white/10">
            {CURSO.modulos.map((m, i) => (
              <li key={m.titulo} className="group grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-8 border-b border-white/10 px-2 md:px-6 hover:bg-white/[0.02] transition-colors">
                <span className="w-14 md:w-28 text-4xl md:text-6xl font-bold leading-none tabular-nums text-transparent [-webkit-text-stroke:1px_rgba(234,240,255,0.35)] group-hover:[-webkit-text-stroke:1px_#3D7BFF] transition-all">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-crema">{m.titulo}</h3>
                  <p className="text-crema/55 leading-relaxed mt-2 max-w-2xl">{m.detalle}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quién enseña */}
      <section className="py-24 px-6 bg-[#080C18]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-center">
          <div className="relative">
            <img src="/hero.jpg" alt="Juan Gallino" className="w-full max-w-[300px] aspect-square object-cover object-top rounded-3xl border border-white/10" />
            <div className="absolute -bottom-5 -right-2 md:-right-6 rounded-2xl bg-acento px-5 py-3 shadow-[0_20px_60px_-15px_rgba(61,123,255,0.9)]">
              <div className="text-2xl font-bold text-white">+20</div>
              <div className="text-white/80 text-xs">marcas acompañadas</div>
            </div>
          </div>
          <div>
            <Eyebrow>Quién enseña</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-5">Juan Gallino</h2>
            <p className="text-crema/60 text-lg leading-relaxed">
              Fundador de JuanoConecta. Trabaja todos los días con IA para crear contenido, campañas, webs y web apps para más de 20 marcas de Rafaela y la región. En el curso comparte las herramientas y los métodos que usa con sus clientes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] border border-acento/30 bg-gradient-to-br from-[#16245A] via-[#121A30] to-[#0B1020] px-6 py-16 md:px-16 md:py-20 text-center">
          <GridGlow />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">Reservá tu lugar</h2>
            <p className="text-crema/65 text-lg max-w-xl mx-auto mb-10">Los cupos son limitados. Anotate en la lista de espera y te aviso primero cuando abran las inscripciones.</p>
            <BtnPrimary href={CURSO.wa} external>Quiero anotarme</BtnPrimary>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
