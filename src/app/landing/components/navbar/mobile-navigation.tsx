import type { MouseEvent } from "react"
import Link from "next/link"
import { ChevronDown, Menu, Moon, Settings, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { LandingNavigationItem, LayananMenuItem } from "@/config/landing-navigation"
import type { Theme } from "@/contexts/theme-context"

type MobileNavigationProps = {
  navigationItems: LandingNavigationItem[]
  layananItems: LayananMenuItem[]
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  layananOpen: boolean
  setLayananOpen: (open: boolean) => void
  theme: Theme
  setTheme: (theme: Theme) => void
  onThemeCustomizerClick?: () => void
}

export function MobileNavigation({
  navigationItems,
  layananItems,
  isOpen,
  setIsOpen,
  layananOpen,
  setLayananOpen,
  theme,
  setTheme,
  onThemeCustomizerClick,
}: MobileNavigationProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="xl:hidden">
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full flex-col gap-0 overflow-hidden p-0 sm:w-[400px] [&>button]:hidden">
        <div className="flex h-full flex-col">
          <SheetHeader className="space-y-0 border-b p-4 pb-2">
            <div className="flex items-center gap-2">
              <SheetTitle className="flex flex-col items-start text-lg font-semibold leading-tight">
                <span>Rumah Sakit Umum Daerah</span>
                <span className="text-sm font-medium">H. Abdurrahman Sayoeti</span>
              </SheetTitle>
              <div className="ml-auto flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="h-8 w-8 cursor-pointer"
                >
                  <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Sun className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
                {onThemeCustomizerClick && (
                  <Button variant="ghost" size="icon" onClick={onThemeCustomizerClick} className="h-8 w-8 cursor-pointer">
                    <Settings className="h-4 w-4" />
                  </Button>
                )}
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 cursor-pointer">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto">
            <nav className="space-y-1 p-6">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasMegaMenu ? (
                    <Collapsible open={layananOpen} onOpenChange={setLayananOpen}>
                      <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${layananOpen ? "rotate-180" : ""}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 pl-4">
                        {layananItems.map((layanan, index) => {
                          if (layanan.title) {
                            return (
                              <div key={`title-${index}`} className="mt-5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/50">
                                {layanan.title}
                              </div>
                            )
                          }

                          if (!layanan.href || !layanan.name) return null

                          const href = layanan.href

                          return (
                            <Link
                              key={layanan.name}
                              href={href}
                              className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              onClick={(event) => handleMobileLinkClick(event, href, setIsOpen)}
                            >
                              {layanan.name}
                            </Link>
                          )
                        })}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex cursor-pointer items-center rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      onClick={(event) => handleMobileLinkClick(event, item.href, setIsOpen)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="border-t p-6" />
        </div>
      </SheetContent>
    </Sheet>
  )
}

function handleMobileLinkClick(event: MouseEvent<HTMLAnchorElement>, href: string, setIsOpen: (open: boolean) => void) {
  setIsOpen(false)

  if (href.startsWith("#")) {
    event.preventDefault()
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }
}
