export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) {
  return (
    <article className="rounded-2xl border border-[#e5eeff] bg-white p-5">
      <div className="flex size-9 items-center justify-center rounded-lg bg-[#eff4ff]">
        <img src={icon} alt="" className="max-h-[18px] max-w-[18px]" />
      </div>
      <h3 className="mt-3 font-['Inter:Bold'] text-sm font-bold">{title}</h3>
      <p className="mt-1 text-xs leading-[19.5px] text-[#5c647a]">
        {description}
      </p>
    </article>
  )
}
