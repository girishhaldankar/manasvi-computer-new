import { icons, images } from "../../assets"
import { reviews } from "../../data/site"
import { ReviewCard } from "../cards/ReviewCard"
import { ArrowLink } from "../ui/ArrowLink"
import { Container } from "../ui/Container"
import { SectionHeading } from "../ui/SectionHeading"

const gallery = [
  [
    "Laptop Board Servicing",
    "Fan cleanout & thermal overhaul.",
    images.laptopTools,
  ],
  ["Store CCTV Deployment", "Dual-camera bracket mount & DVR.", images.cctv],
  ["Precision Soldering", "DC jack & capacitor swaps.", images.technician],
  ["Router & LAN Cabling", "CAT6 punchdown & rack setup.", icons[31]],
  ["PC Hardware Upgrades", "NVMe M.2 & DDR5 installations.", images.hardware],
] as const

const localCards = [
  [
    "Service Radius",
    "Mumbai & Nearby Local Areas",
    "Doorstep visits available",
  ],
  ["Phone Line", "+91 90763 35902", "Direct technician voice"],
  ["WhatsApp", "+91 90763 35902", "Send error photo / video"],
  ["Working Hours", "Mon–Sat: 9:00 AM – 8:00 PM", "Sun: 10:00 AM – 4:00 PM"],
]

export function GalleryReviewsSection() {
  return (
    <>
      <section className="py-20 md:py-24">
        <Container>
          <div className="flex items-end justify-between">
            <SectionHeading
              align="left"
              eyebrow="REAL BENCH WORK"
              title="Work We Do"
              description="A glance at the technology repairs, hardware bench diagnostics and installations we deliver."
            />
            <ArrowLink href="#contact" className="hidden sm:block">
              Schedule an Inspection
            </ArrowLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {gallery.map(([title, text, image]) => (
              <article
                key={title}
                className="overflow-hidden rounded-2xl border border-[#e5eeff] bg-white"
              >
                <div className="flex h-44 items-center justify-center overflow-hidden bg-[#f1f5f9]">
                  <img
                    src={image}
                    alt=""
                    className={
                      image.endsWith(".svg")
                        ? "h-[46px] w-[48px]"
                        : "h-full w-full object-cover"
                    }
                  />
                </div>
                <div className="p-3.5">
                  <h3 className="text-xs font-bold">{title}</h3>
                  <p className="mt-1 text-[11px] text-[#5c647a]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-y border-[#e5eeff] bg-[#eff4ff]/40 py-20">
        <Container className="space-y-14">
          <div>
            <SectionHeading
              align="left"
              eyebrow="LOCAL MUMBAI PRESENCE"
              title="Local Technology Support You Can Reach"
              description="Get fast technical assistance, genuine parts and doorstep visits across Mumbai."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {localCards.map(([title, value, note]) => (
                <div
                  key={title}
                  className="rounded-xl border border-[#e5eeff] bg-white p-4"
                >
                  <b className="text-xs text-[#1d4ed8]">{title}</b>
                  <strong className="mt-2 block text-xs">{value}</strong>
                  <small className="mt-1 block text-[11px] text-[#5c647a]">
                    {note}
                  </small>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-xl font-bold">
                What Local Customers Say
              </h2>
              <span className="rounded-full border border-[#e5eeff] bg-white px-3 py-1 text-xs font-bold">
                <span className="text-[#f59e0b]">★★★★★</span> 5.0 Star Rated
                Locally
              </span>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
