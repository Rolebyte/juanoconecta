// Panel de admin: una sola función con varias acciones (?accion=...), para no sumar funciones en Vercel.
// Usa la misma contraseña que los leads (ADMIN_SECRET) y la service key de Supabase.
const ETAPAS = ['nuevo', 'contactado', 'interesado', 'propuesta', 'cliente', 'descartado']
const ORIGENES = ['lead', 'encuesta', 'venta', 'manual']
// Etiquetas que ya tenían los leads en el panel viejo → etapa de seguimiento.
const LABEL_A_ETAPA = { interesado: 'interesado', 'en-negociacion': 'propuesta', cerrado: 'cliente', descartado: 'descartado' }

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
    if (req.method === 'GET' && accion === 'ventas') return res.status(200).json(await db('ventas?select=*&order=created_at.desc'))
    if (req.method === 'GET' && accion === 'clics') {
      const desde = new Date(Date.now() - 90 * 86400000).toISOString()
      return res.status(200).json(await db(`clics?select=created_at,pagina,boton&created_at=gte.${desde}&order=created_at.desc&limit=10000`))
    }

    if (req.method === 'GET' && accion === 'seguimientos') {
      const [leads, encuestas, ventas, guardados] = await Promise.all([
        db('leads?select=id,email,created_at,label,notes,source&order=created_at.desc'),
        db('encuestas?select=id,created_at,material,nombre,contacto,intereses,puntaje&contacto=not.is.null&order=created_at.desc'),
        db('ventas?select=id,mp_id,created_at,servicio,monto,cliente,email&order=created_at.desc'),
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
          detalle: `Compró ${v.servicio || ''} ($${Math.round(v.monto || 0).toLocaleString('es-AR')})`, etapa: 'cliente',
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
