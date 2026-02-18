"use client"

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Marquee } from '@/components/ui/marquee'

interface Logo {
  name: string
  src: string
}

// Fallback logos in case API fails
const fallbackLogos: Logo[] = [
  { name: 'Berakhlak', src: '/logo/svg/berakhlak.svg' },
  { name: 'Bpjs Kesehatan', src: '/logo/svg/bpjs-kesehatan.svg' },
  { name: 'Bpjs Ketenagakerjaan', src: '/logo/svg/bpjs-ketenagakerjaan.svg' },
  { name: 'Jambi Bahagia', src: '/logo/svg/jambi-bahagia.svg' },
  { name: 'Kemenkes', src: '/logo/svg/kemenkes.svg' },
  { name: 'Paripurna', src: '/logo/svg/paripurna.svg' },
  { name: 'Satusehat', src: '/logo/svg/satusehat.svg' },
]

export function LogoCarousel() {
  const [logos, setLogos] = useState<Logo[]>(fallbackLogos)

  useEffect(() => {
    fetch('/api/logos')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setLogos(data)
        }
      })
      .catch(err => {
        console.error('Failed to fetch logos:', err)
        // Keep using fallback logos
      })
  }, [])

  const companies = [...logos, ...logos, ...logos, ...logos] // Duplicate for smoother scrolling

  return (
    <section className="flex items-center py-8 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Border with Faded Gradient Edges */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-border to-transparent" />
        
        {/* Bottom Border with Faded Gradient Edges */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="text-center relative z-10">
          {/* Logo Carousel with Fade Effect */}
          <div className="relative">
            {/* Left Fade - responsive width */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

            {/* Right Fade - responsive width */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Logo Container */}
            <Marquee speed={50} pauseOnHover className="overflow-hidden">
              {companies.map((company, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center h-16 sm:h-24 w-32 sm:w-48 md:w-64 opacity-60 hover:opacity-100 transition-opacity duration-300 border-0 shadow-none bg-transparent mx-4 sm:mx-6 lg:mx-8"
                >
                  <img 
                    src={company.src} 
                    alt={company.name} 
                    className="h-8 sm:h-10 lg:h-12 w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </Card>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

