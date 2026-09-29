import {
  BadgeCheck,
  UserRoundCheck,
  House,
  MapPinCheck,
} from "lucide-react"
import { motion, type Variants } from "motion/react"

import { images } from "../../assets"
import { trustItems } from "../../data/site"
import { Stagger, staggerItem } from "../motion/Stagger"
import { Button } from "../ui/Button"
import { Container } from "../ui/Container"

/* ----------------------------------------
   Hero Animation
----------------------------------------- */

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ----------------------------------------
   Hero Image Animation
----------------------------------------- */

const heroImage: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.25,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ----------------------------------------
   Trust Strip Animation
----------------------------------------- */

const trustStripContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const trustStripItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function HeroSection() {
  return (
    <>
      {/* ========================================
          HERO
      ========================================= */}
      <section className="relative overflow-hidden bg-[#071A2B] pt-[134px] pb-16 text-white md:pt-20 md:pb-20 lg:flex lg:min-h-[calc(100svh_-_132px)] lg:flex-col lg:pt-[calc(70px_+_1rem)] lg:pb-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,128,237,.16),transparent_58%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(148,190,232,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,190,232,.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

        <Container className="relative grid items-center gap-12 lg:my-auto lg:grid-cols-2">
          {/* ========================================
              LEFT CONTENT
          ========================================= */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.25,
            }}
          >
            {/* Badge */}
            {/* ========================================
    HERO TEXT
========================================= */}

<div>
  {/* ----------------------------------------
      Badge
  ----------------------------------------- */}
  <motion.div
    initial={{
      opacity: 0,
      y: 20,
      scale: 0.96,
      filter: "blur(6px)",
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    }}
    viewport={{
      once: false,
      amount: 0.6,
    }}
    transition={{
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    }}
  >
    <span className="inline-flex items-center gap-2 rounded-full border border-[#5b8dbb]/50 bg-[#0B2942] px-3 py-1 text-[11px] font-bold tracking-[.025em] text-[#b9d9ff]">
      <motion.i
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.6,
        }}
        transition={{
          duration: 0.6,
          delay: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="size-2 rounded-full bg-[#2F80ED]"
          aria-hidden="true"

      />

      LOCAL TECHNOLOGY & DIGITAL SOLUTIONS
    </span>
  </motion.div>

  {/* ----------------------------------------
      Heading
  ----------------------------------------- */}
  <motion.h1
    className="mt-4 text-[40px] font-extrabold leading-[1.1] tracking-[-.025em] text-white md:text-[50px] md:leading-14"
  >
    {/* Technology */}
    <motion.span
      className="mr-[10px] inline-block"
      initial={{
        opacity: 0,
        y: 32,
        filter: "blur(5px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.5,
      }}
      transition={{
        duration: 0.9,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      Technology
    </motion.span>

    {/* Problems */}
    <motion.span
      className="inline-block"
      initial={{
        opacity: 0,
        y: 32,
        filter: "blur(5px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.5,
      }}
      transition={{
        duration: 0.9,
        delay: 0.27,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      Problems?
    </motion.span>

    <br />

    {/* We've */}
    <motion.span
      className="mr-[10px] inline-block text-[#2F80ED]"
      initial={{
        opacity: 0,
        y: 32,
        filter: "blur(5px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.5,
      }}
      transition={{
        duration: 0.9,
        delay: 0.39,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      We’ve
    </motion.span>

    {/* Got */}
    <motion.span
      className="mr-[10px] inline-block text-[#2F80ED]"
      initial={{
        opacity: 0,
        y: 32,
        filter: "blur(5px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.5,
      }}
      transition={{
        duration: 0.9,
        delay: 0.51,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      Got
    </motion.span>

    {/* You */}
    <motion.span
      className="mr-[10px] inline-block text-[#2F80ED]"
      initial={{
        opacity: 0,
        y: 32,
        filter: "blur(5px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.5,
      }}
      transition={{
        duration: 0.9,
        delay: 0.63,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      You
    </motion.span>

    {/* Covered */}
    <motion.span
      className="inline-block text-[#2F80ED]"
      initial={{
        opacity: 0,
        y: 32,
        filter: "blur(5px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.5,
      }}
      transition={{
        duration: 0.9,
        delay: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      Covered.
    </motion.span>
  </motion.h1>
</div>

            {/* Description */}
            <motion.p
  initial={{
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  viewport={{
    once: false,
    amount: 0.4,
  }}
  transition={{
    duration: 0.8,
    delay: 0.85,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="mt-4 max-w-xl text-base leading-7 text-[#c4d3e0] md:text-lg"
>
              Reliable computer repair, laptop parts, hardware, CCTV,
              networking, printer services and website development for homes,
              shops and businesses.
            </motion.p>

            {/* Buttons */}
            <motion.div
  initial={{
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  viewport={{
    once: false,
    amount: 0.4,
  }}
  transition={{
    duration: 0.8,
    delay: 1,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="mt-6 flex flex-wrap gap-3"
>
              <Button
                href="#contact"
                className="!bg-[#1264D8] !px-6 !text-sm !text-white hover:!bg-[#2F80ED]"
              >
                Get Service <span>→</span>
              </Button>

              <Button
                href="#services"
                variant="ghost"
                className="!border !border-white/25 !bg-transparent !text-sm !text-[#b9d9ff] hover:!bg-[#0B2942] hover:!text-white"
              >
                Explore Services →
              </Button>
            </motion.div>

            {/* ========================================
                HERO TRUST CARDS
            ========================================= */}
            <motion.div variants={heroItem}>
              <Stagger className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 xl:gap-x-1">
                {[
                  {
                    text: "Genuine Parts",
                    icon: BadgeCheck,
                  },
                  {
                    text: "Direct Technician",
                    icon: UserRoundCheck,
                  },
                  {
                    text: "Doorstep & Workshop",
                    icon: House,
                  },
                  {
                    text: "Local Support",
                    icon: MapPinCheck,
                  },
                ].map(({ text, icon: Icon }) => (
                  <motion.div
                    key={text}
                    variants={staggerItem}
                    className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-semibold text-[#dbe8f5] transition-colors duration-300 hover:text-white"
                  >
                    <Icon
                      size={17}
                      strokeWidth={2}
                      className="shrink-0 text-[#72b2ff] transition-colors duration-300 group-hover:text-[#8CBFFF]"
                      aria-hidden="true"
                    />
                    {text}
                    {text !== "Local Support" && (
                      <span
                        aria-hidden="true"
                        className="hidden pl-2 text-[#72b2ff]/45 xl:inline"
                      >
                        ·
                      </span>
                    )}
                  </motion.div>
                ))}
              </Stagger>
            </motion.div>

          </motion.div>

          {/* ========================================
              RIGHT HERO IMAGE
          ========================================= */}
          <motion.div
            variants={heroImage}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="relative mx-auto w-full max-w-[600px] px-1 pt-2 pb-1 sm:px-3"
          >
            <div className="relative z-10 mx-auto w-[94%]">
              <div className="rounded-[12px] border border-[#3A444D] bg-[#151B20] p-[6px] pb-2 shadow-[0_22px_42px_rgba(0,0,0,0.38),0_0_28px_rgba(47,128,237,0.10)]">
                <div className="relative h-[180px] overflow-hidden rounded-[6px] border border-[#25323B] bg-[#071A2B] shadow-[inset_0_1px_5px_rgba(0,0,0,0.45)] min-[400px]:h-[210px] sm:h-[250px] md:h-[280px] lg:h-[310px] xl:h-[340px]">
                  <img
                    src={images.technician}
                    alt="Manasvi Computer technician repairing laptop hardware"
                    className="h-full w-full object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#2F80ED]/[0.06] via-transparent to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-white/[0.10] via-white/[0.025] to-transparent"
                  />
                </div>

                <div className="flex h-[17px] items-center justify-center">
                  <span className="h-[3px] w-6 rounded-full bg-[#39434B]" />
                </div>
              </div>

              <div className="relative mx-auto h-10 w-12 sm:h-12 sm:w-14">
                <span className="absolute inset-0 [clip-path:polygon(18%_0,82%_0,100%_100%,0_100%)] bg-gradient-to-b from-[#3B444C] to-[#20272D]" />
                <span className="absolute top-[48%] left-1/2 h-px w-7 -translate-x-1/2 bg-[#69737B]/35" />
              </div>

              <div className="relative z-10 mx-auto -mt-1 h-3 w-28 rounded-[50%] border border-[#303940] bg-gradient-to-b from-[#39424A] to-[#171D22] shadow-[0_5px_12px_rgba(0,0,0,0.32)] sm:w-36" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          TRUST STRIP
      ========================================= */}
      <section className="border-y border-[#24445f] bg-[#0B2942] py-6">
        <motion.div
          variants={trustStripContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="mx-auto grid w-full max-w-7xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6"
        >
          {trustItems.map(([title, text, Icon], index) => (
            <motion.div
              key={title}
              variants={trustStripItem}
              className="group relative flex min-h-[82px] items-center gap-3.5 overflow-hidden rounded-2xl border border-[#24445f] bg-[#071A2B]/70 px-4 py-3.5 shadow-[0_3px_14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#397ab8] hover:shadow-[0_8px_22px_rgba(18,100,216,0.14)]"
            >
              {/* Icon */}
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${
                  index === 3
                    ? "border-[#4bd0a0]/25 bg-[#0c463f] text-[#70dfb5]"
                    : "border-[#62a8ff]/25 bg-[#1264D8]/15 text-[#72b2ff]"
                }`}
              >
                <Icon
                  size={20}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>

              {/* Text */}
              <span className="min-w-0">
                <strong className="block text-[13px] font-semibold text-white">
                  {title}
                </strong>

                <small className="mt-0.5 block text-[11px] leading-[16px] text-[#b9cad9]">
                  {text}
                </small>
              </span>

              {/* Decorative Dot */}
              <span
                className={`absolute right-3 bottom-3 size-1.5 rounded-full opacity-40 ${
                  index === 3
                    ? "bg-[#70dfb5]"
                    : "bg-[#62a8ff]"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
