import { motion } from 'framer-motion'
import { CURSO } from '../data/curso'

export default function CursoIA() {
  return (
    <section id="curso-ia" className="py-24 px-6 relative overflow-hidden bg-[#2D2D44]">
      {/* Círculos decorativos */}
      <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border-2 border-acento/25 pointer-events-none" />
      <div className="absolute -left-16 -bottom-20 w-56 h-56 rounded-full border-2 border-teal/25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block border border-teal text-teal text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded mb-6">
            Formación
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-crema leading-tight mb-5">
            La IA ya está en tu trabajo. <span className="text-acento">Aprendé a usarla a tu favor.</span>
          </h2>
          <p className="text-crema/60 text-lg leading-relaxed mb-8 max-w-xl">{CURSO.bajada}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/curso-ia"
              className="px-8 py-4 rounded-full font-semibold text-sm bg-acento hover:bg-acento-dark text-white text-center transition-colors"
            >
              Ver el temario
            </a>
            <a
              href={CURSO.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-sm border border-white/15 text-crema hover:border-teal/60 text-center transition-colors"
            >
              Sumarme a la lista de espera
            </a>
          </div>
          <p className="text-crema/40 text-sm mt-6">{CURSO.estado}</p>
        </motion.div>

        <motion.ol
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid gap-4"
        >
          {CURSO.modulos.map((m, i) => (
            <li key={m.titulo} className="flex gap-5 items-start bg-fondo/60 border border-white/5 rounded-2xl p-5">
              <span className="text-3xl font-bold text-acento leading-none tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-crema font-semibold mb-1">{m.titulo}</h3>
                <p className="text-crema/50 text-sm leading-relaxed">{m.detalle}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
