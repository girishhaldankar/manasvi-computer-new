import { Badge } from "./Badge"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "center" | "left"
}) {
  return (
    <div
      className={`flex max-w-2xl flex-col gap-2 ${
        align === "center" ? "mx-auto items-center text-center" : "items-start"
      }`}
    >
      <Badge>{eyebrow}</Badge>
      <h2 className="font-extrabold text-[30px] leading-9 font-extrabold tracking-[-.025em] text-[#0b1c30] md:text-4xl md:leading-10">
        {title}
      </h2>
      {description && (
        <p className="text-sm leading-6 text-[#434655] md:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
