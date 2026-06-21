import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clientes = [
  { nombre: 'Alarcón Ecografías', rubro: 'Profesional de la salud' },
  { nombre: 'Tatitos Pañalera', rubro: 'Comercio minorista' },
  { nombre: 'Pura Vida Tatuajes', rubro: 'Estudio de tatuajes' },
  { nombre: 'Brisa Latina Festa', rubro: 'Entretenimiento & eventos' },
  { nombre: 'Legales Rafaela', rubro: 'Estudio jurídico' },
  { nombre: 'Honky Donky', rubro: 'Gastronomía' },
  { nombre: 'Biagosch', rubro: 'Artista plástico' },
  { nombre: 'Martinez Training', rubro: 'Fitness & entrenamiento' },
]
const clientesMarquee = [...clientes, ...clientes]

export default function Clientes() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="py-16 px-6 overflow-hidden border-y border-white/5">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center text-crema/30 text-xs tracking-widest uppercase mb-10">
          Marcas que confían en JuanoConecta
        </p>

        {/* Marquee container */}
        <div className="relative">
          {/* Fade izquierdo */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-fondo to-transparent z-10 pointer-events-none" />
          {/* Fade derecho */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-fondo to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee gap-10 whitespace-nowrap items-center">
            {clientesMarquee.map((cliente, i) => (
              <div key={i} className="flex items-center gap-4 flex-shrink-0">
                <span className="w-1 h-1 rounded-full bg-acento/40 flex-shrink-0" />
                <div className="flex flex-col leading-tight">
                  <span className="text-crema/80 font-semibold text-sm tracking-tight">
                    {cliente.nombre}
                  </span>
                  <span className="text-crema/30 text-[11px] font-normal">
                    {cliente.rubro}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
