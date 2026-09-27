import {
  Wifi,
  Router,
  Cable,
  Network,
  ShieldCheck,
  Gauge,
  type LucideIcon,
} from "lucide-react"
import { motion } from "motion/react"
import { images } from "../../assets"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { Reveal } from "../motion/Reveal"
import { Stagger, staggerItem } from "../motion/Stagger"

const networkServices: {
  label: string
  icon: LucideIcon
}[] = [
  { label: "Router Setup", icon: Router },
  { label: "AP Installation", icon: Wifi },
  { label: "CAT6 Cabling", icon: Cable },
  { label: "Switch Setup", icon: Network },
  { label: "Firewall Check", icon: ShieldCheck },
  { label: "Bandwidth Boost", icon: Gauge },
]

export function SpecializedSection() {
  return (
    <section className="border-y border-[#e5eeff] bg-[#eff4ff]/50 py-20">
      <Container className="space-y-10">
        {/* Networking */}
        <Reveal>
          <article className="grid gap-8 rounded-3xl border border-[#e5eeff] bg-white p-7 md:p-10 lg:grid-cols-[7fr_5fr]">
            <div>
              <Badge>NETWORKING & WI-FI</Badge>

              <h2 className="mt-3 text-3xl font-extrabold">
                Better Connectivity. Better Coverage.
              </h2>

              <p className="mt-3 text-sm leading-[22.75px] text-[#434655]">
                We eliminate buffering and spotty wireless signals in
                commercial offices, warehouses, clinics and multistorey homes.
                Get professional router setup, structured CAT6 LAN cabling,
                Gigabit switches and secure network firewalls.
              </p>

              <Stagger className="my-5 grid gap-3 sm:grid-cols-3">
                {networkServices.map(({ label, icon: Icon }) => (
                  <motion.div
                    key={label}
                    variants={staggerItem}
                    className="flex items-center gap-2 rounded-xl bg-[#eff4ff] p-2.5 text-xs font-semibold"
                  >
                    <Icon
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 text-[#1d4ed8]"
                      aria-hidden="true"
                    />
                    {label}
                  </motion.div>
                ))}
              </Stagger>

              <Button href="#contact" className="!text-white">
                Fix My Network →
              </Button>
            </div>

            <motion.div
              className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-[#e5eeff] bg-gradient-to-br from-[#eff4ff] to-[#dbeafe]/60 p-6 text-center"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#eff4ff]">
                <Wifi
                  size={28}
                  strokeWidth={2}
                  className="text-[#1d4ed8]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-3 font-bold">
                Full Coverage Guarantee
              </h3>

              <p className="mt-1 max-w-xs text-xs leading-[19.5px] text-[#5c647a]">
                Zero dead zones, high-speed roaming across rooms and clean
                server rack termination.
              </p>
            </motion.div>
          </article>
        </Reveal>

        {/* CCTV */}
        <Reveal delay={0.08}>
          <article className="grid gap-8 rounded-3xl border border-[#e5eeff] bg-white p-7 md:p-10 lg:grid-cols-2">
            <div>
              <Badge green>SURVEILLANCE WORKFLOW</Badge>

              <h2 className="mt-3 text-3xl font-extrabold">
                Security That You Can Monitor From Anywhere
              </h2>

              <p className="mt-3 text-sm leading-[22.75px] text-[#434655]">
                Real-time monitoring on smartphones and tablets with
                high-definition night vision cameras, continuous DVR recording
                and reliable power backup.
              </p>

              <div className="mt-5 rounded-2xl border border-[#e5eeff] bg-[#eff4ff] p-4">
                <b className="text-[11px] tracking-wider text-[#1d4ed8]">
                  CONNECTED ARCHITECTURE
                </b>

                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="rounded-lg border border-[#e2e8f0] bg-white px-3 py-2">
                    CCTV Camera
                  </span>

                  →

                  <span className="rounded-lg border border-[#e2e8f0] bg-white px-3 py-2">
                    Local DVR / NVR
                  </span>

                  →

                  <span className="rounded-lg bg-[#006948] px-3 py-2 text-white">
                    Mobile Live Feed
                  </span>
                </div>
              </div>

              <Button
                href="#contact"
                variant="green"
                className="mt-5 !text-white"
              >
                Get CCTV Service →
              </Button>
            </div>

            <motion.img
              src={images.cctv}
              alt="CCTV installation on a commercial wall"
              className="h-full min-h-[300px] w-full rounded-2xl border border-[#e5eeff] object-cover"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </article>
        </Reveal>

        {/* Printer */}
        <Reveal delay={0.08}>
          <article className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#e5eeff] bg-white p-7 md:flex-row md:items-center">
            <div className="max-w-3xl">
              <div className="flex gap-2">
                <Badge>PRINTER SERVICES</Badge>

                <span className="rounded-full bg-[#f1f5f9] px-3 py-1 text-xs text-[#5c647a]">
                  All Major Brands
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                Printer Problems? We’ll Fix Them.
              </h2>

              <p className="mt-2 text-sm leading-5 text-[#434655]">
                Paper jams, cartridge and toner issues, wireless network
                printing configuration, driver installations and scheduled
                maintenance for HP, Canon, Epson and Brother.
              </p>
            </div>

            <Button href="#contact" variant="dark" className="!text-white">
              Get Printer Service →
            </Button>
          </article>
        </Reveal>
      </Container>
    </section>
  )
}