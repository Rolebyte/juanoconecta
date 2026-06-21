import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'jc_popup_cerrado'

export default function PopupLeadMagnet() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    // No mostrar si ya lo cerró antes
    if (localStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => setVisible(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  function cerrar() {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, '1')
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
    setTimeout(cerrar, 2500)
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
                      placeholder="Ingresá tu email profesional"
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
                <div className="text-center py-4">
                  <div className="text-4xl mb-3">🎉</div>
                  <h3 className="text-crema text-lg font-bold mb-2">¡Ya están en camino!</h3>
                  <p className="text-crema/50 text-sm">Revisá tu email en los próximos minutos.</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
