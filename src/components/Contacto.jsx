import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const WA_LINK = 'https://wa.me/543492627811?text=Hola%20Juan%2C%20quiero%20contactarte'

const serviciosOpciones = [
  'Community Management',
  'Meta Ads',
  'Diseño Gráfico',
  'Web Design con IA',
  'Branding',
  'Copywriting + IA',
  'Auditoría IA',
  'Otro',
]

export default function Contacto() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })
  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setCargando(true)
    setError(false)
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mgojewnq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setEnviado(true)
        form.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setCargando(false)
    }
  }

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-acento text-sm font-semibold tracking-widest uppercase">Hablemos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-crema mt-3">Contacto</h2>
          <p className="text-crema/40 mt-4 max-w-md mx-auto">
            ¿Listo para hacer crecer tu marca? Escribime y te respondo en menos de 24hs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {enviado ? (
              <div className="bg-acento/10 border border-acento/30 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-acento/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-acento" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-crema text-xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-crema/50">Te respondo en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre */}
                <div>
                  <label className="block text-crema/60 text-sm mb-2">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    className="w-full bg-card-bg border border-card-border text-crema placeholder-crema/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-acento/50 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-crema/60 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full bg-card-bg border border-card-border text-crema placeholder-crema/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-acento/50 transition-colors"
                  />
                </div>

                {/* Servicio dropdown */}
                <div>
                  <label className="block text-crema/60 text-sm mb-2">Servicio de interés</label>
                  <select
                    name="servicio"
                    className="w-full bg-card-bg border border-card-border text-crema rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-acento/50 transition-colors appearance-none"
                  >
                    <option value="">Seleccioná un servicio</option>
                    {serviciosOpciones.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-crema/60 text-sm mb-2">Mensaje</label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    required
                    placeholder="Contame sobre tu proyecto..."
                    className="w-full bg-card-bg border border-card-border text-crema placeholder-crema/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-acento/50 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center py-2 px-4 rounded-xl bg-red-400/10 border border-red-400/20">
                    Hubo un error al enviar. Intentá de nuevo o escribime por WhatsApp.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={cargando}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-acento hover:bg-acento-dark text-white font-semibold rounded-xl transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {cargando ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Enviar mensaje
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {[
              {
                icono: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ),
                titulo: 'WhatsApp',
                valor: '+54 9 3492 627811',
                href: WA_LINK,
              },
              {
                icono: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                titulo: 'Email',
                valor: 'juanoconecta@gmail.com',
                href: 'mailto:juanoconecta@gmail.com',
              },
              {
                icono: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                titulo: 'Ubicación',
                valor: 'Rafaela, Santa Fe, Argentina 🇦🇷',
                href: null,
              },
            ].map((item) => (
              <div key={item.titulo} className="flex items-start gap-4 p-5 bg-card-bg border border-card-border rounded-xl hover:border-acento/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-acento/10 flex items-center justify-center text-acento flex-shrink-0">
                  {item.icono}
                </div>
                <div>
                  <p className="text-crema/40 text-xs mb-1">{item.titulo}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-crema font-medium hover:text-acento transition-colors">
                      {item.valor}
                    </a>
                  ) : (
                    <p className="text-crema font-medium">{item.valor}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Respuesta rápida */}
            <div className="mt-2 p-5 bg-acento/10 border border-acento/20 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">Disponible ahora</span>
              </div>
              <p className="text-crema/60 text-sm">Te respondo en menos de 24 horas en días hábiles.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
