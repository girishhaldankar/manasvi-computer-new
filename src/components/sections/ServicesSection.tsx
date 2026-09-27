import { motion } from "motion/react"
import { images } from "../../assets"
import { categories, problems } from "../../data/site"
import { CategoryCard } from "../cards/CategoryCard"
import { ProblemCard } from "../cards/ProblemCard"
import { ServiceCard } from "../cards/ServiceCard"
import { Reveal } from "../motion/Reveal"
import { Stagger, staggerItem } from "../motion/Stagger"
import { Container } from "../ui/Container"
import { SectionHeading } from "../ui/SectionHeading"

export function ServicesSection() {
  return (
    <>
      <section id="services" className="py-20 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="WHAT WE DO"
              title="Complete Technology Support Under One Roof"
              description="From repairing a laptop to upgrading a PC, installing CCTV or building a business website, Manasvi Computer provides practical technology solutions from one place."
            />
          </Reveal>

          <Stagger className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div variants={staggerItem} className="h-full">
              <ServiceCard
                title="Computer & Laptop"
                description="Complete hardware repairs, chip-level troubleshooting, motherboard diagnostics, operating system maintenance and performance tuning for major brands."
                badge="Repair • Upgrade • Support"
                note="Same-Day Available"
                image={images.laptopTools}
                link="Book Laptop Service"
              >
                <ul className="space-y-2.5">
                  {[
                    "Motherboard & chip repairs",
                    "Windows & macOS setup",
                    "Antivirus & malware clean",
                    "Data recovery & disk clones",
                    "RAM & NVMe SSD upgrades",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[11px] font-medium leading-5 text-[#526078]"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e7effc] text-[10px] font-bold text-[#1d4ed8]">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ServiceCard>
            </motion.div>

            <motion.div variants={staggerItem} className="h-full">
              <ServiceCard
                title="CCTV & Security"
                description="Complete surveillance setups for retail shops, offices and homes with high-definition cameras and seamless mobile phone remote streaming."
                badge="Security Solutions"
                note="4K HD Support"
                image={images.cctv}
                link="Get CCTV Service"
                green
              >
                <ul className="space-y-2.5">
                  {[
                    "Dome & Bullet camera setups",
                    "DVR / NVR storage replacement",
                    "Mobile P2P remote live sync",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[11px] font-medium leading-5 text-[#526078]"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#def5e8] text-[10px] font-bold text-[#047857]">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ServiceCard>
            </motion.div>
          </Stagger>

          <Stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="h-full"
              >
                <CategoryCard {...item} />
              </motion.div>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="EVERYDAY TECH PROBLEMS"
              title="Technology Problems We Solve Every Day"
              description="Click any issue below to consult our technician on how we test and fix it."
            />
          </Reveal>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(([title, description, link, icon], index) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="h-full"
              >
                <ProblemCard
                  title={title}
                  description={description}
                  link={link}
                  icon={icon}
                  green={index === 2}
                />
              </motion.div>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  )
}