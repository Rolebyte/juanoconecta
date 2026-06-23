import { useState } from 'react'
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

export default function App() {
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
