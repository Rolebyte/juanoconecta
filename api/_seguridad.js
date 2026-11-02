// Controles de seguridad compartidos por las funciones de /api (no es una ruta: empieza con _).
// - claveAdmin: compara ADMIN_SECRET en tiempo constante y frena a quien prueba contraseñas.
// - limite: tope de envíos por IP para los formularios públicos (anti spam y anti abuso de mails).
// - origenAjeno: rechaza envíos que vienen desde otra web (un navegador en otro sitio no puede usar nuestros formularios).
// Los contadores viven en la memoria de cada instancia de Vercel: no es un muro perfecto,
// pero corta los ataques en ráfaga, que son los comunes. El muro fuerte es una clave admin larga.
import { timingSafeEqual, createHash } from 'node:crypto'

const ORIGENES_OK = [/^https:\/\/(www\.)?juanoconecta\.ar$/, /^https:\/\/juanoconecta[a-z0-9-]*\.vercel\.app$/, /^http:\/\/localhost(:\d+)?$/]
const contadores = new Map()

export function ip(req) {
  return String(req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'sin-ip'
}

// true si ya pasó el tope: `max` intentos cada `ventanaMs` por IP y por grupo.
export function limite(req, grupo, max, ventanaMs) {
  const ahora = Date.now()
  const clave = `${grupo}:${ip(req)}`
  const c = contadores.get(clave)
  if (!c || ahora > c.hasta) {
    contadores.set(clave, { n: 1, hasta: ahora + ventanaMs })
    if (contadores.size > 5000) for (const [k, v] of contadores) if (ahora > v.hasta) contadores.delete(k)
    return false
  }
  c.n++
  return c.n > max
}

export function origenAjeno(req) {
  const o = req.headers.origin
  return Boolean(o) && !ORIGENES_OK.some((r) => r.test(o))
}

const hash = (s) => createHash('sha256').update(String(s)).digest()

// Valida la clave del panel. `valor` es lo que mandó el navegador (x-admin-secret o Bearer).
// Devuelve null si está bien, o el código HTTP con el que hay que cortar (401 o 429).
export function claveAdmin(req, valor) {
  const { ADMIN_SECRET } = process.env
  const bloqueo = contadores.get(`admin-fallos:${ip(req)}`)
  if (bloqueo && Date.now() <= bloqueo.hasta && bloqueo.n >= 30) return 429
  const ok = Boolean(ADMIN_SECRET) && Boolean(valor) && timingSafeEqual(hash(valor), hash(ADMIN_SECRET))
  if (ok) return null
  limite(req, 'admin-fallos', 30, 15 * 60 * 1000)
  return 401
}

export function cortarAdmin(res, codigo) {
  return res.status(codigo).json({ error: codigo === 429 ? 'Demasiados intentos. Probá en 15 minutos.' : 'No autorizado' })
}

// Lee el cuerpo JSON sin romper la función si llega mal formado.
export function cuerpo(req) {
  if (typeof req.body !== 'string') return req.body || {}
  try { return JSON.parse(req.body || '{}') } catch { return {} }
}
