import { useEffect, useState } from "react"
import { MessageCircle, Phone } from "lucide-react"
import { images } from "../../assets"
import { navItems } from "../../data/site"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { MobileMenu } from "./MobileMenu"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 8)

    updateScrolled()
    window.addEventListener("scroll", updateScrolled, { passive: true })

    return () => window.removeEventListener("scroll", updateScrolled)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-out ${
        scrolled
          ? "border-[#E2E8F0] bg-[rgba(255,255,255,0.78)] shadow-[0_4px_18px_rgba(11,23,38,0.06)] backdrop-blur-[16px]"
          : "border-transparent bg-transparent shadow-none backdrop-blur-0"
      }`}
    >
      <Container className="flex h-[70px] items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="Manasvi Computer home"
        >
          <span
            className={`size-10 overflow-hidden rounded-xl ring-1 ${
              scrolled ? "ring-[#dbeafe]" : "ring-white/25"
            }`}
          >
            <img src={images.logo} alt="" className="size-full" />
          </span>

          <span>
            <strong
              className={`block text-[17px] font-extrabold leading-[21px] tracking-[-.025em] ${
                scrolled ? "text-[#0B1726]" : "text-white"
              }`}
            >
              MANASVI COMPUTER
            </strong>

            <small
              className={`block text-[11px] font-medium tracking-[.025em] ${
                scrolled ? "text-[#5c647a]" : "text-white/75"
              }`}
            >
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
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "!text-[#0B1726] hover:!text-[#1264D8]"
                  : "!text-white hover:!text-[#2F80ED]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            href="tel:+919076335902"
            variant="white"
            className="!min-h-8 !rounded-full !border !border-[#dbe5f5] !bg-white !px-3 !py-1.5 !text-[#1d4ed8]"
          >
            <Phone size={13} strokeWidth={2} aria-hidden="true" />
            Call Now
          </Button>

          <Button
            href="https://wa.me/919076335902"
            variant="green"
            className="!min-h-8 !rounded-full !border !border-[#a7f3d0]/60 !bg-[#ecfdf5] !px-3 !py-1.5 !text-[#006948]"
          >
            <MessageCircle size={13} strokeWidth={2} aria-hidden="true" />
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className={`flex size-10 items-center justify-center rounded-xl border lg:hidden ${
            scrolled
              ? "border-[#E2E8F0] text-[#0B1726]"
              : "border-white/25 text-white"
          }`}
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