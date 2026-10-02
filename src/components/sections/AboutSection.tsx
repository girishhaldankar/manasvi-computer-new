import {
  BadgeCheck,
  UserRoundCheck,
  House,
  MapPinCheck,
  MessageCircleCheck,
  SearchCheck,
  Wrench,
  Headset,
  type LucideIcon,
} from "lucide-react"
import { motion } from "motion/react"
import { images } from "../../assets"
import { features } from "../../data/site"
import { FeatureCard } from "../cards/FeatureCard"
import { SectionEyebrow } from "../ui/SectionEyebrow"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { Reveal } from "../motion/Reveal"
import { Stagger, staggerItem } from "../motion/Stagger"

const featureIcons: LucideIcon[] = [
  UserRoundCheck,
  MessageCircleCheck,
  SearchCheck,
  BadgeCheck,
  Wrench,
  House,
  MapPinCheck,
  Headset,
]

const process = [
  ["01", "Contact Us", "Call or message on WhatsApp with your system issue."],
  [
    "02",
    "Understand the Problem",
    "We evaluate symptoms and provide an honest estimate.",
  ],
  [
    "03",
    "Service, Supply or Build",
    "Precise repair, part installation or web design begins.",
  ],
  [
    "04",
    "Ready to Use",
    "Tested in your presence and delivered fully operational.",
  ],
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-y border-[#29445B] bg-[#071A2B] py-20 text-white md:py-24"
    >
      <Container className="space-y-16">
        {/* Why Manasvi */}
        <div className="grid gap-8 lg:grid-cols-[5fr_7fr]">
          <Reveal>
            <div className="self-center">
              <SectionEyebrow tone="dark">WHY MANASVI</SectionEyebrow>

              <h2 className="mt-3 text-4xl font-extrabold leading-10 text-white">
                Direct Technician Support.
                <br />
                No Middlemen.
              </h2>

              <p className="mt-4 text-sm leading-[22.75px] text-[#CBD5E1]">
                When you call or hand over your hardware, you speak directly
                with the skilled engineer diagnosing and repairing your
                machine. No confusing call center queues or inflated
                estimates.
              </p>

              <motion.img
                src={images.technician}
                alt="Technician inspecting a laptop motherboard"
                className="mt-6 h-[364px] w-full rounded-2xl border border-white/15 object-cover shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {features.map(([title, description], index) => {
              const Icon = featureIcons[index]

              return (
                <motion.div
                  key={title}
                  variants={staggerItem}
                  className="h-full"
                >
                  <FeatureCard
                    title={title}
                    description={description}
                    icon={Icon}
                    variant="trust"
                  />
                </motion.div>
              )
            })}
          </Stagger>
        </div>

        {/* Our Process */}
        <Reveal>
          <div className="border-t border-[#29445B] pt-8 text-center">
            <SectionEyebrow tone="dark">OUR PROCESS</SectionEyebrow>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Simple From Start to Finish
            </h2>

            <Stagger className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
              {process.map(([number, title, text], index) => (
                <motion.article
                  key={number}
                  variants={staggerItem}
                  className="group border-t border-[#29445B] px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#62A8FF]"
                >
                  <div className="flex items-end gap-3">
                    <b
                      className={`text-4xl font-extrabold leading-none ${
                        index === 3 ? "text-[#8CBFFF]" : "text-[#62A8FF]"
                      }`}
                    >
                      {number}
                    </b>
                    <span
                      aria-hidden="true"
                      className="mb-2 h-px flex-1 bg-[#29445B] transition-colors duration-300 group-hover:bg-[#397AB8]"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-white">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#CBD5E1]">
                    {text}
                  </p>
                </motion.article>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* About */}
        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-3xl border border-[#397AB8]/35 bg-gradient-to-br from-[#0D2D47] via-[#0B2942] to-[#091F33] p-6 shadow-[0_12px_32px_rgba(0,0,0,0.18)] sm:p-8 md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#1677FF]/[0.07] blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72 sm:bg-[#1677FF]/[0.10]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 left-1/4 h-40 w-40 rounded-full bg-[#38BDF8]/[0.04] blur-3xl sm:-bottom-28 sm:h-64 sm:w-64 sm:bg-[#38BDF8]/[0.06]"
            />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:items-center lg:gap-10">
              <div className="min-w-0">
                <SectionEyebrow tone="dark">ABOUT MANASVI COMPUTERS</SectionEyebrow>

                <h2 className="mt-4 max-w-3xl text-[28px] font-extrabold leading-[1.15] text-white sm:text-3xl md:text-[34px] md:leading-[1.2]">
                  Technology Support With a Personal Touch
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-[#D2DCE7]">
                  Manasvi Computers provides computer, hardware parts, CCTV
                  surveillance, networking and website development with a
                  dedicated focus on reliability and transparent technician
                  access. Whether you need immediate laptop repair, replacement
                  hardware, or a modern digital website, our goal is clear:
                  understand the problem, implement the right fix, and keep your
                  tech running smoothly.
                </p>
              </div>

              <div className="min-w-0 border-t border-[#29445B] pt-6 lg:border-l lg:border-t-0 lg:py-2 lg:pl-8">
                <div className="grid gap-3 text-xs font-semibold text-[#E2EAF3]">
                {[
                  "Direct technician consultation",
                  "Honest diagnostics",
                  "Genuine hardware options",
                  "Doorstep & workshop support",
                ].map((item) => (
                  <span key={item} className="flex min-w-0 items-center gap-2.5">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-[#62A8FF]/25 bg-[#1264D8]/15 text-[#8CBFFF]">
                      <BadgeCheck size={13} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </span>
                ))}
                </div>

                <Button
                  href="#contact"
                  className="mt-6 !min-h-11 !rounded-xl !bg-[#1264D8] !px-6 !text-white !shadow-[0_8px_20px_rgba(18,100,216,0.22)] hover:!bg-[#2F80ED] focus-visible:!outline-[#8CBFFF]"
                >
                  Talk to a Technician →
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}