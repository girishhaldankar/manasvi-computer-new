import type { HTMLAttributes } from "react"

export function Container({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-5 md:px-8 ${className}`}
      {...props}
    />
  )
}
