'use client'

import { LandingNavbar } from '@/app/landing/components/navbar'
import { LandingFooter } from '@/app/landing/components/footer'
import { LandingThemeCustomizer } from '@/app/landing/components/landing-theme-customizer'
import { ClipboardList } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function CaraDaftarPage() {
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
          <Badge variant="outline" className="mb-4">Cara Daftar</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Cara Daftar
          </h1>
          <p className="text-lg text-muted-foreground">
            Panduan pendaftaran pasien baru
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <ClipboardList className="h-44 w-44 text-primary/35" />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
            {`Cara Daftar Pasien Baru RSUD H. Abdurrahman Sayoeti

**Pendaftaran Online**
1. Akses website rsudhas.jambikota.go.id
2. Klik menu "Pendaftaran Online"
3. Isi form data pasien
4. Pilih poliklinik dan dokter tujuan
5. Cetak tiket pendaftaran
6. Datang ke rumah sakit sesuai jadwal

**Pendaftaran Tatap Muka**
1. Datang ke loket pendaftaran
2. Serahkan kartu identitas dan BPJS
3. Isi formulir pendaftaran
4. Ambil nomor antrian
5. Tunggu dipanggil ke poliklinik

**Persyaratan Dokumen**
- Fotokopi KTP
- Fotokopi KK
- BPJS (jika ada)
- Rekam medis (jika pernah berobat)

**Kontak Pendaftaran**
- Telepon: (0741) 123456 ext 111`}
          </div>
        </div>
      </div>

      <LandingFooter />
    </div>
  )
}