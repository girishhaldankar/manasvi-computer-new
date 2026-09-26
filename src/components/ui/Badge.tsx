import type { ReactNode } from "react"

export function Badge({
  children,
  green = false,
}: {
  children: ReactNode
  green?: boolean
}) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 font-["Inter:Bold"] text-xs font-bold tracking-[.05em] ${
        green
          ? "border-[#d1fae5] bg-[#ecfdf5] text-[#006948]"
          : "border-[#e5eeff] bg-[#eff4ff] text-[#1d4ed8]"
      }`}
    >
      {children}
    </span>
  )
}
