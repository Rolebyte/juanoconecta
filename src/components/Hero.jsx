import { motion } from 'framer-motion'
import CanvasParticles from './CanvasParticles'
import MorphingBlob from './MorphingBlob'
import Typewriter from './Typewriter'

const WA_LINK = 'https://wa.me/543492627811?text=Hola%20Juan%2C%20quiero%20saber%20más%20sobre%20tus%20servicios'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(196,132,106,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(196,132,106,0.07) 0%, transparent 50%), #0A0A0A',
      }}
    >
      {/* Canvas de partículas coral interactivo */}
      <CanvasParticles count={65} />

      {/* Blob morfante decorativo izquierda */}
      <MorphingBlob className="absolute -left-40 top-0 opacity-60" size={700} />

      {/* Grid de fondo decorativo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#F5F0EB 1px, transparent 1px), linear-gradient(90deg, #F5F0EB 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Orbe decorativo izquierda */}
      <div className="absolute -left-32 top-1/3 w-96 h-96 rounded-full bg-acento/5 blur-[120px] pointer-events-none" />
      {/* Orbe decorativo derecha */}
      <div className="absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-acento/8 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-4">

          {/* ── Texto izquierda ── */}
          <motion.div
            className="flex-1 text-center md:text-left z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge animado */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-acento/10 border border-acento/25 text-acento text-xs font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-acento"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Estrategia digital · IA aplicada · Rafaela, AR
            </motion.div>

            {/* Título principal */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-crema mb-6 tracking-tight font-display"
            >
              Tu marca
              <br />
              vendiendo en
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #C4846A 0%, #E8A882 50%, #C4846A 100%)' }}
              >
                redes con IA
              </span>
            </motion.h1>

            {/* Subtítulo con typewriter */}
            <motion.p
              variants={fadeUp}
              className="text-crema/55 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 mb-10"
            >
              <Typewriter />{' '}
              <span className="text-crema/40">— estrategia digital real que genera ventas, no solo likes.</span>
            </motion.p>

            {/* Botones */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-14"
            >
              <a
                href="#resultados"
                className="relative px-8 py-4 rounded-full font-semibold text-sm overflow-hidden group"
                style={{ background: 'linear-gradient(135deg, #C4846A, #E8A882)' }}
              >
                <span className="relative z-10 text-white flex items-center gap-2 justify-center">
                  Ver resultados reales
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </a>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-sm border border-white/10 bg-white/5 backdrop-blur-sm text-crema hover:bg-white/10 hover:border-acento/40 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hablemos por WhatsApp
              </a>
            </motion.div>

            {/* Stats con separador */}
            <motion.div variants={fadeUp} className="flex items-center gap-0 justify-center md:justify-start">
              {[
                { num: '+20', label: 'Marcas trabajadas' },
                { num: '+340%', label: 'Alcance promedio' },
                { num: '3', label: 'Años de trayectoria' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-stretch">
                  <div className={`text-center px-6 ${i > 0 ? 'border-l border-white/10' : ''}`}>
                    <div className="text-2xl font-bold text-acento mb-0.5">{stat.num}</div>
                    <div className="text-xs text-crema/35">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Spline 3D derecha ── */}
          <motion.div
            className="flex-1 w-full relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Marco glassmorphism */}
            <div
              className="relative w-full h-[420px] md:h-[620px] rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(196,132,106,0.15)',
                boxShadow: '0 0 80px rgba(196,132,106,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Fade radial para fundir Spline con el fondo */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.7) 80%, rgba(10,10,10,0.95) 100%)',
                }}
              />
              {/* Fade superior e inferior extra */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

              {/* Foto de Juan */}
              <img
                src="/hero.png"
                alt="Juan Gallino — Estrategia digital con IA"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>

            {/* Tarjeta flotante izquierda - stat */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -left-4 md:-left-8 top-1/3 backdrop-blur-xl rounded-2xl px-5 py-4 border z-20"
              style={{
                background: 'rgba(20,20,20,0.8)',
                borderColor: 'rgba(196,132,106,0.25)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <div className="text-2xl font-bold text-acento">+340%</div>
              <div className="text-crema/50 text-xs mt-0.5">Alcance organico</div>
            </motion.div>

            {/* Tarjeta flotante inferior derecha */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -right-2 md:-right-4 bottom-3 backdrop-blur-xl rounded-2xl px-5 py-4 border z-20 flex items-center gap-3"
              style={{
                background: 'rgba(20,20,20,0.8)',
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
              <div>
                <div className="text-crema text-sm font-semibold">Disponible</div>
                <div className="text-crema/40 text-xs">para nuevos proyectos</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-crema/20 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-acento/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
