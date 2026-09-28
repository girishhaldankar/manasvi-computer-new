import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
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
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_8px_26px_rgba(11,23,38,0.06)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] ${
        green
          ? "border-[#D6E5F5] hover:border-[#7DB2F8] hover:shadow-[0_18px_40px_rgba(47,128,237,0.14)]"
          : "border-[#E2E8F0] hover:border-[#9BBFF0] hover:shadow-[0_18px_40px_rgba(18,100,216,0.13)]"
      }`}
    >
      {/* Image */}
      <div
        className={`relative h-[235px] overflow-hidden ${
          green ? "bg-[#F0F7FF]" : "bg-[#EEF4FB]"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07182b]/60 via-[#07182b]/5 to-transparent" />

        {/* Top status */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.04em] ${
              green
                  ? "border-white bg-white text-[#2F80ED]"
                  : "border-white bg-white text-[#1264D8]"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${
                green ? "bg-[#2F80ED]" : "bg-[#1264D8]"
              }`}
            />
            {note}
          </span>
        </div>

        {/* Bottom image label */}
        <div className="absolute right-5 bottom-5 left-5">
          <Badge>{badge}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[25px] font-bold leading-tight tracking-[-0.02em] text-[#0B1726]">
              {title}
            </h3>

            <div
              className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                green
                  ? "border-[#D5E6FA] bg-[#F0F7FF] text-[#2F80ED]"
                  : "border-[#D5E3F4] bg-[#EEF5FF] text-[#1264D8]"
              }`}
            >
              <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
            </div>
          </div>

          <p className="mt-3 text-sm leading-6 text-[#475569]">
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
            green ? "border-[#DCEBFA]" : "border-[#E2E8F0]"
          }`}
        >
          <span className="text-[11px] font-medium text-[#64748B]">
            Professional service
          </span>

          <ArrowLink
            href="#contact"
            className={green ? "!text-[#2F80ED]" : "!text-[#1264D8]"}
          >
            {link}
          </ArrowLink>
        </div>
      </div>
    </article>
  )
}
