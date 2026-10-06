import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { Eyebrow, GridGlow, GlowCard, BtnPrimary, BtnGhost, Reveal } from '../components/home/ui'
import { MATERIALES } from '../data/materiales'

const WA_CONSULTA = 'https://wa.me/543492627811?text=' + encodeURIComponent('Hola Juan, estuve en la capacitación Emprender con IA y tengo una consulta.')

function Beneficio({ b }) {
  if (!b || Date.now() > new Date(b.vence).getTime()) return null
  const wa = 'https://wa.me/543492627811?text=' + encodeURIComponent(`Hola Juan, participé de la capacitación y quiero usar el código ${b.codigo} (${b.porcentaje}% de descuento).`)
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl p-px bg-gradient-to-br from-acento via-teal/70 to-acento/30">
        <div className="relative rounded-[calc(1.5rem-1px)] bg-[#0F1629] p-7 md:p-9 grid md:grid-cols-[auto_1fr] gap-6 md:gap-9 items-center">
          <div className="text-center md:text-left">
            <div className="text-6xl md:text-7xl font-bold text-acento leading-none tabular-nums">{b.porcentaje}%</div>
            <div className="text-crema/60 text-sm mt-2">de descuento</div>
          </div>
          <div>
            <Eyebrow>Beneficio por participar</Eyebrow>
            <p className="text-crema text-lg mt-4 leading-relaxed">{b.detalle}</p>
            <div className="flex flex-wrap items-center gap-3 mt-5">
              <span className="rounded-xl border border-dashed border-teal/60 bg-teal/10 px-4 py-2 font-mono font-bold tracking-wider text-teal">{b.codigo}</span>
              <span className="text-crema/50 text-sm">Válido hasta el {b.venceTexto}</span>
            </div>
            <div className="mt-6"><BtnPrimary href={wa} external>Usar mi descuento</BtnPrimary></div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function Descarga({ a }) {
  return (
    <a href={a.href} target="_blank" rel="noopener noreferrer" download className="block">
      <GlowCard inner="p-5 flex items-center gap-4">
        <span className="w-12 h-12 rounded-2xl bg-acento/15 text-acento flex items-center justify-center flex-shrink-0 group-hover:bg-acento group-hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" /></svg>
        </span>
        <span className="min-w-0">
          <span className="block text-crema font-semibold">{a.titulo}</span>
          <span className="block text-crema/50 text-sm">{a.detalle}</span>
        </span>
      </GlowCard>
    </a>
  )
}

export default function Material() {
  const { slug } = useParams()
  const m = (slug ? MATERIALES.find((x) => x.slug === slug) : null) || MATERIALES[0]

  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>{`Material: ${m.titulo} | JuanoConecta`}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />

      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        <GridGlow />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative max-w-3xl mx-auto text-center">
          <Eyebrow>Material de la capacitación</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mt-6">{m.titulo}</h1>
          <p className="text-acento text-xl md:text-2xl font-semibold mt-3">{m.bajada}</p>
          <p className="text-crema/55 mt-5">{m.fecha} · {m.contexto}</p>
          <p className="text-crema/70 text-lg mt-6">¡Gracias por participar! Acá tenés todo lo que usamos en la jornada para seguir practicando.</p>
        </motion.div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto space-y-12">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight mb-5">Material de la jornada</h2>
            {m.archivos.length ? (
              <div className="grid gap-4">{m.archivos.map((a) => <Descarga key={a.href} a={a} />)}</div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/15 bg-[#0F1629] p-6 text-crema/60">
                La presentación y los ejercicios se suben acá al terminar la capacitación. Guardá esta página para volver.
              </div>
            )}
          </Reveal>

          <Beneficio b={m.beneficio} />

          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight mb-5">Regalos para empezar</h2>
            <div className="grid sm:grid-cols-2 gap-4">{m.regalos.map((a) => <Descarga key={a.href} a={a} />)}</div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight mb-5">Herramientas que vimos</h2>
            <ul className="rounded-3xl border border-white/10 bg-[#0F1629] divide-y divide-white/10 overflow-hidden">
              {m.herramientas.map((h) => (
                <li key={h.nombre}>
                  <a href={h.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-white/[0.03] transition-colors">
                    <span>
                      <span className="block font-semibold text-crema">{h.nombre}</span>
                      <span className="block text-sm text-crema/50">{h.uso}</span>
                    </span>
                    <span className="text-teal text-sm font-semibold whitespace-nowrap">Abrir →</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-acento/30 bg-gradient-to-br from-[#16245A] via-[#121A30] to-[#0B1020] px-6 py-14 md:px-14 text-center">
          <GridGlow />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Querés seguir aprendiendo?</h2>
            <p className="text-crema/65 text-lg max-w-xl mx-auto mt-4 mb-8">Escribime si te quedó alguna duda, o sumate a la lista de espera del curso completo de IA aplicada.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BtnPrimary href={WA_CONSULTA} external>Hacer una consulta</BtnPrimary>
              <BtnGhost href="/curso-ia">Ver el curso de IA</BtnGhost>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
