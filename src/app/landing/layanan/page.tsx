'use client'

import Link from 'next/link'
import { ArrowRight, Stethoscope, BedDouble, Ambulance, Scan, FlaskConical, Pill, HeartPulse, Baby } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LandingNavbar } from '@/app/landing/components/navbar'
import { LandingThemeCustomizer } from '@/app/landing/components/landing-theme-customizer'
import { services } from '@/lib/service-data'
import React from 'react'

const iconMap: Record<string, typeof Stethoscope> = {
  rawat_jalan: Stethoscope,
  rawat_inap: BedDouble,
  gawat_darurat: Ambulance,
  radiologi: Scan,
  laboratorium: FlaskConical,
  farmasi: Pill,
  icu: HeartPulse,
  ruang_bersalin: Baby,
}

function getIcon(id: string) {
  return iconMap[id] || Stethoscope
}

// Metadata diperlukan tapi tidak bisa di-export dari client component
// Gunakan layout.tsx atau static metadata dari parent

export default function LayananPage() {
  const [themeCustomizerOpen, setThemeCustomizerOpen] = React.useState(false)

  return (
    <main className="min-h-screen">
      <LandingNavbar onThemeCustomizerClick={() => setThemeCustomizerOpen(true)} />
      <LandingThemeCustomizer open={themeCustomizerOpen} onOpenChange={setThemeCustomizerOpen} />
      
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="outline" className="mb-4">Layanan & Fasilitas</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Layanan Terbaik untuk Anda
            </h2>
            <p className="text-lg text-muted-foreground">
              RSUD H. Abdurrahman Sayoeti menyediakan berbagai layanan kesehatan dan fasilitas yang lengkap untuk melayani kebutuhan kesehatan masyarakat dengan profesional dan berkualitas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = getIcon(service.id)
              return (
                <Card
                  key={service.id}
                  className="group overflow-hidden py-0 shadow-xs cursor-pointer hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="aspect-[4/3] flex items-center justify-center bg-muted/50 group-hover:bg-muted/80 transition-colors">
                      <Icon className="h-16 w-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                        {service.description}
                      </p>
                      <Link
                        href={`/landing/layanan/${service.id}`}
                        className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer text-sm mt-auto"
                      >
                        Detail Layanan
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}