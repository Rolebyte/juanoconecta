import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { Eyebrow, GridGlow, GlowCard, SectionTitle, BtnPrimary, BtnGhost, Check, Reveal } from '../components/home/ui'
import { CAPACITACIONES } from '../data/capacitaciones'

const WA_PROPUESTA = 'https://wa.me/5493492627811?text=' + encodeURIComponent('Hola Juan, te escribo de la municipalidad, comuna o cámara de ____. Nos interesa una capacitación en inteligencia artificial.')
const MAIL = 'mailto:juanoconecta@gmail.com?subject=' + encodeURIComponent('Capacitación en IA para nuestra localidad')

const publicos = [
  { titulo: 'Emprendedores y comercios', texto: 'Para que usen la IA para vender más, comunicar mejor y ahorrar tiempo en el día a día.' },
  { titulo: 'Personal municipal y comunal', texto: 'Para agilizar tareas administrativas, redactar mejor y atender consultas de vecinos con criterio.' },
  { titulo: 'Jóvenes y estudiantes', texto: 'Para sumar una herramienta clave en la búsqueda de su primer trabajo o en su propio proyecto.' },
  { titulo: 'Cámaras e instituciones', texto: 'Para que sus socios y equipos se actualicen con una propuesta práctica y cercana.' },
]

const temas = [
  'Qué es la IA generativa y cómo pedirle bien las cosas',
  'Crear textos, imágenes y videos para redes sociales',
  'Responder consultas y organizar el trabajo con asistentes',
  'Armar una web o web app simple sin saber programar',
  'Herramientas gratuitas para empezar hoy',
  'Uso responsable: datos personales, errores y límites',
]

const resultados = [
  { valor: '3 h', texto: 'de taller práctico con emprendedores' },
  { valor: '5/5', texto: 'puntaje promedio en la encuesta' },
  { valor: '100%', texto: 'de quienes respondieron recomienda la capacitación' },
]


const incluye = [
  { titulo: 'Presentación y ejemplos locales', texto: 'Casos de comercios y emprendimientos de la región, no ejemplos de otro país.' },
  { titulo: 'Material descargable por QR', texto: 'Los participantes escanean un código y se llevan la presentación, prompts y herramientas para seguir practicando.' },
  { titulo: 'Encuesta de satisfacción', texto: 'Cada participante la completa desde el celular al terminar la jornada.' },
  { titulo: 'Informe para la institución', texto: 'Un resumen con asistencia, opiniones y temas de interés, útil para rendir la actividad y planificar la próxima.' },
]

const preguntas = [
  { q: '¿Cuánto cuesta?', a: 'Depende del formato, la cantidad de encuentros y la distancia. Contanos qué necesitan y armamos una propuesta a medida, sin compromiso.' },
  { q: '¿Para cuántas personas es?', a: 'La charla funciona bien con grupos grandes. Para el taller práctico recomendamos hasta 30 personas, así cada uno puede trabajar sobre su caso.' },
  { q: '¿Qué necesitan los participantes?', a: 'Solo un celular con internet. Si el lugar tiene computadoras, mejor, pero no es obligatorio. La institución pone el espacio, un proyector y buena conexión.' },
  { q: '¿Hacen capacitaciones fuera de Rafaela?', a: 'Sí. Vamos a la localidad que lo necesite, y si la distancia no lo permite, la hacemos en forma virtual.' },
  { q: '¿Hace falta saber de tecnología?', a: 'No. Arrancamos desde cero, con un lenguaje simple y herramientas gratuitas.' },
]

const formatos = [
  { n: '01', titulo: 'Charla introductoria', duracion: '2 horas', texto: 'Ideal para abrir el tema con mucha gente. Ejemplos concretos y herramientas para empezar al día siguiente.' },
  { n: '02', titulo: 'Taller práctico', duracion: '3 horas', texto: 'Cada participante trabaja con su celular o computadora sobre casos reales de su negocio o su área.' },
  { n: '03', titulo: 'Ciclo de encuentros', duracion: '4 encuentros', texto: 'Un programa completo con una práctica en cada encuentro, para que la IA quede incorporada en el trabajo.' },
]

const pasos = [
  { titulo: 'Charla inicial', texto: 'Hablamos con el área de producción, desarrollo o juventud para entender a quién está dirigida.' },
  { titulo: 'Propuesta a medida', texto: 'Definimos temas, formato, fechas y lugar según la realidad de cada localidad.' },
  { titulo: 'Capacitación', texto: 'Presencial en tu localidad o virtual, con material para que los participantes sigan practicando.' },
  { titulo: 'Cierre', texto: 'Compartimos con la institución un resumen de la jornada y los próximos pasos sugeridos.' },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Capacitaciones en inteligencia artificial para municipios, comunas e instituciones',
  provider: { '@type': 'Organization', name: 'JuanoConecta', url: 'https://juanoconecta.ar' },
  areaServed: ['Rafaela', 'Provincia de Santa Fe'],
  serviceType: 'Capacitación en inteligencia artificial',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: preguntas.map((p) => ({ '@type': 'Question', name: p.q, acceptedAnswer: { '@type': 'Answer', text: p.a } })),
}

export default function CapacitacionesInstituciones() {
  const antecedentes = [...CAPACITACIONES].sort((a, b) => new Date(b.fin) - new Date(a.fin))
  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>Capacitaciones en IA para municipios, comunas e instituciones | JuanoConecta</title>
        <meta name="description" content="Charlas, talleres y ciclos de inteligencia artificial para municipios, comunas, cámaras e instituciones de Rafaela y la región. Propuestas a medida." />
        <link rel="canonical" href="https://juanoconecta.ar/capacitaciones" />
        <meta property="og:title" content="Capacitaciones en IA para municipios e instituciones | JuanoConecta" />
        <meta property="og:url" content="https://juanoconecta.ar/capacitaciones" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <GridGlow />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative max-w-4xl mx-auto text-center">
          <Eyebrow>Municipios · Comunas · Cámaras</Eyebrow>
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.05] tracking-tight mt-6 mb-6" style={{ textWrap: 'balance' }}>
            Llevá la <span className="text-acento">inteligencia artificial</span> a tu localidad
          </h1>
          <p className="text-crema/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Charlas, talleres y ciclos prácticos para emprendedores, comercios, socios de cámaras, personal municipal y jóvenes de Rafaela y toda la región.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BtnPrimary href={WA_PROPUESTA} external>Pedir una propuesta para mi localidad</BtnPrimary>
            <BtnGhost href="#formatos">Ver formatos</BtnGhost>
          </div>
        </motion.div>
      </section>

      {/* Experiencia real */}
      <section className="py-24 px-6 bg-[#080C18]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="grid grid-cols-2 gap-4">
            <img src="/img/capacitaciones/jornada-ccirr-1.webp" alt="Juan dando la capacitación Emprender con IA en el Centro Comercial e Industrial de Rafaela" loading="lazy" width="960" height="1200" className="w-full rounded-3xl border border-white/10 object-cover aspect-[4/5]" />
            <img src="/img/capacitaciones/jornada-ccirr-2.webp" alt="Participantes de la capacitación trabajando con la presentación sobre qué tareas delegar a la IA" loading="lazy" width="960" height="1200" className="w-full rounded-3xl border border-white/10 object-cover aspect-[4/5] mt-10" />
          </Reveal>
          <div>
            <SectionTitle eyebrow="Experiencia real" title="Ya lo hicimos en el Centro Comercial e Industrial de Rafaela" sub="En octubre de 2026 dimos “Emprender con IA” para el Programa de Mentorías para el Desarrollo Emprendedor del CCIRR. Así lo calificaron los participantes." />
            <div className="grid grid-cols-3 gap-3">
              {resultados.map((r) => (
                <div key={r.valor} className="rounded-2xl border border-white/10 bg-[#0F1629] p-4">
                  <div className="text-2xl md:text-3xl font-bold text-acento tabular-nums">{r.valor}</div>
                  <p className="text-crema/55 text-xs md:text-sm leading-snug mt-2">{r.texto}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border-l-2 border-teal bg-[#0F1629] px-5 py-4 text-crema/80 leading-relaxed">Lo que más valoraron: que la explicación fuera clara y salir con herramientas concretas para aplicar en su negocio.</p>
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Para quién" title="Una capacitación pensada para cada público de tu comunidad" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {publicos.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 0.08} className="h-full">
                <GlowCard className="h-full" inner="p-7">
                  <span className="text-acento font-bold text-sm tabular-nums">0{i + 1}</span>
                  <h3 className="text-xl font-bold text-crema mt-4">{p.titulo}</h3>
                  <p className="text-crema/55 leading-relaxed mt-3 text-[15px]">{p.texto}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Temas */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#080C18]">
        <div className="absolute -left-40 top-20 w-[480px] h-[480px] rounded-full bg-acento/10 blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <SectionTitle eyebrow="Temas" title="Qué se llevan los participantes" sub="Contenido práctico y adaptado. Nada de teoría difícil: herramientas que se pueden usar al día siguiente." />
          <Reveal>
            <ul className="grid gap-3">
              {temas.map((t) => (
                <li key={t} className="flex gap-3 items-start rounded-2xl border border-white/10 bg-[#0F1629] px-5 py-4 text-crema/85"><Check />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Formatos */}
      <section id="formatos" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle center eyebrow="Formatos" title="Elegí el formato que mejor se adapta" sub="Presencial en tu localidad o virtual. El contenido se ajusta a cada público." />
          <div className="grid md:grid-cols-3 gap-5">
            {formatos.map((f, i) => (
              <Reveal key={f.n} delay={i * 0.1} className="h-full">
                <GlowCard className="h-full" inner="p-8 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-bold tabular-nums text-transparent [-webkit-text-stroke:1px_rgba(234,240,255,0.35)] group-hover:[-webkit-text-stroke:1px_#3D7BFF] transition-all">{f.n}</span>
                    <span className="rounded-full border border-teal/40 text-teal text-xs font-semibold px-3 py-1">{f.duracion}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-crema mt-6">{f.titulo}</h3>
                  <p className="text-crema/55 leading-relaxed mt-3">{f.texto}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-24 px-6 bg-[#080C18]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle center eyebrow="Qué incluye" title="Todo lo que recibe la institución" sub="En cualquiera de los tres formatos." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {incluye.map((x, i) => (
              <Reveal key={x.titulo} delay={i * 0.08} className="h-full">
                <GlowCard className="h-full" inner="p-7">
                  <Check />
                  <h3 className="text-lg font-bold text-crema mt-4">{x.titulo}</h3>
                  <p className="text-crema/55 leading-relaxed mt-2 text-[15px]">{x.texto}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Antecedentes */}
      {antecedentes.length > 1 && (
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionTitle eyebrow="Antecedentes" title="Capacitaciones con instituciones de la región" />
            <div className="grid md:grid-cols-2 gap-5">
              {antecedentes.map((c) => (
                <Reveal key={c.slug}>
                  <GlowCard inner="p-4 flex gap-5 items-center">
                    <img src={c.imagen} alt={`Flyer de ${c.titulo}`} loading="lazy" className="w-28 h-28 rounded-2xl object-cover flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-teal">{c.fechaCorta}</div>
                      <h3 className="text-xl font-bold text-crema mt-1">{c.titulo}</h3>
                      <p className="text-crema/55 text-sm mt-1 leading-snug">{c.contexto}</p>
                    </div>
                  </GlowCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Proceso */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle center eyebrow="Cómo trabajamos" title="De la primera charla a la capacitación" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pasos.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 0.1} className="h-full">
                <GlowCard className="h-full" inner="p-7">
                  <span className="w-12 h-12 rounded-2xl bg-fondo border border-acento/50 text-acento font-bold flex items-center justify-center shadow-[0_0_30px_-6px_rgba(61,123,255,0.8)]">0{i + 1}</span>
                  <h3 className="text-lg font-bold text-crema mt-5">{p.titulo}</h3>
                  <p className="text-crema/55 leading-relaxed mt-2 text-[15px]">{p.texto}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas */}
      <section className="py-24 px-6 bg-[#080C18]">
        <div className="max-w-3xl mx-auto">
          <SectionTitle center eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos" />
          <div className="grid gap-3">
            {preguntas.map((p) => (
              <details key={p.q} className="group rounded-2xl border border-white/10 bg-[#0F1629] px-6 py-5">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-crema">
                  {p.q}<span className="text-acento text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-crema/60 leading-relaxed mt-3">{p.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] border border-acento/30 bg-gradient-to-br from-[#16245A] via-[#121A30] to-[#0B1020] px-6 py-16 md:px-16 md:py-20 text-center">
          <GridGlow />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto" style={{ textWrap: 'balance' }}>¿Querés una capacitación en IA para tu localidad o tu cámara?</h2>
            <p className="text-crema/65 text-lg max-w-xl mx-auto mt-5 mb-10">Contanos a quién está dirigida y armamos una propuesta a medida, sin compromiso.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BtnPrimary href={WA_PROPUESTA} external>Escribir por WhatsApp</BtnPrimary>
              <BtnGhost href={MAIL}>Enviar un mail</BtnGhost>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
