import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import ComoTrabajo from './components/ComoTrabajo'
import Servicios from './components/Servicios'
import Tienda from './components/Tienda'
import Resultados from './components/Resultados'
import Clientes from './components/Clientes'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import PopupLeadMagnet from './components/PopupLeadMagnet'
import WhatsAppButton from './components/WhatsAppButton'
import CursorCustom from './components/CursorCustom'
import CommunityManagerRafaela from './pages/CommunityManagerRafaela'
import RedesSocialesNegociosRafaela from './pages/RedesSocialesNegociosRafaela'
import PublicidadInstagramRafaela from './pages/PublicidadInstagramRafaela'
import MarketingDigitalRafaela from './pages/MarketingDigitalRafaela'

function Home() {
  const [popupTrigger, setPopupTrigger] = useState(0)

  return (
    <div className="bg-fondo text-crema min-h-screen">
      <CursorCustom />
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <ComoTrabajo />
        <Servicios />
        <Tienda onOpenPopup={() => setPopupTrigger(n => n + 1)} />
        <Resultados />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
      <PopupLeadMagnet forceOpen={popupTrigger} />
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
      </Routes>
    </BrowserRouter>
  )
}
