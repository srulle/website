"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/dot-pattern'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-16 sm:pt-20 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Dot pattern overlay using reusable component */}
        <DotPattern className="opacity-100" size="md" fadeStyle="ellipse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <div className="mb-8 flex justify-center">
            <Link href="https://jambikota.go.id/" target="_blank" rel="noopener noreferrer">
              <Badge variant="outline" className="px-4 py-2 border-foreground">
                <Star className="w-3 h-3 mr-2 fill-current" />
                Pemerintah kota jambi
                <ArrowRight className="w-3 h-3 ml-2" />
              </Badge>
            </Link>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            RSUD
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}H. Abdurrahman Sayoeti{" "}
            </span>
            Kota Jambi
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            "Melayani dengan sepenuh hati"
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base cursor-pointer" asChild>
              <Link href="#contact">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base cursor-pointer" asChild>
              <a href="#">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </a>
            </Button>
          </div> */}
        </div>

        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Latest Creations
          </h2>
          <p className="text-lg text-muted-foreground">
            A visual collection of our most recent works - each piece crafted with intention, emotion, and style.
          </p>
        </div>

        <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mx-auto">
          <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
            <img className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
              alt="image" />
            <div
              className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">Prompt engineers</h1>
              <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

            </div>
          </div>
          <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
            <img className="h-full w-full object-cover object-right"
              src="https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop"
              alt="image" />
            <div
              className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">Data scientists</h1>
              <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

            </div>
          </div>
          <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
            <img className="h-full w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
              alt="image" />
            <div
              className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1 className="text-3xl">Software engineers</h1>
              <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

            </div>
          </div>
        </div>

      {/* Hero Image/Visual */}
        
      </div>
    </section>
  )
}
