// Bloque "Meta del mes" de cada plan de redes (venta por objetivo, 5/11/2026).
export default function MetaPlan({ plan, etiqueta = 'Meta del mes' }) {
  if (!plan.metas) return null
  return (
    <div className="rounded-xl border border-[#22D3EE]/25 bg-[#22D3EE]/[0.06] px-4 py-3 mb-5">
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#22D3EE]">{etiqueta}</span>
        {plan.objetivo && <span className="text-[11px] font-semibold text-crema/70">{plan.objetivo}</span>}
      </div>
      <ul className="space-y-1.5">
        {plan.metas.map(([k, v]) => (
          <li key={k} className="flex justify-between gap-3 text-[13px] text-crema/65">
            <span>{k}</span>
            <b className="text-crema whitespace-nowrap tabular-nums text-right">{v}</b>
          </li>
        ))}
      </ul>
    </div>
  )
}
