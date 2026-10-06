import { motion } from 'framer-motion'
import { GridGlow, BtnPrimary, BtnGhost, WA } from './ui'

const fade = (d) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: d, ease: [0.16, 1, 0.3, 1] },
})

const iniciales = ['TP', 'AE', 'PV', 'BL', 'HD']

function BadgeCircular() {
  const texto = 'ESTUDIO DIGITAL · INTELIGENCIA ARTIFICIAL · RAFAELA · '
  return (
    <div className="relative w-32 h-32 md:w-36 md:h-36">
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow motion-reduce:animate-none" aria-hidden="true">
        <defs><path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
        <text fill="#EAF0FF" fontSize="8.2" fontWeight="600" letterSpacing="1.6"><textPath href="#circ">{texto}</textPath></text>
      </svg>
      <span className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-acento flex items-center justify-center text-white shadow-[0_0_40px_rgba(61,123,255,0.8)]">
        <svg className="w-6 h-6 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </span>
    </div>
  )
}

export default function HeroNx() {
  return (
    <section id="hero" className="relative overflow-hidden pt-36 md:pt-44 px-6">
      <GridGlow />
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.span {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-acento/40 bg-acento/10 px-4 py-1.5 text-crema text-xs font-semibold tracking-[0.15em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_10px_#22D3EE] animate-pulse" />
          Estudio digital · IA aplicada
        </motion.span>
        <motion.h1 {...fade(0.1)} className="mt-8 text-[2.7rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.6rem] font-bold text-crema tracking-[-0.03em]" style={{ textWrap: 'balance' }}>
          Hacé crecer tu marca con{' '}
          <span className="relative inline-block text-acento">
            inteligencia artificial
            <svg className="absolute -bottom-3 left-0 w-full h-4 text-teal" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 9 C 80 2, 220 2, 298 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </motion.h1>
        <motion.p {...fade(0.2)} className="text-crema/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-9">
          Webs, web apps, diseño, redes y formación en IA. Un solo equipo para que tu negocio se vea profesional, venda más y trabaje mejor.
        </motion.p>
        <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <BtnPrimary href={WA} external>Empezar ahora</BtnPrimary>
          <BtnGhost href="#servicios">Explorar servicios</BtnGhost>
        </motion.div>
        <motion.div {...fade(0.4)} className="flex items-center justify-center gap-4 mt-10">
          <div className="flex -space-x-3">
            {iniciales.map((i, idx) => (
              <span key={i} className="w-10 h-10 rounded-full border-2 border-fondo flex items-center justify-center text-[11px] font-bold"
                style={{ background: idx % 2 ? '#22D3EE' : '#3D7BFF', color: idx % 2 ? '#0B1020' : '#fff' }}>{i}</span>
            ))}
          </div>
          <div className="text-left">
            <div className="text-crema font-semibold">+20 marcas</div>
            <div className="text-crema/50 text-sm">confían en JuanoConecta</div>
          </div>
        </motion.div>
      </div>

      {/* Collage inferior */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-6xl mx-auto mt-20"
      >
        <div className="absolute -inset-x-10 -top-10 h-40 bg-acento/30 blur-[90px] rounded-full pointer-events-none" />
        <div className="relative grid grid-cols-12 gap-4 md:gap-5">
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4 md:gap-5 order-2 md:order-1">
            <div className="rounded-3xl border border-white/10 bg-[#121A30]/80 backdrop-blur p-6 text-left">
              <div className="text-5xl font-bold text-crema">+340%</div>
              <div className="text-crema/55 text-sm mt-2">alcance orgánico promedio en clientes de redes</div>
              <div className="mt-5 flex items-end gap-1.5 h-16" aria-hidden="true">
                {[30, 45, 38, 60, 52, 75, 68, 92].map((h, i) => (
                  <motion.span key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.9 + i * 0.06, duration: 0.6 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-acento/40 to-acento" />
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#121A30]/80 backdrop-blur p-6 text-left flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-teal/15 text-teal flex items-center justify-center font-bold">#1</span>
              <div>
                <div className="text-crema font-semibold">Primeros en Google</div>
                <div className="text-crema/55 text-sm">con webs optimizadas para SEO</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 relative order-1 md:order-2">
            <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[380px] md:h-[440px] bg-[#121A30]">
              <img src="/img/juan/juan-hero.webp" alt="Juan Gallino, fundador de JuanoConecta" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -top-12 right-4 md:right-6 z-10 hidden sm:block"><BadgeCircular /></div>
          </div>
          <div className="col-span-12 md:col-span-3 flex flex-col gap-4 md:gap-5 order-3">
            <div className="rounded-3xl bg-acento p-6 text-left text-white flex-1 flex flex-col justify-between min-h-[180px]">
              <span className="text-xs font-semibold tracking-widest uppercase text-white/80">Nuevo</span>
              <div>
                <div className="text-2xl font-bold leading-tight">Curso de IA aplicada</div>
                <a href="/curso-ia" className="inline-flex items-center gap-2 text-sm font-semibold mt-3 underline-offset-4 hover:underline">Ver temario →</a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#121A30]/80 backdrop-blur p-6 text-left">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-crema text-sm font-semibold">Disponibles</span>
              </div>
              <div className="text-crema/55 text-sm mt-2">para nuevos proyectos este mes</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
