import logo from './09db1.png'
import laptopTools from './ee73a.png'
import cctv from './bf87b.png'
import hardware from './89ab1.png'
import laptopParts from './laptop-parts.png'
import computerAccessories from './computer-accessories.jpg'
import technician from './3393c.png'
import website from './cb559.png'

export const images = {
  logo,
  laptopTools,
  cctv,
  hardware,
  laptopParts,
  computerAccessories,
  technician,
  website,
} as const

const iconFiles = [
  "f47e4.svg",
  "8c557.svg",
  "b9dd5.svg",
  "27373.svg",
  "b658a.svg",
  "fda52.svg",
  "caa85.svg",
  "9cd49.svg",
  "9dd8f.svg",
  "6c45c.svg",
  "6e068.svg",
  "036ce.svg",
  "e5bdf.svg",
  "f5f13.svg",
  "50c5a.svg",
  "fc262.svg",
  "e1893.svg",
  "7bbaf.svg",
  "28c44.svg",
  "94ea8.svg",
  "ea7de.svg",
  "05ebe.svg",
  "242f3.svg",
  "158ab.svg",
  "7efd4.svg",
  "e19b3.svg",
  "d3586.svg",
  "140f7.svg",
  "b823e.svg",
  "0c246.svg",
  "14fb1.svg",
  "22132.svg",
  "7247a.svg",
  "07cca.svg",
  "9c5f9.svg",
  "d7d34.svg",
  "5bdc5.svg",
  "67832.svg",
  "a6baa.svg",
  "85cc8.svg",
  "e9762.svg",
  "91163.svg",
  "ad6d8.svg",
  "c3b0b.svg",
  "52460.svg",
  "0e069.svg",
  "9ae1a.svg",
  "8cade.svg",
  "e7641.svg",
  "caacb.svg",
  "b7c06.svg",
  "37db4.svg",
  "f8140.svg",
  "3fac6.svg",
  "00b21.svg",
  "bb7e6.svg",
  "69cfe.svg",
  "4b135.svg",
  "016ad.svg",
  "df0a7.svg",
] as const

const asset = (name: string) => `/assets/${name}`

export const icons = iconFiles.map(asset)