import type { AnchorHTMLAttributes } from "react"

export function ArrowLink({
  children,
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`font-["Inter:Bold"] text-xs font-bold text-[#1d4ed8] hover:underline ${className}`}
      {...props}
    >
      {children} <span aria-hidden="true">→</span>
    </a>
  )
}
