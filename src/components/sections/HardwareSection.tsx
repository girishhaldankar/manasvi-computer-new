
import { hardwarePanels } from "../../data/site"
import { ArrowLink } from "../ui/ArrowLink"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"
import { SectionHeading } from "../ui/SectionHeading"

export function HardwareSection() {
  return (
    <section
      id="hardware"
      className="border-y border-[#e5eeff] bg-[#eff4ff]/40 py-20 md:py-24"
    >
      <Container>
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
            className="!border !border-[#e5eeff] !text-[#1d4ed8]"
          >
            Inquire Parts Availability →
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {hardwarePanels.map((panel) => (
            <article
              key={panel.number}
              className="flex min-h-[307px] flex-col justify-between rounded-3xl border border-[#e5eeff] bg-white p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#eff4ff] font-['Inter:Bold'] text-[#1d4ed8]">
                    {panel.number}
                  </span>

                  <span className="text-xs font-semibold text-[#5c647a]">
                    {panel.note}
                  </span>
                </div>

                <h3 className="mt-4 font-['Plus_Jakarta_Sans:Bold'] text-xl font-bold">
                  {Number(panel.number)}. {panel.title}
                </h3>

                <p className="mt-1 text-xs leading-4 text-[#5c647a]">
                  {panel.description}
                </p>

                <div className="mt-4 h-[120px] w-full overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#f1f5f9]">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {panel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-[#eff4ff] px-3 py-1.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-[#f1f5f9] pt-4">
                <ArrowLink href="#contact">
                  Request {panel.title} Quote
                </ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
