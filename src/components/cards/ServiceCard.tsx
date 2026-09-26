import type { ReactNode } from "react"
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
    <article className="flex h-full flex-col justify-between rounded-3xl border border-[#e5eeff] bg-white p-6 md:p-8">
      <div>
        <div className="flex items-center justify-between gap-3">
          <Badge green={green}>{badge}</Badge>
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              green
                ? "bg-[#eff4ff] text-[#1d4ed8]"
                : "bg-[#ecfdf5] text-[#047857]"
            }`}
          >
            {note}
          </span>
        </div>
        <h3 className="mt-4 font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-[22.75px] text-[#434655]">
          {description}
        </p>
        <div className={`mt-5 grid gap-4 ${green ? "" : "sm:grid-cols-2"}`}>
          <div className="h-36 overflow-hidden rounded-xl border border-[#e5eeff] bg-[#f1f5f9]">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="text-xs leading-6 text-[#0b1c30]">{children}</div>
        </div>
      </div>
      <div className="mt-5 border-t border-[#e5eeff] pt-4">
        <ArrowLink href="#contact" className={green ? "!text-[#006948]" : ""}>
          {link}
        </ArrowLink>
      </div>
    </article>
  )
}
