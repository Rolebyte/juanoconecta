import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'
import { pixel } from './pixel'

// Cuenta los clics en cualquier botón de WhatsApp de la web (panel /admin → Clics).
document.addEventListener('click', (e) => {
  const a = e.target.closest?.('a[href*="wa.me/"]')
  if (!a) return
  const datos = JSON.stringify({ pagina: window.location.pathname, boton: (a.getAttribute('aria-label') || a.textContent || '').trim() })
  try {
    if (!navigator.sendBeacon?.('/api/clic', new Blob([datos], { type: 'application/json' }))) {
      fetch('/api/clic', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: datos, keepalive: true })
    }
  } catch { /* si falla el conteo, el botón igual abre WhatsApp */ }
  window.gtag?.('event', 'click_whatsapp', { pagina: window.location.pathname })
  pixel('Contact', { content_name: 'whatsapp', content_category: window.location.pathname })
}, true)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
