'use client'

import { LandingNavbar } from '@/app/landing/components/navbar'
import { LandingFooter } from '@/app/landing/components/footer'
import { LandingThemeCustomizer } from '@/app/landing/components/landing-theme-customizer'
import { FileText } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function AlurPelayananPage() {
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
          <Badge variant="outline" className="mb-4">Alur Pelayanan</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Alur Pelayanan
          </h1>
          <p className="text-lg text-muted-foreground">
            Panduan langkah pelayanan di rumah sakit
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <FileText className="h-44 w-44 text-primary/35" />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
            {`Alur Pelayanan Pasien RSUD H. Abdurrahman Sayoeti

**1. Pendaftaran**
- Pendaftaran dapat dilakukan secara online atau tatap muka
- Siapkan kartu identitas dan kartu BPJS (jika ada)

**2. Pemeriksaan Awal**
- Tim pendaftaran menginput data pasien
- Pembuatan kartu pasien (untuk pasien baru)

**3. Ke Poliklinik**
- Pasien menunggu dipanggil di ruang tunggu
- Pemeriksaan oleh dokter sesuai jadwal praktik

**4. Rekam Medis**
- Dokter membuat resep atau rujukan
- Resep obat diambil di farmasi

**5. Pembayaran**
- Pembayaran di loket kasir
- Tersedia pembayaran tunai, debit, dan BPJS

**6. Penanganan Khusus**
- Untuk pasien rawat inap: proses administrasi kamar
- Untuk pasien rujukan: koordinasi dengan dokter spesialis`}
          </div>
        </div>
      </div>

      <LandingFooter />
    </div>
  )
}