export function ReviewCard({
  service,
  quote,
  name,
  role,
}: {
  service: string
  quote: string
  name: string
  role: string
}) {
  return (
    <article className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-[#e5eeff] bg-white p-6">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm tracking-wider text-[#f59e0b]">★★★★★</span>
          <span className="rounded-md bg-[#eff4ff] px-2 py-1 font-['Inter:Bold'] text-[11px] font-bold text-[#1d4ed8]">
            {service}
          </span>
        </div>
        <p className="mt-3 text-xs leading-[19.5px] italic text-[#434655]">
          “{quote}”
        </p>
      </div>
      <div className="mt-4 border-t border-[#f1f5f9] pt-3">
        <strong className="block font-['Inter:Bold'] text-xs">{name}</strong>
        <span className="text-[10px] font-semibold text-[#047857]">{role}</span>
      </div>
    </article>
  )
}
