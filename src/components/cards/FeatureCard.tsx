import type { LucideIcon } from "lucide-react"

type FeatureCardProps = {
  title: string
  description: string
  icon: LucideIcon
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-[#e1e9f5] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfddef] hover:bg-[#fbfdff] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <div className="flex size-10 items-center justify-center rounded-xl border border-[#dbe7ff] bg-[#eff4ff] transition-colors duration-300 group-hover:bg-[#e7efff]">
        <Icon
          size={18}
          strokeWidth={2}
          className="text-[#1d4ed8]"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-3 font-bold text-sm font-bold text-[#0b1c30]">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-[19.5px] text-[#5c647a]">
        {description}
      </p>
    </article>
  )
}
