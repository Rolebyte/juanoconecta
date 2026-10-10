// Panel de admin: una sola función con varias acciones (?accion=...), para no sumar funciones en Vercel.
// Usa la misma contraseña que los leads (ADMIN_SECRET) y la service key de Supabase.
import { productos, precioNumero } from '../src/data/tienda.js'

const ETAPAS = ['nuevo', 'contactado', 'interesado', 'propuesta', 'cliente', 'descartado']
const ORIGENES = ['lead', 'encuesta', 'venta', 'manual', 'curso']
// Etiquetas que ya tenían los leads en el panel viejo → etapa de seguimiento.
const LABEL_A_ETAPA = { interesado: 'interesado', 'en-negociacion': 'propuesta', cerrado: 'cliente', descartado: 'descartado' }

// Productos de la tienda que se cobran con links fijos de Mercado Pago o con Gumroad: esos pagos no pasan
// por api/webhook-mp, así que se traen de cada plataforma al abrir el panel (mp_id único evita duplicados).
const TIENDA = productos.filter((p) => p.btnARS || p.btnUSD).map((p) => ({ nombre: p.nombre, ars: precioNumero(p.precioARS) }))
const deTienda = (pago) => {
  const desc = String(pago.description || '').toLowerCase()
  // Si no coincide el nombre, el monto exacto (solo pagos online: los cobros con QR o Point tienen pos_id).
  return TIENDA.find((t) => desc.includes(t.nombre.toLowerCase())) || (!pago.pos_id && TIENDA.find((t) => t.ars === pago.transaction_amount))
}

async function sincronizarTienda(db) {
  const { MP_ACCESS_TOKEN, GUMROAD_ACCESS_TOKEN } = process.env
  const filas = []
  const desde = new Date(Date.now() - 90 * 86400000)
  if (MP_ACCESS_TOKEN) {
    try {
      const r = await fetch('https://api.mercadopago.com/v1/payments/search?status=approved&sort=date_created&criteria=desc&range=date_created&begin_date=NOW-90DAYS&end_date=NOW&limit=100', {
        headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` },
      })
      const d = r.ok ? await r.json() : { results: [] }
      for (const pago of d.results || []) {
        if (pago.external_reference) continue // pagos de la web con checkout propio: ya los guarda el webhook
        const prod = deTienda(pago)
        if (!prod) continue
        const payer = pago.payer || {}
        filas.push({
          mp_id: String(pago.id), created_at: pago.date_approved || pago.date_created || new Date().toISOString(), servicio: prod.nombre, monto: pago.transaction_amount,
          moneda: 'ARS', material: 'tienda', cliente: [payer.first_name, payer.last_name].filter(Boolean).join(' ') || null, email: payer.email || null,
        })
      }
    } catch (e) { console.error('sync mp', e?.message) }
  }
  if (GUMROAD_ACCESS_TOKEN) {
    try {
      // Gumroad devuelve las ventas de a páginas (page_key); con 5 alcanza para 90 días de una tienda chica.
      const ventas = []
      let pagina = ''
      for (let i = 0; i < 5; i++) {
        const q = new URLSearchParams({ access_token: GUMROAD_ACCESS_TOKEN, after: desde.toISOString().slice(0, 10), ...(pagina ? { page_key: pagina } : {}) })
        const r = await fetch(`https://api.gumroad.com/v2/sales?${q}`)
        const d = r.ok ? await r.json() : {}
        ventas.push(...(d.sales || []))
        pagina = d.next_page_key
        if (!pagina) break
      }
      for (const v of ventas) {
        if (v.refunded || v.chargedback) continue
        filas.push({
          mp_id: `gumroad:${v.id}`, created_at: v.created_at || new Date().toISOString(), servicio: v.product_name || 'Gumroad', monto: (Number(v.price) || 0) / 100,
          moneda: String(v.currency || 'usd').toUpperCase(), material: 'tienda', cliente: v.full_name || v.purchaser_name || null, email: v.email || null,
        })
      }
    } catch (e) { console.error('sync gumroad', e?.message) }
  }
  if (filas.length) {
    await db('ventas?on_conflict=mp_id', { method: 'POST', headers: { Prefer: 'return=minimal,resolution=ignore-duplicates' }, body: JSON.stringify(filas) })
  }
}

export default async function handler(req, res) {
  const { ADMIN_SECRET, SUPABASE_URL, SUPABASE_SERVICE_KEY } = process.env
  if (!ADMIN_SECRET || req.headers['x-admin-secret'] !== ADMIN_SECRET) return res.status(401).json({ error: 'No autorizado' })

  const db = async (ruta, opciones = {}) => {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/${ruta}`, {
      ...opciones,
      headers: {
        apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`, 'Content-Type': 'application/json',
        ...(opciones.headers || {}),
      },
    })
    if (!r.ok) throw new Error(`${ruta}: ${r.status} ${await r.text()}`)
    return r.status === 204 ? null : r.json()
  }

  try {
    const accion = req.query?.accion
    if (req.method === 'GET' && accion === 'encuestas') return res.status(200).json(await db('encuestas?select=*&order=created_at.desc'))
    if (req.method === 'GET' && (accion === 'ventas' || accion === 'seguimientos')) {
      try { await sincronizarTienda(db) } catch (e) { console.error('sync tienda', e?.message) }
    }
    if (req.method === 'GET' && accion === 'ventas') return res.status(200).json(await db('ventas?select=*&order=created_at.desc'))
    if (req.method === 'GET' && accion === 'clics') {
      const desde = new Date(Date.now() - 90 * 86400000).toISOString()
      return res.status(200).json(await db(`clics?select=created_at,pagina,boton,destino&created_at=gte.${desde}&order=created_at.desc&limit=10000`))
    }

    if (req.method === 'GET' && accion === 'seguimientos') {
      const [leads, encuestas, ventas, guardados] = await Promise.all([
        db('leads?select=id,email,created_at,label,notes,source&order=created_at.desc'),
        db('encuestas?select=id,created_at,material,nombre,contacto,intereses,puntaje&contacto=not.is.null&order=created_at.desc'),
        db('ventas?select=id,mp_id,created_at,servicio,monto,moneda,cliente,email&order=created_at.desc'),
        db('seguimientos?select=*'),
      ])
      const porClave = Object.fromEntries(guardados.map((g) => [`${g.origen}:${g.ref_id}`, g]))
      const usados = new Set()
      const armar = (origen, ref_id, base) => {
        const clave = `${origen}:${ref_id}`
        usados.add(clave)
        const g = porClave[clave]
        return { ...base, origen, ref_id, etapa: g?.etapa || base.etapa, proximo: g?.proximo || null, notas: g?.notas ?? base.notas ?? '' }
      }
      const lista = [
        ...leads.map((l) => armar('lead', String(l.id), {
          nombre: '', contacto: l.email, created_at: l.created_at, detalle: `Lead ${l.source || 'web'}`,
          etapa: LABEL_A_ETAPA[l.label] || 'nuevo', notas: l.notes || '',
        })),
        ...encuestas.filter((e) => String(e.contacto || '').trim()).map((e) => armar('encuesta', String(e.id), {
          nombre: e.nombre || '', contacto: e.contacto, created_at: e.created_at,
          detalle: `Encuesta ${e.material} · ${e.puntaje}★${(e.intereses || []).length ? ' · le interesa ' + e.intereses.join(', ') : ''}`, etapa: 'nuevo',
        })),
        ...ventas.map((v) => armar('venta', String(v.mp_id), {
          nombre: v.cliente || '', contacto: v.email || '', created_at: v.created_at,
          detalle: `Compró ${v.servicio || ''} (${v.moneda && v.moneda !== 'ARS' ? v.moneda + ' ' : '$'}${Math.round(v.monto || 0).toLocaleString('es-AR')})`, etapa: 'cliente',
        })),
        ...guardados.filter((g) => g.origen === 'curso').map((g) => armar('curso', g.ref_id, {
          nombre: g.nombre || '', contacto: g.contacto || '', created_at: g.created_at, detalle: 'Lista de espera del curso de IA', etapa: g.etapa,
        })),
        ...guardados.filter((g) => g.origen === 'manual').map((g) => armar('manual', g.ref_id, {
          nombre: g.nombre || '', contacto: g.contacto || '', created_at: g.created_at, detalle: 'Cargado a mano', etapa: g.etapa,
        })),
      ]
      return res.status(200).json(lista)
    }

    if (req.method === 'POST' && accion === 'guardar-seguimiento') {
      const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
      const origen = ORIGENES.includes(b.origen) ? b.origen : null
      if (!origen) return res.status(400).json({ error: 'Origen inválido' })
      const fila = {
        origen,
        ref_id: origen === 'manual' && !b.ref_id ? `m${Date.now()}` : String(b.ref_id || '').slice(0, 100),
        updated_at: new Date().toISOString(),
      }
      if (!fila.ref_id) return res.status(400).json({ error: 'Falta el contacto' })
      if (b.etapa !== undefined) {
        if (!ETAPAS.includes(b.etapa)) return res.status(400).json({ error: 'Etapa inválida' })
        fila.etapa = b.etapa
      }
      if (b.proximo !== undefined) fila.proximo = /^\d{4}-\d{2}-\d{2}$/.test(b.proximo || '') ? b.proximo : null
      if (b.notas !== undefined) fila.notas = String(b.notas || '').slice(0, 2000)
      if (b.nombre !== undefined) fila.nombre = String(b.nombre || '').slice(0, 200)
      if (b.contacto !== undefined) fila.contacto = String(b.contacto || '').slice(0, 200)
      const [guardado] = await db('seguimientos?on_conflict=origen,ref_id', {
        method: 'POST', headers: { Prefer: 'return=representation,resolution=merge-duplicates' }, body: JSON.stringify(fila),
      })
      return res.status(200).json(guardado)
    }

    if (req.method === 'POST' && accion === 'borrar-manual') {
      const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}
      if (!b.ref_id) return res.status(400).json({ error: 'Falta el contacto' })
      await db(`seguimientos?origen=eq.manual&ref_id=eq.${encodeURIComponent(b.ref_id)}`, { method: 'DELETE' })
      return res.status(200).json({ ok: true })
    }

    return res.status(400).json({ error: 'Acción desconocida' })
  } catch (err) {
    console.error('admin', err?.message)
    return res.status(500).json({ error: 'Error interno' })
  }
}
