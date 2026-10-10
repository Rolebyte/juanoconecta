import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { Eyebrow, GridGlow, SectionTitle, BtnPrimary, BtnGhost, Check, Reveal } from '../components/home/ui'
import { promoPorSlug } from '../data/promos'

// Página de una promo de temporada (/navidad, /verano). Todo el contenido sale de src/data/promos.js.
const TONOS = {
  navidad: { color: '#F43F5E', fondo: 'from-[#3A1024] via-[#121A30] to-[#0B1020]' },
  verano: { color: '#F59E0B', fondo: 'from-[#3A2A0C] via-[#121A30] to-[#0B1020]' },
}

const pesos = (n) => '$' + Math.round(n).toLocaleString('es-AR')

function Nivel({ n, i, tarifa, promo, color }) {
  const unico = n.precio.unico != null
  const precio = unico ? n.precio.unico : n.precio[tarifa.id]
  const t = unico ? null : tarifa.nombre
  return (
    <div className={`relative h-full rounded-3xl p-px ${n.destacado ? '' : 'bg-gradient-to-br from-white/15 via-white/5 to-white/0'}`}
      style={n.destacado ? { background: `linear-gradient(135deg, ${color}, rgba(61,123,255,.5), rgba(255,255,255,.05))` } : undefined}>
      <div className="h-full rounded-[calc(1.5rem-1px)] bg-[#0F1629] p-7 flex flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="text-crema/25 font-bold text-4xl tabular-nums leading-none" style={{ WebkitTextStroke: '1px rgba(234,240,255,.35)', color: 'transparent' }}>0{i + 1}</span>
          <span className="px-3 py-1 rounded-full border text-[11px] font-bold tracking-[0.12em] uppercase" style={{ borderColor: `${color}66`, background: `${color}1A`, color }}>{n.etiqueta}</span>
        </div>
        <h3 className="text-2xl font-bold text-crema mt-5">{n.nombre}</h3>
        <p className="text-crema/60 leading-relaxed mt-2 text-[15px]">{n.resumen}</p>

        <div className="mt-6">
          {n.lanzamiento ? (
            <>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-crema tracking-tight">{pesos(n.lanzamiento.precio)}</span>
                <span className="text-crema/40 line-through">{pesos(precio)}</span>
              </div>
              <p className="text-sm font-semibold mt-1" style={{ color }}>Precio de lanzamiento {n.lanzamiento.hasta}</p>
            </>
          ) : (
            <>
              <div className="text-4xl font-bold text-crema tracking-tight">{pesos(precio)}</div>
              <p className="text-crema/45 text-sm mt-1">
                Tarifa {tarifa.nombre}{n.detalle ? ` · ${n.detalle[tarifa.id]}` : ''}
              </p>
              {n.descuento && <p className="text-sm font-semibold mt-1" style={{ color }}>{n.descuento}</p>}
            </>
          )}
        </div>

        <ul className="mt-6 grid gap-2.5 flex-1">
          {n.incluye.map((it) => (
            <li key={it} className="flex gap-2.5 items-start text-crema/75 text-[15px] leading-snug"><Check />{it}</li>
          ))}
        </ul>
        {(n.entrega || n.nota) && (
          <p className="text-crema/45 text-xs leading-relaxed mt-5">{[n.entrega, n.nota].filter(Boolean).join(' · ')}</p>
        )}
        <a href={promo.waTexto(n.nombre, t)} target="_blank" rel="noopener noreferrer" aria-label={`${promo.slug}: ${n.nombre}`}
          className={`mt-6 py-3.5 rounded-full text-sm font-semibold text-center transition-colors duration-300 ${n.destacado ? 'bg-acento hover:bg-acento-dark text-white' : 'border border-white/15 hover:border-teal/60 text-crema'}`}>
          {n.cta}
        </a>
      </div>
    </div>
  )
}

export default function PromoTemporada({ slug }) {
  const promo = promoPorSlug(slug)
  const tono = TONOS[promo.tono]
  const [tarifaId, setTarifaId] = useState(promo.tarifas[0].id)
  const tarifa = promo.tarifas.find((t) => t.id === tarifaId)
  const url = `https://juanoconecta.ar/${promo.slug}`
  const SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: promo.titulo,
    url,
    itemListElement: promo.niveles.map((n) => ({
      '@type': 'Offer',
      name: n.nombre,
      description: n.resumen,
      priceCurrency: 'ARS',
      ...(n.precio.unico != null
        ? { price: n.lanzamiento?.precio ?? n.precio.unico }
        : { priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'ARS', minPrice: n.precio.emprendedor, maxPrice: n.precio.empresa } }),
      validThrough: promo.vence,
      seller: { '@type': 'Organization', name: 'JuanoConecta', url: 'https://juanoconecta.ar' },
    })),
  }
  const FAQ_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: promo.preguntas.map((p) => ({ '@type': 'Question', name: p.q, acceptedAnswer: { '@type': 'Answer', text: p.a } })),
  }
  const waGeneral = promo.waTexto('quiero saber más', null)

  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>{promo.seoTitulo}</title>
        <meta name="description" content={promo.seoDescripcion} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={promo.seoTitulo} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={promo.seoDescripcion} />
        <meta property="og:image" content={`${promo.imagen.src}&w=1200&h=630`} />
        <meta name="twitter:image" content={`${promo.imagen.src}&w=1200&h=630`} />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <img src={`${promo.imagen.src}&w=1920`} srcSet={`${promo.imagen.src}&w=800 800w, ${promo.imagen.src}&w=1400 1400w, ${promo.imagen.src}&w=1920 1920w`} sizes="100vw"
          alt={promo.imagen.alt} fetchpriority="high" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020]/85 via-[#0B1020]/70 to-[#0B1020]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-25 pointer-events-none" style={{ background: `radial-gradient(closest-side, ${tono.color}, transparent)` }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <Eyebrow>{promo.eyebrow}</Eyebrow>
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.05] tracking-tight mt-6 mb-6" style={{ textWrap: 'balance' }}>{promo.titulo}</h1>
          <p className="text-crema/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">{promo.bajada}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BtnPrimary href="#paquetes">Ver paquetes y precios</BtnPrimary>
            <BtnGhost href={waGeneral} external>Consultar por WhatsApp</BtnGhost>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-crema/70">
            <span className="w-2 h-2 rounded-full" style={{ background: tono.color }} />{promo.cierre}
          </p>
        </div>
      </section>

      {/* Galería */}
      <div className="px-6 -mt-10 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-3 md:gap-5">
          {promo.galeria.map((g) => (
            <img key={g.src} src={`${g.src}&w=700`} srcSet={`${g.src}&w=400 400w, ${g.src}&w=700 700w`} sizes="(min-width: 768px) 33vw, 30vw"
              alt={g.alt} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-2xl md:rounded-3xl border border-white/10" />
          ))}
        </div>
      </div>

      {/* Por qué ahora */}
      <section className="py-20 px-6 bg-[#080C18]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Por qué ahora" title="La temporada se gana antes de que empiece" />
          <div className="grid md:grid-cols-3 gap-5">
            {promo.datos.map((d, i) => (
              <Reveal key={d.valor} delay={i * 0.08} className="rounded-3xl border border-white/10 bg-[#0F1629] p-7">
                <div className="text-4xl md:text-5xl font-bold tabular-nums" style={{ color: tono.color }}>{d.valor}</div>
                <p className="text-crema/65 leading-relaxed mt-3">{d.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A medida */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Hecho a medida" title="Nada de plantillas genéricas: todo sale con tu marca" sub="La IA nos permite trabajar rápido, pero cada pieza se piensa y se ajusta para tu negocio." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {promo.aMedida.map((m, i) => (
              <Reveal key={m.titulo} delay={i * 0.08} className="rounded-3xl border border-white/10 bg-[#0F1629] p-7">
                <span className="font-bold text-sm tabular-nums" style={{ color: tono.color }}>0{i + 1}</span>
                <h3 className="text-lg font-bold text-crema mt-3">{m.titulo}</h3>
                <p className="text-crema/55 leading-relaxed mt-2 text-[15px]">{m.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section id="paquetes" className="py-24 px-6 scroll-mt-24 bg-[#080C18]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <SectionTitle eyebrow="Paquetes" title="Elegí cuánto querés que hagamos por vos" />
            <div className="lg:mb-14">
              <p className="text-crema/45 text-[11px] font-bold tracking-[0.2em] uppercase mb-3">{promo.slug === 'verano' ? '¿Cuántas unidades tenés?' : '¿Qué tipo de negocio sos?'}</p>
              <div role="radiogroup" aria-label="Tarifa" className="inline-grid grid-cols-3 gap-1 rounded-full border border-white/10 bg-[#0F1629] p-1">
                {promo.tarifas.map((t) => (
                  <button key={t.id} type="button" role="radio" aria-checked={t.id === tarifaId} onClick={() => setTarifaId(t.id)}
                    className={`px-3 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${t.id === tarifaId ? 'bg-acento text-white' : 'text-crema/60 hover:text-crema'}`}>
                    {t.nombre}
                  </button>
                ))}
              </div>
              <p className="text-crema/45 text-sm mt-2">{tarifa.para}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 items-stretch">
            {promo.niveles.map((n, i) => (
              <Reveal key={n.id} delay={i * 0.08} className="h-full">
                <Nivel n={n} i={i} tarifa={tarifa} promo={promo} color={tono.color} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
          <div className="rounded-2xl border border-dashed px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ borderColor: `${tono.color}66` }}>
            <p className="text-crema/85"><span className="font-bold" style={{ color: tono.color }}>Combo · </span>{promo.combo}</p>
            <a href={promo.waTexto('el combo', tarifa.nombre)} target="_blank" rel="noopener noreferrer" aria-label={`${promo.slug}: combo`} className="text-sm font-semibold text-teal hover:text-white transition-colors whitespace-nowrap">Pedir el combo →</a>
          </div>
          </Reveal>
          <p className="text-crema/40 text-xs mt-4">Precios en pesos argentinos. Podés pagar con Mercado Pago en cuotas o en dos pagos.</p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Cómo funciona" title="Simple, rápido y sin vueltas" />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {promo.pasos.map((p, i) => (
              <Reveal as="li" key={p.titulo} delay={i * 0.08} className="rounded-3xl border border-white/10 bg-[#0F1629] p-7">
                <span className="font-bold text-sm tabular-nums" style={{ color: tono.color }}>Paso {i + 1}</span>
                <h3 className="text-lg font-bold text-crema mt-3">{p.titulo}</h3>
                <p className="text-crema/55 leading-relaxed mt-2 text-[15px]">{p.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Preguntas */}
      <section className="py-24 px-6 bg-[#080C18]">
        <div className="max-w-3xl mx-auto">
          <SectionTitle center eyebrow="Preguntas frecuentes" title="Antes de contratar" />
          <div className="grid gap-3">
            {promo.preguntas.map((p) => (
              <details key={p.q} className="group rounded-2xl border border-white/10 bg-[#0F1629] px-6 py-5">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-crema">
                  {p.q}<span className="text-acento text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-crema/60 leading-relaxed mt-3">{p.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className={`relative max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br ${tono.fondo} px-6 py-16 md:px-16 md:py-20 text-center`}>
          <GridGlow />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto" style={{ textWrap: 'balance' }}>{promo.titulo}</h2>
            <p className="text-crema/65 text-lg max-w-xl mx-auto mt-5 mb-10">{promo.cierre}. Escribinos y te ayudamos a elegir.</p>
            <BtnPrimary href={waGeneral} external>Escribir por WhatsApp</BtnPrimary>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
