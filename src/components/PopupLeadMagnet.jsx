import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pixel } from '../pixel'

const STORAGE_KEY = 'jc_popup_cerrado'

export default function PopupLeadMagnet({ forceOpen = 0 }) {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (forceOpen > 0) { setVisible(true); setEnviado(false); setEmail(''); setError(''); return }
    if (localStorage.getItem(STORAGE_KEY)) return
    // Aparece cuando la persona ya recorrió la mitad de la página
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max > 0 && window.scrollY / max >= 0.5) {
        setVisible(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [forceOpen])

  function cerrar() {
    setVisible(false)
    if (forceOpen === 0) localStorage.setItem(STORAGE_KEY, '1')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: forceOpen > 0 ? 'boton' : 'popup' }),
      })
      const data = await res.json()
      if (data.ok) {
        setEnviado(true)
        pixel('Lead', { content_name: 'material-gratis' })
      } else {
        setError('Hubo un problema. Intentá de nuevo.')
      }
    } catch {
      setError('Hubo un problema. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay oscuro con blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={cerrar}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none"
          >
            <div className="bg-[#141C33] border border-card-border rounded-2xl p-6 sm:p-8 max-w-md w-full pointer-events-auto relative overflow-hidden">

              {/* Glow de fondo */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-acento/20 rounded-full blur-3xl pointer-events-none" />

              {/* Botón cerrar */}
              <button
                onClick={cerrar}
                aria-label="Cerrar"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-crema/50 hover:text-crema flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {!enviado ? (
                <>
                  <div className="flex gap-5 items-start mb-6">
                    <motion.img
                      src="/img/prompts-portada.webp"
                      alt="Portada de la guía 5 prompts para crear contenido con IA"
                      width="300" height="424"
                      initial={{ rotate: -8, y: 10, opacity: 0 }}
                      animate={{ rotate: -4, y: 0, opacity: 1 }}
                      transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 18 }}
                      className="w-[84px] shrink-0 rounded-lg shadow-2xl shadow-acento/30 border border-white/10"
                    />
                    <div className="min-w-0 pt-1">
                      <span className="inline-block text-[10px] font-bold tracking-[0.18em] text-[#22D3EE] border border-[#22D3EE]/40 rounded-full px-2.5 py-1 mb-3">GUÍA GRATIS</span>
                      <h3 className="text-xl font-bold text-crema leading-tight">
                        5 prompts para crear contenido <span className="text-acento">con IA</span>
                      </h3>
                    </div>
                  </div>
                  <p className="text-crema/60 text-sm mb-6">
                    Copiá, pegá en ChatGPT, Claude o Gemini y tené el contenido de la semana en minutos. Dejá tu correo y descargala al instante.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Tu correo"
                      aria-label="Tu correo"
                      className="w-full bg-card-bg border border-card-border text-crema placeholder-crema/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-acento/50 transition-colors"
                    />
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-acento hover:bg-acento-dark disabled:opacity-60 text-white font-semibold rounded-xl transition-colors"
                    >
                      {loading ? 'Enviando…' : 'Quiero la guía gratis →'}
                    </motion.button>
                    {error && <p className="text-red-300 text-xs text-center">{error}</p>}
                  </form>

                  <p className="text-crema/30 text-xs text-center mt-3">Sin spam. Te podés dar de baja cuando quieras.</p>
                </>
              ) : (
                <div className="text-center py-1">
                  <h3 className="text-crema text-lg font-bold mb-1">¡Listo! Acá está tu guía</h3>
                  <p className="text-crema/50 text-xs mb-4">Descargala ahora y guardala para cuando la necesites.</p>

                  <a
                    href="/5-prompts-gratis.pdf"
                    download
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white mb-5 transition-all hover:opacity-90 bg-acento"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar la guía (PDF)
                  </a>

                  {/* Próximo paso: la auditoría */}
                  <div className="rounded-xl p-4 mb-4 text-left border border-acento/30 bg-acento/[0.08]">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-[#22D3EE] mb-1.5">EL PRÓXIMO PASO</p>
                    <p className="text-crema text-sm font-semibold mb-1">¿Tu Instagram no trae consultas?</p>
                    <p className="text-crema/55 text-xs mb-4">
                      En la auditoría con IA reviso tu perfil, te doy un plan de mejora y lo vemos juntos en una sesión 1 a 1. Desde $120.000.
                    </p>
                    <a
                      href="https://wa.me/5493492627811?text=Hola%20Juan%2C%20descargu%C3%A9%20la%20gu%C3%ADa%20de%20prompts%20y%20quiero%20saber%20m%C3%A1s%20de%20la%20auditor%C3%ADa"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Consultar por la auditoría por WhatsApp"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-sm text-white bg-[#25D366] hover:opacity-90 transition-opacity"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-xs">
                    <a href="https://instagram.com/juanoconecta" target="_blank" rel="noopener noreferrer" className="text-crema/50 hover:text-crema transition-colors">
                      Seguir @juanoconecta
                    </a>
                    <span className="text-crema/20">·</span>
                    <button onClick={cerrar} className="text-crema/40 hover:text-crema/70 transition-colors">Cerrar</button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
