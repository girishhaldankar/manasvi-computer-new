import {
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react"
import { motion } from "motion/react"
import { images } from "../../assets"
import { reviews } from "../../data/site"
import { ReviewCard } from "../cards/ReviewCard"
import { ArrowLink } from "../ui/ArrowLink"
import { Container } from "../ui/Container"
import { SectionHeading } from "../ui/SectionHeading"
import { Reveal } from "../motion/Reveal"
import { Stagger, staggerItem } from "../motion/Stagger"

const gallery = [
  [
    "Laptop Board Servicing",
    "Fan cleanout & thermal overhaul.",
    images.laptopTools,
  ],
  ["Store CCTV Deployment", "Dual-camera bracket mount & DVR.", images.cctv],
  ["Precision Soldering", "DC jack & capacitor swaps.", images.technician],
  ["Router & LAN Cabling", "CAT6 punchdown & rack setup.", images.cctv],
  ["PC Hardware Upgrades", "NVMe M.2 & DDR5 installations.", images.hardware],
] as const

const localCards = [
  [
    "Service Radius",
    "Mumbai & Nearby Local Areas",
    "Doorstep visits available",
    MapPin,
    "blue",
  ],
  [
    "Phone Line",
    "+91 90763 35902",
    "Direct technician voice",
    Phone,
    "blue",
  ],
  [
    "WhatsApp",
    "+91 90763 35902",
    "Send error photo / video",
    MessageCircle,
    "green",
  ],
  [
    "Working Hours",
    "Mon–Sat: 9:00 AM – 8:00 PM",
    "Sun: 10:00 AM – 4:00 PM",
    Clock3,
    "blue",
  ],
] as const

export function GalleryReviewsSection() {
  return (
    <>
      {/* Work Gallery */}
      <section
        id="gallery"
        className="relative overflow-hidden py-20 md:py-28"
      >
        <div className="pointer-events-none absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-[#dbeafe]/50 blur-3xl" />

        <Container className="relative">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                align="left"
                eyebrow="REAL BENCH WORK"
                title="Work We Do"
                description="A closer look at the repairs, installations and hardware work we deliver every day."
              />

              <ArrowLink href="#contact" className="hidden sm:block">
                Schedule an Inspection
              </ArrowLink>
            </div>
          </Reveal>

          {/* Featured Gallery */}
          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            {/* Main Feature */}
            <Reveal className="lg:col-span-6">
              <motion.article
                className="group relative min-h-[420px] overflow-hidden rounded-[28px] border border-[#dfe8f8] bg-[#f1f5f9] shadow-[0_10px_35px_rgba(15,23,42,0.08)]"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={gallery[0][2]}
                  alt={gallery[0][0]}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/90 via-[#0b1c30]/20 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.08em] text-[#1d4ed8] shadow-sm">
                    FEATURED WORK
                  </span>
                </div>

                <div className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full bg-white/90 text-[#1d4ed8] shadow-sm">
                  ↗
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                    {gallery[0][0]}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-blue-100">
                    {gallery[0][1]}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/80">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    Professional Bench Service
                  </div>
                </div>
              </motion.article>
            </Reveal>

            {/* Smaller Gallery */}
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
              {gallery.slice(1).map(([title, text, image]) => (
                <motion.article
                  key={title}
                  variants={staggerItem}
                  className="group relative min-h-[202px] overflow-hidden rounded-[22px] border border-[#dfe8f8] bg-white shadow-[0_6px_22px_rgba(15,23,42,0.06)]"
                >
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#f1f5f9]">
                    <img
                      src={image}
                      alt={title}
                      className={
                        image.endsWith(".svg")
                          ? "h-[54px] w-[56px] transition-transform duration-500 group-hover:scale-110"
                          : "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      }
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/80 via-transparent to-transparent opacity-90" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm font-bold text-white">{title}</h3>

                    <p className="mt-1 text-[10px] leading-4 text-blue-100">
                      {text}
                    </p>
                  </div>

                  <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-xs text-[#1d4ed8] opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                </motion.article>
              ))}
            </Stagger>
          </div>

          {/* Mobile CTA */}
          <Reveal delay={0.08}>
            <div className="mt-6 sm:hidden">
              <ArrowLink href="#contact">
                Schedule an Inspection →
              </ArrowLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Local Presence + Reviews */}
      <section className="relative overflow-hidden border-y border-[#dfe8f8] bg-gradient-to-b from-[#f4f7ff] via-white to-[#f8fbff] py-20 md:py-28">
        <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-[#d1fae5]/40 blur-3xl" />

        <Container className="relative space-y-20">
          {/* Local Presence */}
          <div>
            <Reveal>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <SectionHeading
                  align="left"
                  eyebrow="LOCAL MUMBAI PRESENCE"
                  title="Local Technology Support You Can Reach"
                  description="Get fast technical assistance, genuine parts and doorstep visits across Mumbai."
                />

                <div className="hidden items-center gap-2 rounded-full border border-[#d6eee4] bg-white px-3.5 py-2 text-[10px] font-semibold text-[#006948] shadow-sm sm:flex">
                  <span className="size-1.5 rounded-full bg-[#10b981]" />
                  Local Support Available
                </div>
              </div>
            </Reveal>

            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {localCards.map(
                ([title, value, note, Icon, color]) => (
                  <motion.article
                    key={title}
                    variants={staggerItem}
                    className="group relative overflow-hidden rounded-2xl border border-[#dfe8f8] bg-white p-5 shadow-[0_5px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbdaf2] hover:shadow-[0_12px_30px_rgba(15,23,42,0.09)]"
                  >
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl ${
                        color === "green"
                          ? "bg-[#ecfdf5] text-[#00845a]"
                          : "bg-[#eff4ff] text-[#1d4ed8]"
                      }`}
                    >
                      <Icon
                        size={19}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.08em] text-[#7a8499]">
                      {title}
                    </p>

                    <h3 className="mt-1.5 text-sm font-bold leading-5 text-[#0b1c30]">
                      {value}
                    </h3>

                    <p className="mt-1.5 text-[11px] leading-5 text-[#5c647a]">
                      {note}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                        color === "green"
                          ? "bg-[#10b981]"
                          : "bg-[#1d4ed8]"
                      }`}
                    />
                  </motion.article>
                ),
              )}
            </Stagger>
          </div>

          {/* Reviews */}
          <div id="reviews">
            <Reveal>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-[#fff7ed] px-3 py-1 text-[10px] font-bold tracking-[0.1em] text-[#c2410c]">
                    CUSTOMER FEEDBACK
                  </span>

                  <h2 className="mt-3 text-2xl font-extrabold text-[#0b1c30] md:text-3xl">
                    What Local Customers Say
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#5c647a]">
                    Real feedback from customers who have used our repair,
                    hardware and technology services.
                  </p>
                </div>

                <div className="flex w-fit items-center gap-3 rounded-2xl border border-[#e5e7eb] bg-white px-4 py-3 shadow-sm">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#fff7ed] text-[#f59e0b]">
                    ★
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-[#0b1c30]">
                        5.0
                      </span>
                      <span className="text-xs tracking-wide text-[#f59e0b]">
                        ★★★★★
                      </span>
                    </div>

                    <p className="text-[10px] text-[#7a8499]">
                      Local customer rating
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Stagger className="mt-8 grid gap-6 lg:grid-cols-3">
              {reviews.map((review) => (
                <motion.div
                  key={review.name}
                  variants={staggerItem}
                  className="rounded-[22px] border border-[#dfe8f8] bg-white p-1 shadow-[0_6px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(15,23,42,0.09)]"
                >
                  <ReviewCard {...review} />
                </motion.div>
              ))}
            </Stagger>
          </div>

          {/* Bottom trust strip */}
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-4 rounded-2xl border border-[#dbe7ff] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#eff4ff] text-[#1d4ed8]">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <strong className="block text-xs text-[#0b1c30]">
                    Local service. Direct support.
                  </strong>

                  <p className="mt-0.5 text-[10px] text-[#5c647a]">
                    Talk directly with our team about your technology needs.
                  </p>
                </div>
              </div>

              <ArrowLink href="#contact">
                Talk to a Technician →
              </ArrowLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}