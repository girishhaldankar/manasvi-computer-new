import {
  Gauge,
  Monitor,
  Camera,
  WifiOff,
  HardDrive,
  Fan,
  Printer,
  Globe,
  UserRoundCheck,
  BadgeCheck,
  Wrench,
  MapPinCheck,
  type LucideIcon,
} from "lucide-react"

import { images } from "../assets"

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Hardware & Parts", href: "#hardware" },
  { label: "Web Studio", href: "#web-studio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export const trustItems: [string, string, LucideIcon][] = [
  [
    "Personal Service",
    "Direct attention for every customer.",
    UserRoundCheck,
  ],
  [
    "Genuine Hardware",
    "Quality parts and components.",
    BadgeCheck,
  ],
  [
    "Practical Solutions",
    "Repair, upgrade or replace.",
    Wrench,
  ],
  [
    "Local Support",
    "A technician you can actually reach.",
    MapPinCheck,
  ],
]

export const categories = [
  {
    badge: "Laptop Components",
    title: "Laptop Parts",
    description:
      "Original & compatible replacement parts for all laptop brands.",
    items: [
      "Batteries & Power Adapters",
      "Keyboards & Touchpads",
      "Displays (FHD / IPS Panels)",
      "Hinges, Fans & DC Jacks",
    ],
    link: "Explore Laptop Parts",
  },

  {
    badge: "PC Components",
    title: "Computer Hardware",
    description: "Components to repair, upgrade or assemble custom PCs.",
    items: [
      "RAM (DDR4 / DDR5)",
      "NVMe SSDs & SATA Drives",
      "Graphics Cards & Power SMPS",
      "Processors & Motherboards",
    ],
    link: "Explore Hardware",
  },

  {
    badge: "Everyday Accessories",
    title: "Computer Accessories",
    description:
      "Reliable peripherals to boost desktop or notebook productivity.",
    items: [
      "Wireless Keyboard & Mouse",
      "HD Webcams & Headsets",
      "USB-C Hubs & Wi-Fi Dongles",
      "HDMI, DisplayPort & Stands",
    ],
    link: "Explore Accessories",
  },

  {
    badge: "Network Equipment",
    title: "Networking Hardware",
    description: "Stable, fast and secure connectivity equipment.",
    items: [
      "Dual-band Wi-Fi Routers",
      "Gigabit Network Switches",
      "Access Points & Adapters",
      "CAT6 Cables & Connectors",
    ],
    link: "Explore Networking",
  },
]

export const hardwarePanels = [
  {
    number: "01",
    title: "Laptop Parts",
    note: "OEM & Grade A",
    description:
      "Replacement components tested for Dell, HP, Lenovo, Acer, Asus and Apple.",
    tags: [
      "Battery",
      "Display (FHD/IPS)",
      "Keyboard",
      "Charger / Adapter",
      "Hinge Assembly",
      "Cooling Fan",
      "DC Jack",
      "Internal Speaker",
    ],
    image: images.laptopParts,
  },

  {
    number: "02",
    title: "Computer Hardware",
    note: "Original Spares Assured",
    description:
      "Genuine components for office desktops, workstations and gaming builds.",
    tags: [
      "RAM (DDR4/DDR5)",
      "SSD / NVMe M.2",
      "Hard Drive",
      "Graphics Card",
      "Power Supply (SMPS)",
      "Motherboard",
      "Processor",
      "CPU Cooler",
    ],
    image: images.hardware,
  },

  {
    number: "03",
    title: "Computer Accessories",
    note: "In Stock",
    description:
      "Durable accessories for comfortable working, studying and typing.",
    tags: [
      "Keyboard & Mouse",
      "HD Webcam",
      "Wi-Fi Dongle",
      "Bluetooth Dongle",
      "USB-C Hub",
      "HDMI / DP Cable",
      "Laptop Stand",
      "Cooling Pad",
    ],
    image: images.computerAccessories,
  },

  {
    number: "04",
    title: "Networking Hardware",
    note: "High Bandwidth",
    description:
      "Enterprise & home network equipment for seamless, drop-free connectivity.",
    tags: [
      "Dual-band Routers",
      "Access Points (AP)",
      "Gigabit Switches",
      "CAT6 Cable Rolls",
      "Network Adapters",
      "RJ45 Connectors",
    ],
    image: images.laptopParts,
  },
]

export const problems: [
  string,
  string,
  string,
  LucideIcon
][] = [
  [
    "Slow Laptop or PC?",
    "Upgrade, diagnose and optimize your system to boot in seconds.",
    "Fast Optimization",
    Gauge,
  ],

  [
    "Broken Laptop Screen?",
    "Flickering or cracked screen replacement and display cable troubleshooting.",
    "Screen Replacement",
    Monitor,
  ],

  [
    "CCTV Phone Sync?",
    "Connect and configure secure remote live viewing on Android and iPhone.",
    "P2P Remote Sync",
    Camera,
  ],

  [
    "Wi-Fi Dead Zones?",
    "Improve coverage and throughput across your shop, office or residence.",
    "Eliminate Dead Zones",
    WifiOff,
  ],

  [
    "Need More Storage?",
    "Upgrade to high-speed NVMe SSD or add external automatic backups.",
    "SSD Upgrade",
    HardDrive,
  ],

  [
    "PC Running Hot?",
    "Cooling fan servicing, thermal paste replenishment and airflow overhaul.",
    "Cooling Solutions",
    Fan,
  ],

  [
    "Printer Not Connecting?",
    "Configure wireless drivers, paper feed rollers and network printer sharing.",
    "Fix Printer",
    Printer,
  ],

  [
    "Need a Business Website?",
    "We design and develop modern, fast, responsive websites for local businesses.",
    "Explore Web Studio",
    Globe,
  ],
]

export const features = [
  [
    "Personal Attention",
    "Dedicated consultation for your exact requirements rather than cookie-cutter advice.",
  ],

  [
    "Clear Communication",
    "Transparent diagnosis and honest quotes before we start any repair.",
  ],

  [
    "Honest Diagnostics",
    "We test thoroughly and tell you if a component truly requires replacement.",
  ],

  [
    "Genuine Hardware",
    "Original and high-grade verified components backed by vendor warranties.",
  ],

  [
    "Practical Solutions",
    "Cost-effective upgrades recommended before asking you to replace machines.",
  ],

  [
    "Home & Business Support",
    "Equally prepared for domestic laptops and multi-terminal shop networks.",
  ],

  [
    "Doorstep Service",
    "On-site support across Mumbai for network cabling, CCTV, and desktop setups.",
  ],

  [
    "Post-Service Support",
    "Always reachable on phone and WhatsApp for peace of mind.",
  ],
] as const

export const reviews = [
  {
    service: "SSD Upgrade",
    quote:
      "My laptop was taking minutes to start. The technician suggested an NVMe SSD upgrade and thermal repasting instead of pushing me to buy a new laptop. Works super fast now. Transparent charges!",
    name: "Rajesh K.",
    role: "Verified Home Client",
  },

  {
    service: "4-Camera CCTV",
    quote:
      "Installed a 4-camera setup with DVR for our retail garment store. The cabling is neatly concealed and mobile phone streaming was configured right on spot. Very courteous and clean work.",
    name: "Mahesh Patel",
    role: "Shop Owner, Mumbai",
  },

  {
    service: "Wi-Fi & Printer",
    quote:
      "Our clinic had constant Wi-Fi disconnects and the billing printer stopped connecting over the network. Manasvi Computers sorted router channels and network printer drivers in under an hour.",
    name: "Dr. Sneha V.",
    role: "Clinic Administrator",
  },
]
