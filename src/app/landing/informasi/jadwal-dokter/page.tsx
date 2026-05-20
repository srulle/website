'use client'

import { LandingNavbar } from '@/app/landing/components/navbar'
import { LandingFooter } from '@/app/landing/components/footer'
import { LandingThemeCustomizer } from '@/app/landing/components/landing-theme-customizer'
import { Calendar } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function JadwalDokterPage() {
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
          <Badge variant="outline" className="mb-4">Jadwal Dokter</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Jadwal Dokter
          </h1>
          <p className="text-lg text-muted-foreground">
            Lihat jadwal praktik dokter spesialis
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <Calendar className="h-44 w-44 text-primary/35" />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
            {`Jadwal Praktik Dokter Spesialis RSUD H. Abdurrahman Sayoeti

Poliklinik Umum:
- Senin - Jumat: 08.00 - 14.00
- Sabtu - Minggu: 08.00 - 12.00

Poliklinik Penyakit Dalam:
- Senin, Rabu, Jumat: 08.00 - 14.00
- Dokter: dr. Andi Sutrisno, Sp.PD

Poliklinik Bedah:
- Selasa, Kamis: 08.00 - 14.00
- Dokter: dr. Budi Santoso, Sp.B

Poliklinik Anak:
- Senin - Jumat: 08.00 - 14.00
- Dokter: dr. Citra Dewi, Sp.A

Poliklinik Kandungan & Kebidanan:
- Senin, Rabu, Jumat: 08.00 - 14.00
- Dokter: dr. Dewi Anggraini, Sp.OG

Poliklinik Mata:
- Selasa, Kamis: 08.00 - 14.00
- Dokter: dr. Eko Prasetyo, Sp.M

Catatan:
- Pasien diharapkan datang 15 menit sebelum jam praktik
- Untuk perubahan jadwal, hubungi nomor informasi (0741) 123456
- Jadwal dapat berubah sewaktu-waktu tanpa pemberitahuan`}
          </div>
        </div>
      </div>

      <LandingFooter />
    </div>
  )
}