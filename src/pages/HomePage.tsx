import { AboutSection } from "../components/sections/AboutSection"
import { ContactSection } from "../components/sections/ContactSection"
import { GalleryReviewsSection } from "../components/sections/GalleryReviewsSection"
import { HardwareSection } from "../components/sections/HardwareSection"
import { HeroSection } from "../components/sections/HeroSection"
import { ServicesSection } from "../components/sections/ServicesSection"
import { SpecializedSection } from "../components/sections/SpecializedSection"
import { WebStudioSection } from "../components/sections/WebStudioSection"

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <HardwareSection />
      <SpecializedSection />
      <WebStudioSection />
      <AboutSection />
      <GalleryReviewsSection />
      <ContactSection />
    </main>
  )
}
