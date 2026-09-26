import { images } from "../../assets"
import { navItems } from "../../data/site"
import { Container } from "../ui/Container"

const services = [
  "Computer & Laptop",
  "Laptop Parts",
  "Computer Hardware",
  "Computer Accessories",
  "Networking Hardware",
  "CCTV & Security",
  "Printer Services",
  "Website Development",
]

export function Footer() {
  return (
    <footer className="border-t border-[#1e293b] bg-[#0b1c30] text-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={images.logo} alt="" className="size-8 rounded-lg" />
              <strong className="font-['Plus_Jakarta_Sans:ExtraBold'] text-base font-extrabold">
                MANASVI COMPUTER
              </strong>
            </div>
            <p className="mt-3 text-xs font-semibold text-[#85f8c4]">
              Computer • Hardware • CCTV • Web
            </p>
            <p className="mt-4 max-w-xs text-xs leading-[19.5px] text-[#94a3b8]">
              Local technology services, hardware, security solutions and
              website development for homes, shops and businesses. Direct
              technician access and practical solutions.
            </p>
          </div>
          <FooterList title="SERVICES" items={services} />
          <FooterList
            title="COMPANY"
            items={navItems
              .slice(2)
              .map((item) => item.label)
              .concat(["Why Us", "Reviews", "Gallery"])}
          />
          <FooterList
            title="CONTACT"
            items={[
              "Phone: +91 90763 35902",
              "WhatsApp: +91 90763 35902",
              "Working Hours: Mon–Sat 9AM–8PM",
              "Service Areas: Mumbai & Nearby",
            ]}
          />
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

function FooterList({ title, items }: { title: string; items: string[] }) { 
  return (
    <div>
      <h3 className="font-['Inter:Bold'] text-xs font-bold tracking-[.05em]">
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-xs text-[#94a3b8]">
        {items.map((item) => (
          <li key={item}>
            <a href="#contact" className="hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
