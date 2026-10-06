import { Reveal, BtnPrimary, BtnGhost, GridGlow, WA } from './ui'

export default function CtaNx() {
  return (
    <section className="px-6 pb-28">
      <Reveal className="relative max-w-7xl mx-auto overflow-hidden rounded-[2.5rem] border border-acento/30 bg-gradient-to-br from-[#16245A] via-[#121A30] to-[#0B1020] px-8 py-16 md:px-16 md:py-20 text-center">
        <GridGlow />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold text-crema tracking-tight max-w-3xl mx-auto" style={{ textWrap: 'balance' }}>
            ¿Listo para llevar tu marca al próximo nivel?
          </h2>
          <p className="text-crema/65 text-lg mt-5 max-w-xl mx-auto">Contanos tu proyecto y te armamos una propuesta a medida, sin compromiso.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <BtnPrimary href={WA} external>Hablemos por WhatsApp</BtnPrimary>
            <BtnGhost href="/curso-ia">Ver el curso de IA</BtnGhost>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
