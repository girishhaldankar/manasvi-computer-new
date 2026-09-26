import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { SectionHeading } from "../ui/SectionHeading"

const details = [
  ["Direct Phone Line", "+91 90763 35902"],
  ["WhatsApp Support", "+91 90763 35902"],
  ["Working Hours", "Mon–Sat: 9 AM–8 PM | Sun: 10 AM–4 PM"],
  ["Service Areas", "Mumbai Service Area & Nearby Locations"],
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <Container className="space-y-14">
        {/* Immediate Support CTA */}
        <div className="flex flex-col items-start justify-between gap-7 rounded-3xl bg-gradient-to-r from-[#0037b0] to-[#0b1c30] p-7 text-white shadow-lg md:flex-row md:items-center md:p-10">
          <div>
            <b className="text-xs tracking-[.05em] text-[#bfdbfe]">
              IMMEDIATE TECHNICAL SUPPORT
            </b>

            <h2 className="mt-2 font-['Plus_Jakarta_Sans:ExtraBold'] text-3xl font-extrabold">
              Need Technology Help? Let’s Fix It.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-5 text-[#dbeafe]">
              Whether you need a laptop repair, hardware upgrade, CCTV
              installation, networking solution, printer service or a
              professional website, talk to Manasvi Computer.
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              href="#service-form"
              variant="white"
              className="!text-[#0f172a]"
            >
              Get Service Now
            </Button>

            <Button href="https://wa.me/919076335902" variant="green">
              WhatsApp Now
            </Button>
          </div>
        </div>

        {/* Contact Details + Service Form */}
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr]">
          {/* Contact Information */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="GET IN TOUCH"
              title="Tell Us What You Need Help With"
              description="Drop an enquiry, call our technician directly, or message us on WhatsApp with photos of your error or equipment."
            />

            <div className="mt-6 space-y-3">
              {details.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-[#e5eeff] bg-white p-4"
                >
                  <small className="block text-[11px] text-[#5c647a]">
                    {label}
                  </small>

                  <strong
                    className={`mt-1 block text-xs ${
                      label.includes("WhatsApp") ? "text-[#006948]" : ""
                    }`}
                  >
                    {value}
                  </strong>
                </div>
              ))}
            </div>

            <div className="mt-4 flex h-32 flex-col items-center justify-center rounded-xl border border-[#e2e8f0] bg-[#eff6ff] text-center">
              <strong className="text-xs">
                Workshop & On-Site Visits in Mumbai
              </strong>

              <small className="mt-1 text-[11px] text-[#5c647a]">
                Doorstep technician call-outs available
              </small>
            </div>
          </div>

          {/* Service Form */}
          <form
            id="service-form"
            className="rounded-3xl border border-[#e5eeff] bg-white p-6 shadow-sm md:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-xl font-bold">
              Request Service or Quote
            </h2>

            <p className="mt-1 text-xs text-[#5c647a]">
              Fill in the details below and we will contact you promptly.
            </p>

            <div className="mt-5 space-y-4">
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
                  <span className="flex items-center rounded-l-xl border border-r-0 border-[#e5eeff] bg-[#f1f5f9] px-3 text-xs font-semibold">
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
                  rows={3}
                  placeholder="Briefly describe the symptoms (e.g. laptop not turning on, CCTV feed offline, need website)..."
                  className="field resize-y"
                />
              </Field>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button
                  type="submit"
                  className="min-h-10 flex-1 rounded-xl bg-[#1d4ed8] px-5 py-3 font-['Inter:Semi_Bold'] text-xs font-semibold text-white"
                >
                  Send Message →
                </button>

                <Button
                  href="https://wa.me/919076335902"
                  variant="green"
                  className="!text-white"
                >
                  WhatsApp Direct
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Google Maps + Business Location */}
       <div className="grid items-stretch gap-6 lg:grid-cols-[7fr_5fr]">
  {/* Google Map */}
  <div className="min-h-[520px] overflow-hidden rounded-3xl border border-[#e5eeff] bg-white shadow-sm">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3767963124255!2d72.9161158750287!3d19.123973782090513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7de986a96e7%3A0x695f20d6d5a39c87!2sManasvi%20computers!5e1!3m2!1sen!2sin!4v1790346993080!5m2!1sen!2sin"
      className="block h-full min-h-[520px] w-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      title="Manasvi Computers location on Google Maps"
    />
  </div>

  {/* Google Business Card */}
  <div className="flex h-full flex-col justify-between rounded-3xl border border-[#e5eeff] bg-white p-7 shadow-sm md:p-8">
    <div>
      <span className="inline-flex rounded-full bg-[#eff4ff] px-3 py-1 text-[11px] font-bold tracking-wide text-[#1d4ed8]">
        FIND US ON GOOGLE
      </span>

      <h2 className="mt-3 font-['Plus_Jakarta_Sans:ExtraBold'] text-2xl font-extrabold">
        Visit Manasvi Computers
      </h2>

      <p className="mt-2 text-sm leading-6 text-[#5c647a]">
        Find our workshop easily on Google Maps and get directions
        directly from your phone.
      </p>

      {/* Location Card */}
      <div className="mt-6 rounded-2xl border border-[#e5eeff] bg-[#eff4ff] p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
            📍
          </div>

          <div>
            <p className="text-sm font-bold text-[#1e293b]">
              Manasvi Computers
            </p>

            <p className="mt-1 text-xs text-[#5c647a]">
              View our exact location on Google Maps
            </p>
          </div>
        </div>
      </div>

      {/* Google Business Profile */}
      <div className="mt-5 flex items-center gap-3 rounded-xl border border-[#e5eeff] p-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#eff4ff] text-lg">
          ⭐
        </div>

        <div>
          <p className="text-sm font-bold text-[#1e293b]">
            Google Business Profile
          </p>

          <p className="mt-1 text-xs text-[#5c647a]">
            See photos, reviews, location and business information
          </p>
        </div>
      </div>
    </div>

    {/* Google Actions */}
    <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
      <a
        href="https://www.google.com/maps/search/?api=1&query=Manasvi+computers"
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#1d4ed8] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#1e40af]"
      >
        Get Directions →
      </a>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Manasvi+computers"
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#e5eeff] bg-white px-5 py-3 text-xs font-semibold text-[#1d4ed8] transition hover:bg-[#eff4ff]"
      >
        View Google Business Profile →
      </a>
    </div>
  </div>
</div>
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
      <span className="mb-1 block font-['Inter:Semi_Bold'] text-xs font-semibold">
        {label}
      </span>

      {children}
    </label>
  )
}