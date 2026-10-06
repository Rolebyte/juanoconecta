import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { CURSO } from '../data/curso'

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
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute -right-24 top-20 w-80 h-80 rounded-full border-2 border-acento/25 pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-60 h-60 rounded-full border-2 border-teal/20 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          <span className="inline-block border border-teal text-teal text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded mb-6">
            Formación · JuanoConecta
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {CURSO.nombre.replace('Inteligencia Artificial aplicada', '')}
            <span className="text-acento">Inteligencia Artificial aplicada</span>
          </h1>
          <p className="text-crema/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">{CURSO.bajada}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CURSO.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-sm bg-acento hover:bg-acento-dark text-white text-center transition-colors"
            >
              Sumarme a la lista de espera
            </a>
            <a
              href="#temario"
              className="px-8 py-4 rounded-full font-semibold text-sm border border-white/15 text-crema hover:border-teal/60 text-center transition-colors"
            >
              Ver el temario
            </a>
          </div>
          <p className="text-crema/40 text-sm mt-6">{CURSO.estado} · {CURSO.modalidad}</p>
        </motion.div>
      </section>

      {/* Para quién */}
      <section className="py-20 px-6 bg-[#2D2D44]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">¿Para quién es?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CURSO.paraQuien.map((p) => (
              <li key={p} className="flex gap-3 items-start rounded-2xl p-5 bg-fondo/60 border border-white/5">
                <span className="mt-2 w-2 h-2 rounded-full bg-teal flex-shrink-0" />
                <span className="text-crema/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Temario */}
      <section id="temario" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Qué vas a aprender</h2>
          <p className="text-crema/50 mb-10">Cuatro módulos prácticos. Salís con herramientas que podés usar al día siguiente.</p>
          <ol className="grid gap-5">
            {CURSO.modulos.map((m, i) => (
              <li
                key={m.titulo}
                className="flex gap-6 items-start border-l-[3px] border-acento pl-6 py-2"
              >
                <span className="text-5xl font-bold text-acento leading-none tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{m.titulo}</h3>
                  <p className="text-crema/55 leading-relaxed">{m.detalle}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quién enseña */}
      <section className="py-20 px-6 bg-[#2D2D44]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-center">
          <img src="/hero.jpg" alt="Juan Gallino" className="w-full max-w-[220px] aspect-square object-cover object-top rounded-2xl" />
          <div>
            <span className="text-teal text-sm font-semibold tracking-widest uppercase">Quién enseña</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4">Juan Gallino</h2>
            <p className="text-crema/60 leading-relaxed">
              Fundador de JuanoConecta. Trabaja todos los días con IA para crear contenido, campañas, webs y web apps para más de 20 marcas de Rafaela y la región. En el curso comparte las herramientas y los métodos que usa con sus clientes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-5">Reservá tu lugar</h2>
        <p className="text-crema/55 max-w-xl mx-auto mb-10">Los cupos son limitados. Anotate en la lista de espera y te aviso primero cuando abran las inscripciones.</p>
        <a
          href={CURSO.wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full font-semibold bg-acento hover:bg-acento-dark text-white transition-colors"
        >
          Quiero anotarme
        </a>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
