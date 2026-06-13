"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Marquee } from "@/components/ui/marquee"

type Logo = {
  name: string
  src: string
}

const fallbackLogos: Logo[] = [
  { name: "Berakhlak", src: "/logo/svg/berakhlak.svg" },
  { name: "Bpjs Kesehatan", src: "/logo/svg/bpjs-kesehatan.svg" },
  { name: "Bpjs Ketenagakerjaan", src: "/logo/svg/bpjs-ketenagakerjaan.svg" },
  { name: "Jambi Bahagia", src: "/logo/svg/jambi-bahagia.svg" },
  { name: "Kemenkes", src: "/logo/svg/kemenkes.svg" },
  { name: "Paripurna", src: "/logo/svg/paripurna.svg" },
  { name: "Satusehat", src: "/logo/svg/satusehat.svg" },
]

export function LogoCarousel() {
  const [logos, setLogos] = useState<Logo[]>(fallbackLogos)

  useEffect(() => {
    fetch("/api/logos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((data: Logo[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setLogos(data)
        }
      })
      .catch((error) => {
        console.error("Failed to fetch logos:", error)
      })
  }, [])

  const companies = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="flex items-center py-16 sm:py-16">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="relative z-10 text-center">
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />

            <Marquee speed={50} pauseOnHover className="overflow-hidden">
              {companies.map((company, index) => (
                <Card
                  key={index}
                  className="mx-4 flex h-16 flex-shrink-0 items-center justify-center border-0 bg-transparent p-0 opacity-60 shadow-none transition-opacity duration-300 hover:opacity-100 sm:mx-6 sm:h-24 sm:w-48 md:w-64"
                >
                  <Image src={company.src} alt={company.name} width={192} height={48} className="max-w-full object-contain" unoptimized />
                </Card>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
