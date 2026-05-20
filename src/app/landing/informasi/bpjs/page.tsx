'use client'

import { LandingNavbar } from '@/app/landing/components/navbar'
import { LandingFooter } from '@/app/landing/components/footer'
import { LandingThemeCustomizer } from '@/app/landing/components/landing-theme-customizer'
import { CreditCard } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function BPJSPage() {
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
          <Badge variant="outline" className="mb-4">BPJS Kesehatan</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            BPJS Kesehatan
          </h1>
          <p className="text-lg text-muted-foreground">
            Informasi layanan BPJS dan asuransi
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <CreditCard className="h-44 w-44 text-primary/35" />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
            {`Informasi Layanan BPJS Kesehatan RSUD H. Abdurrahman Sayoeti

**Layanan BPJS**
- Pendaftaran pasien BPJS diterima setiap hari
- Sistem antrian khusus untuk pasien BPJS
- Waktu pelayanan: 08.00 - 14.00

**Syarat BPJS**
- Kartu BPJS masih berlaku
- Peserta aktif (tidak dalam masa cuti)
- Tidak dalam status PST (Paket swasta tutup)

**Jenis Layanan**
1. Pemeriksaan Umum
2. Rawat Jalan
3. Rawat Inap
4. Laboratorium
5. Radiologi
6. Farmasi

**Ketentuan Khusus**
- Hanya 1 kali kunjungan per hari
- Maksimal 2 kontrol per bulan
- Rujukan ke dokter spesialis wajib

**Kontak Humas BPJS**
- Kartu BPJS hilang: (0741) 123456 ext 131
- Cek status peserta: (0741) 123456 ext 132`}
          </div>
        </div>
      </div>

      <LandingFooter />
    </div>
  )
}