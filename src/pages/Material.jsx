import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { Eyebrow, GridGlow, GlowCard, BtnPrimary, BtnGhost, Reveal } from '../components/home/ui'
import { MATERIALES } from '../data/materiales'

const WA_CONSULTA = 'https://wa.me/543492627811?text=' + encodeURIComponent('Hola Juan, estuve en la capacitación Emprender con IA y tengo una consulta.')

const ars = (n) => '$' + n.toLocaleString('es-AR')
const vigente = (b) => b && Date.now() <= new Date(b.vence).getTime()

// El código se guarda en el navegador para que no tengan que responder la encuesta de nuevo
const claveCupon = (slug) => `jc_cupon_${slug}`
function leerCupon(slug) {
  try { return localStorage.getItem(claveCupon(slug)) || '' } catch { return '' }
}
function guardarCupon(slug, codigo) {
  try { localStorage.setItem(claveCupon(slug), codigo) } catch { /* sin almacenamiento: igual sigue */ }
}

function Beneficio({ b, codigo }) {
  if (!vigente(b)) return null
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
            {codigo ? (
              <>
                <div className="flex flex-wrap items-center gap-3 mt-5">
                  <span className="rounded-xl border border-dashed border-teal/60 bg-teal/10 px-4 py-2 font-mono font-bold tracking-wider text-teal">{codigo}</span>
                  <span className="text-crema/50 text-sm">Válido hasta el {b.venceTexto}</span>
                </div>
                <div className="mt-6"><BtnPrimary href="#canjear">Usar mi descuento</BtnPrimary></div>
              </>
            ) : (
              <>
                <p className="text-crema/60 mt-3">Para desbloquearlo, contanos en 1 minuto qué te pareció la capacitación. Válido hasta el {b.venceTexto}.</p>
                <div className="mt-6"><BtnPrimary href="#encuesta">Completar la encuesta</BtnPrimary></div>
              </>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

const OPC_RECOMIENDA = [['si', 'Sí'], ['tal-vez', 'Tal vez'], ['no', 'No']]
const OPC_INTERESES = [['redes', 'Redes sociales'], ['web', 'Página web'], ['ia-equipo', 'Capacitación en IA para mi equipo'], ['auditoria', 'Auditoría de mi perfil'], ['nada', 'Nada por ahora']]
const campo = 'w-full bg-fondo border border-white/15 rounded-2xl px-5 py-3.5 text-crema placeholder:text-crema/30 focus:outline-none focus:border-acento'

function Chip({ activo, onClick, children, role = 'radio' }) {
  return (
    <button type="button" role={role} aria-checked={activo} onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${activo ? 'border-acento bg-acento text-white' : 'border-white/15 text-crema/80 hover:border-white/35'}`}>
      {children}
    </button>
  )
}

function Encuesta({ slug, b, onListo }) {
  const [f, setF] = useState({ puntaje: 0, recomienda: '', lo_mas_util: '', mejoras: '', intereses: [], nombre: '', contacto: '' })
  const [estado, setEstado] = useState('')
  const set = (k, v) => setF((x) => ({ ...x, [k]: v }))
  const alternar = (id) => set('intereses', id === 'nada'
    ? (f.intereses.includes('nada') ? [] : ['nada'])
    : (f.intereses.includes(id) ? f.intereses.filter((x) => x !== id) : [...f.intereses.filter((x) => x !== 'nada'), id]))
  const completo = f.puntaje > 0 && f.recomienda

  async function enviar(e) {
    e.preventDefault()
    if (!completo || estado === 'enviando') return
    setEstado('enviando')
    try {
      const r = await fetch('/api/encuesta', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ material: slug, ...f }) })
      const data = await r.json()
      if (data.codigo) { guardarCupon(slug, data.codigo); onListo(data.codigo); return }
      setEstado('error')
    } catch {
      setEstado('error')
    }
  }

  return (
    <Reveal>
      <form id="encuesta" onSubmit={enviar} className="scroll-mt-28 rounded-3xl border border-white/10 bg-[#0F1629] p-6 md:p-8 space-y-7">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">¿Qué te pareció la capacitación?</h2>
          <p className="text-crema/60 mt-2">Es 1 minuto y nos ayuda a mejorar. Al enviarla se desbloquea tu {b.porcentaje}% de descuento.</p>
        </div>

        <fieldset>
          <legend className="font-semibold text-crema mb-3">Puntaje general <span className="text-acento">*</span></legend>
          <div className="flex gap-2" role="radiogroup" aria-label="Puntaje del 1 al 5">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} type="button" role="radio" aria-checked={f.puntaje === n} aria-label={`${n} de 5`} onClick={() => set('puntaje', n)}
                className={`w-12 h-12 rounded-2xl border text-lg font-bold transition-colors ${f.puntaje >= n ? 'border-acento bg-acento text-white' : 'border-white/15 text-crema/60 hover:border-white/35'}`}>
                {n}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-semibold text-crema mb-3">¿Se la recomendarías a otro emprendedor? <span className="text-acento">*</span></legend>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Recomendación">
            {OPC_RECOMIENDA.map(([id, t]) => <Chip key={id} activo={f.recomienda === id} onClick={() => set('recomienda', id)}>{t}</Chip>)}
          </div>
        </fieldset>

        <label className="block">
          <span className="block font-semibold text-crema mb-3">¿Qué fue lo más útil?</span>
          <textarea rows={2} maxLength={1000} value={f.lo_mas_util} onChange={(e) => set('lo_mas_util', e.target.value)} className={campo} placeholder="Una herramienta, un ejemplo, la fórmula de prompts…" />
        </label>

        <label className="block">
          <span className="block font-semibold text-crema mb-3">¿Qué mejorarías o qué te faltó?</span>
          <textarea rows={2} maxLength={1000} value={f.mejoras} onChange={(e) => set('mejoras', e.target.value)} className={campo} placeholder="Más tiempo de práctica, otro tema…" />
        </label>

        <fieldset>
          <legend className="font-semibold text-crema mb-3">¿Querés que te contacte para alguna de estas cosas?</legend>
          <div className="flex flex-wrap gap-2">
            {OPC_INTERESES.map(([id, t]) => <Chip key={id} role="checkbox" activo={f.intereses.includes(id)} onClick={() => alternar(id)}>{t}</Chip>)}
          </div>
        </fieldset>

        <div className="grid sm:grid-cols-2 gap-3">
          <input maxLength={120} value={f.nombre} onChange={(e) => set('nombre', e.target.value)} className={campo} placeholder="Tu nombre (opcional)" aria-label="Nombre" />
          <input maxLength={160} value={f.contacto} onChange={(e) => set('contacto', e.target.value)} className={campo} placeholder="WhatsApp o email (opcional)" aria-label="WhatsApp o email" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-t border-white/10 pt-6">
          <button type="submit" disabled={!completo || estado === 'enviando'}
            className={`inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold text-sm transition-all ${completo ? 'bg-acento hover:bg-acento-dark text-white shadow-[0_10px_40px_-10px_rgba(61,123,255,0.8)]' : 'bg-white/10 text-crema/50 cursor-not-allowed'}`}>
            {estado === 'enviando' ? 'Enviando…' : `Enviar y desbloquear mi ${b.porcentaje}%`}
          </button>
          <span className="text-sm text-crema/40">{completo ? 'Listo para enviar' : 'Completá el puntaje y si la recomendarías'}</span>
        </div>
        {estado === 'error' && (
          <p className="text-sm text-red-300">No pudimos enviar la encuesta. Probá de nuevo en un momento o <a href={WA_CONSULTA} target="_blank" rel="noopener noreferrer" className="underline">escribinos por WhatsApp</a>.</p>
        )}
      </form>
    </Reveal>
  )
}

function Canjear({ b, codigo }) {
  const [elegido, setElegido] = useState(b.servicios[0].id)
  const s = b.servicios.find((x) => x.id === elegido)
  const final = s.precio ? Math.round(s.precio * (1 - b.porcentaje / 100)) : null
  const wa = 'https://wa.me/543492627811?text=' + encodeURIComponent(`Hola Juan, participé de la capacitación y quiero contratar "${s.nombre}" con el código ${codigo} (${b.porcentaje}% de descuento).`)
  const [estado, setEstado] = useState('')

  async function pagar(e) {
    if (!s.precio) return
    e.preventDefault()
    setEstado('cargando')
    try {
      const r = await fetch('/api/crear-pago', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ material: b.slug, servicio: s.id, codigo }),
      })
      const data = await r.json()
      if (data.url) { window.location.href = data.url; return }
      setEstado('error')
    } catch {
      setEstado('error')
    }
  }

  return (
    <Reveal>
      <div id="canjear" className="scroll-mt-28 rounded-3xl border border-white/10 bg-[#0F1629] p-6 md:p-8">
        <h2 className="text-2xl font-bold tracking-tight">Elegí tu servicio</h2>
        <p className="text-teal text-sm font-semibold mt-2">✓ Código {codigo} aplicado: {b.porcentaje}% de descuento</p>
        <div className="grid gap-3 mt-6" role="radiogroup" aria-label="Servicio">
          {b.servicios.map((x) => {
            const activo = x.id === elegido
            return (
              <button key={x.id} type="button" role="radio" aria-checked={activo} onClick={() => setElegido(x.id)}
                className={`text-left flex items-center gap-4 rounded-2xl border px-5 py-4 transition-colors ${activo ? 'border-acento bg-acento/10' : 'border-white/10 hover:border-white/25'}`}>
                <span className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${activo ? 'border-acento bg-acento shadow-[inset_0_0_0_3px_#0F1629]' : 'border-white/30'}`} />
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-crema">{x.nombre}</span>
                  <span className="block text-sm text-crema/50">{x.detalle}</span>
                </span>
                <span className="text-right whitespace-nowrap">
                  {x.precio ? (
                    <>
                      <span className="block text-xs text-crema/40 line-through">{ars(x.precio)}</span>
                      <span className="block font-bold text-teal">{ars(Math.round(x.precio * (1 - b.porcentaje / 100)))}</span>
                    </>
                  ) : <span className="text-sm text-crema/60">A cotizar</span>}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div>
            <div className="text-sm text-crema/50">Total</div>
            <div className="text-3xl font-bold text-crema">{final ? ars(final) : 'A cotizar'}</div>
          </div>
          <a href={wa} onClick={pagar} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-sm transition-all bg-acento hover:bg-acento-dark text-white shadow-[0_10px_40px_-10px_rgba(61,123,255,0.8)]">
            {estado === 'cargando' ? 'Abriendo Mercado Pago…' : s.precio ? 'Pagar con Mercado Pago' : 'Pedir presupuesto por WhatsApp'}
          </a>
        </div>
        {estado === 'error' && (
          <p className="mt-4 text-sm text-red-300">No pudimos abrir el pago. <a href={wa} target="_blank" rel="noopener noreferrer" className="underline">Escribinos por WhatsApp</a> y lo resolvemos.</p>
        )}
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

function ResultadoPago() {
  const r = new URLSearchParams(window.location.search).get('pago')
  if (!r) return null
  const msj = {
    aprobado: ['¡Pago aprobado!', 'Gracias. Te escribo en las próximas horas para coordinar el arranque.', 'border-teal/50 bg-teal/10'],
    pendiente: ['Pago pendiente', 'Mercado Pago está procesando el pago. Te aviso apenas se acredite.', 'border-yellow-400/40 bg-yellow-400/10'],
    rechazado: ['El pago no se completó', 'Podés intentarlo de nuevo más abajo o escribirme por WhatsApp.', 'border-red-400/40 bg-red-400/10'],
  }[r]
  if (!msj) return null
  return (
    <div className={`max-w-3xl mx-auto mb-10 rounded-2xl border px-6 py-5 ${msj[2]}`} role="status">
      <div className="font-bold text-crema">{msj[0]}</div>
      <div className="text-crema/70 mt-1">{msj[1]}</div>
    </div>
  )
}

export default function Material() {
  const { slug } = useParams()
  const m = (slug ? MATERIALES.find((x) => x.slug === slug) : null) || MATERIALES[0]
  const [codigo, setCodigo] = useState(() => leerCupon(m.slug))

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
        <ResultadoPago />
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

          <Beneficio b={m.beneficio} codigo={codigo} />
          {vigente(m.beneficio) && (codigo
            ? <Canjear b={{ ...m.beneficio, slug: m.slug }} codigo={codigo} />
            : <Encuesta slug={m.slug} b={m.beneficio} onListo={(c) => { setCodigo(c); setTimeout(() => document.getElementById('canjear')?.scrollIntoView({ behavior: 'smooth' }), 100) }} />)}

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
