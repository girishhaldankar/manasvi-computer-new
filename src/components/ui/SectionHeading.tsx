import { SectionEyebrow } from "./SectionEyebrow"

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
      className={`flex max-w-2xl flex-col gap-3 ${
        align === "center" ? "mx-auto items-center text-center" : "items-start"
      }`}
    >
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="text-[32px] font-extrabold leading-[1.12] tracking-[-.025em] text-[#0B1726] md:text-4xl md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-sm leading-6 text-[#475569] md:text-base md:leading-7">
          {description}
        </p>
      )}
    </div>
  )
}
