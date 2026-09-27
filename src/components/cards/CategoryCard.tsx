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
    <article className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-2xl border border-[#d7e3f5] bg-[#f7faff] p-5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bfd2ef] hover:bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.09)]">
      {/* Decorative background accent */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#e8f0ff] opacity-90 transition-transform duration-300 group-hover:scale-125" />

      <div className="relative">
        <span className="inline-flex rounded-full border border-[#cfe0ff] bg-[#eaf2ff] px-2.5 py-1 text-[11px] font-bold text-[#1d4ed8]">
  {badge}
</span>

        <h3 className="mt-3 font-bold  text-lg font-bold text-[#0b1c30]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#5c647a]">
          {description}
        </p>

        <ul className="mt-4 space-y-2 text-xs leading-4 text-[#434655]">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-0.5 font-bold text-[#1d4ed8]">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-5 border-t border-[#dfe8f5] pt-3">
        <ArrowLink href="#contact">{link}</ArrowLink>
      </div>
    </article>
  )
}