import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tienda, { productoGratis, productos, faqs } from '../components/Tienda'
import PopupLeadMagnet from '../components/PopupLeadMagnet'
import WhatsAppButton from '../components/WhatsAppButton'

const URL_TIENDA = 'https://juanoconecta.ar/tienda'
const numero = (precio) => Number(String(precio).replace(/\D/g, ''))
const oferta = (precio) => ({ '@type': 'Offer', price: numero(precio), priceCurrency: 'ARS', availability: 'https://schema.org/InStock', url: URL_TIENDA })

// Datos estructurados de los productos de la tienda, armados desde los mismos datos que muestra la página.
const PRODUCTOS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tienda de recursos de IA de JuanoConecta',
  itemListElement: [productoGratis, ...productos].map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.nombre,
      description: p.descripcion,
      brand: { '@type': 'Brand', name: 'JuanoConecta' },
      offers: p.tarifas
        ? { '@type': 'AggregateOffer', priceCurrency: 'ARS', lowPrice: Math.min(...p.tarifas.map((t) => numero(t.ars))), highPrice: Math.max(...p.tarifas.map((t) => numero(t.ars))), offerCount: p.tarifas.length, url: URL_TIENDA }
        : oferta(p.precioARS || 0),
    },
  })),
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function Recursos() {
  const [popupTrigger, setPopupTrigger] = useState(0)
  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>Recursos de IA para crear contenido | JuanoConecta</title>
        <meta name="description" content="Prompts, kits y auditorías con IA para crear contenido que vende. Recursos digitales de JuanoConecta, Rafaela." />
        <link rel="canonical" href="https://juanoconecta.ar/tienda" />
        <script type="application/ld+json">{JSON.stringify(PRODUCTOS_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <Tienda onOpenPopup={() => setPopupTrigger(n => n + 1)} />
      </main>
      <Footer />
      <PopupLeadMagnet forceOpen={popupTrigger} />
      <WhatsAppButton />
    </div>
  )
}
