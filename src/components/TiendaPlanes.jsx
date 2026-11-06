import { Eyebrow, Reveal, Check } from './home/ui'
import MetaPlan from './MetaPlan'
import { PLANES_REDES, REGLA_META } from '../data/planesRedes'

// Servicios por objetivo dentro de /tienda (Juan, 6/11/2026): los planes de redes y la web
// también se ven en la Tienda. Se contratan por WhatsApp porque arrancan con un diagnóstico.
const wa = (texto) => 'https://wa.me/5493492383024?text=' + encodeURIComponent(texto)

const WEB = [
  {
    nombre: 'Web Presencia',
    objetivo: 'Que te encuentren',
    precio: 'Desde $450.000',
    periodo: 'pago único',
    descripcion: 'Tu web propia, lista en 10 días. Se puede pagar 50% al arrancar y 50% al entregar.',
    metas: [['Web lista y publicada', '10 días'], ['Aparece en Google por tu nombre', 'Sí'], ['Ficha de Google Maps conectada', 'Sí'], ['Clics a WhatsApp contados', 'desde el día 1']],
    features: ['Dominio .com.ar a tu nombre', 'Hosting el primer año', 'Diseño, textos y fotos', 'Botón de WhatsApp y alta en Google'],
  },
  {
    nombre: 'Web al Día',
    objetivo: 'Que siga trayendo',
    precio: '$25.000',
    periodo: '/mes',
    descripcion: 'El mantenimiento de tu web, con un número para mirar cada mes.',
    metas: [['Web en línea', 'todo el mes'], ['Cambios que pedís', 'en 48 h'], ['Reporte de visitas y clics', 'mensual']],
    features: ['Precios, fotos y textos al día', 'Una mejora por mes según el reporte'],
  },
]

function Plan({ plan, periodo, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
    <div className="relative rounded-2xl p-6 flex flex-col h-full"
      style={{
        background: plan.destacado ? 'linear-gradient(135deg, rgba(61,123,255,0.15) 0%, rgba(61,123,255,0.05) 100%)' : 'rgba(255,255,255,0.025)',
        border: plan.destacado ? '1px solid rgba(61,123,255,0.4)' : '1px solid rgba(255,255,255,0.07)',
      }}>
      <h3 className="text-lg font-bold text-crema">{plan.nombre}</h3>
      <div className="text-2xl font-bold text-crema mt-1">{plan.precio}<span className="text-crema/40 text-sm font-normal"> {plan.periodo || periodo}</span></div>
      <p className="text-crema/45 text-xs mt-2 mb-5 leading-relaxed">{plan.descripcion}</p>
      <MetaPlan plan={plan} etiqueta={plan.periodo === 'pago único' ? 'Meta al entregar' : 'Meta del mes'} />
      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-crema/35 mb-3">Incluye</p>
      <ul className="space-y-2 flex-1 mb-6">
        {plan.features.map((f) => <li key={f} className="flex gap-2 text-sm text-crema/65"><Check />{f}</li>)}
      </ul>
      <a href={wa(`Hola Juan, me interesa el ${plan.nombre.startsWith('Web') ? '' : 'plan '}${plan.nombre}. ¿Me contás cómo arrancamos?`)}
        target="_blank" rel="noopener noreferrer" aria-label={`Consultar ${plan.nombre}`}
        className="block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300"
        style={plan.destacado ? { background: '#3D7BFF', color: '#fff' } : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#EAF0FF' }}>
        Consultar por WhatsApp
      </a>
    </div>
    </Reveal>
  )
}

export default function TiendaPlanes() {
  return (
    <div id="planes" className="mt-24 scroll-mt-24">
      <Reveal className="max-w-3xl mb-10">
        <Eyebrow>Servicios por objetivo</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-bold text-crema mt-5 tracking-tight" style={{ textWrap: 'balance' }}>
          Planes de redes y webs con una meta que se puede medir
        </h2>
        <p className="text-crema/55 mt-4 leading-relaxed">
          Cada plan arranca con una meta que vemos juntos en las estadísticas. Las publicaciones son la herramienta para llegar. Las ventas las medimos en el reporte, pero no las prometemos.
        </p>
      </Reveal>
      <h3 className="text-crema/70 font-semibold mb-4">Redes</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PLANES_REDES.map((p, i) => <Plan key={p.nombre} plan={p} periodo="/mes" delay={i * 0.06} />)}
      </div>
      <p className="text-crema/45 text-sm mt-5">{REGLA_META} La pauta de Meta Ads se paga aparte.</p>
      <h3 className="text-crema/70 font-semibold mt-12 mb-4">Webs</h3>
      <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
        {WEB.map((p, i) => <Plan key={p.nombre} plan={p} delay={i * 0.06} />)}
      </div>
    </div>
  )
}
