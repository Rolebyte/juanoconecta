import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Eyebrow, GridGlow, BtnGhost } from '../components/home/ui'
import { pixel } from '../pixel'
import { SERVICIOS_OPINION } from '../data/opiniones'

// Página para que los clientes dejen su opinión al terminar un trabajo. Se comparte por link
// (juanoconecta.ar/opinion o /opinion?servicio=web) y no aparece en el menú. Lo enviado se ve en el home.
const campo = 'w-full bg-fondo border border-white/15 rounded-2xl px-5 py-3.5 text-crema placeholder:text-crema/30 focus:outline-none focus:border-acento'
const ETIQUETAS = ['', 'Malo', 'Regular', 'Bueno', 'Muy bueno', '¡Excelente!']
const ERRORES = { sin_links: 'Sacá los links del comentario y probá de nuevo.', falta_texto: 'Contanos un poco más en el comentario.' }

function Estrella({ llena }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-10 h-10 md:w-12 md:h-12 transition-colors ${llena ? 'text-amber-400' : 'text-white/15'}`} fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
    </svg>
  )
}

export default function Opinion() {
  const [params] = useSearchParams()
  const inicial = SERVICIOS_OPINION.some((s) => s.id === params.get('servicio')) ? params.get('servicio') : ''
  const [f, setF] = useState({ estrellas: 0, servicio: inicial, nombre: '', negocio: '', texto: '', contacto: '', web: '' })
  const [hover, setHover] = useState(0)
  const [estado, setEstado] = useState('')
  const set = (k, v) => setF((x) => ({ ...x, [k]: v }))
  const completo = f.estrellas > 0 && f.servicio && f.nombre.trim() && f.texto.trim().length >= 10
  const faltan = [!f.estrellas && 'las estrellas', !f.servicio && 'el servicio', !f.nombre.trim() && 'tu nombre', f.texto.trim().length < 10 && 'tu comentario'].filter(Boolean)

  async function enviar(e) {
    e.preventDefault()
    if (!completo || estado === 'enviando') return
    setEstado('enviando')
    try {
      const r = await fetch('/api/encuesta?tipo=opinion', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) })
      const data = await r.json().catch(() => ({}))
      if (r.ok && data.ok) { pixel('Lead', { content_name: 'opinion' }); setEstado('listo'); window.scrollTo({ top: 0, behavior: 'smooth' }); return }
      setEstado(data.error || 'error')
    } catch {
      setEstado('error')
    }
  }

  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>Dejanos tu opinión | JuanoConecta</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />

      <section className="pt-40 pb-10 px-6 relative overflow-hidden">
        <GridGlow />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative max-w-2xl mx-auto text-center">
          <Eyebrow>Tu opinión</Eyebrow>
          {estado === 'listo' ? (
            <>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mt-6">¡Gracias, {f.nombre.trim().split(' ')[0]}!</h1>
              <p className="text-crema/70 text-lg mt-6">Tu opinión ya está publicada en la web. Nos ayuda muchísimo a que otros negocios confíen en nosotros.</p>
              <div className="mt-8"><BtnGhost href="/#opiniones">Ver las opiniones</BtnGhost></div>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mt-6">¿Cómo fue trabajar con nosotros?</h1>
              <p className="text-crema/70 text-lg mt-6">Es un minuto. Tu opinión se publica en la web y ayuda a otros negocios a conocernos.</p>
            </>
          )}
        </motion.div>
      </section>

      {estado !== 'listo' && (
        <section className="px-6 pb-24">
          <form onSubmit={enviar} className="max-w-2xl mx-auto rounded-3xl border border-white/10 bg-[#0F1629] p-6 md:p-8 space-y-8">
            <fieldset>
              <legend className="font-semibold text-crema mb-3">¿Cuántas estrellas nos das? <span className="text-acento">*</span></legend>
              <div className="flex flex-wrap items-center gap-1" role="radiogroup" aria-label="Estrellas del 1 al 5" onMouseLeave={() => setHover(0)}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} type="button" role="radio" aria-checked={f.estrellas === n} aria-label={`${n} de 5`}
                    onClick={() => set('estrellas', n)} onMouseEnter={() => setHover(n)} className="p-0.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-acento">
                    <Estrella llena={(hover || f.estrellas) >= n} />
                  </button>
                ))}
                <span className="w-full sm:w-auto sm:ml-3 mt-1 sm:mt-0 min-h-[1.25rem] text-crema/60 text-sm font-semibold">{ETIQUETAS[hover || f.estrellas]}</span>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-semibold text-crema mb-3">¿Qué servicio te brindamos? <span className="text-acento">*</span></legend>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Servicio">
                {SERVICIOS_OPINION.map((s) => (
                  <button key={s.id} type="button" role="radio" aria-checked={f.servicio === s.id} onClick={() => set('servicio', s.id)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${f.servicio === s.id ? 'border-acento bg-acento text-white' : 'border-white/15 text-crema/80 hover:border-white/35'}`}>
                    {s.nombre}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="block">
              <span className="block font-semibold text-crema mb-3">Contanos tu experiencia <span className="text-acento">*</span></span>
              <textarea rows={4} maxLength={600} value={f.texto} onChange={(e) => set('texto', e.target.value)} className={campo}
                placeholder="¿Qué necesitabas, cómo fue el trabajo y qué cambió después?" />
              <span className="block text-right text-xs text-crema/35 mt-1">{f.texto.length}/600</span>
            </label>

            <div className="grid sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="block text-sm font-semibold text-crema mb-2">Tu nombre <span className="text-acento">*</span></span>
                <input maxLength={80} value={f.nombre} onChange={(e) => set('nombre', e.target.value)} className={campo} placeholder="Ej.: Laura Gómez" autoComplete="name" />
              </label>
              <label className="block">
                <span className="block text-sm font-semibold text-crema mb-2">Tu negocio</span>
                <input maxLength={80} value={f.negocio} onChange={(e) => set('negocio', e.target.value)} className={campo} placeholder="Ej.: Cabañas Los Pinos" autoComplete="organization" />
              </label>
            </div>

            <label className="block">
              <span className="block text-sm font-semibold text-crema mb-2">WhatsApp o email <span className="text-crema/40 font-normal">(opcional, no se publica)</span></span>
              <input maxLength={160} value={f.contacto} onChange={(e) => set('contacto', e.target.value)} className={campo} placeholder="Por si queremos agradecerte" />
            </label>

            {/* Campo trampa para bots: las personas no lo ven */}
            <input type="text" name="web" tabIndex={-1} autoComplete="off" value={f.web} onChange={(e) => set('web', e.target.value)} className="hidden" aria-hidden="true" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-t border-white/10 pt-6">
              <button type="submit" disabled={!completo || estado === 'enviando'}
                className={`inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold text-sm transition-all ${completo ? 'bg-acento hover:bg-acento-dark text-white shadow-[0_10px_40px_-10px_rgba(61,123,255,0.8)]' : 'bg-white/10 text-crema/50 cursor-not-allowed'}`}>
                {estado === 'enviando' ? 'Enviando…' : 'Publicar mi opinión'}
              </button>
              <span className="text-sm text-crema/40">{completo ? 'Se publica con tu nombre y tu negocio' : `Falta: ${faltan.join(', ')}`}</span>
            </div>
            {estado && !['enviando', 'listo'].includes(estado) && (
              <p className="text-sm text-red-300">{ERRORES[estado] || 'No pudimos enviar tu opinión. Probá de nuevo en un momento.'}</p>
            )}
          </form>
        </section>
      )}

      <Footer />
    </div>
  )
}
