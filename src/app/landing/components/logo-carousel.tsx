"use client"

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Marquee } from '@/components/ui/marquee'

interface Logo {
  name: string
  src: string
}

export function LogoCarousel() {
  const [logos, setLogos] = useState<Logo[]>([])

  useEffect(() => {
    fetch('/api/logos')
      .then(res => res.json())
      .then(data => setLogos(data))
      .catch(err => console.error('Failed to fetch logos:', err))
  }, [])

  const companies = [...logos, ...logos, ...logos, ...logos] // Duplicate for smoother scrolling

  return (
    <section className="py-6 items-center">
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
              {companies.map((company, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center h-24 w-64 opacity-60 hover:opacity-100 transition-opacity duration-300 border-0 shadow-none bg-transparent mx-8"
                >
                  <img src={company.src} alt={company.name} className="h-12 w-auto" />
                </Card>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

