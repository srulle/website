"use client"

import { useState } from "react"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useTheme } from "@/hooks/use-theme"
import { landingNavigationItems, layananMenuItems } from "@/config/landing-navigation"
import { DesktopNavigation } from "./desktop-navigation"
import { MobileNavigation } from "./mobile-navigation"
import { NavbarLogo } from "./logo"

type LandingNavbarProps = {
  onThemeCustomizerClick?: () => void
}

export function LandingNavbar({ onThemeCustomizerClick }: LandingNavbarProps = {}) {
  const [isOpen, setIsOpen] = useState(false)
  const [layananOpen, setLayananOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <NavbarLogo />
        </div>

        <DesktopNavigation items={landingNavigationItems} />

        <div className="hidden items-center space-x-2 xl:flex">
          <ModeToggle variant="ghost" />
          {onThemeCustomizerClick && (
            <Button variant="ghost" size="icon" onClick={onThemeCustomizerClick} className="cursor-pointer">
              <Settings className="h-5 w-5" />
            </Button>
          )}
        </div>

        <MobileNavigation
          navigationItems={landingNavigationItems}
          layananItems={layananMenuItems}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          layananOpen={layananOpen}
          setLayananOpen={setLayananOpen}
          theme={theme}
          setTheme={setTheme}
          onThemeCustomizerClick={onThemeCustomizerClick}
        />
      </div>
    </header>
  )
}
