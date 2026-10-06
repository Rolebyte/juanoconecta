const clientes = [
  'Tatitos Pañalera', 'Alarcón Ecografías', 'Pura Vida Tatuajes', 'Brisa Latina Festa',
  'Legales Rafaela', 'Honky Donky', 'Biagosch', 'Martinez Training', 'Estudio Libertad', 'Konexa Marketing',
]

export default function MarqueeClientes() {
  const fila = [...clientes, ...clientes]
  return (
    <section className="py-10 border-y border-white/5 bg-[#080C18] overflow-hidden" aria-label="Marcas que confían en JuanoConecta">
      <p className="text-center text-crema/40 text-xs font-semibold tracking-[0.25em] uppercase mb-6">Marcas que confían en nosotros</p>
      <div className="relative" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)' }}>
        <div className="flex w-max animate-marquee gap-14 motion-reduce:animate-none">
          {fila.map((c, i) => (
            <span key={i} className="text-crema/45 hover:text-crema text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap transition-colors">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
