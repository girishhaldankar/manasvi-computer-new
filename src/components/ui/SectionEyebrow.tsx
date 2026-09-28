import type { ReactNode } from "react"

type SectionEyebrowProps = {
  children: ReactNode
  tone?: "light" | "dark"
}

export function SectionEyebrow({
  children,
  tone = "light",
}: SectionEyebrowProps) {
  return (
    <div
      className={`section-eyebrow inline-flex min-h-[26px] items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] before:h-px before:w-6 before:bg-current ${
        tone === "dark" ? "text-[#60A5FA]" : "text-[#1264D8]"
      }`}
    >
      {children}
    </div>
  )
}
