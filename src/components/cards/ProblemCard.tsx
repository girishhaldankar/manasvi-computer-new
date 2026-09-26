import { ArrowLink } from "../ui/ArrowLink"

export function ProblemCard({
  title,
  description,
  link,
  icon,
  green = false,
}: {
  title: string
  description: string
  link: string
  icon: string
  green?: boolean
}) {
  return (
    <article
      className={`group relative flex min-h-[205px] flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
        green
          ? "border-[#d6eee4] bg-gradient-to-br from-[#ecfdf5] via-white to-white shadow-[0_6px_22px_rgba(16,185,129,0.08)] hover:shadow-[0_14px_32px_rgba(16,185,129,0.14)]"
          : "border-[#dbe5f5] bg-gradient-to-br from-[#eef4ff] via-white to-white shadow-[0_6px_22px_rgba(29,78,216,0.07)] hover:shadow-[0_14px_32px_rgba(29,78,216,0.12)]"
      }`}
    >
      <div>
        <div className="flex items-start justify-between">
          <div
            className={`flex size-11 items-center justify-center rounded-xl border bg-white/80 shadow-sm ${
              green ? "border-[#d3eee3]" : "border-[#d8e5fa]"
            }`}
          >
            <img
              src={icon}
              alt=""
              className="max-h-[22px] max-w-[24px]"
            />
          </div>

          <div
            className={`mt-1 h-1.5 w-1.5 rounded-full ${
              green ? "bg-[#10b981]" : "bg-[#1d4ed8]"
            }`}
          />
        </div>

        <h3 className="mt-4 font-['Inter:Bold'] text-[15px] font-bold text-[#0b1c30]">
          {title}
        </h3>

        <p className="mt-1.5 text-xs leading-5 text-[#5c647a]">
          {description}
        </p>
      </div>

      <div
        className={`mt-4 border-t pt-3 ${
          green ? "border-[#dcefe8]" : "border-[#e4ebf5]"
        }`}
      >
        <ArrowLink
          href="#contact"
          className={green ? "!text-[#006948]" : ""}
        >
          {link}
        </ArrowLink>
      </div>
    </article>
  )
}