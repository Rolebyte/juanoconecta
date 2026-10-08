import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionTitle, Reveal, BtnPrimary, WA } from './ui'

export const faqs = [
  ['¿Qué servicios ofrecen?', 'Trabajamos en cuatro áreas: IA para negocios (cursos, capacitaciones y automatizaciones), webs y web apps, diseño y marca, y redes y publicidad con Meta Ads. Podés contratar una sola o combinarlas.'],
  ['¿Cómo sé qué servicio necesita mi negocio?', 'Escribinos por WhatsApp y te orientamos gratis. Miramos dónde está hoy tu negocio y te recomendamos por dónde empezar.'],
  ['¿Necesito saber programar para tener una web app?', 'No. Nosotros diseñamos y desarrollamos la aplicación, y te enseñamos a usarla. Si querés aprender a hacerlo vos, el curso de IA incluye un módulo para crear tu propia web.'],
  ['¿Cuándo empieza el curso de IA?', 'Estamos armando la próxima edición. Sumate a la lista de espera y te avisamos primero cuando abran las inscripciones.'],
  ['¿Trabajan solo con negocios de Rafaela?', 'No. Estamos en Rafaela y trabajamos con marcas de toda Argentina, de Brasil y de Italia. La mayoría de los servicios se hacen 100% online, así que podemos trabajar con vos estés donde estés.'],
]

function Item({ q, a, abierto, onClick }) {
  return (
    <div className={`rounded-2xl border transition-colors duration-300 ${abierto ? 'border-acento/50 bg-[#121A30]' : 'border-white/10 bg-[#121A30]/50'}`}>
      <button onClick={onClick} aria-expanded={abierto} className="w-full flex items-center justify-between gap-6 text-left px-6 py-5">
        <span className="text-crema font-semibold">{q}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${abierto ? 'bg-acento text-white rotate-45' : 'bg-white/5 text-crema'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M12 5v14M5 12h14" /></svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {abierto && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-6 pb-6 text-crema/60 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqNx() {
  const [abierto, setAbierto] = useState(0)
  return (
    <section id="faq" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <SectionTitle eyebrow="Preguntas frecuentes" title="Lo que más nos preguntan" sub="¿Te quedó alguna duda? Escribinos y te respondemos en el día." />
          <Reveal><BtnPrimary href={WA} external>Hacer una consulta</BtnPrimary></Reveal>
        </div>
        <div className="space-y-4">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 0.06}>
              <Item q={q} a={a} abierto={abierto === i} onClick={() => setAbierto(abierto === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
