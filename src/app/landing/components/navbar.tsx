"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, LayoutDashboard, ChevronDown, X, Moon, Sun, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Logo } from '@/components/logo'
import { MegaMenu } from '@/components/landing/mega-menu'
import { ModeToggle } from '@/components/mode-toggle'
import { useTheme } from '@/hooks/use-theme'

const navigationItems = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Layanan', href: '#layanan', hasMegaMenu: true },
  { name: 'Tim Medis', href: '#team' },
  { name: 'Berita', href: '#news' },
  { name: 'Feedback', href: '#feedback' },
]

// Layanan menu items for mobile
const layananItems = [
  { title: 'Layanan Unggulan' },
  { name: 'Rawat Jalan', href: '#rawat-jalan' },
  { name: 'Rawat Inap', href: '#rawat-inap' },
  { name: 'Gawat Darurat', href: '#gawat-darurat' },
  { name: 'Laboratorium', href: '#laboratorium' },
  { title: 'Fasilitas' },
  { name: 'Radiologi', href: '#radiologi' },
  { name: 'Farmasi', href: '#farmasi' },
  { name: 'ICU', href: '#icu' },
  { name: 'Ruang Bersalin', href: '#ruang-bersalin' },
  { title: 'Informasi Pasien' },
  { name: 'Jadwal Dokter', href: '#jadwal-dokter' },
  { name: 'Cara Daftar', href: '#cara-daftar' },
  { name: 'BPJS Kesehatan', href: '#bpjs' },
  { name: 'Hubungi Kami', href: '#kontak' }
]

// Smooth scroll function
const smoothScrollTo = (targetId: string) => {
  if (targetId.startsWith('#')) {
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

interface LandingNavbarProps {
  onThemeCustomizerClick?: () => void
}

export function LandingNavbar({ onThemeCustomizerClick }: LandingNavbarProps = {}) {
  const [isOpen, setIsOpen] = useState(false)
  const [layananOpen, setLayananOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="https://jambikota.go.id/" className="flex items-center space-x-2 cursor-pointer" target='_blank' rel="noopener noreferrer">
            <Logo size={40} />
            <div className="flex flex-col">
  <span className="font-semibold text-sm leading-[1.15]">
    Rumah Sakit Umum Daerah
  </span>
  <span className="font-bold text-sm leading-[1.15]">
    H. Abdurrahman Sayoeti
  </span>
  <span className="text-[10px] italic leading-[1.15]">
    Pemerintah kota jambi
  </span>
</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.hasMegaMenu ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary cursor-pointer">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <MegaMenu />
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none cursor-pointer"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      if (item.href.startsWith('#')) {
                        smoothScrollTo(item.href)
                      } else {
                        window.location.href = item.href
                      }
                    }}
                  >
                    {item.name}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center space-x-2">
          <ModeToggle variant="ghost" />
          {onThemeCustomizerClick && (
            <Button variant="ghost" size="icon" onClick={onThemeCustomizerClick} className="cursor-pointer">
              <Settings className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0 gap-0 [&>button]:hidden overflow-hidden flex flex-col">
            <div className="flex flex-col h-full">
              {/* Header */}
              <SheetHeader className="space-y-0 p-4 pb-2 border-b">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Logo size={20} />
                  </div>
                  <SheetTitle className="text-lg font-semibold flex flex-col items-start leading-tight">
                    <span>Rumah Sakit Umum Daerah</span>
                    <span className="text-sm font-medium">H. Abdurrahman Sayoeti</span>
                    <span className="text-xs italic">Pemerintah kota jambi</span>
                  </SheetTitle>
                  <div className="ml-auto flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="cursor-pointer h-8 w-8"
                    >
                      <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Sun className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                    {onThemeCustomizerClick && (
                      <Button variant="ghost" size="icon" onClick={onThemeCustomizerClick} className="cursor-pointer h-8 w-8">
                        <Settings className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="cursor-pointer h-8 w-8">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SheetHeader>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-6 space-y-1">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.hasMegaMenu ? (
                        <Collapsible open={layananOpen} onOpenChange={setLayananOpen}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
                            {item.name}
                            <ChevronDown className={`h-4 w-4 transition-transform ${layananOpen ? 'rotate-180' : ''}`} />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4 space-y-1">
                            {layananItems.map((layanan, index) => (
                              layanan.title ? (
                                <div
                                  key={`title-${index}`}
                                  className="px-4 mt-5 py-2 text-xs font-semibold text-muted-foreground/50 uppercase tracking-wider"
                                >
                                  {layanan.title}
                                </div>
                              ) : (
                                <a
                                  key={layanan.name}
                                  href={layanan.href}
                                  className="flex items-center px-4 py-2 text-sm rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                                  onClick={(e) => {
                                    setIsOpen(false)
                                    if (layanan.href?.startsWith('#')) {
                                      e.preventDefault()
                                      setTimeout(() => smoothScrollTo(layanan.href), 100)
                                    }
                                  }}
                                >
                                  {layanan.name}
                                </a>
                              )
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                          onClick={(e) => {
                            setIsOpen(false)
                            if (item.href.startsWith('#')) {
                              e.preventDefault()
                              setTimeout(() => smoothScrollTo(item.href), 100)
                            }
                          }}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer Actions */}
              <div className="border-t p-6 space-y-4">
                {/* No actions needed for landing page only */}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
