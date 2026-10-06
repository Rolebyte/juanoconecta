import { Reveal, Eyebrow, BtnPrimary, WA } from './ui'

const CAPACITACION = {
  titulo: 'Emprender con IA',
  bajada: 'Herramientas prácticas para potenciar tu negocio',
  fecha: new Date('2026-10-07T16:00:00-03:00'),
  dia: 'Miércoles 7 de octubre',
  horario: '13:00 a 16:00',
  lugar: 'SUM del Centro Comercial e Industrial de Rafaela y la Región (CCIRR)',
  marco: 'Actividad del Programa de Mentorías para el Desarrollo Emprendedor 2026.',
  imagen: '/capacitaciones/emprender-con-ia.jpg',
}

function Dato({ label, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0F1629] px-5 py-4">
      <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-crema/45">{label}</div>
      <div className="text-crema font-semibold mt-1">{children}</div>
    </div>
  )
}

export default function ProximaCapacitacion() {
  // Pasada la fecha, la sección queda como antecedente en vez de anuncio
  const pasada = Date.now() > CAPACITACION.fecha.getTime()
  const c = CAPACITACION
  return (
    <section id="capacitaciones" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-acento/15 blur-[140px] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-acento via-teal/60 to-acento/20 opacity-60 blur-xl" />
          <img
            src={c.imagen}
            alt={`Flyer de la capacitación ${c.titulo}, a cargo de Juan Gallino`}
            width="1080"
            height="1090"
            loading="lazy"
            className="relative w-full rounded-[1.75rem] border border-white/15 shadow-2xl"
          />
          <span className="absolute -top-4 -left-4 rounded-full bg-acento text-white text-xs font-bold tracking-wider uppercase px-4 py-2 shadow-[0_10px_40px_-10px_rgba(61,123,255,0.9)]">
            {pasada ? 'Realizada' : 'Mié 7 de octubre'}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>{pasada ? 'Última capacitación' : 'Próxima capacitación'}</Eyebrow>
          <h2 className="text-4xl md:text-6xl font-bold text-crema mt-5 leading-[1.05] tracking-tight">{c.titulo}</h2>
          <p className="text-acento text-xl md:text-2xl font-semibold mt-3">{c.bajada}</p>
          <p className="text-crema/60 leading-relaxed mt-5 max-w-xl">
            A cargo de Juan Gallino. Una jornada práctica para usar la inteligencia artificial en el día a día de un emprendimiento. {c.marco}
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mt-8">
            <Dato label="Fecha">{c.dia}</Dato>
            <Dato label="Horario">{c.horario}</Dato>
            <div className="sm:col-span-2"><Dato label="Lugar">{c.lugar}</Dato></div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
            <BtnPrimary href={WA} external>Quiero una capacitación para mi equipo</BtnPrimary>
            <a href="/curso-ia" className="text-sm font-semibold text-teal hover:text-crema transition-colors">Ver el curso de IA →</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
