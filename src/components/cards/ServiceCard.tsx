import type { ReactNode } from "react"
import { ArrowUpRight, Check } from "lucide-react"
import { ArrowLink } from "../ui/ArrowLink"
import { Badge } from "../ui/Badge"

export function ServiceCard({
  title,
  description,
  badge,
  note,
  image,
  children,
  link,
  green = false,
}: {
  title: string
  description: string
  badge: string
  note: string
  image: string
  children: ReactNode
  link: string
  green?: boolean
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border transition-all duration-500 hover:-translate-y-1 ${
        green
          ? "border-[#cfe9dc] bg-[#f3fbf7] hover:border-[#b8ddca] hover:shadow-[0_20px_50px_rgba(5,150,105,0.10)]"
          : "border-[#cfddf0] bg-[#f3f7fc] hover:border-[#b9cde7] hover:shadow-[0_20px_50px_rgba(29,78,216,0.10)]"
      }`}
    >
      {/* Image */}
      <div className="relative h-[235px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />

        {/* Image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07182b]/60 via-[#07182b]/5 to-transparent" />

        {/* Top status */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.04em] backdrop-blur-md ${
              green
                ? "border-white/60 bg-white/90 text-[#047857]"
                : "border-white/60 bg-white/90 text-[#1d4ed8]"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${
                green ? "bg-[#059669]" : "bg-[#1d4ed8]"
              }`}
            />
            {note}
          </span>
        </div>

        {/* Bottom image label */}
        <div className="absolute right-5 bottom-5 left-5">
          <Badge green={green}>{badge}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[25px] font-bold leading-tight tracking-[-0.02em] text-[#0b1c30]">
              {title}
            </h3>

            <div
              className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                green
                  ? "border-[#cce7d9] bg-[#e8f8ef] text-[#047857]"
                  : "border-[#d5e2f3] bg-[#eaf2ff] text-[#1d4ed8]"
              }`}
            >
              <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
            </div>
          </div>

          <p className="mt-3 text-sm leading-6 text-[#4b5870]">
            {description}
          </p>

          {/* Features */}
          <div className="mt-5">
            <div className="space-y-2">
              {children}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-6 flex items-center justify-between border-t pt-4 ${
            green ? "border-[#d8eee2]" : "border-[#dbe5f2]"
          }`}
        >
          <span className="text-[11px] font-medium text-[#8a96a8]">
            Professional service
          </span>

          <ArrowLink
            href="#contact"
            className={green ? "!text-[#006948]" : ""}
          >
            {link}
          </ArrowLink>
        </div>
      </div>
    </article>
  )
}
