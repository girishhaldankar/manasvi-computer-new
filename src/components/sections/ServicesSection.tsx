import { images } from "../../assets"
import { categories, problems } from "../../data/site"
import { CategoryCard } from "../cards/CategoryCard"
import { ProblemCard } from "../cards/ProblemCard"
import { ServiceCard } from "../cards/ServiceCard"
import { Container } from "../ui/Container"
import { SectionHeading } from "../ui/SectionHeading"

export function ServicesSection() {
  return (
    <>
      <section id="services" className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Complete Technology Support Under One Roof"
            description="From repairing a laptop to upgrading a PC, installing CCTV or building a business website, Manasvi Computer provides practical technology solutions from one place."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[7fr_5fr]">
            <ServiceCard
              title="Computer & Laptop"
              description="Complete hardware repairs, chip-level troubleshooting, motherboard diagnostics, operating system maintenance and performance tuning for major brands."
              badge="Repair • Upgrade • Support"
              note="Same-Day Available"
              image={images.laptopTools}
              link="Book Laptop Service"
            >
              <ul>
                {[
                  "Motherboard & chip repairs",
                  "Windows & macOS setup",
                  "Antivirus & malware clean",
                  "Data recovery & disk clones",
                  "RAM & NVMe SSD upgrades",
                ].map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </ServiceCard>
            <ServiceCard
              title="CCTV & Security"
              description="Complete surveillance setups for retail shops, offices and homes with high-definition cameras and seamless mobile phone remote streaming."
              badge="Security Solutions"
              note="4K HD Support"
              image={images.cctv}
              link="Get CCTV Service"
              green
            >
              <ul>
                {[
                  "Dome & Bullet camera setups",
                  "DVR / NVR storage replacement",
                  "Mobile P2P remote live sync",
                ].map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </ServiceCard>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => (
              <CategoryCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="EVERYDAY TECH PROBLEMS"
            title="Technology Problems We Solve Every Day"
            description="Click any issue below to consult our technician on how we test and fix it."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(([title, description, link, icon], index) => (
              <ProblemCard
                key={title}
                title={title}
                description={description}
                link={link}
                icon={icon}
                green={index === 2}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
