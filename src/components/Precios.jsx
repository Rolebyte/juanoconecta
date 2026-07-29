import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WA_BASE = 'https://wa.me/543492627811?text=Hola%20Juan%2C%20me%20interesa%20el%20plan%20'

const planes = [
  {
    nombre: 'Starter',
    precio: '$320.000',
    periodo: '/mes',
    descripcion: 'Para negocios que recién arrancan en redes.',
    features: [
      '2 redes sociales gestionadas',
      '12 publicaciones mensuales',
      'Diseño gráfico incluido',
      'Respuesta a comentarios',
      'Reporte mensual de métricas',
    ],
    wa: WA_BASE + 'Starter',
    destacado: false,
  },
  {
    nombre: 'Pro',
    precio: '$550.000',
    periodo: '/mes',
    descripcion: 'El más elegido. Para negocios que quieren escalar.',
    features: [
      '3 redes sociales gestionadas',
      '20 publicaciones mensuales',
      'Diseño gráfico + Reels/Stories',
      'Meta Ads básico incluido',
      'Copywriting con IA',
      'Reporte semanal + reunión mensual',
    ],
    wa: WA_BASE + 'Pro',
    destacado: true,
  },
  {
    nombre: 'Full',
    precio: '$850.000',
    periodo: '/mes',
    descripcion: 'Presencia digital completa con IA potenciada.',
    features: [
      '4 redes sociales gestionadas',
      'Publicaciones ilimitadas',
      'Meta Ads avanzado + optimización',
      'Branding y diseño integral',
      'Web landing incluida',
      'Soporte prioritario 7 días',
      'Estrategia de contenido con IA',
    ],
    wa: WA_BASE + 'Full',
    destacado: false,
  },
]

const check = (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

export default function Precios() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="precios" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(196,132,106,0.07) 0%, transparent 60%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #0A0A0A, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-acento text-sm font-semibold tracking-widest uppercase">Inversión</span>
          <h2 className="text-3xl md:text-5xl font-bold text-crema mt-4 mb-5">
            Planes y precios
          </h2>
          <p className="text-crema/35 max-w-md mx-auto leading-relaxed">
            Sin contratos largos. Sin sorpresas. Empezás cuando querés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {planes.map((plan, i) => (
            <motion.div
              key={plan.nombre}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col rounded-2xl p-8"
              style={{
                background: plan.destacado
                  ? 'linear-gradient(135deg, rgba(196,132,106,0.15) 0%, rgba(196,132,106,0.05) 100%)'
                  : 'rgba(255,255,255,0.025)',
                border: plan.destacado
                  ? '1px solid rgba(196,132,106,0.4)'
                  : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {plan.destacado && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-acento text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-wider whitespace-nowrap">
                  MÁS ELEGIDO
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-crema mb-1">{plan.nombre}</h3>
                <p className="text-crema/40 text-sm leading-relaxed">{plan.descripcion}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-crema">{plan.precio}</span>
                <span className="text-crema/35 text-sm ml-1">{plan.periodo}</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-crema/65">
                    <span className="text-acento mt-0.5">{check}</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300"
                style={
                  plan.destacado
                    ? {
                        background: 'linear-gradient(135deg, #C4846A, #E8A882)',
                        color: '#fff',
                      }
                    : {
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#F5F0EB',
                      }
                }
                onMouseEnter={(e) => {
                  if (!plan.destacado) {
                    e.currentTarget.style.background = 'rgba(196,132,106,0.15)'
                    e.currentTarget.style.borderColor = 'rgba(196,132,106,0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.destacado) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Quiero este plan
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-crema/25 text-xs mt-10"
        >
          Precios en pesos argentinos · IVA no incluido · Servicios adicionales a consultar
        </motion.p>
      </div>
    </section>
  )
}
