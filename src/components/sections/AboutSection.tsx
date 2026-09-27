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
import { Badge } from "../ui/Badge"
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
      className="border-y border-[#e5eeff] bg-[#eff4ff]/30 py-20 md:py-24"
    >
      <Container className="space-y-16">
        {/* Why Manasvi */}
        <div className="grid gap-8 lg:grid-cols-[5fr_7fr]">
          <Reveal>
            <div className="self-center">
              <Badge>WHY MANASVI</Badge>

              <h2 className="mt-3 text-4xl font-extrabold leading-10 text-[#0b1c30]">
                Direct Technician Support.
                <br />
                No Middlemen.
              </h2>

              <p className="mt-4 text-sm leading-[22.75px] text-[#434655]">
                When you call or hand over your hardware, you speak directly
                with the skilled engineer diagnosing and repairing your
                machine. No confusing call center queues or inflated
                estimates.
              </p>

              <motion.img
                src={images.technician}
                alt="Technician inspecting a laptop motherboard"
                className="mt-6 h-[364px] w-full rounded-2xl border border-[#dbe5f5] object-cover shadow-[0_6px_22px_rgba(15,23,42,0.06)]"
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
                  />
                </motion.div>
              )
            })}
          </Stagger>
        </div>

        {/* Our Process */}
        <Reveal>
          <div className="border-t border-[#e5eeff] pt-8 text-center">
            <Badge>OUR PROCESS</Badge>

            <h2 className="mt-2 text-2xl font-bold text-[#0b1c30]">
              Simple From Start to Finish
            </h2>

            <Stagger className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
              {process.map(([number, title, text], index) => (
                <motion.article
                  key={number}
                  variants={staggerItem}
                  className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${
                    index === 3
                      ? "border-[#d6eee4] bg-[#f7fcfa] hover:border-[#bfe4d4] hover:bg-white"
                      : "border-[#dbe5f5] bg-[#f7faff] hover:border-[#c7d8ef] hover:bg-white"
                  }`}
                >
                  <b
                    className={`text-2xl ${
                      index === 3
                        ? "text-[#059669]/50"
                        : "text-[#1d4ed8]/50"
                    }`}
                  >
                    {number}
                  </b>

                  <h3 className="mt-1 text-sm font-bold text-[#0b1c30]">
                    {title}
                  </h3>

                  <p className="mt-1 text-xs leading-4 text-[#5c647a]">
                    {text}
                  </p>
                </motion.article>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* About */}
        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-[#dbe5f5] bg-white p-7 shadow-[0_6px_24px_rgba(15,23,42,0.04)] md:p-10">
            <div className="max-w-3xl">
              <Badge>ABOUT MANASVI COMPUTER</Badge>

              <h2 className="mt-3 text-3xl font-extrabold text-[#0b1c30]">
                Technology Support With a Personal Touch
              </h2>

              <p className="mt-3 text-sm leading-[22.75px] text-[#434655]">
                Manasvi Computer provides computer, hardware parts, CCTV
                surveillance, networking and website development with a
                dedicated focus on reliability and transparent technician
                access. Whether you need immediate laptop repair, replacement
                hardware, or a modern digital website, our goal is clear:
                understand the problem, implement the right fix, and keep your
                tech running smoothly.
              </p>

              <div className="my-5 grid gap-2 text-xs font-semibold text-[#0b1c30] sm:grid-cols-2">
                {[
                  "Direct technician consultation",
                  "Honest diagnostics",
                  "Genuine hardware options",
                  "Doorstep & workshop support",
                ].map((item) => (
                  <span key={item}>✓ {item}</span>
                ))}
              </div>

              <Button href="#contact" className="!text-white">
                Talk to a Technician →
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}