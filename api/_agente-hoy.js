// Agente de la lista "Hoy": lee los contactos abiertos del panel y, para cada uno, dice qué tan caliente está,
// si hay que escribirle hoy y deja el mensaje listo en la voz de Juan. No manda nada: Juan revisa y envía.
import Anthropic from '@anthropic-ai/sdk'

const MODELO = 'claude-opus-5-5'
const POR_TANDA = 15 // tandas chicas en paralelo para que la función termine rápido
const MAX_CONTACTOS = 60

const INSTRUCCIONES = `Sos el asistente de ventas de Juan Gallino, de JuanoConecta (juanoconecta.ar). Juan ayuda a comercios y emprendedores chicos con redes sociales, páginas web, Meta Ads y herramientas de IA, y da capacitaciones de IA para emprendedores y comercios a través de municipios, comunas y cámaras. Trabaja con clientes de cualquier ciudad, no solo de Rafaela.

Te paso una lista de contactos que entraron por la web o que Juan cargó a mano. Para cada uno decidí:
- temperatura: "caliente" (pidió algo concreto, tiene plazo, compró hace poco o respondió con interés), "tibio" (mostró interés pero sin pedido claro) o "frio" (solo descargó un regalo hace tiempo o no hay señales).
- accion: "escribir_hoy" (hay que escribirle hoy), "esperar" (le escribimos hace poco o conviene darle unos días) o "cerrar" (no tiene sentido seguir).
- motivo: una frase corta que explique por qué, con el dato concreto que lo justifica.
- proximo_en_dias: en cuántos días conviene volver a escribirle si hoy no responde (entre 1 y 30).
- mensaje: el mensaje para que Juan copie y pegue. Vacío si la acción es "cerrar".

Cómo escribe Juan (respetalo siempre):
- Español rioplatense con vos. Si el contacto es un municipio, comuna o cámara: usted, formal y breve.
- Mensajes cortos y cálidos: 1 a 3 líneas. Arranca con algo como "¡Hola Ana! ¿Cómo andás?" o "Acá Juan, un gusto". Si no sabés el nombre, solo "¡Hola! ¿Cómo andás?".
- Primero la persona y lo que necesita, después el servicio. No pongas precios salvo que el contacto ya los haya pedido.
- Cerrá con una pregunta de sí fácil y un paso concreto (por ejemplo "¿Te muestro un ejemplo mañana?" o "¿Te paso 3 ideas para tu local?").
- Un solo emoji suave como mucho (😊 🙌 ☺️). Sin listas, sin viñetas, sin rayas largas.
- Nunca prometas ventas: prometé lo que Juan controla (que te vean, que te encuentren, que estés listo para responder y cobrar).
- Nunca menciones aumentos de precio ni fechas límite.
- Prohibido: "potenciá", "llevá al siguiente nivel", "soluciones integrales", "transformar", "revolucionar", "impulsar", "optimizar", "en la era digital", "no es solo X, es Y", "descubrí", "experiencia única", "aliado estratégico", "sinergia", "ecosistema", "espero que estés muy bien", "no dudes en contactarme", "tú", "puedes", signos dobles.
- Si es un cliente que ya compró, el mensaje es para ver cómo le va y, si corresponde, pedirle su opinión en juanoconecta.ar/opinion.
- Si es un lead del regalo de la web (los 5 prompts u otro PDF), preguntale si lo pudo usar y ofrecé una ayuda chica y concreta.

El mensaje va solo, sin comentarios tuyos adentro: es el texto exacto que se va a mandar.
Mirá la fecha de hoy y la antigüedad de cada contacto. Usá las notas de Juan: son lo más importante.
Devolvé un resultado por cada contacto, con la misma "clave" que te pasé.`

const ESQUEMA = {
  type: 'object',
  properties: {
    contactos: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          clave: { type: 'string' },
          temperatura: { type: 'string', enum: ['caliente', 'tibio', 'frio'] },
          accion: { type: 'string', enum: ['escribir_hoy', 'esperar', 'cerrar'] },
          motivo: { type: 'string' },
          proximo_en_dias: { type: 'integer' },
          mensaje: { type: 'string' },
        },
        required: ['clave', 'temperatura', 'accion', 'motivo', 'proximo_en_dias', 'mensaje'],
        additionalProperties: false,
      },
    },
  },
  required: ['contactos'],
  additionalProperties: false,
}

const ETAPA_TXT = { nuevo: 'nuevo', contactado: 'ya le escribimos', interesado: 'interesado', propuesta: 'propuesta enviada', cliente: 'cliente', descartado: 'descartado' }

function resumen(r, hoy) {
  const dias = Math.max(0, Math.round((hoy - new Date(r.created_at)) / 86400000))
  return {
    clave: `${r.origen}:${r.ref_id}`,
    nombre: r.nombre || '',
    contacto: r.contacto || '',
    origen: r.origen,
    que_hizo: r.detalle || '',
    etapa: ETAPA_TXT[r.etapa] || r.etapa,
    entro_hace_dias: dias,
    proximo_contacto_agendado: r.proximo || '',
    notas_de_juan: String(r.notas || '').slice(0, 800),
  }
}

// Ordena para que, si hay más de MAX_CONTACTOS, queden los que más importan: agendados para hoy, nuevos, con notas, recientes.
function prioridad(r, hoyISO) {
  let p = 0
  if (r.proximo && r.proximo <= hoyISO) p += 4
  if (r.etapa === 'interesado' || r.etapa === 'propuesta') p += 3
  if (r.etapa === 'nuevo') p += 2
  if (String(r.notas || '').trim()) p += 2
  return p
}

async function tanda(client, contactos, hoyTxt) {
  const resp = await client.beta.messages.create({
    model: MODELO,
    max_tokens: 16000,
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    output_config: { effort: 'low', format: { type: 'json_schema', schema: ESQUEMA } },
    system: [{ type: 'text', text: INSTRUCCIONES, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: `Hoy es ${hoyTxt}.\n\nContactos:\n${JSON.stringify(contactos, null, 1)}` }],
  })
  if (resp.stop_reason === 'refusal') throw new Error('El modelo no respondió esta tanda')
  if (resp.stop_reason === 'max_tokens') throw new Error('La respuesta quedó cortada')
  const texto = resp.content.filter((b) => b.type === 'text').map((b) => b.text).join('')
  return JSON.parse(texto).contactos || []
}

export async function armarHoy(lista) {
  if (!process.env.ANTHROPIC_API_KEY) {
    const e = new Error('Falta la clave de la IA (ANTHROPIC_API_KEY en Vercel)')
    e.codigo = 'sin-clave'
    throw e
  }
  const ahora = new Date()
  const hoyISO = new Date(ahora.getTime() - 3 * 3600000).toISOString().slice(0, 10) // hora de Argentina
  const abiertos = lista
    .filter((r) => r.etapa !== 'descartado')
    // Clientes solo si compraron en los últimos 60 días: para ver cómo les va y pedir opinión.
    .filter((r) => r.etapa !== 'cliente' || ahora - new Date(r.created_at) < 60 * 86400000)
    .sort((a, b) => prioridad(b, hoyISO) - prioridad(a, hoyISO) || String(b.created_at).localeCompare(String(a.created_at)))
    .slice(0, MAX_CONTACTOS)
  if (!abiertos.length) return { fecha: hoyISO, contactos: [] }

  const hoyTxt = ahora.toLocaleDateString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  const client = new Anthropic()
  const datos = abiertos.map((r) => resumen(r, ahora))
  const tandas = []
  for (let i = 0; i < datos.length; i += POR_TANDA) tandas.push(datos.slice(i, i + POR_TANDA))
  const resultados = await Promise.allSettled(tandas.map((t) => tanda(client, t, hoyTxt)))

  const porClave = {}
  resultados.forEach((r) => { if (r.status === 'fulfilled') r.value.forEach((c) => { porClave[c.clave] = c }) })
  const fallidas = resultados.filter((r) => r.status === 'rejected').length
  if (fallidas === resultados.length) throw new Error(resultados[0].reason?.message || 'No se pudo armar la lista')

  const contactos = abiertos.map((r) => {
    const a = porClave[`${r.origen}:${r.ref_id}`]
    if (!a) return null
    return {
      origen: r.origen, ref_id: r.ref_id, nombre: r.nombre || '', contacto: r.contacto || '', detalle: r.detalle || '', etapa: r.etapa,
      temperatura: a.temperatura, accion: a.accion, motivo: a.motivo, mensaje: a.mensaje,
      proximo_en_dias: Math.min(30, Math.max(1, Number(a.proximo_en_dias) || 3)),
    }
  }).filter(Boolean)
  return { fecha: hoyISO, contactos, incompleta: fallidas > 0 }
}
