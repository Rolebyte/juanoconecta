import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { pixel } from './pixel'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contacto from './components/Contacto'
import PopupLeadMagnet from './components/PopupLeadMagnet'
import WhatsAppButton from './components/WhatsAppButton'
import Portfolio from './components/Portfolio'
import CursoIA from './components/CursoIA'
import CursoIAPage from './pages/CursoIA'
import Recursos from './pages/Recursos'
import CapacitacionesInstituciones from './pages/CapacitacionesInstituciones'
import Material from './pages/Material'
import PromoTemporada from './pages/PromoTemporada'
import PromoBanda from './components/PromoBanda'
import HeroNx from './components/home/HeroNx'
import MarqueeClientes from './components/home/MarqueeClientes'
import SobreNx from './components/home/SobreNx'
import ServiciosNx from './components/home/ServiciosNx'
import CasosNx from './components/home/CasosNx'
import FaqNx, { faqs } from './components/home/FaqNx'
import KeywordBand from './components/home/KeywordBand'
import ProcesoNx from './components/home/ProcesoNx'
import ProximaCapacitacion from './components/home/ProximaCapacitacion'
import CommunityManagerRafaela from './pages/CommunityManagerRafaela'
import RedesSocialesNegociosRafaela from './pages/RedesSocialesNegociosRafaela'
import PublicidadInstagramRafaela from './pages/PublicidadInstagramRafaela'
import MarketingDigitalRafaela from './pages/MarketingDigitalRafaela'
import SobreJuanoConecta from './pages/SobreJuanoConecta'

// Al llegar a cualquier página con /ruta#seccion, el navegador intenta saltar antes de que
// React dibuje el contenido. Saltamos nosotros y repetimos mientras cargan imágenes y animaciones.
function IrASeccion() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const ir = (suave) => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) el.scrollIntoView({ behavior: suave ? 'smooth' : 'auto' })
    }
    const timers = [50, 400, 1000].map((ms, i) => setTimeout(() => ir(i === 0), ms))
    return () => timers.forEach(clearTimeout)
  }, [])
  return null
}

// Avisa al Píxel de Meta cada cambio de página dentro de la web.
// La primera visita ya la registra index.html, por eso se saltea.
function PixelPaginas() {
  const { pathname } = useLocation()
  const primera = useRef(true)
  useEffect(() => {
    if (primera.current) { primera.current = false; return }
    pixel('PageView')
  }, [pathname])
  return null
}

// Datos estructurados de la home: le dicen a Google y a los asistentes de IA quién es
// JuanoConecta, qué hace, dónde está y qué preguntas responde.
const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': 'https://juanoconecta.ar/#negocio',
      name: 'JuanoConecta',
      alternateName: 'Juano Conecta',
      description: 'Estudio de comunicación digital e inteligencia artificial en Rafaela, Santa Fe. Cursos y capacitaciones de IA, webs y web apps con IA, diseño y branding, redes sociales y Meta Ads.',
      url: 'https://juanoconecta.ar/',
      image: 'https://juanoconecta.ar/img/juan/juan-og.jpg',
      telephone: '+5493492627811',
      email: 'juanoconecta@gmail.com',
      priceRange: '$$',
      address: { '@type': 'PostalAddress', addressLocality: 'Rafaela', addressRegion: 'Santa Fe', postalCode: '2300', addressCountry: 'AR' },
      geo: { '@type': 'GeoCoordinates', latitude: -31.2518, longitude: -61.4868 },
      areaServed: ['Rafaela', 'Santa Fe', 'Argentina', 'Brasil', 'Italia'],
      founder: { '@id': 'https://juanoconecta.ar/#juan' },
      sameAs: ['https://www.instagram.com/juanoconecta', 'https://linkedin.com/in/juan_gallino'],
      knowsAbout: ['Inteligencia artificial aplicada a negocios', 'Capacitaciones en IA', 'Desarrollo web', 'Web apps con IA', 'Diseño y branding', 'Community management', 'Meta Ads', 'Marketing digital'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de JuanoConecta',
        itemListElement: [
          'Cursos y capacitaciones de inteligencia artificial',
          'Webs y web apps con IA',
          'Diseño y branding',
          'Gestión de redes sociales',
          'Publicidad en Meta Ads',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://juanoconecta.ar/#juan',
      name: 'Juan Gallino',
      jobTitle: 'Comunicador digital y capacitador en inteligencia artificial',
      worksFor: { '@id': 'https://juanoconecta.ar/#negocio' },
      image: 'https://juanoconecta.ar/img/juan/juan-og.jpg',
      address: { '@type': 'PostalAddress', addressLocality: 'Rafaela', addressRegion: 'Santa Fe', addressCountry: 'AR' },
      sameAs: ['https://www.instagram.com/juanoconecta', 'https://linkedin.com/in/juan_gallino'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://juanoconecta.ar/#web',
      url: 'https://juanoconecta.ar/',
      name: 'JuanoConecta',
      inLanguage: 'es-AR',
      publisher: { '@id': 'https://juanoconecta.ar/#negocio' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
}

function Home() {
  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <link rel="canonical" href="https://juanoconecta.ar/" />
        <script type="application/ld+json">{JSON.stringify(HOME_SCHEMA)}</script>
      </Helmet>
      <Navbar />
      <main>
        <HeroNx />
        <MarqueeClientes />
        <section className="px-6 pt-10"><PromoBanda className="max-w-6xl mx-auto" /></section>
        <ProximaCapacitacion />
        <ServiciosNx />
        <CursoIA />
        <ProcesoNx />
        <KeywordBand />
        <CasosNx />
        <Portfolio />
        <SobreNx />
        <FaqNx />
        <Contacto />
      </main>
      <Footer />
      <PopupLeadMagnet />
      <WhatsAppButton />
    </div>
  )
}

// Rutas compartidas entre el navegador (BrowserRouter) y el prerender de build (StaticRouter).
export function AppRoutes() {
  return (
    <>
      <IrASeccion />
      <PixelPaginas />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community-manager-rafaela" element={<CommunityManagerRafaela />} />
        <Route path="/redes-sociales-para-negocios-rafaela" element={<RedesSocialesNegociosRafaela />} />
        <Route path="/publicidad-instagram-rafaela" element={<PublicidadInstagramRafaela />} />
        <Route path="/marketing-digital-rafaela" element={<MarketingDigitalRafaela />} />
        <Route path="/sobre-juanoconecta" element={<SobreJuanoConecta />} />
        <Route path="/curso-ia" element={<CursoIAPage />} />
        <Route path="/tienda" element={<Recursos />} />
        <Route path="/capacitaciones" element={<CapacitacionesInstituciones />} />
        <Route path="/navidad" element={<PromoTemporada slug="navidad" />} />
        <Route path="/verano" element={<PromoTemporada slug="verano" />} />
        <Route path="/material" element={<Material />} />
        <Route path="/material/:slug" element={<Material />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
