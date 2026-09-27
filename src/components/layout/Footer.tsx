import { images } from "../../assets"
import { Container } from "../ui/Container"

const services = [
  ["Computer & Laptop", "#services"],
  ["Laptop Parts", "#services"],
  ["Computer Hardware", "#services"],
  ["Computer Accessories", "#services"],
  ["Networking Hardware", "#services"],
  ["CCTV & Security", "#services"],
  ["Printer Services", "#services"],
  ["Website Development", "#web-studio"],
] as const

const companyLinks = [
  ["About Us", "#about"],
  ["Why Us", "#about"],
  ["Reviews", "#reviews"],
  ["Work We Do", "#gallery"],
] as const

export function Footer() {
  return (
    <footer className="border-t border-[#1e293b] bg-[#0b1c30] text-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3">
              <img
                src={images.logo}
                alt="Manasvi Computer"
                className="size-8 rounded-lg"
              />

              <strong className="font-extrabold text-base font-extrabold">
                MANASVI COMPUTER
              </strong>
            </a>

            <p className="mt-3 text-xs font-semibold text-[#85f8c4]">
              Computer • Hardware • CCTV • Web
            </p>

            <p className="mt-4 max-w-xs text-xs leading-[19.5px] text-[#94a3b8]">
              Local technology services, hardware, security solutions and
              website development for homes, shops and businesses. Direct
              technician access and practical solutions.
            </p>
          </div>

          {/* Services */}
          <FooterList title="SERVICES" items={services} />

          {/* Company */}
          <FooterList title="COMPANY" items={companyLinks} />

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xs font-bold tracking-[.05em]">
              CONTACT
            </h3>

            <ul className="mt-3 space-y-2 text-xs text-[#94a3b8]">
              <li>
                <a
                  href="tel:+919076335902"
                  className="transition-colors hover:text-white"
                >
                  Phone: +91 90763 35902
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/919076335902"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp: +91 90763 35902
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-white"
                >
                  Working Hours: Mon–Sat 9AM–8PM
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-white"
                >
                  Service Areas: Mumbai & Nearby
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#1e293b] pt-8 text-xs text-[#64748b] sm:flex-row sm:justify-between">
          <p>© 2026 Manasvi Computer. All rights reserved.</p>

          <p className="text-[#94a3b8]">
            Repair it. Upgrade it. Secure it. Connect it. Build it.
          </p>
        </div>
      </Container>
    </footer>
  )
}

function FooterList({
  title,
  items,
}: {
  title: string
  items: readonly (readonly [string, string])[]
}) {
  return (
    <div>
      <h3 className="font-bold text-xs font-bold tracking-[.05em]">
        {title}
      </h3>

      <ul className="mt-3 space-y-2 text-xs text-[#94a3b8]">
        {items.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="transition-colors hover:text-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
