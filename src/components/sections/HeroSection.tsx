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
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,78,216,.08),transparent_58%)]" />

        <Container className="relative grid items-center gap-12 lg:grid-cols-2">
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
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e5eeff] bg-[#eff4ff] px-3 py-1 text-[11px] font-bold tracking-[.025em] text-[#1d4ed8]">
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
        className="size-2 rounded-full bg-[#1d4ed8]"
      />

      LOCAL TECHNOLOGY & DIGITAL SOLUTIONS
    </span>
  </motion.div>

  {/* ----------------------------------------
      Heading
  ----------------------------------------- */}
  <motion.h1
    className="mt-4 text-[40px] font-extrabold leading-[1.1] tracking-[-.025em] md:text-[50px] md:leading-14"
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
      className="mr-[10px] inline-block text-[#1d4ed8]"
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
      className="mr-[10px] inline-block text-[#1d4ed8]"
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
      className="mr-[10px] inline-block text-[#1d4ed8]"
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
      className="inline-block text-[#1d4ed8]"
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
              variants={heroItem}
              className="mt-4 max-w-xl text-base leading-7 text-[#434655] md:text-lg"
            >
              Reliable computer repair, laptop parts, hardware, CCTV,
              networking, printer services and website development for homes,
              shops and businesses.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={heroItem}
              className="mt-6 flex flex-wrap gap-3"
            >
              <Button
                href="#contact"
                className="!px-6 !text-sm !text-white"
              >
                Get Service <span>→</span>
              </Button>

              <Button
                href="#services"
                variant="ghost"
                className="!border !border-[#dbe7ff] !bg-transparent !text-sm !text-[#1d4ed8] hover:!bg-[#eff4ff]"
              >
                Explore Services →
              </Button>
            </motion.div>

            {/* ========================================
                HERO TRUST CARDS
            ========================================= */}
            <motion.div variants={heroItem}>
              <Stagger className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
                    className="group flex min-h-[62px] items-center gap-3 rounded-2xl border border-[#dfe8f8] bg-gradient-to-br from-[#f8fbff] to-white px-3.5 py-3 shadow-[0_3px_12px_rgba(29,78,216,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cbdaf2] hover:shadow-[0_7px_18px_rgba(29,78,216,0.09)]"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#eff4ff] text-[#1d4ed8] ring-1 ring-[#dce8fb]">
                      <Icon
                        size={18}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="text-[11px] font-semibold leading-[15px] text-[#24344d]">
                      {text}
                    </span>
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
            className="relative rounded-3xl border border-[#e5eeff] bg-white p-4 shadow-lg"
          >
            <div className="relative h-[320px] overflow-hidden rounded-2xl bg-[#f1f5f9] md:h-[384px]">
              {/* Main Image */}
              <img
                src={images.technician}
                alt="Technician repairing laptop hardware at a workbench"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/60 via-transparent to-transparent" />

              {/* Professional Support Badge */}
              <span className="absolute top-3 right-3 rounded-full border border-[#e5eeff] bg-white/95 px-3 py-2 text-[11px] font-bold">
                <span className="text-[#1d4ed8]">●</span>{" "}
                <span className="text-[#0b1c30]">
                  Professional Technical Support
                </span>
              </span>

              {/* Hardware Diagnostics Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute right-3 bottom-3 left-3 flex items-center gap-3 rounded-xl border border-[#e5eeff] bg-white/95 p-3 shadow-md"
              >
                <img
                  src={images.hardware}
                  alt=""
                  className="size-10 rounded-lg object-cover"
                />

                <span className="flex-1">
                  <strong className="block text-xs">
                    Hardware Bench Diagnostics
                  </strong>

                  <small className="text-[11px] text-[#5c647a]">
                    Genuine DDR4 / DDR5, Gen4 NVMe & chip tests
                  </small>
                </span>

                <b className="rounded-md bg-[#eff4ff] px-2 py-1 text-[11px] text-[#1d4ed8]">
                  Live Lab
                </b>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ========================================
          TRUST STRIP
      ========================================= */}
      <section className="border-y border-[#dfe8f5] bg-[#f7faff] py-6">
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
              className="group relative flex min-h-[82px] items-center gap-3.5 overflow-hidden rounded-2xl border border-[#dbe5f5] bg-white px-4 py-3.5 shadow-[0_3px_14px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c7d8ef] hover:shadow-[0_8px_22px_rgba(29,78,216,0.08)]"
            >
              {/* Icon */}
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${
                  index === 3
                    ? "border-[#d7eee5] bg-[#ecfdf5] text-[#059669]"
                    : "border-[#dbe7ff] bg-[#eff4ff] text-[#1d4ed8]"
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
                <strong className="block text-[13px] font-semibold text-[#0b1c30]">
                  {title}
                </strong>

                <small className="mt-0.5 block text-[11px] leading-[16px] text-[#64748b]">
                  {text}
                </small>
              </span>

              {/* Decorative Dot */}
              <span
                className={`absolute right-3 bottom-3 size-1.5 rounded-full opacity-40 ${
                  index === 3
                    ? "bg-[#10b981]"
                    : "bg-[#1d4ed8]"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
