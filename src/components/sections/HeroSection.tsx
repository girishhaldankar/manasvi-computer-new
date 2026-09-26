import {
  BadgeCheck,
  UserRoundCheck,
  House,
  MapPinCheck,
} from "lucide-react"
import { icons, images } from "../../assets"
import { trustItems } from "../../data/site"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"


export function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,78,216,.08),transparent_58%)]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e5eeff] bg-[#eff4ff] px-3 py-1 font-['Inter:Bold'] text-[11px] font-bold tracking-[.025em] text-[#1d4ed8]">
              <i className="size-2 rounded-full bg-[#1d4ed8]" />
              LOCAL TECHNOLOGY & DIGITAL SOLUTIONS
            </span>
            <h1 className="mt-4 font-['Plus_Jakarta_Sans:ExtraBold'] text-[40px] leading-[1.1] font-extrabold tracking-[-.025em] md:text-[50px] md:leading-14">
              Technology Problems?
              <br />
              <span className="text-[#1d4ed8]">We’ve Got You Covered.</span>
            </h1>
            

            <p className="mt-4 max-w-xl text-base leading-7 text-[#434655] md:text-lg">
              Reliable computer repair, laptop parts, hardware, CCTV,
              networking, printer services and website development for homes,
              shops and businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#contact" className="!px-6 !text-sm !text-white">
                Get Service <span>→</span>
              </Button>
              <Button
                href="https://wa.me/919076335902"
                variant="green"
                className="!px-6 !text-sm !text-white"
              >
                WhatsApp Us
              </Button>
              <Button href="#services" variant="ghost" className="!text-sm">
                Explore Services →
              </Button>
            </div>
         <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
  {[
    { text: "Genuine Parts", icon: BadgeCheck },
    { text: "Direct Technician", icon: UserRoundCheck },
    { text: "Doorstep & Workshop", icon: House },
    { text: "Local Support", icon: MapPinCheck },
  ].map(({ text, icon: Icon }) => (
    <div
      key={text}
      className="group flex min-h-[62px] items-center gap-3 rounded-2xl border border-[#dfe8f8] bg-gradient-to-br from-[#f8fbff] to-white px-3.5 py-3 shadow-[0_3px_12px_rgba(29,78,216,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cbdaf2] hover:shadow-[0_7px_18px_rgba(29,78,216,0.09)]"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#eff4ff] text-[#1d4ed8] ring-1 ring-[#dce8fb]">
        <Icon
          size={18}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </span>

      <span className="font-['Inter:Semi_Bold'] text-[11px] font-semibold leading-[15px] text-[#24344d]">
        {text}
      </span>
    </div>
  ))}
</div>
          </div>
          <div className="relative rounded-3xl border border-[#e5eeff] bg-white p-4 shadow-lg">
            <div className="relative h-[320px] overflow-hidden rounded-2xl bg-[#f1f5f9] md:h-[384px]">
              <img
                src={images.technician}
                alt="Technician repairing laptop hardware at a workbench"
                className="h-full w-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/60 via-transparent to-transparent" />
              <span className="absolute top-3 right-3 rounded-full border border-[#e5eeff] bg-white/95 px-3 py-2 text-[11px] font-bold">
                ●{" "}
                <span className="text-[#0b1c30]">
                  Professional Technical Support
                </span>
              </span>
              <div className="absolute right-3 bottom-3 left-3 flex items-center gap-3 rounded-xl border border-[#e5eeff] bg-white/95 p-3 shadow-md">
                <img
                  src={images.hardware}
                  alt=""
                  className="size-10 rounded-lg object-cover"
                />
                <span className="flex-1">
                  <strong className="block text-xs">
                    Hardware Bench Diagnostics
                  </strong>
                  <small className="text-[11px] text-[#5c647a]">
                    Genuine DDR4  /DDR5, Gen4 NVMe & chip tests
                  </small>
                </span>
                <b className="rounded-md bg-[#eff4ff] px-2 py-1 text-[11px] text-[#1d4ed8]">
                  Live Lab
                </b>
              </div>
            </div>
            
          </div>
        </Container>
      </section>
      <section className="border-y border-[#e5eeff] bg-[#eff4ff]/60 py-6">
        <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(([title, text, icon]) => (
            <div
              key={title}
              className="flex gap-3 rounded-xl border border-[#e5eeff] bg-white p-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#eff4ff]">
                <img src={icon} alt="" className="max-h-5 max-w-5" />
              </span>
              <span>
                <strong className="block text-sm">{title}</strong>
                <small className="text-xs text-[#5c647a]">{text}</small>
              </span>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}
