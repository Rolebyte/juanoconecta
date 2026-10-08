import { motion } from 'framer-motion'

// Aclara para quién es cada plan, según el tarifario de la Cámara de Diseñadores (Particular / PyME / Empresa).
// Se usa debajo de los planes en /redes-sociales-para-negocios-rafaela y /community-manager-rafaela.
const SEGMENTOS = [
  { quien: 'Emprendedores', planes: 'Plan Emprende', color: '#22D3EE' },
  { quien: 'Pymes y empresas', planes: 'Starter · Pro · Full', color: '#3D7BFF' },
  { quien: 'Industrias', planes: 'Propuesta a medida', color: '#8FC46A', detalle: 'Varias marcas o equipos' },
]

export default function NotaPlanes({ wa }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-12 max-w-4xl mx-auto rounded-2xl p-[1px] overflow-hidden"
    >
      {/* Borde con brillo que recorre la tarjeta */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.15), rgba(61,123,255,0.6), rgba(143,196,106,0.15), rgba(34,211,238,0.15))', backgroundSize: '300% 100%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <div className="relative rounded-2xl bg-[#0E1426] px-6 py-7 md:px-8">
        <p className="text-center text-crema/45 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">¿Qué plan es para vos?</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0">
          {SEGMENTOS.map((s, i) => {
            const contenido = (
              <>
                <motion.span
                  className="block w-2 h-2 rounded-full mx-auto mb-3"
                  style={{ background: s.color, boxShadow: `0 0 12px ${s.color}` }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8 }}
                />
                <span className="block text-crema font-semibold">{s.quien}</span>
                <span className="block text-sm font-bold mt-1" style={{ color: s.color }}>{s.planes}</span>
                {s.detalle && <span className="block text-crema/40 text-xs mt-1">{s.detalle}</span>}
              </>
            )
            return (
              <motion.div
                key={s.quien}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className={`text-center px-4 py-2 ${i > 0 ? 'md:border-l md:border-white/10' : ''}`}
              >
                {s.detalle ? (
                  <a href={`${wa}%20-%20propuesta%20para%20empresa`} target="_blank" rel="noopener noreferrer"
                    className="block rounded-xl py-2 transition-colors duration-300 hover:bg-white/[0.04] group">
                    {contenido}
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-crema/70 mt-2 group-hover:text-crema">
                      Escribime
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                ) : <div className="py-2">{contenido}</div>}
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
