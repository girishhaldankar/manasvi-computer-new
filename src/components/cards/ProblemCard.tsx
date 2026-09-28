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
      className={`group relative flex min-h-[205px] flex-col justify-between overflow-hidden rounded-2xl border p-5 shadow-[0_5px_18px_rgba(11,23,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(18,100,216,0.10)] ${
        green
          ? "border-[#D6E5F5] bg-white hover:border-[#A9C9F3]"
          : "border-[#E2E8F0] bg-white hover:border-[#A9C9F3]"
      }`}
    >
      <div className="relative z-10">
        <div
          className={`flex size-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105 ${
            green
              ? "border-[#D6E5F5] bg-[#EEF5FF] text-[#2F80ED]"
              : "border-[#D6E5F5] bg-[#EEF5FF] text-[#1264D8]"
          }`}
        >
          <Icon
            size={22}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-4 text-[15px] font-bold text-[#0B1726]">
          {title}
        </h3>

        <p className="mt-1.5 text-xs leading-5 text-[#475569]">
          {description}
        </p>
      </div>

      <div
        className={`relative z-10 mt-5 border-t pt-3 ${
          green ? "border-[#E2E8F0]" : "border-[#E2E8F0]"
        }`}
      >
        <ArrowLink
          href="#contact"
          className="!text-[#1264D8]"
        >
          {link}
        </ArrowLink>
      </div>

      <div
        className={`pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full opacity-70 blur-2xl transition-transform duration-500 group-hover:scale-125 ${
          green ? "bg-[#B8D7FF]" : "bg-[#C9DEFA]"
        }`}
      />
    </article>
  )
}