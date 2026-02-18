"use client"

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const news = [
  {
    id: 1,
    image: 'https://ui.shadcn.com/placeholder.svg',
    category: 'Pelayanan',
    title: 'RSUD H. Abdurrahman Sayoeti Gelar Layanan Vaksinasi Gratis untuk Masyarakat',
    description:
      'Rumah sakit mengadakan program vaksinasi gratis bagi masyarakat sekitar dalam rangka meningkatkan kekebalan tubuh dan mencegah penyebaran penyakit menular.',
    date: '15 Februari 2026',
  },
  {
    id: 2,
    image: 'https://ui.shadcn.com/placeholder.svg',
    category: 'Penghargaan',
    title: 'RSUD H. Abdurrahman Sayoeti Raih Akreditasi Paripurna dari KARS',
    description:
      'Pencapaian prestisius ini menandai komitmen rumah sakit dalam memberikan pelayanan kesehatan berkualitas sesuai standar nasional.',
    date: '10 Februari 2026',
  },
  {
    id: 3,
    image: 'https://ui.shadcn.com/placeholder.svg',
    category: 'Kegiatan',
    title: 'Penyuluhan Kesehatan: Pentingnya Deteksi Dini Penyakit Tidak Menular',
    description:
      'Tim medis RSUD menyelenggarakan penyuluhan kesehatan tentang pencegahan dan deteksi dini penyakit tidak menular seperti diabetes dan hipertensi.',
    date: '5 Februari 2026',
  },
]

export function NewsSection() {
  return (
    <section id="news" className="py-24 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Berita Terbaru</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Berita & Kegiatan
          </h2>
          <p className="text-lg text-muted-foreground">
            Ikuti perkembangan terbaru seputar kegiatan dan layanan kesehatan di RSUD H. Abdurrahman Sayoeti.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {news.map(item => (
            <Card key={item.id} className="overflow-hidden py-0">
              <CardContent className="px-0">
                <div className="aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={225}
                    className="size-full object-cover dark:invert dark:brightness-[0.95]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-xs tracking-widest uppercase">
                      {item.category}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {item.date}
                    </p>
                  </div>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="cursor-pointer"
                  >
                    <h3 className="text-lg font-bold hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                  </a>
                  <p className="text-muted-foreground text-sm line-clamp-3">{item.description}</p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer text-sm"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
