const clientes = [
  'Tatitos Pañalera', 'Alarcón Ecografías', 'Pura Vida Tatuajes', 'Brisa Latina Festa',
  'Legales Rafaela', 'Honky Donky', 'Biagosch', 'Martinez Training', 'Estudio Libertad', 'Konexa Marketing',
]

export default function MarqueeClientes() {
  const fila = [...clientes, ...clientes]
  return (
    <section className="pt-24 pb-6" aria-label="Marcas que confían en JuanoConecta">
      <p className="text-center text-crema/45 text-sm mb-8">Marcas de Rafaela y la región que ya crecen con nosotros</p>
      <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)' }}>
        <div className="flex w-max animate-marquee gap-16 motion-reduce:animate-none">
          {fila.map((c, i) => (
            <span key={i} className="text-crema/40 hover:text-crema text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap transition-colors">{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
