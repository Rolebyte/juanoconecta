import { useState } from 'react'
import { Eyebrow, GridGlow, Reveal, Check } from './home/ui'

const WA_AUDITORIA = 'https://wa.me/5493492627811?text=Hola%20Juan%2C%20quiero%20la%20Auditoría%20IA%20de%20mi%20perfil'

const TEAL = '#22D3EE'

export const productoGratis = {
  nombre: '5 prompts para crear contenido con IA',
  descripcion: '¿No sabés por dónde empezar con la IA? Estos 5 prompts te dan el punto de partida exacto para generar contenido real en menos de 10 minutos — sin experiencia previa.',
  badge: 'GRATIS',
  badgeStyle: { background: 'rgba(34,211,238,0.15)', color: '#22D3EE', border: '1px solid rgba(34,211,238,0.4)' },
  precioARS: null,
  precioUSD: null,
  tipo: 'gratis',
  emoji: '🎁',
  includes: ['5 prompts listos para usar hoy', 'Funciona en ChatGPT, Claude y Gemini', 'Resultados desde el primer uso', 'Gratis: solo te pedimos tu correo'],
  color: TEAL,
}

export const productos = [
  {
    nombre: 'Kit Contenido IA',
    descripcion: '¿Publicás pero el algoritmo no te acompaña? El problema no es tu producto — es cómo lo comunicás. Estos 30 prompts te dan el lenguaje exacto para conectar con tu audiencia y generar contenido que vende.',
    badge: 'MÁS VENDIDO',
    badgeStyle: { background: 'rgba(61,123,255,0.2)', color: '#3D7BFF', border: '1px solid rgba(61,123,255,0.4)' },
    precioARS: '$8.000 ARS',
    precioUSD: '$7 USD',
    btnARS: 'https://mpago.la/327WvYV',
    btnUSD: 'https://juano1.gumroad.com/l/mmpvaw',
    tipo: 'digital',
    emoji: '⚡',
    includes: ['30 prompts probados en cuentas reales', 'Guía de implementación paso a paso', 'Ejemplos aplicados por industria', 'Acceso a actualizaciones futuras'],
    compatible: ['ChatGPT', 'Claude', 'Gemini', 'Grok'],
    color: '#3D7BFF',
  },
  {
    nombre: 'Prompt Power Pack',
    descripcion: '¿Manejás múltiples cuentas sin un sistema claro? Consume tiempo, energía y resultados. Este pack te da la estructura para producir más en menos tiempo — con calidad constante y sin depender de la inspiración.',
    badge: null,
    precioARS: '$25.000 ARS',
    precioUSD: '$22 USD',
    btnARS: 'https://mpago.la/2ibu57G',
    btnUSD: 'https://juano1.gumroad.com/l/rokkgk',
    tipo: 'digital',
    emoji: '🚀',
    includes: ['90 prompts para feed, historias y reels', 'Templates de copy listos para usar', 'Banco de ganchos de alto impacto', 'Framework de estrategia de contenido'],
    compatible: ['ChatGPT', 'Claude', 'Gemini', 'Grok'],
    color: '#6A8FC4',
  },
  {
    nombre: 'Auditoría IA de tu perfil',
    descripcion: '¿Invertís tiempo en redes pero los números no reflejan ese esfuerzo? Usamos IA para analizar tu perfil en profundidad — contenido, métricas, competencia y oportunidades — y te entregamos un diagnóstico preciso con un plan de acción concreto para los próximos 30 días. No es una revisión genérica: es una sesión personalizada con Juan donde identificamos exactamente qué está frenando tu crecimiento y cómo revertirlo.',
    badge: 'PREMIUM',
    badgeStyle: { background: 'rgba(234,179,8,0.15)', color: '#EAB308', border: '1px solid rgba(234,179,8,0.3)' },
    // Escalones según el tarifario de la Cámara de Diseñadores de Rafaela (Particular / PyME / Empresa).
    tarifas: [
      { id: 'emprendedor', nombre: 'Emprendedor', para: 'Emprendedores y profesionales independientes', ars: '$120.000', usd: '$110' },
      { id: 'pyme', nombre: 'PyME', para: 'Comercios y pymes con equipo', ars: '$185.000', usd: '$170' },
      { id: 'empresa', nombre: 'Empresa', para: 'Empresas e industrias', ars: '$250.000', usd: '$230' },
    ],
    btnWA: WA_AUDITORIA,
    tipo: 'servicio',
    emoji: '🏆',
    includes: ['Análisis completo del perfil con IA', 'Auditoría de competencia y oportunidades', 'Informe PDF con diagnóstico detallado', 'Sesión 1:1 de 40 min con Juan (WhatsApp o videollamada)', 'Plan de acción para los próximos 30 días', 'Seguimiento por 7 días post-sesión'],
    auditai: true,
    color: '#EAB308',
    destacado: true,
  },
]

// Sin animaciones infinitas ni efectos 3D: solo la aparición al hacer scroll, como en la home.
const ICONO_WA = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

const GARANTIAS = ['Acceso inmediato después del pago', 'Pagás en pesos con Mercado Pago o en dólares', 'Todo en español, pensado para Argentina']

function Badge({ children, tono = 'acento' }) {
  const tonos = {
    acento: 'border-acento/40 bg-acento/10 text-acento',
    teal: 'border-teal/40 bg-teal/10 text-teal',
    oro: 'border-yellow-400/40 bg-yellow-400/10 text-yellow-300',
  }
  return <span className={`inline-flex px-3 py-1 rounded-full border text-[11px] font-bold tracking-[0.12em] uppercase ${tonos[tono]}`}>{children}</span>
}

function Precio({ ars, usd }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-3xl font-bold text-crema tracking-tight">{ars.replace(' ARS', '')}<span className="text-sm font-semibold text-crema/45 ml-1.5">ARS</span></span>
      <span className="text-crema/45 text-sm">o {usd}</span>
    </div>
  )
}

function Gratis({ onOpenPopup }) {
  const p = productoGratis
  return (
    <Reveal>
      <div className="relative rounded-3xl border border-teal/30 bg-gradient-to-r from-teal/[0.10] via-[#0F1629] to-[#0F1629] p-7 md:p-10 grid md:grid-cols-[1.3fr_1fr_auto] gap-8 md:gap-10 items-center">
        <div>
          <Badge tono="teal">{p.badge}</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-crema mt-4 tracking-tight">{p.nombre}</h2>
          <p className="text-crema/55 mt-3 leading-relaxed">{p.descripcion}</p>
        </div>
        <ul className="space-y-3">
          {p.includes.map((it) => <li key={it} className="flex gap-3 text-crema/75 text-sm"><Check />{it}</li>)}
        </ul>
        <div className="md:text-center">
          <button type="button" onClick={onOpenPopup} className="w-full md:w-auto px-8 py-4 rounded-full bg-teal text-[#0B1020] font-bold text-sm hover:bg-white transition-colors duration-300">
            Descargar gratis →
          </button>
          <p className="text-crema/35 text-xs mt-2.5">Sin tarjeta. Solo tu correo.</p>
        </div>
      </div>
    </Reveal>
  )
}

function Digital({ p, n, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group relative h-full rounded-3xl p-px bg-gradient-to-br from-white/15 via-white/5 to-white/0 hover:from-acento hover:via-teal/50 hover:to-acento/20 transition-colors duration-500">
        <div className="h-full rounded-[calc(1.5rem-1px)] bg-[#0F1629] p-7 md:p-9 flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <span className="text-5xl font-bold leading-none tabular-nums text-transparent [-webkit-text-stroke:1px_rgba(234,240,255,0.35)] group-hover:[-webkit-text-stroke:1px_#3D7BFF] transition-all duration-500">{n}</span>
            {p.badge && <Badge>{p.badge}</Badge>}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-crema mt-6 tracking-tight">{p.nombre}</h2>
          <p className="text-crema/55 mt-3 leading-relaxed">{p.descripcion}</p>
          <ul className="space-y-3 mt-6 mb-7 flex-1">
            {p.includes.map((it) => <li key={it} className="flex gap-3 text-crema/75 text-sm"><Check />{it}</li>)}
          </ul>
          {p.compatible && (
            <p className="text-crema/40 text-xs mb-6">Funciona con {p.compatible.join(', ')}</p>
          )}
          <div className="border-t border-white/10 pt-6">
            <Precio ars={p.precioARS} usd={p.precioUSD} />
            <div className="grid grid-cols-2 gap-3 mt-5">
              <a href={p.btnARS} target="_blank" rel="noopener noreferrer" className="py-3.5 rounded-full bg-acento hover:bg-acento-dark text-white text-sm font-semibold text-center transition-colors duration-300">Pagar en pesos</a>
              <a href={p.btnUSD} target="_blank" rel="noopener noreferrer" className="py-3.5 rounded-full border border-white/15 hover:border-teal/60 text-crema text-sm font-semibold text-center transition-colors duration-300">Pagar en USD</a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

function Auditoria({ p }) {
  const [elegida, setElegida] = useState(p.tarifas[0].id)
  const t = p.tarifas.find((x) => x.id === elegida)
  const wa = `${p.btnWA}%20(tarifa%20${encodeURIComponent(t.nombre)})`
  return (
    <Reveal>
      <div className="relative rounded-3xl p-px bg-gradient-to-br from-yellow-400/50 via-yellow-400/10 to-acento/30">
        <div className="rounded-[calc(1.5rem-1px)] bg-[#0F1629] grid lg:grid-cols-[1.25fr_1fr] overflow-hidden">
          <div className="p-7 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge tono="oro">{p.badge}</Badge>
              <span className="text-crema/45 text-xs">Potenciado con AuditAI · sesión 1 a 1 con Juan</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-crema mt-5 tracking-tight">{p.nombre}</h2>
            <p className="text-crema/55 mt-4 leading-relaxed">{p.descripcion}</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-7">
              {p.includes.map((it) => <li key={it} className="flex gap-3 text-crema/75 text-sm"><Check />{it}</li>)}
            </ul>
          </div>
          <div className="p-7 md:p-10 bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
            <p className="text-crema/45 text-xs tracking-[0.15em] uppercase mb-3">Elegí tu tipo de negocio</p>
            <div role="radiogroup" aria-label="Tipo de negocio" className="grid grid-cols-3 gap-1 p-1 rounded-full bg-white/[0.04] border border-white/10">
              {p.tarifas.map((x) => (
                <button key={x.id} type="button" role="radio" aria-checked={x.id === elegida} onClick={() => setElegida(x.id)}
                  className={`py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${x.id === elegida ? 'bg-yellow-400 text-[#0B1020]' : 'text-crema/60 hover:text-crema'}`}>
                  {x.nombre}
                </button>
              ))}
            </div>
            <div className="mt-7">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-bold text-crema tracking-tight tabular-nums">{t.ars}<span className="text-base font-semibold text-crema/45 ml-1.5">ARS</span></span>
                <span className="text-crema/45">o USD {t.usd.replace('$', '')}</span>
              </div>
              <p className="text-crema/50 text-sm mt-2">{t.para}</p>
            </div>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[#25D366] hover:bg-[#1fb857] text-[#0B1020] font-bold transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={ICONO_WA} /></svg>
              Quiero la auditoría
            </a>
            <p className="text-crema/35 text-xs text-center mt-3">Coordinamos día y horario por WhatsApp.</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Tienda({ onOpenPopup }) {
  const auditoria = productos.find((p) => p.tarifas)
  const digitales = productos.filter((p) => p.tipo === 'digital')
  return (
    <section id="tienda" className="relative pt-20 pb-28 px-6 overflow-hidden">
      <GridGlow className="h-[640px]" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal className="max-w-3xl mb-14">
          <Eyebrow>Tienda</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-bold text-crema mt-6 leading-[1.05] tracking-tight" style={{ textWrap: 'balance' }}>
            Lo que uso cada día para hacer crecer marcas
          </h1>
          <p className="text-crema/60 text-lg leading-relaxed mt-5">
            Recursos de IA probados con marcas de Argentina y Latinoamérica. Los usás desde el primer día, tengas o no experiencia con IA.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-7">
            {GARANTIAS.map((g) => <li key={g} className="flex gap-2 text-crema/60 text-sm"><Check />{g}</li>)}
          </ul>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Gratis onOpenPopup={onOpenPopup} />
          <div className="grid md:grid-cols-2 gap-6">
            {digitales.map((p, i) => <Digital key={p.nombre} p={p} n={String(i + 1).padStart(2, '0')} delay={i * 0.08} />)}
          </div>
          {auditoria && <Auditoria p={auditoria} />}
        </div>

        <div className="mt-24 grid lg:grid-cols-[1fr_1.6fr] gap-10">
          <Reveal>
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-crema mt-5 tracking-tight">Antes de comprar</h2>
            <p className="text-crema/55 mt-4 leading-relaxed">¿Otra duda? Escribime por WhatsApp y te ayudo a elegir.</p>
          </Reveal>
          <FaqList />
        </div>
      </div>
    </section>
  )
}

export const faqs = [
  {
    q: '¿Necesito experiencia previa en IA?',
    a: 'No. Los recursos están diseñados para que puedas usarlos desde cero. Si sabés usar WhatsApp, podés usar estos prompts.',
  },
  {
    q: '¿En qué plataformas funcionan los prompts?',
    a: 'En ChatGPT, Claude y Gemini. Todos gratuitos, sin necesidad de pagar ninguna suscripción.',
  },
  {
    q: '¿Los prompts están en español?',
    a: 'Sí, 100% en español y adaptados al contexto argentino y latinoamericano.',
  },
  {
    q: '¿Cómo recibo el kit después de comprarlo?',
    a: 'Al instante. Gumroad y Mercado Pago te dan acceso inmediato al material apenas se acredita el pago.',
  },
  {
    q: '¿Puedo pagar en cuotas?',
    a: 'Sí, con tarjeta de crédito a través de Mercado Pago podés elegir la cantidad de cuotas disponibles.',
  },
  {
    q: '¿Cómo funciona la Auditoría IA de tu perfil?',
    a: 'Es una sesión de 30 a 40 minutos por videollamada o llamada de WhatsApp. Una vez que comprás, coordinamos día y horario juntos.',
  },
  {
    q: '¿Por qué la auditoría tiene tres precios?',
    a: 'Porque el trabajo cambia según el tamaño del negocio: una pyme o una empresa suele tener más cuentas, más competencia para analizar y más información para revisar que un emprendimiento. Elegí la tarifa que corresponde a tu negocio y, si tenés dudas, escribime y lo vemos.',
  },
  {
    q: '¿Hay garantía de devolución?',
    a: 'No ofrecemos reembolsos. Si tenés dudas antes de comprar, escribime por WhatsApp y te ayudo a elegir el recurso que más te sirve.',
  },
]

function FaqList() {
  const [open, setOpen] = useState(null)
  return (
    <div className="border-t border-white/10">
      {faqs.map((faq, i) => {
        const activo = open === i
        return (
          <div key={faq.q} className="border-b border-white/10">
            <button type="button" onClick={() => setOpen(activo ? null : i)} aria-expanded={activo}
              className="w-full flex items-center justify-between gap-4 py-5 text-left text-crema/85 hover:text-crema transition-colors duration-200">
              <span className="font-medium">{faq.q}</span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-lg transition-all duration-300 ${activo ? 'bg-acento border-acento rotate-45' : 'border-white/20'}`}>+</span>
            </button>
            <div className={`grid transition-all duration-300 ease-out ${activo ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden"><p className="pb-5 pr-12 text-crema/55 text-sm leading-relaxed">{faq.a}</p></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
