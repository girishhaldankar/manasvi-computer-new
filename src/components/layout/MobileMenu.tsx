import { navItems } from "../../data/site"
import { Button } from "../ui/Button"

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  if (!open) return null
  return (
    <div
      id="mobile-menu"
      className="border-t border-[#e5eeff] bg-white px-5 py-5 lg:hidden"
    >
      <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-[#eff4ff]"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button href="https://wa.me/919076335902" variant="green" className="!text-white">
          WhatsApp
        </Button>
        <Button href="#contact" onClick={onClose} className="!text-white">
          Get Service
        </Button>
      </div>
    </div>
  )
}
