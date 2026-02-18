"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/dot-pattern'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext,
  CarouselDots,
  type CarouselApi
} from '@/components/ui/carousel'

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop",
    alt: "Prompt engineers",
    title: "Prompt engineers",
    description: "Bridging the gap between human intent and machine understanding through expert prompt design."
  },
  {
    src: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop",
    alt: "Data scientists",
    title: "Data scientists",
    description: "Bridging the gap between human intent and machine understanding through expert prompt design."
  },
  {
    src: "https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop",
    alt: "Software engineers",
    title: "Software engineers",
    description: "Bridging the gap between human intent and machine understanding through expert prompt design."
  }
]

export function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [isPaused, setIsPaused] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [isTapped, setIsTapped] = React.useState(false)
  
  // Combine hover pause and tap-hold pause
  const shouldPause = isPaused || isTapped
  
  React.useEffect(() => {
    if (!api) return
    
    let autoplayTimer: NodeJS.Timeout | null = null
    
    // Function to start autoplay - always continues unless paused by hover or tap-hold
    const startAutoplay = () => {
      if (autoplayTimer) clearTimeout(autoplayTimer)
      autoplayTimer = setTimeout(() => {
        if (!shouldPause) {
          api.scrollNext()
        }
        startAutoplay() // Continue autoplay
      }, 5000) // 5 second interval
    }
    
    // Start initial autoplay
    startAutoplay()
    
    // Update selected index when slide changes, but keep autoplay running
    const handleSlideChange = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }
    
    api.on('select', handleSlideChange)
    
    return () => {
      if (autoplayTimer) {
        clearTimeout(autoplayTimer)
      }
      api.off('select', handleSlideChange)
    }
  }, [api, shouldPause])
  
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Dot pattern overlay using reusable component */}
        <DotPattern className="opacity-100" size="md" fadeStyle="ellipse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Link href="https://jambikota.go.id/" target="_blank" rel="noopener noreferrer">
              <Badge variant="outline" className="px-4 py-2 border-foreground">
                <Star className="w-3 h-3 mr-2 fill-current" />
                Pemerintah kota jambi
                <ArrowRight className="w-3 h-3 ml-2" />
              </Badge>
            </Link>
          </div>

          {/* Main Headline */}
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-4xl lg:text-7xl font-bold tracking-tight">
            RSUD
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}H. Abdurrahman Sayoeti{" "}
            </span>
            Kota Jambi
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-8 sm:mb-10 max-w-2xl text-base sm:text-xl lg:text-2xl text-muted-foreground">
            "Melayani dengan sepenuh hati"
          </p>
        </div>

        <div className="mx-auto max-w-2xl text-center mt-8 sm:mt-10 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2 sm:mb-4">
            Our Latest Creations
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground">
            A visual collection of our most recent works - each piece crafted with intention, emotion, and style.
          </p>
        </div>

        {/* Carousel Component */}
        <div 
          className="w-full max-w-7xl mx-auto"
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
              slidesToScroll: 1
            }}
            setApi={setApi}
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div 
                    className="relative group h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden rounded-lg select-none"
                    onTouchStart={() => setIsTapped(true)}
                    onTouchEnd={() => setIsTapped(false)}
                    onTouchCancel={() => setIsTapped(false)}
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <Image
                      className={`h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 pointer-events-none ${
                        isTapped ? 'scale-105' : ''
                      }`}
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
                      unoptimized
                      draggable={false}
                    />
                    <div
                      className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none ${
                        isTapped ? 'opacity-100' : ''
                      }`}>
                      <h1 className="text-lg sm:text-xl lg:text-3xl">{image.title}</h1>
                      <p className="text-xs sm:text-sm mt-1">{image.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
             </CarouselContent>
            <CarouselPrevious 
              className="absolute left-2 top-1/2 -translate-y-1/2 sm:left-4"
              onClick={() => api?.scrollPrev()}
            />
            <CarouselNext 
              className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4"
              onClick={() => api?.scrollNext()}
            />
            <CarouselDots className="hidden sm:flex absolute bottom-2 left-1/2 -translate-x-1/2 sm:bottom-4" />
          </Carousel>
          
          {/* Thumbnail Navigation for Mobile */}
          <div className="flex justify-center gap-3 mt-4 sm:hidden">
            {carouselImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index)
                }}
                className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedIndex === index ? 'border-primary' : 'border-muted hover:border-primary/50'
                }`}
              >
                <Image
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                  unoptimized
                />
                {selectedIndex === index && (
                  <div className="absolute inset-0 bg-primary/20" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
