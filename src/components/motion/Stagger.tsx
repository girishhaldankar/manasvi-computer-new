import type { ReactNode } from "react"
import { motion, type Variants } from "motion/react"

type StaggerProps = {
  children: ReactNode
  className?: string
}

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function Stagger({
  children,
  className,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.18,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.09,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}