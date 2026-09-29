import type { LucideIcon } from "lucide-react"

type FeatureCardProps = {
  title: string
  description: string
  icon: LucideIcon
  variant?: "default" | "trust"
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  variant = "default",
}: FeatureCardProps) {
  const isTrust = variant === "trust"

  return (
    <article
      className={`group rounded-2xl border p-5 transition-all duration-300 ${
        isTrust
          ? "h-full border-[#29445B] bg-gradient-to-br from-[#0D2D47] via-[#0B2942] to-[#091F33] hover:-translate-y-1 hover:border-[#397AB8] hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
          : "border-[#29445B] bg-[#0B2942] hover:-translate-y-0.5 hover:border-[#397AB8] hover:bg-[#0D304D] hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)]"
      }`}
    >
      <div
        className={`flex size-10 items-center justify-center rounded-xl border transition-colors duration-300 ${
          isTrust
            ? "border-[#62A8FF]/30 bg-[#1264D8]/20 shadow-[inset_0_1px_0_rgba(140,191,255,0.12)] group-hover:bg-[#1264D8]/30"
            : "border-[#62A8FF]/20 bg-[#1264D8]/15 group-hover:bg-[#1264D8]/25"
        }`}
      >
        <Icon
          size={18}
          strokeWidth={2}
          className={
            isTrust
              ? "text-[#8CBFFF] transition-colors duration-300 group-hover:text-white"
              : "text-[#8CBFFF]"
          }
          aria-hidden="true"
        />
      </div>

      <h3
        className={`mt-3 text-sm font-bold text-white ${
          isTrust ? "leading-5" : ""
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-1 text-xs text-[#CBD5E1] ${
          isTrust ? "leading-5" : "leading-[19.5px]"
        }`}
      >
        {description}
      </p>
    </article>
  )
}
