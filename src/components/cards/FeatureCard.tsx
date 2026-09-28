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
    <article className="group rounded-2xl border border-[#29445B] bg-[#0B2942] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#397AB8] hover:bg-[#0D304D] hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)]">
      <div className="flex size-10 items-center justify-center rounded-xl border border-[#62A8FF]/20 bg-[#1264D8]/15 transition-colors duration-300 group-hover:bg-[#1264D8]/25">
        <Icon
          size={18}
          strokeWidth={2}
          className="text-[#8CBFFF]"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-3 text-sm font-bold text-white">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-[19.5px] text-[#CBD5E1]">
        {description}
      </p>
    </article>
  )
}
