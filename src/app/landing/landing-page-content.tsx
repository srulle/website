"use client"

import React from "react"
import { LandingNavbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
import { LogoCarousel } from "./components/logo-carousel"
import { StatsSection } from "./components/stats-section"
import { TeamSection } from "./components/team-section"
import { NewsSection } from "./components/news-section/news-section"
import { CTASection } from "./components/cta-section"
import { FeedbackSection } from "./components/feedback-section"
import { FaqSection } from "./components/faq-section"
import { LandingFooter } from "./components/footer"
import { LandingThemeCustomizer } from "./components/landing-theme-customizer"
import { AboutSection } from "./components/about-section"
import { ScrollToTop } from "./components/scroll-to-top"

export function LandingPageContent() {
  const [themeCustomizerOpen, setThemeCustomizerOpen] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const hash = window.location.hash
    if (!hash) return

    const timer = setTimeout(() => {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar onThemeCustomizerClick={() => setThemeCustomizerOpen(true)} />

      <main className="flex flex-col">
        <HeroSection />
        <CTASection />
        <LogoCarousel />
        <AboutSection />
        <StatsSection />
        <TeamSection />
        <NewsSection />
        <FaqSection />
        <FeedbackSection />
      </main>

      <LandingFooter />
      <ScrollToTop />
      <LandingThemeCustomizer open={themeCustomizerOpen} onOpenChange={setThemeCustomizerOpen} />
    </div>
  )
}
