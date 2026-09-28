import { motion } from "motion/react"
import { hardwarePanels } from "../../data/site"
import { ArrowLink } from "../ui/ArrowLink"
import { Button } from "../ui/Button"
import { Stagger, staggerItem } from "../motion/Stagger"
import { Reveal } from "../motion/Reveal"
import { Container } from "../ui/Container"
import { SectionHeading } from "../ui/SectionHeading"

export function HardwareSection() {
  return (
    <section
      id="hardware"
      className="relative overflow-hidden border-y border-[#E2E8F0] bg-[#F5F8FC] py-20 md:py-24"
    >
      <div className="pointer-events-none absolute -right-32 top-20 z-0 size-[420px] rounded-full bg-[#dbeafe]/40 blur-3xl" />

      <Container className="relative z-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="PARTS & HARDWARE"
              title="Everything You Need to Repair, Upgrade or Build"
              description="From laptop replacement parts to complete PC components and networking equipment, Manasvi Computer helps you find the right technology for your needs."
            />

            <Button
              href="#contact"
              variant="white"
              className="!border !border-[#dbe7ff] !text-[#1d4ed8]"
            >
              Inquire Parts Availability →
            </Button>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-2">
          {hardwarePanels.map((panel) => (
            <motion.article
              key={panel.number}
              variants={staggerItem}
              className="group relative flex min-h-[310px] flex-col justify-between overflow-hidden rounded-3xl border border-[#dbe5f5] bg-white p-6 shadow-[0_5px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c5d7ef] hover:shadow-[0_14px_32px_rgba(15,23,42,0.09)]"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 size-36 rounded-full bg-[#dbeafe]/50 blur-3xl transition-transform duration-500 group-hover:scale-125" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#eff4ff] text-sm font-extrabold text-[#1d4ed8]">
                      {panel.number}
                    </span>

                    <span className="text-[11px] font-semibold text-[#64748b]">
                      {panel.note}
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-bold text-[#0b1c30]">
                  {panel.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#5c647a]">
                  {panel.description}
                </p>

                <div className="relative mt-4 h-[200px] overflow-hidden rounded-2xl border border-[#dfe7f2] bg-[#f1f5f9]">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1c30]/20 via-transparent to-transparent" />
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {panel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-[#f7faff] px-2.5 py-1 text-[11px] font-semibold text-[#34445b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-4 flex items-center justify-between border-t border-[#e8eef6] pt-3">
                <span className="text-[11px] text-[#94a3b8]">
                  Check availability
                </span>

                <ArrowLink href="#contact">
                  Request Quote →
                </ArrowLink>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}