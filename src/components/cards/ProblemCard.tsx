import type { LucideIcon } from "lucide-react"
import { ArrowLink } from "../ui/ArrowLink"

type ProblemCardProps = {
  title: string
  description: string
  link: string
  icon: LucideIcon
  green?: boolean
}

export function ProblemCard({
  title,
  description,
  link,
  icon: Icon,
  green = false,
}: ProblemCardProps) {
  return (
    <article
      className={`group relative flex min-h-[205px] flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
        green
          ? "border-[#cfe9dc] bg-[#ecfdf5] hover:border-[#b7dfcc] hover:bg-[#f0fdf7]"
          : "border-[#d4e1f2] bg-[#eef4fb] hover:border-[#c2d4eb] hover:bg-[#f3f7fc]"
      }`}
    >
      <div className="relative z-10">
        <div
          className={`flex size-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105 ${
            green
              ? "border-[#bfe4d4] bg-white/80 text-[#059669]"
              : "border-[#cdddf2] bg-white/80 text-[#1d4ed8]"
          }`}
        >
          <Icon
            size={22}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-4 text-[15px] font-bold text-[#0b1c30]">
          {title}
        </h3>

        <p className="mt-1.5 text-xs leading-5 text-[#5c647a]">
          {description}
        </p>
      </div>

      <div
        className={`relative z-10 mt-5 border-t pt-3 ${
          green ? "border-[#cfe9dc]" : "border-[#d6e2f0]"
        }`}
      >
        <ArrowLink
          href="#contact"
          className={green ? "!text-[#006948]" : ""}
        >
          {link}
        </ArrowLink>
      </div>

      <div
        className={`pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full opacity-70 blur-2xl transition-transform duration-500 group-hover:scale-125 ${
          green ? "bg-[#a7f3d0]" : "bg-[#c7dbf7]"
        }`}
      />
    </article>
  )
}