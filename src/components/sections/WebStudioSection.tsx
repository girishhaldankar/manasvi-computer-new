import { motion } from "motion/react"
import { images } from "../../assets"
import { Stagger, staggerItem } from "../motion/Stagger"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"

const webFeatures = [
  ["Website Design", "Professional visual design & UX."],
  ["Website Development", "Fast, responsive & clean code."],
  ["Business Websites", "Designed to generate client inquiries."],
  ["Website Maintenance", "Continuous updates & security."],
]

export function WebStudioSection() {
  return (
    <section id="web-studio" className="py-20 md:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Badge>DIGITAL SERVICES</Badge>

          <h2 className="mt-4 text-3xl font-extrabold leading-10 tracking-[-.025em] md:text-4xl">
            We Build Websites That Work for Your Business
          </h2>

          <p className="mt-4 text-base leading-6 text-[#434655]">
            Modern, responsive and professional websites for local businesses,
            shops, service providers and growing companies. Clean UI design,
            fast loading speeds, and SEO-ready structure.
          </p>

          <Stagger className="my-6 grid grid-cols-2 gap-3">
            {webFeatures.map(([title, text]) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="group rounded-xl border border-[#e5eeff] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cbdaf2] hover:shadow-[0_8px_22px_rgba(15,23,42,0.06)]"
              >
                <strong className="block text-xs text-[#0b1c30]">
                  {title}
                </strong>

                <small className="text-[11px] leading-5 text-[#5c647a]">
                  {text}
                </small>
              </motion.div>
            ))}
          </Stagger>

          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "Responsive Design",
              "Mobile-First",
              "SEO-Ready",
              "Modern JavaScript",
              "React",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#dbeafe] bg-[#eff4ff] px-3 py-1 text-xs font-semibold text-[#1d4ed8]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="#contact" className="!text-white">
              Build My Website →
            </Button>

            <Button href="#contact" variant="ghost">
              View Web Services →
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="overflow-hidden rounded-3xl border border-[#e5eeff] bg-white p-3 shadow-xl"
          initial={{
            opacity: 0,
            x: 35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <img
            src={images.website}
            alt="Modern responsive website displayed on a desktop monitor"
            className="h-[349px] w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-[1.02]"
          />

          <div className="flex items-center justify-between gap-4 p-4">
            <span>
              <strong className="block text-xs text-[#0b1c30]">
                Manasvi Digital Studio
              </strong>

              <small className="text-[11px] leading-5 text-[#5c647a]">
                Custom designs tailored for shops, local services and clinics
              </small>
            </span>

            <b className="shrink-0 rounded-full bg-[#ecfdf5] px-3 py-1 text-[11px] text-[#006948]">
              Turnkey Delivery
            </b>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}