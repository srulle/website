'use client'

import { LandingNavbar } from '@/app/landing/components/navbar'
import { LandingFooter } from '@/app/landing/components/footer'
import { LandingThemeCustomizer } from '@/app/landing/components/landing-theme-customizer'
import { Bed } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function TempatTidurPage() {
  const [themeCustomizerOpen, setThemeCustomizerOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar onThemeCustomizerClick={() => setThemeCustomizerOpen(true)} />
      <LandingThemeCustomizer open={themeCustomizerOpen} onOpenChange={setThemeCustomizerOpen} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/landing">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <Badge variant="outline" className="mb-4">Informasi Tempat Tidur</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Informasi Tempat Tidur
          </h1>
          <p className="text-lg text-muted-foreground">
            Ketersediaan tempat tidur rawat inap
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <Bed className="h-44 w-44 text-primary/35" />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
            {`Informasi Ketersediaan Tempat Tidur RSUD H. Abdurrahman Sayoeti

**Kelas VIP**
- Jumlah kamar: 10
- Perlengkapan: 1 tempat tidur, 1 sofa, TV, AC
- Status: Tersedia

**Kelas I**
- Jumlah kamar: 30
- Perlengkapan: 1 tempat tidur, kamar mandi dalam
- Status: 5 kamar tersedia

**Kelas II**
- Jumlah kamar: 50
- Perlengkapan: 1 tempat tidur, kamar mandi umum
- Status: 12 kamar tersedia

**Kelas III**
- Jumlah kamar: 40
- Perlengkapan: 1 tempat tidur
- Status: 8 kamar tersedia

**ICU**
- Jumlah tempat tidur: 15
- Fasilitas: Monitor 24 jam, ventilator
- Status: 3 tempat tidur tersedia

Untuk informasi real-time, hubungi (0741) 123456 ext 123`}
          </div>
        </div>
      </div>

      <LandingFooter />
    </div>
  )
}