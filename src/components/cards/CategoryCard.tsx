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
    <article className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_6px_22px_rgba(11,23,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-[#B8D1F2] hover:shadow-[0_14px_32px_rgba(18,100,216,0.11)]">
      {/* Decorative background accent */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#EAF2FF] opacity-60 transition-transform duration-300 group-hover:scale-125" />

      <div className="relative">
        <span className="inline-flex rounded-full border border-[#D6E5FA] bg-[#EEF5FF] px-2.5 py-1 text-[11px] font-bold text-[#1264D8]">
  {badge}
</span>

        <h3 className="mt-3 text-lg font-bold text-[#0B1726]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#475569]">
          {description}
        </p>

        <ul className="mt-4 space-y-2 text-xs leading-4 text-[#475569]">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-0.5 font-bold text-[#1264D8]">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-5 border-t border-[#E2E8F0] pt-3">
        <ArrowLink href="#contact" className="!text-[#1264D8]">
          {link}
        </ArrowLink>
      </div>
    </article>
  )
}