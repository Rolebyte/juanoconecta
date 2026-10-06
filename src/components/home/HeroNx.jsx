import { motion } from 'framer-motion'
import { GridGlow, BtnPrimary, BtnGhost, WA } from './ui'

const iniciales = ['TP', 'AE', 'PV', 'BL', 'HD']

const fade = (d) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: d, ease: [0.16, 1, 0.3, 1] },
})

export default function HeroNx() {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 px-6">
      <GridGlow />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <motion.span {...fade(0)} className="inline-flex items-center gap-2 border border-acento/40 bg-acento/10 text-crema text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            Estudio digital · IA aplicada · Rafaela, AR
          </motion.span>
          <motion.h1 {...fade(0.1)} className="text-[2.6rem] leading-[1.05] md:text-6xl lg:text-7xl font-bold text-crema tracking-tight" style={{ textWrap: 'balance' }}>
            Hacé crecer tu marca con{' '}
            <span className="text-acento">inteligencia artificial</span>
          </motion.h1>
          <motion.p {...fade(0.2)} className="text-crema/65 text-lg md:text-xl leading-relaxed max-w-xl mt-7">
            Webs, web apps, diseño, redes y formación en IA. Un solo equipo para que tu negocio se vea profesional, venda más y trabaje mejor.
          </motion.p>
          <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-4 mt-10">
            <BtnPrimary href={WA} external>Empezar ahora</BtnPrimary>
            <BtnGhost href="#servicios">Ver servicios</BtnGhost>
          </motion.div>
          <motion.div {...fade(0.4)} className="flex items-center gap-4 mt-12">
            <div className="flex -space-x-3">
              {iniciales.map((i, idx) => (
                <span
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-fondo flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ background: idx % 2 ? '#22D3EE' : '#3D7BFF', color: idx % 2 ? '#0B1020' : '#fff' }}
                >
                  {i}
                </span>
              ))}
            </div>
            <div>
              <div className="text-crema font-semibold">+20 marcas</div>
              <div className="text-crema/50 text-sm">ya trabajan con JuanoConecta</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] border border-acento/20" />
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#121A30] aspect-[4/5]">
            <img src="/hero.jpg" alt="Juan Gallino, fundador de JuanoConecta" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-fondo via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 md:-left-12 top-12 rounded-2xl px-5 py-4 border border-white/10 bg-[#121A30]/90 backdrop-blur"
          >
            <div className="text-2xl font-bold text-crema">+340%</div>
            <div className="text-crema/55 text-xs">alcance orgánico promedio</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-4 md:-right-10 bottom-16 rounded-2xl px-5 py-4 border border-white/10 bg-[#121A30]/90 backdrop-blur flex items-center gap-3"
          >
            <span className="w-10 h-10 rounded-xl bg-acento/20 text-acento flex items-center justify-center font-bold">IA</span>
            <div>
              <div className="text-crema text-sm font-semibold">Curso de IA</div>
              <div className="text-crema/55 text-xs">Lista de espera abierta</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
