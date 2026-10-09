// Eventos del Píxel de Meta (el código base y el primer PageView están en index.html).
// Le dicen a Meta qué visitas terminan en consulta, para que las campañas aprendan.
export function pixel(evento, datos) {
  try { window.fbq?.('track', evento, datos) } catch { /* sin píxel la web funciona igual */ }
}
