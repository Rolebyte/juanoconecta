import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import { pixel } from './pixel'

// Cuenta los clics en botones de WhatsApp y de pago de la tienda (panel /admin → Clics y Ventas).
const DESTINOS = [['wa.me/', 'whatsapp'], ['mpago.la/', 'mercadopago'], ['gumroad.com/', 'gumroad']]
document.addEventListener('click', (e) => {
  const a = e.target.closest?.('a[href]')
  const destino = a && DESTINOS.find(([dominio]) => a.href.includes(dominio))?.[1]
  if (!destino) return
  const datos = JSON.stringify({ pagina: window.location.pathname, destino, boton: (a.getAttribute('aria-label') || a.textContent || '').trim() })
  try {
    if (!navigator.sendBeacon?.('/api/clic', new Blob([datos], { type: 'application/json' }))) {
      fetch('/api/clic', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: datos, keepalive: true })
    }
  } catch { /* si falla el conteo, el botón igual abre el link */ }
  if (destino === 'whatsapp') {
    window.gtag?.('event', 'click_whatsapp', { pagina: window.location.pathname })
    pixel('Contact', { content_name: 'whatsapp', content_category: window.location.pathname })
  } else {
    window.gtag?.('event', 'begin_checkout', { pagina: window.location.pathname, metodo: destino })
    pixel('InitiateCheckout', { content_category: 'tienda', content_name: destino })
  }
}, true)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
