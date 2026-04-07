"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { UserRound, ChevronDown, ChevronUp } from 'lucide-react'


const doctors = [
  {
    id: 1,
    name: 'dr. Riskadwi Setianti, Sp.PD, FINASIM',
    role: 'Spesialis Penyakit Dalam',
    clinic: 'Poliklinik Penyakit Dalam',
    schedule: ['Senin', 'Selasa','Rabu', 'Kamis'],
    fallback: 'RS',
    image: '/image/dr. Riskadwi Setianti, Sp.PD, FINASIM.png',
  },
  {
    id: 2,
    name: 'dr. Sulistiansyah, Sp.PD',
    role: 'Penyakit Dalam',
    clinic: 'Poliklinik Penyakit Dalam',
    schedule: ['Jumat', 'Sabtu'],
    fallback: 'S',
    image: '/image/dr. Sulistiansyah, Sp.PD.png',
  },
  {
    id: 3,
    name: 'dr. Rafiqah Masyita, Sp.B',
    role: 'Spesialis Bedah',
    clinic: 'Poliklinik Bedah',
    schedule: ['Selasa', 'Kamis', 'Jumat'],
    fallback: 'RM',
    image: '/image/default.png',
  },
  {
    id: 4,
    name: 'dr. Akbar Kurniawan, Sp. B, FICS, AIFO-K',
    role: 'Spesialis Bedah',
    clinic: 'Poliklinik Bedah',
    schedule: ['Senin', 'Selasa', 'Rabu'],
    fallback: 'AK',
    image: '/image/default.png',
  },
  {
    id: 5,
    name: 'dr. Nadiyah, Sp.OG',
    role: 'Spesialis Obstetri dan Ginekologi',
    clinic: 'Poliklinik Kebidanan dan Kandungan',
    schedule: ['Selasa', 'Kamis', 'Sabtu'],
    fallback: 'N',
    image: '/image/dr. Nadiyah, Sp.OG.png',
  },
  {
    id: 6,
    name: 'dr. Sindhung Harjono, Sp.OG',
    role: 'Spesialis Obstetri dan Ginekologi',
    clinic: 'Poliklinik Kebidanan dan Kandungan',
    schedule: ['Senin', 'Rabu', 'Jumat'],
    fallback: 'SH',
    image: '/image/dr. Sindhung Harjono, Sp.OG.png',
  },
  {
    id: 7,
    name: 'dr. Nindya Aryanty, Sp.A',
    role: 'Spesialis Anak',
    clinic: 'Poliklinik Anak',
    schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    fallback: 'NA',
    image: '/image/dr. Nindya Aryanty, Sp.A.png',
  },
  {
    id: 8,
    name: 'dr. Mahmudah, Sp.A',
    role: 'Spesialis Anak',
    clinic: 'Poliklinik Anak',
    schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    fallback: 'M',
    image: '/image/default.png',
  },
  {
    id: 9,
    name: 'dr. Madona Debora, Sp.M',
    role: 'Spesialis Mata',
    clinic: 'Poliklinik Mata',
    schedule: ['Senin', 'Selasa', 'Rabu'],
    fallback: 'MD',
    image: '/image/default.png',
  },
  {
    id: 10,
    name: 'dr. Dewi Lastya Dewi, Sp.DV',
    role: 'Spesialis Dermatologi dan Venereologi',
    clinic: 'Poliklinik Kulit dan Kelamin',
    schedule: ['Selasa', 'Rabu', 'Kamis'],
    fallback: 'DLD',
    image: '/image/default.png',
  },
  {
    id: 11,
    name: 'drg. Busroch Bayu K, Sp.BM',
    role: 'Spesialis Bedah Mulut',
    clinic: 'Poliklinik Bedah Mulut',
    schedule: ['Senin', 'Rabu', 'Jumat'],
    fallback: 'BBK',
    image: '/image/drg. Busroch Bayu K, Sp.BM.png',
  },
  {
    id: 12,
    name: 'drg. Anggi Trianita, Sp.KGA',
    role: 'Spesialis Kesehatan Gigi Anak',
    clinic: 'Poliklinik Kesehatan Gigi Anak',
    schedule: ['Selasa', 'Kamis', 'Sabtu'],
    fallback: 'AT',
    image: '/image/drg. Anggi Trianita, Sp.KGA.png',
  },
  {
    id: 13,
    name: 'dr. Linda Artanti, Sp.GZ',
    role: 'Spesialis Gizi',
    clinic: 'Poliklinik Gizi',
    schedule: ['Senin', 'Rabu', 'Jumat'],
    fallback: 'LA',
    image: '/image/dr. Linda Artanti, Sp.GZ.png',
  },
  {
    id: 14,
    name: 'dr. Esmeralda Nurul Amany, Sp.THT-KL',
    role: 'Spesialis THT-KL',
    clinic: 'Poliklinik THT',
    schedule: ['Senin', 'Rabu', 'Jumat'],
    fallback: 'ENA',
    image: '/image/default.png',
  },
  {
    id: 15,
    name: 'dr. Putri Ulya Rahman, Sp.N',
    role: 'Spesialis Neurologi',
    clinic: 'Poliklinik Neurologi',
    schedule: ['Selasa', 'Rabu', 'Kamis'],
    fallback: 'PUR',
    image: '/image/default.png',
  },
  {
    id: 16,
    name: 'dr. Chairunnisa, Sp. RAD',
    role: 'Spesialis Radiologi',
    clinic: 'Ruangan Radiologi',
    schedule: ['Jumat'],
    fallback: 'C',
    image: '/image/default.png',
  },
  {
    id: 17,
    name: 'dr. Ana Agustina, Sp.Rad',
    role: 'Spesialis Radiologi',
    clinic: 'Ruangan Radiologi',
    schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis'],
    fallback: 'AA',
    image: '/image/default.png',
  },
  {
    id: 18,
    name: 'dr. Desta Purwati, Sp.PK',
    role: 'Spesialis Patologi Klinik',
    clinic: 'Ruangan Laboratorium',
    schedule: ['Senin', 'Selasa', 'Rabu'],
    fallback: 'DP',
    image: '/image/default.png',
  },
  {
    id: 19,
    name: 'dr. Reni Rozanti Basyar, Sp.KFR',
    role: 'Spesialis Kedokteran Fisik dan Rehabilitasi',
    clinic: 'Poliklinik Rehabilitasi Medik',
    schedule: ['Senin', 'Selasa', 'Kamis', 'Sabtu'],
    fallback: 'RRB',
    image: '/image/dr. Reni Rozanti Basyar, Sp.KFR.png',
  },
  {
    id: 20,
    name: 'dr. Kustenti Prima, Sp. A',
    role: 'Spesialis Anak',
    clinic: 'Ruang Operasi',
    schedule: ['Senin', 'Rabu', 'Jumat'],
    fallback: 'KP',
    image: '/image/default.png',
  },
  {
    id: 21,
    name: 'dr. Tika Fajar Wulandari',
    role: 'Dokter Umum',
    clinic: 'Poliklinik Umum',
    schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    fallback: 'TW',
    image: '/image/default.png',
  },
  {
    id: 22,
    name: 'dr. Ruben Ginting',
    role: 'Dokter Umum',
    clinic: 'Poliklinik Umum',
    schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    fallback: 'RG',
    image: '/image/default.png',
  },
  {
    id: 23,
    name: 'dr. Afriska Norma Utama',
    role: 'Dokter Umum',
    clinic: 'Poliklinik Umum',
    schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    fallback: 'AU',
    image: '/image/default.png',
  },
  {
    id: 24,
    name: 'drg. Richentya Feiby Salim',
    role: 'Dokter Gigi',
    clinic: 'Poliklinik Gigi dan Mulut',
    schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    fallback: 'RFS',
    image: '/image/dr. Afriska Norma Utama.png',
  },
  {
    id: 25,
    name: 'dr. Tika Fajar Wulandari',
    role: 'Dokter VCT',
    clinic: 'Poliklinik VCT',
    schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    fallback: 'TW',
    image: '/image/default.png',
  },
  {
    id: 26,
    name: 'Rani Rahayu, Am. Keb',
    role: 'Ahli Madya Kebidanan',
    clinic: 'Poliklinik TB DOTS',
    schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    fallback: 'RR',
    image: '/image/default.png',
  }
]

export function TeamSection() {
  const [showAll, setShowAll] = useState(false)
  const MAX_ITEMS = 8
  const visibleDoctors = showAll ? doctors : doctors.slice(0, MAX_ITEMS)
  const hasMore = doctors.length > MAX_ITEMS

  return (
    <section id="team" className="py-16 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Tim Medis
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Tim Dokter Spesialis Kami
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tim dokter spesialis kami yang berpengalaman dan profesional siap memberikan pelayanan kesehatan terbaik untuk Anda dan keluarga.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {visibleDoctors.map((doctor) => (
            <Card key={doctor.id} className="shadow-xs overflow-hidden group relative h-80 cursor-default">
              {/* Full background image */}
              <Image 
                src={doctor.image} 
                alt={doctor.name}
                fill
                className="object-contain object-top transition-transform duration-300 group-hover:scale-125 group-active:scale-125 origin-top bg-muted/30"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              
              {/* Text content on top */}
              <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                <div className="text-center">
                  {/* Name and Role */}
                  <h3 className="text-lg font-semibold mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-medium text-primary/90 mb-2">
                    {doctor.role}
                  </p>

                  {/* Clinic Name */}
                  <p className="text-sm font-medium text-white/90 mb-2">
                    {doctor.clinic}
                  </p>

                  {/* Schedule */}
                  <div className="text-sm text-white/80">
                    <span className="font-medium">Praktek: </span>
                    {doctor.schedule.join(', ')}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show All Link */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button 
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 underline underline-offset-4 cursor-pointer transition-colors"
            >
              {showAll ? (
                <>
                  Sembunyikan
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Tampilkan Semua ({doctors.length - MAX_ITEMS} lainnya)
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
