"use client"

import Image from "next/image"
import type { CarouselApi } from "@/components/ui/carousel"
import { heroCarouselImages } from "@/config/hero-data"

type HeroThumbnailNavigationProps = {
  images: typeof heroCarouselImages
  selectedIndex: number
  api: CarouselApi | null
}

export function HeroThumbnailNavigation({ images, selectedIndex, api }: HeroThumbnailNavigationProps) {
  return (
    <div className="mt-4 flex justify-center gap-3 sm:hidden">
      {images.map((image, index) => (
        <button
          key={index}
          type="button"
          onClick={() => api?.scrollTo(index)}
          className={`relative h-16 w-20 overflow-hidden rounded-lg border-2 transition-all ${
            selectedIndex === index ? "border-primary" : "border-muted hover:border-primary/50"
          }`}
        >
          <Image src={image.src} alt={`Slide ${index + 1}`} fill sizes="80px" className="object-cover" unoptimized />
          {selectedIndex === index && <div className="absolute inset-0 bg-primary/20" />}
        </button>
      ))}
    </div>
  )
}
