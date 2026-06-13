"use client"

import React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { heroCarouselImages } from "@/config/hero-data"
import { heroScaleVariants } from "./animations"
import { HeroThumbnailNavigation } from "./thumbnail-navigation"

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [isPaused, setIsPaused] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [isTapped, setIsTapped] = React.useState(false)
  const shouldPause = isPaused || isTapped

  React.useEffect(() => {
    if (!api) return

    let autoplayTimer: NodeJS.Timeout | null = null

    const startAutoplay = () => {
      if (autoplayTimer) clearTimeout(autoplayTimer)
      autoplayTimer = setTimeout(() => {
        if (!shouldPause) {
          api.scrollNext()
        }
        startAutoplay()
      }, 5000)
    }

    const handleSlideChange = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    startAutoplay()
    api.on("select", handleSlideChange)

    return () => {
      if (autoplayTimer) clearTimeout(autoplayTimer)
      api.off("select", handleSlideChange)
    }
  }, [api, shouldPause])

  return (
    <motion.div
      className="mx-auto w-full max-w-7xl"
      variants={heroScaleVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.7 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel
        className="relative"
        opts={{
          align: "center",
          loop: true,
          containScroll: "trimSnaps",
          dragFree: false,
          slidesToScroll: 1,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {heroCarouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <HeroSlide image={image} isTapped={isTapped} setIsTapped={setIsTapped} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 sm:left-4" onClick={() => api?.scrollPrev()} />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4" onClick={() => api?.scrollNext()} />
        <CarouselDots className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 sm:flex sm:bottom-4" />
      </Carousel>

      <HeroThumbnailNavigation images={heroCarouselImages} selectedIndex={selectedIndex} api={api} />
    </motion.div>
  )
}

type HeroSlideProps = {
  image: (typeof heroCarouselImages)[number]
  isTapped: boolean
  setIsTapped: (value: boolean) => void
}

function HeroSlide({ image, isTapped, setIsTapped }: HeroSlideProps) {
  return (
    <div
      className="group relative h-[300px] select-none overflow-hidden rounded-lg sm:h-[400px] lg:h-[600px]"
      onTouchStart={() => setIsTapped(true)}
      onTouchEnd={() => setIsTapped(false)}
      onTouchCancel={() => setIsTapped(false)}
      onContextMenu={(event) => event.preventDefault()}
    >
      <Image
        className={`h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 pointer-events-none ${
          isTapped ? "scale-105" : ""
        }`}
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
        unoptimized
        draggable={false}
      />
      <div
        className={`absolute inset-0 flex flex-col justify-end bg-black/50 p-4 text-white opacity-0 transition-all duration-300 pointer-events-none sm:p-6 lg:p-10 ${
          isTapped ? "opacity-100" : ""
        }`}
      >
        <h1 className="text-lg sm:text-xl lg:text-3xl">{image.title}</h1>
        <p className="mt-1 text-xs sm:text-sm">{image.description}</p>
      </div>
    </div>
  )
}
