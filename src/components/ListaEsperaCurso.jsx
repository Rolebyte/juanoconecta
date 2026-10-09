import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CURSO } from '../data/curso'
import { pixel } from '../pixel'

// Formulario de la lista de espera del curso de IA. Guarda nombre y contacto (api/lista-espera.js),
// así cada persona anotada aparece en el panel /admin con sus datos.
export default function ListaEsperaCurso() {
  const [f, setF] = useState({ nombre: '', whatsapp: '', email: '', sitio: '' })
  const [estado, setEstado] = useState('') // '' | 'enviando' | 'listo'
  const [error, setError] = useState('')
  const cambiar = (k) => (e) => setF({ ...f, [k]: e.target.value })

  async function enviar(e) {
    e.preventDefault()
    setEstado('enviando'); setError('')
    try {
      const r = await fetch('/api/lista-espera', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) })
      const data = await r.json().catch(() => ({}))
      if (!r.ok || !data.ok) throw new Error(data.error || 'Hubo un problema. Intentá de nuevo.')
      setEstado('listo')
      pixel('Lead', { content_name: 'lista-espera-curso' })
    } catch (err) {
      setEstado(''); setError(err.message)
    }
  }

  const campo = 'w-full bg-[#0B1020]/70 border border-white/10 text-crema placeholder-crema/35 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-acento/60 transition-colors'

  return (
    <div className="max-w-md mx-auto text-left">
      <AnimatePresence mode="wait">
        {estado !== 'listo' ? (
          <motion.form key="form" onSubmit={enviar} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-3">
            <input className={campo} value={f.nombre} onChange={cambiar('nombre')} required placeholder="Tu nombre" aria-label="Tu nombre" autoComplete="name" />
            <input className={campo} value={f.whatsapp} onChange={cambiar('whatsapp')} required type="tel" inputMode="tel" placeholder="Tu WhatsApp (con código de área)" aria-label="Tu WhatsApp" autoComplete="tel" />
            <input className={campo} value={f.email} onChange={cambiar('email')} type="email" placeholder="Tu correo (opcional)" aria-label="Tu correo" autoComplete="email" />
            <input value={f.sitio} onChange={cambiar('sitio')} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" name="sitio" />
            <motion.button type="submit" disabled={estado === 'enviando'} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-acento hover:bg-acento-dark disabled:opacity-60 text-white font-semibold rounded-full transition-colors">
              {estado === 'enviando' ? 'Anotándote…' : 'Quiero anotarme'}
            </motion.button>
            {error && <p className="text-red-300 text-sm text-center">{error}</p>}
            <p className="text-crema/40 text-xs text-center">Te aviso por WhatsApp cuando abran las inscripciones. Sin spam.</p>
          </motion.form>
        ) : (
          <motion.div key="listo" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center rounded-2xl border border-acento/30 bg-acento/[0.08] p-7">
            <p className="text-2xl font-bold text-crema mb-2">¡Listo, {f.nombre.split(' ')[0]}!</p>
            <p className="text-crema/65 text-sm mb-5">Ya estás en la lista de espera. Te escribo apenas abran las inscripciones.</p>
            <a href={CURSO.wa} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#22D3EE] hover:text-crema transition-colors">
              ¿Tenés alguna pregunta? Escribime por WhatsApp →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
