import { Link } from 'react-router-dom'
import { promosActivas } from '../data/promos'

// Franja con las promos de temporada vigentes (tienda y home). Desaparece sola cuando vencen.
const PUNTO = { navidad: '#F43F5E', verano: '#F59E0B' }

export default function PromoBanda({ className = '' }) {
  const promos = promosActivas()
  if (!promos.length) return null
  return (
    <div className={`grid gap-3 ${promos.length > 1 ? 'md:grid-cols-2' : ''} ${className}`}>
      {promos.map((p) => (
        <Link key={p.slug} to={`/${p.slug}`}
          className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0F1629] hover:border-white/25 px-5 py-4 transition-colors duration-300">
          <span className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full" style={{ background: PUNTO[p.tono] }} />
            <span>
              <span className="block text-[11px] font-bold tracking-[0.15em] uppercase" style={{ color: PUNTO[p.tono] }}>Promo de temporada</span>
              <span className="block text-crema font-semibold leading-snug mt-1">{p.banda}</span>
            </span>
          </span>
          <span className="text-teal text-sm font-semibold whitespace-nowrap group-hover:translate-x-1 transition-transform">Ver →</span>
        </Link>
      ))}
    </div>
  )
}
