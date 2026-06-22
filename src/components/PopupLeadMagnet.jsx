import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'jc_popup_cerrado'

export default function PopupLeadMagnet({ forceOpen = false, onClose }) {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    if (forceOpen) { setVisible(true); return }
    if (localStorage.getItem(STORAGE_KEY)) return
    const timer = setTimeout(() => setVisible(true), 10000)
    return () => clearTimeout(timer)
  }, [forceOpen])

  function cerrar() {
    setVisible(false)
    if (!forceOpen) localStorage.setItem(STORAGE_KEY, '1')
    onClose?.()
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // Enviar email a Formspree
    await fetch('https://formspree.io/f/mvznoewy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email, _subject: 'Lead Magnet - 5 prompts IA' }),
    })
    setEnviado(true)
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
            <div className="bg-[#141414] border border-card-border rounded-2xl p-8 max-w-md w-full pointer-events-auto relative overflow-hidden">

              {/* Glow de fondo */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-acento/20 rounded-full blur-3xl pointer-events-none" />

              {/* Botón cerrar */}
              <button
                onClick={cerrar}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-crema/50 hover:text-crema flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {!enviado ? (
                <>
                  {/* Ícono */}
                  <div className="w-14 h-14 rounded-2xl bg-acento/15 border border-acento/30 flex items-center justify-center text-2xl mb-5">
                    🤖
                  </div>

                  <h3 className="text-xl font-bold text-crema mb-2">
                    5 prompts para crear contenido con IA
                  </h3>
                  <p className="text-crema/50 text-sm mb-6">
                    Gratis. Descargalo ahora y empezá a crear contenido que convierte en minutos.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Ingresá tu correo"
                      className="w-full bg-card-bg border border-card-border text-crema placeholder-crema/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-acento/50 transition-colors"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-acento hover:bg-acento-dark text-white font-semibold rounded-xl transition-colors"
                    >
                      Quiero los prompts gratis →
                    </motion.button>
                  </form>

                  <p className="text-crema/20 text-xs text-center mt-3">Sin spam. Podés darte de baja cuando quieras.</p>
                </>
              ) : (
                <div className="text-center py-2">
                  <div className="text-4xl mb-3">🎉</div>
                  <h3 className="text-crema text-lg font-bold mb-2">¡Los prompts están en camino!</h3>
                  <p className="text-crema/45 text-sm mb-6">
                    Revisá tu email en los próximos minutos.<br />
                    <span className="text-crema/30">Mientras tanto —</span>
                  </p>

                  {/* Instagram CTA */}
                  <div
                    className="rounded-xl p-4 mb-4"
                    style={{ background: 'linear-gradient(135deg, rgba(131,58,180,0.12), rgba(196,132,106,0.08))', border: '1px solid rgba(196,132,106,0.2)' }}
                  >
                    <p className="text-crema text-sm font-semibold mb-1">
                      ¿Querés seguir aprendiendo gratis?
                    </p>
                    <p className="text-crema/40 text-xs mb-4">
                      En mi Instagram subo prompts, estrategias y casos reales cada semana — lo que no vas a encontrar en ningún otro lado.
                    </p>
                    <a
                      href="https://instagram.com/juanoconecta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #833AB4, #C13584, #E1306C)' }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Seguir @juanoconecta
                    </a>
                  </div>

                  <button
                    onClick={cerrar}
                    className="text-crema/25 text-xs hover:text-crema/50 transition-colors"
                  >
                    Ya te sigo, gracias →
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
