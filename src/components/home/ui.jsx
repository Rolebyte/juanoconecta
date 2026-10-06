import { motion } from 'framer-motion'

export const WA = 'https://wa.me/543492627811?text=Hola%20Juan%2C%20quiero%20saber%20m%C3%A1s%20sobre%20JuanoConecta'

// Aparición suave al hacer scroll. El contenido arranca visible si el navegador pide menos movimiento.
export function Reveal({ children, delay = 0, y = 32, className = '', as = 'div' }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  )
}

export function Eyebrow({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 text-teal text-xs font-semibold tracking-[0.2em] uppercase ${className}`}>
      <span className="w-6 h-px bg-teal" />
      {children}
    </span>
  )
}

export function SectionTitle({ eyebrow, title, sub, center = false }) {
  return (
    <Reveal className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-14`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl md:text-5xl font-bold text-crema mt-4 leading-[1.1] tracking-tight" style={{ textWrap: 'balance' }}>
        {title}
      </h2>
      {sub && <p className="text-crema/60 text-lg leading-relaxed mt-5">{sub}</p>}
    </Reveal>
  )
}

export function BtnPrimary({ href, children, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group inline-flex items-center justify-center gap-2 bg-acento hover:bg-acento-dark text-white font-semibold text-sm px-7 py-4 rounded-full transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(61,123,255,0.8)]"
    >
      {children}
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  )
}

export function BtnGhost({ href, children, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-teal/60 text-crema font-semibold text-sm px-7 py-4 rounded-full transition-colors duration-300"
    >
      {children}
    </a>
  )
}

export function Check() {
  return (
    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-teal/15 text-teal flex items-center justify-center">
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

// Fondo de grilla con brillo, usado en hero y bloques destacados
export function GridGlow({ className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(234,240,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(234,240,255,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 30%, #000 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 30%, #000 20%, transparent 75%)',
        }}
      />
      <div className="absolute -top-40 right-[-10%] w-[640px] h-[640px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,123,255,0.28) 0%, transparent 65%)' }} />
      <div className="absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 65%)' }} />
    </div>
  )
}
