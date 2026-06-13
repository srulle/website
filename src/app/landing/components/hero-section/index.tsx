import { HeroContent } from "./content"
import { HeroCarousel } from "./carousel"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pb-12 pt-8 sm:pb-16 sm:pt-16 lg:pt-20">
      <HeroContent />
      <HeroCarousel />
    </section>
  )
}
