import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import HeroNx from './components/home/HeroNx'
import MarqueeClientes from './components/home/MarqueeClientes'
import SobreNx from './components/home/SobreNx'
import ServiciosNx from './components/home/ServiciosNx'
import CasosNx from './components/home/CasosNx'
import FaqNx from './components/home/FaqNx'
import KeywordBand from './components/home/KeywordBand'
import ProcesoNx from './components/home/ProcesoNx'
import ProximaCapacitacion from './components/home/ProximaCapacitacion'
import CommunityManagerRafaela from './pages/CommunityManagerRafaela'
import RedesSocialesNegociosRafaela from './pages/RedesSocialesNegociosRafaela'
import PublicidadInstagramRafaela from './pages/PublicidadInstagramRafaela'
import MarketingDigitalRafaela from './pages/MarketingDigitalRafaela'
import SobreJuanoConecta from './pages/SobreJuanoConecta'

function Home() {
  // Helmet para canonical de la home (evita duplicados www vs non-www)

  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <link rel="canonical" href="https://juanoconecta.ar/" />
      </Helmet>
      <Navbar />
      <main>
        <HeroNx />
        <MarqueeClientes />
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

export default function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  )
}
