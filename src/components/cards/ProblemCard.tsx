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
    <article className="flex min-h-[189px] flex-col justify-between rounded-2xl border border-[#e5eeff] bg-white p-5">
      <div>
        <div
          className={`flex size-10 items-center justify-center rounded-xl ${
            green ? "bg-[#ecfdf5]" : "bg-[#eff6ff]"
          }`}
        >
          <img src={icon} alt="" className="max-h-[20px] max-w-[22px]" />
        </div>
        <h3 className="mt-3 font-['Inter:Bold'] text-sm font-bold">{title}</h3>
        <p className="mt-1 text-xs leading-[19.5px] text-[#5c647a]">
          {description}
        </p>
      </div>
      <ArrowLink href="#contact" className={green ? "!text-[#006948]" : ""}>
        {link}
      </ArrowLink>
    </article>
  )
}
