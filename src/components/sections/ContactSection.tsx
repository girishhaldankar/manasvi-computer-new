import {
  Clock3,
  House,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react"
import { motion } from "motion/react"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { SectionHeading } from "../ui/SectionHeading"
import { Reveal } from "../motion/Reveal"
import { Stagger, staggerItem } from "../motion/Stagger"

const details = [
  {
    label: "Direct Phone Line",
    value: "+91 90763 35902",
    icon: Phone,
    color: "blue",
  },
  {
    label: "WhatsApp Support",
    value: "+91 90763 35902",
    icon: MessageCircle,
    color: "green",
  },
  {
    label: "Working Hours",
    value: "Mon–Sat: 9 AM–8 PM | Sun: 10 AM–4 PM",
    icon: Clock3,
    color: "blue",
  },
  {
    label: "Service Areas",
    value: "Mumbai Service Area & Nearby Locations",
    icon: MapPin,
    color: "blue",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-[#dbeafe]/50 blur-3xl" />
        <div className="absolute bottom-20 right-[-120px] h-72 w-72 rounded-full bg-[#d1fae5]/40 blur-3xl" />
      </div>

      <Container className="relative space-y-16">
        {/* Support Banner */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0037b0] via-[#123f9f] to-[#0b1c30] p-7 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)] md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full border border-white/10" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-blue-100">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  IMMEDIATE TECHNICAL SUPPORT
                </div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                  Need Technology Help?
                  <br />
                  <span className="text-blue-200">Let’s Fix It.</span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100 md:text-base">
                  From laptop repairs and hardware upgrades to CCTV,
                  networking, printer services and websites — tell us what you
                  need and our team will help.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  href="tel:+919076335902"
                  variant="white"
                  className="!min-h-11 !px-5 !text-[#1d4ed8]"
                >
                  <Phone size={16} strokeWidth={2} aria-hidden="true" />
                  Call Now
                </Button>

                <Button
                  href="https://wa.me/919076335902"
                  variant="green"
                  className="!min-h-11 !px-5 !text-white"
                >
                  <MessageCircle
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  WhatsApp Now
                </Button>

                <Button
                  href="#service-form"
                  variant="white"
                  className="!min-h-11 !px-5 !text-[#0f172a]"
                >
                  Get Service Now
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Section Heading */}
        <Reveal>
          <div className="text-center">
            <SectionHeading
              eyebrow="GET IN TOUCH"
              title="Tell Us What You Need Help With"
              description="Call us, message us on WhatsApp, or send a service enquiry. We'll help you find the right solution."
            />
          </div>
        </Reveal>

        {/* Contact + Form */}
        <div className="grid gap-8 lg:grid-cols-[5fr_7fr]">
          {/* Contact Information */}
          <div>
            <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {details.map(({ label, value, icon: Icon, color }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="group flex items-center gap-4 rounded-2xl border border-[#dfe8f8] bg-white p-4 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cbdaf2] hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
                >
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${
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

                  <div className="min-w-0">
                    <small className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#7a8499]">
                      {label}
                    </small>

                    <strong
                      className={`mt-1 block text-xs leading-5 ${
                        color === "green"
                          ? "text-[#006948]"
                          : "text-[#1e293b]"
                      }`}
                    >
                      {value}
                    </strong>
                  </div>
                </motion.div>
              ))}
            </Stagger>

            {/* Local Service Card */}
            <Reveal delay={0.08}>
              <div className="relative mt-4 overflow-hidden rounded-2xl border border-[#d6eee4] bg-gradient-to-br from-[#ecfdf5] via-white to-white p-5">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#d1fae5]/50 blur-2xl" />

                <div className="relative flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#00845a] shadow-sm ring-1 ring-[#d6eee4]">
                    <House size={19} />
                  </div>

                  <div>
                    <strong className="block text-sm text-[#0b1c30]">
                      Workshop & On-Site Visits
                    </strong>

                    <p className="mt-1 text-xs leading-5 text-[#5c647a]">
                      Serving Mumbai and nearby locations with doorstep
                      technician call-outs available.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Trust note */}
            <Reveal delay={0.12}>
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#e5eeff] bg-[#f8fbff] p-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1d4ed8] shadow-sm">
                  <ShieldCheck size={18} />
                </div>

                <p className="text-[11px] leading-5 text-[#5c647a]">
                  Clear communication, practical solutions and direct
                  technician support.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Service Form */}
          <Reveal delay={0.08}>
            <motion.form
              id="service-form"
              className="relative overflow-hidden rounded-[28px] border border-[#dfe8f8] bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.07)] md:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              onSubmit={(event) => {
                event.preventDefault()

                const form = event.currentTarget
                const formData = new FormData(form)

                const name = String(formData.get("name") || "").trim()
                const phone = String(formData.get("phone") || "").trim()
                const service = String(formData.get("service") || "").trim()
                const message = String(formData.get("message") || "").trim()

                const whatsappMessage = `Hello Manasvi Computers,

I would like to request a service.

Name: ${name}
Phone: +91 ${phone}
Service: ${service}

Problem:
${message || "Not specified"}

Thank you.`

                const whatsappUrl = `https://wa.me/919076335902?text=${encodeURIComponent(
                  whatsappMessage,
                )}`

                window.open(whatsappUrl, "_blank")
              }}
            >
              <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-[#eff4ff] blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full border border-[#dbe7ff] bg-[#eff4ff] px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-[#1d4ed8]">
                      SERVICE ENQUIRY
                    </span>

                    <h2 className="mt-3 text-2xl font-bold text-[#0b1c30]">
                      Request Service or Quote
                    </h2>

                    <p className="mt-1.5 max-w-md text-xs leading-5 text-[#5c647a]">
                      Tell us what you need and your enquiry will open directly
                      in WhatsApp.
                    </p>
                  </div>

                  <div className="hidden size-11 shrink-0 items-center justify-center rounded-xl bg-[#eff4ff] text-[#1d4ed8] sm:flex">
                    <Send size={18} />
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  <Field label="Your Name *">
                    <input
                      required
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      className="field"
                    />
                  </Field>

                  <Field label="Phone Number *">
                    <div className="flex">
                      <span className="flex items-center rounded-l-xl border border-r-0 border-[#e5eeff] bg-[#f1f5f9] px-3 text-xs font-semibold text-[#334155]">
                        +91
                      </span>

                      <input
                        required
                        name="phone"
                        inputMode="tel"
                        placeholder="90763 35902"
                        className="field !rounded-l-none"
                      />
                    </div>
                  </Field>

                  <Field label="Service Needed *">
                    <select required name="service" className="field">
                      <option value="">Select a service category</option>
                      <option>Computer & Laptop Repair</option>
                      <option>Parts & Hardware</option>
                      <option>CCTV & Security</option>
                      <option>Networking & Wi-Fi</option>
                      <option>Printer Services</option>
                      <option>Website Development</option>
                    </select>
                  </Field>

                  <Field label="Describe Your Problem">
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Briefly describe the issue or service you need..."
                      className="field resize-y"
                    />
                  </Field>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1d4ed8] px-5 py-3 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(29,78,216,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e40af] hover:shadow-[0_12px_26px_rgba(29,78,216,0.25)]"
                    >
                      <MessageCircle
                        size={17}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      Send Enquiry on WhatsApp
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                    <p className="mt-3 text-center text-[10px] text-[#7a8499]">
                      Your details will be prepared in WhatsApp before sending.
                    </p>
                  </div>
                </div>
              </div>
            </motion.form>
          </Reveal>
        </div>

        {/* Location */}
        <Reveal>
          <div>
            <div className="mb-6 text-center">
              <span className="inline-flex rounded-full bg-[#eff4ff] px-3 py-1 text-[10px] font-bold tracking-[0.1em] text-[#1d4ed8]">
                FIND OUR WORKSHOP
              </span>

              <h2 className="mt-3 text-2xl font-extrabold text-[#0b1c30] md:text-3xl">
                Visit Manasvi Computers
              </h2>

              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#5c647a]">
                Find our workshop on Google Maps and get directions directly
                from your phone.
              </p>
            </div>

            <div className="grid items-stretch gap-6 lg:grid-cols-[7fr_5fr]">
              {/* Google Map */}
              <motion.div
                className="min-h-[500px] overflow-hidden rounded-[28px] border border-[#dfe8f8] bg-white p-2 shadow-[0_10px_35px_rgba(15,23,42,0.07)]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="h-full min-h-[484px] overflow-hidden rounded-[22px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3767963124255!2d72.9161158750287!3d19.123973782090513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7de986a96e7%3A0x695f20d6d5a39c87!2sManasvi%20computers!5e1!3m2!1sen!2sin!4v1790346993080!5m2!1sen!2sin"
                    className="block h-full min-h-[484px] w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Manasvi Computers location on Google Maps"
                  />
                </div>
              </motion.div>

              {/* Business Card */}
              <motion.div
                className="flex flex-col justify-between rounded-[28px] border border-[#dfe8f8] bg-gradient-to-br from-white via-white to-[#f5f8ff] p-7 shadow-[0_10px_35px_rgba(15,23,42,0.07)] md:p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#eff4ff] text-[#1d4ed8]">
                    <MapPin size={21} />
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold text-[#0b1c30]">
                    Manasvi Computers
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#5c647a]">
                    Visit our workshop for computer repairs, hardware upgrades,
                    CCTV solutions and other technology services.
                  </p>

                  <div className="mt-6 rounded-2xl border border-[#dbe7ff] bg-[#eff4ff]/70 p-5">
                    <div className="flex gap-3">
                      <MapPin
                        size={18}
                        className="mt-0.5 shrink-0 text-[#1d4ed8]"
                      />

                      <div>
                        <p className="text-xs font-bold text-[#1e293b]">
                          Mumbai Service Area
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-[#5c647a]">
                          View our location on Google Maps and plan your visit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#e5eeff] bg-white p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#fff7ed] text-lg">
                      ⭐
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#1e293b]">
                        Google Business Profile
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-[#5c647a]">
                        Photos, reviews, location and business information.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Manasvi+computers"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#1d4ed8] px-5 py-3 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(29,78,216,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e40af]"
                  >
                    <MapPin size={16} />
                    Get Directions
                    <span>→</span>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Manasvi+computers"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-[#dbe5f5] bg-white px-5 py-3 text-xs font-semibold text-[#1d4ed8] transition-all duration-300 hover:border-[#c5d5ef] hover:bg-[#f8fbff]"
                  >
                    View Google Business Profile →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-[#24344d]">
        {label}
      </span>

      {children}
    </label>
  )
}