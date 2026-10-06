import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tienda from '../components/Tienda'
import PopupLeadMagnet from '../components/PopupLeadMagnet'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Recursos() {
  const [popupTrigger, setPopupTrigger] = useState(0)
  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>Recursos de IA para crear contenido | JuanoConecta</title>
        <meta name="description" content="Prompts, kits y auditorías con IA para crear contenido que vende. Recursos digitales de JuanoConecta, Rafaela." />
        <link rel="canonical" href="https://juanoconecta.ar/tienda" />
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
