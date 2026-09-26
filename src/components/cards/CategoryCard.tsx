import { ArrowLink } from "../ui/ArrowLink"

export function CategoryCard({
  badge,
  title,
  description,
  items,
  link,
}: {
  badge: string
  title: string
  description: string
  items: string[]
  link: string
}) {
  return (
    <article className="flex min-h-[270px] flex-col justify-between rounded-2xl border border-[#e5eeff] bg-white p-5">
      <div>
        <span className="rounded-full bg-[#eff4ff] px-2.5 py-1 font-['Inter:Bold'] text-[11px] font-bold text-[#1d4ed8]">
          {badge}
        </span>
        <h3 className="mt-3 font-['Plus_Jakarta_Sans:Bold'] text-lg font-bold">
          {title}
        </h3>
        <p className="mt-1 text-xs leading-4 text-[#5c647a]">{description}</p>
        <ul className="mt-3 space-y-1 text-xs leading-4 text-[#434655]">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 border-t border-[#f1f5f9] pt-3">
        <ArrowLink href="#contact">{link}</ArrowLink>
      </div>
    </article>
  )
}
