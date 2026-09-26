import { icons, images } from "../../assets"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"

const networkServices = [
  "Router Setup",
  "AP Installation",
  "CAT6 Cabling",
  "Switch Setup",
  "Firewall Check",
  "Bandwidth Boost",
]

export function SpecializedSection() {
  return (
    <section className="border-y border-[#e5eeff] bg-[#eff4ff]/50 py-20">
      <Container className="space-y-10">
        <article className="grid gap-8 rounded-3xl border border-[#e5eeff] bg-white p-7 md:p-10 lg:grid-cols-[7fr_5fr]">
          <div>
            <Badge>NETWORKING & WI-FI</Badge>
            <h2 className="mt-3 font-['Plus_Jakarta_Sans:ExtraBold'] text-3xl font-extrabold">
              Better Connectivity. Better Coverage.
            </h2>
            <p className="mt-3 text-sm leading-[22.75px] text-[#434655]">
              We eliminate buffering and spotty wireless signals in commercial
              offices, warehouses, clinics and multistorey homes. Get
              professional router setup, structured CAT6 LAN cabling, Gigabit
              switches and secure network firewalls.
            </p>
            <div className="my-5 grid gap-3 sm:grid-cols-3">
              {networkServices.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl bg-[#eff4ff] p-2.5 text-xs font-semibold"
                >
                  <img
                    src={icons[15 + index]}
                    alt=""
                    className="max-h-4 max-w-[18px]"
                  />
                  {item}
                </div>
              ))}
            </div>
           <Button href="#contact" className="!text-white">
  Fix My Network →
</Button>
          </div>
          <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-[#e5eeff] bg-gradient-to-br from-[#eff4ff] to-[#dbeafe]/60 p-6 text-center">
           <div className="flex size-14 items-center justify-center rounded-2xl bg-[#eff4ff]">
  <img
    src={icons[15]}
    alt="Wi-Fi coverage"
    className="h-7 w-7"
  />
</div>
            <h3 className="mt-3 font-['Inter:Bold'] font-bold">
              Full Coverage Guarantee
            </h3>
            <p className="mt-1 max-w-xs text-xs leading-[19.5px] text-[#5c647a]">
              Zero dead zones, high-speed roaming across rooms and clean server
              rack termination.
            </p>
          </div>
        </article>
        <article className="grid gap-8 rounded-3xl border border-[#e5eeff] bg-white p-7 md:p-10 lg:grid-cols-2">
          <div>
            <Badge green>SURVEILLANCE WORKFLOW</Badge>
            <h2 className="mt-3 font-['Plus_Jakarta_Sans:ExtraBold'] text-3xl font-extrabold">
              Security That You Can Monitor From Anywhere
            </h2>
            <p className="mt-3 text-sm leading-[22.75px] text-[#434655]">
              Real-time monitoring on smartphones and tablets with
              high-definition night vision cameras, continuous DVR recording and
              reliable power backup.
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
            <Button href="#contact" variant="green" className="mt-5 !text-white">
              Get CCTV Service →
            </Button>
          </div>
          <img
            src={images.cctv}
            alt="CCTV installation on a commercial wall"
            className="h-full min-h-[300px] w-full rounded-2xl border border-[#e5eeff] object-cover"
          />
        </article>
        <article className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#e5eeff] bg-white p-7 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <div className="flex gap-2">
              <Badge>PRINTER SERVICES</Badge>
              <span className="rounded-full bg-[#f1f5f9] px-3 py-1 text-xs text-[#5c647a]">
                All Major Brands
              </span>
            </div>
            <h2 className="mt-3 font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold">
              Printer Problems? We’ll Fix Them.
            </h2>
            <p className="mt-2 text-sm leading-5 text-[#434655]">
              Paper jams, cartridge and toner issues, wireless network printing
              configuration, driver installations and scheduled maintenance for
              HP, Canon, Epson and Brother.
            </p>
          </div>
          <Button href="#contact" variant="dark" className="!text-white">
            Get Printer Service →
          </Button>
        </article>
      </Container>
    </section>
  )
}
