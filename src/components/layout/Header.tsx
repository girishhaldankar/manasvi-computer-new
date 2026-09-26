import { useState } from "react"
import { icons, images } from "../../assets"
import { navItems } from "../../data/site"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { MobileMenu } from "./MobileMenu"

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5eeff] bg-white/95 backdrop-blur-md">
      <Container className="flex h-[70px] items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="Manasvi Computer home"
        >
          <span className="size-10 overflow-hidden rounded-xl ring-1 ring-[#dbeafe]">
            <img src={images.logo} alt="" className="size-full" />
          </span>
          <span>
            <strong className="block font-['Plus_Jakarta_Sans:ExtraBold'] text-[17px] leading-[21px] font-extrabold tracking-[-.025em]">
              MANASVI COMPUTER
            </strong>
            <small className="block text-[11px] font-medium tracking-[.025em] text-[#5c647a]">
              Computer • Hardware • CCTV • Web
            </small>
          </span>
        </a>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-[#1d4ed8]"
            >
              {item.label}
              
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href="https://wa.me/919076335902"
            variant="green"
            className="!min-h-8 !rounded-full !border !border-[#a7f3d0]/60 !bg-[#ecfdf5] !px-3 !py-1.5 !text-[#006948]"
          >
            <img src={icons[34]} alt="" className="size-3" />
            WhatsApp
          </Button>
          <Button
  href="#contact"
  className="!min-h-8 !px-4 !py-2 !text-white"
>
  Get Service
</Button>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="flex size-10 items-center justify-center rounded-xl border border-[#e5eeff] lg:hidden"
        >
          <span aria-hidden="true" className="text-xl">
            {open ? "×" : "☰"}
          </span>
        </button>
      </Container>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
