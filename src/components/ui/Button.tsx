import type { AnchorHTMLAttributes, ReactNode } from "react"

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: "primary" | "green" | "dark" | "white" | "ghost"
}

const variants = {
  primary: "bg-[#1d4ed8] text-white shadow-sm",
  green: "bg-[#006948] text-white shadow-sm",
  dark: "bg-[#0b1c30] text-white",
  white: "bg-white text-[#0b1c30] shadow-sm",
  ghost: "text-[#1d4ed8]",
}

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-semibold  text-xs font-semibold transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
