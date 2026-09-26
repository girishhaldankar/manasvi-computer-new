import { icons, images } from "../../assets"
import { features } from "../../data/site"
import { FeatureCard } from "../cards/FeatureCard"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"

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
        <div className="grid gap-8 lg:grid-cols-[5fr_7fr]">
          <div className="self-center">
            <Badge>WHY MANASVI</Badge>
            <h2 className="mt-3 font-['Plus_Jakarta_Sans:ExtraBold'] text-4xl leading-10 font-extrabold">
              Direct Technician Support.
              <br />
              No Middlemen.
            </h2>
            <p className="mt-4 text-sm leading-[22.75px] text-[#434655]">
              When you call or hand over your hardware, you speak directly with
              the skilled engineer diagnosing and repairing your machine. No
              confusing call center queues or inflated estimates.
            </p>
            <img
              src={images.technician}
              alt="Technician inspecting a laptop motherboard"
              className="mt-6 h-[364px] w-full rounded-2xl border border-[#e5eeff] object-cover shadow-sm"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(([title, description], index) => (
              <FeatureCard
                key={title}
                title={title}
                description={description}
                icon={icons[23 + index]}
              />
            ))}
          </div>
        </div>
        <div className="border-t border-[#e5eeff] pt-8 text-center">
          <Badge>OUR PROCESS</Badge>
          <h2 className="mt-2 font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold">
            Simple From Start to Finish
          </h2>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, text], index) => (
              <article
                key={number}
                className="rounded-2xl border border-[#e5eeff] bg-white p-5"
              >
                <b
                  className={`text-2xl ${
                    index === 3 ? "text-[#059669]/40" : "text-[#1d4ed8]/40"
                  }`}
                >
                  {number}
                </b>
                <h3 className="mt-1 text-sm font-bold">{title}</h3>
                <p className="mt-1 text-xs leading-4 text-[#5c647a]">{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-[#e5eeff] bg-white p-7 md:p-10">
          <div className="max-w-3xl">
            <Badge>ABOUT MANASVI COMPUTER</Badge>
            <h2 className="mt-3 font-['Plus_Jakarta_Sans:ExtraBold'] text-3xl font-extrabold">
              Technology Support With a Personal Touch
            </h2>
            <p className="mt-3 text-sm leading-[22.75px] text-[#434655]">
              Manasvi Computer provides computer, hardware parts, CCTV
              surveillance, networking and website development with a dedicated
              focus on reliability and transparent technician access. Whether
              you need immediate laptop repair, replacement hardware, or a
              modern digital website, our goal is clear: understand the problem,
              implement the right fix, and keep your tech running smoothly.
            </p>
            <div className="my-5 grid gap-2 text-xs font-semibold sm:grid-cols-2">
              {[
                "Direct technician consultation",
                "Honest diagnostics",
                "Genuine hardware options",
                "Doorstep & workshop support",
              ].map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>
            <Button href="#contact" className="!text-white">Talk to a Technician →</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
