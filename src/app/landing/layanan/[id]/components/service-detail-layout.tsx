"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckIcon, MoveLeft, Stethoscope, BedDouble, Ambulance, Scan, FlaskConical, Pill, HeartPulse, Baby } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Service } from '@/lib/service-data'
import { LandingNavbar } from '@/app/landing/components/navbar'
import { LandingThemeCustomizer } from '@/app/landing/components/landing-theme-customizer'

interface ServicePageClientProps {
  service: Service
}

export function ServicePageClient({ service }: ServicePageClientProps) {
  const [themeCustomizerOpen, setThemeCustomizerOpen] = React.useState(false)

  let Icon = Stethoscope
  if (service.iconName === 'Stethoscope') Icon = Stethoscope
  else if (service.iconName === 'BedDouble') Icon = BedDouble
  else if (service.iconName === 'Ambulance') Icon = Ambulance
  else if (service.iconName === 'Scan') Icon = Scan
  else if (service.iconName === 'FlaskConical') Icon = FlaskConical
  else if (service.iconName === 'Pill') Icon = Pill
  else if (service.iconName === 'HeartPulse') Icon = HeartPulse
  else if (service.iconName === 'Baby') Icon = Baby

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar onThemeCustomizerClick={() => setThemeCustomizerOpen(true)} />
      <LandingThemeCustomizer open={themeCustomizerOpen} onOpenChange={setThemeCustomizerOpen} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => window.history.back()}>
            <MoveLeft className="mr-2 h-4 w-4" />
            Kembali
          </Button>
        </div>

        <div className="mb-8">
          <Badge variant="outline" className="mb-4">{service.title}</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {service.description}
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <div className="relative">
            <Icon className="h-44 w-44 text-primary/35" />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Fitur Layanan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-lg border bg-card"
              >
                <CheckIcon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
            {service.fullContent}
          </div>
        </div>

        <div className="mt-10">
          <Link href="/landing">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}