"use client"

import { Card } from '@/components/ui/card'
import { Marquee } from '@/components/ui/marquee'

// Companies data
const companies = [
  { name: 'Berakhlak', src: '/logo/svg/berakhlak.svg' },
  { name: 'Kemenkes', src: '/logo/svg/kemenkes.svg' },
] as const

export function LogoCarousel() {
  return (
    <section className="py-24 items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <p className="text-sm font-medium text-muted-foreground mb-8">
            Trusted by leading companies worldwide
          </p> */}

          {/* Logo Carousel with Fade Effect */}
          <div className="relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Logo Container */}
            <Marquee speed={50} pauseOnHover className="overflow-hidden">
              {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center h-16 w-48 opacity-60 hover:opacity-100 transition-opacity duration-300 border-0 shadow-none bg-transparent mx-8"
                >
                  <div className="flex items-center gap-3">
                    <img src={company.src} alt={company.name} className="h-7 w-auto" />
                    <span className="text-foreground text-lg font-semibold whitespace-nowrap">
                      {company.name}
                    </span>
                  </div>
                </Card>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

