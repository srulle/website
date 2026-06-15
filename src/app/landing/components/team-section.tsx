"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { UserRound, ChevronDown, ChevronUp } from 'lucide-react'


const doctors = [
  {
    id: 1,
    name: 'dr. Riskadwi Setianti, Sp.PD, FINASIM',
    role: 'Spesialis Penyakit Dalam',
    clinic: 'Poliklinik Penyakit Dalam',
    schedule: ['Senin', 'Selasa','Rabu', 'Kamis'],
    fallback: 'RS',
    image: '/image/default.png',
  },
  {
    id: 2,
    name: 'dr. Sulistiansyah, Sp.PD',
    role: 'Penyakit Dalam',
    clinic: 'Poliklinik Penyakit Dalam',
    schedule: ['Jumat', 'Sabtu'],
    fallback: 'S',
    image: '/image/default.png',
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
    image: '/image/default.png',
  },
  {
    id: 6,
    name: 'dr. Sindhung Harjono, Sp.OG',
    role: 'Spesialis Obstetri dan Ginekologi',
    clinic: 'Poliklinik Kebidanan dan Kandungan',
    schedule: ['Senin', 'Rabu', 'Jumat'],
    fallback: 'SH',
    image: '/image/default.png',
  },
  {
    id: 7,
    name: 'dr. Nindya Aryanty, Sp.A',
    role: 'Spesialis Anak',
    clinic: 'Poliklinik Anak',
    schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    fallback: 'NA',
    image: '/image/default.png',
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
    image: '/image/default.png',
  },
  {
    id: 12,
    name: 'drg. Anggi Trianita, Sp.KGA',
    role: 'Spesialis Kesehatan Gigi Anak',
    clinic: 'Poliklinik Kesehatan Gigi Anak',
    schedule: ['Selasa', 'Kamis', 'Sabtu'],
    fallback: 'AT',
    image: '/image/default.png',
  },
  {
    id: 13,
    name: 'dr. Linda Artanti, Sp.GZ',
    role: 'Spesialis Gizi',
    clinic: 'Poliklinik Gizi',
    schedule: ['Senin', 'Rabu', 'Jumat'],
    fallback: 'LA',
    image: '/image/default.png',
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
    image: '/image/default.png',
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
    image: '/image/default.png',
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
    <section id="team" className="w-full py-16 sm:py-16">
      <div className="w-full max-w-none px-4 sm:px-6 2xl:px-0">
        <div className="mx-auto max-w-4xl text-center mb-10">
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

        <div className="w-full my-5 grid grid-cols-1 gap-8 md:grid-cols-1 2xl:grid-cols-2">
          {visibleDoctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="group relative flex h-auto flex-col md:h-72 md:flex-row md:items-center md:overflow-hidden md:rounded-lg"
            >
              <div className={`relative z-0 order-1 h-80 w-full overflow-hidden rounded-lg md:order-2 md:h-full md:w-2/5 md:rounded-none ${index % 2 === 0 ? '2xl:order-2 2xl:[clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]' : '2xl:order-1 2xl:[clip-path:polygon(0_0,80%_0,100%_100%,0%_100%)]'}`}>
                {doctor.image === '/image/default.png' ? (
                  <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-primary/10 object-fill object-center">
                    <UserRound className="h-44 w-44 text-muted-foreground opacity-60" />
                  </div>
                ) : (
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-fill object-center bg-primary/20 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                )}
                <div className="absolute inset-0 bg-primary/30 opacity-90 mix-blend-multiply" />

                <div className="absolute inset-0 flex h-full flex-col-reverse items-start justify-start bg-gradient-to-b from-transparent via-transparent to-gray-950 p-6 pb-6 md:hidden">
                  <h3 className="mb-2 w-full text-2xl font-bold leading-tight text-white">
                    {doctor.name}
                  </h3>
                  <h4 className="w-full text-xl leading-tight text-gray-100">
                    {doctor.role}
                  </h4>
                </div>
              </div>

              <div className={`relative z-10 order-2 flex h-full w-full items-center -mt-6 md:order-1 md:w-3/5 md:mt-0 ${index % 2 === 0 ? '2xl:order-1' : '2xl:order-2'}`}>
                <div className="mx-2 h-full rounded-lg bg-background p-8 shadow-xl md:mx-0 md:rounded-none md:bg-card md:px-14 md:py-12 md:shadow-none md:pr-18">
                  <h4 className="hidden text-xl text-muted-foreground md:block">
                    Dokter Praktik
                  </h4>
                  <h3 className="hidden text-2xl font-bold text-foreground md:block">
                    {doctor.name}
                  </h3>
                  <p className="text-justify text-muted-foreground">
                    {doctor.role} di {doctor.clinic}. Jadwal praktik: {doctor.schedule.join(', ')}.
                  </p>
                  <a
                    href="#team"
                    className="mt-3 flex items-baseline text-primary hover:text-primary/80 focus:text-primary/80"
                  >
                    <span>Lihat detail jadwal</span>
                    <span className="ml-1 text-xs">&#x279c;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
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

        {/*
        return (
          <section id="team" className="py-16 sm:py-16">
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">

              Section Header
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

              Doctors Grid
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {visibleDoctors.map((doctor, index) => (

                  <Card key={doctor.id} className="shadow-xs overflow-hidden group relative h-80 cursor-default">
                    Full background image
                    {doctor.image === '/image/default.png' ? (
                      <div className="flex items-center justify-center h-full">
                        <UserRound className="h-44 w-44 text-muted-foreground opacity-60" />
                      </div>
                    ) : (
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-contain object-top transition-transform duration-300 group-hover:scale-125 group-active:scale-125 origin-top bg-muted/30"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    )}
                    
                    Overlay gradient
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    
                    Text content on top
                    <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                      <div className="text-center">
                        Name and Role
                        <h3 className="text-lg font-semibold mb-1">
                          {doctor.name}
                        </h3>
                        <p className="text-sm font-medium text-primary/90 mb-2">
                          {doctor.role}
                        </p>

                        Clinic Name
                        <p className="text-sm font-medium text-white/90 mb-2">
                          {doctor.clinic}
                        </p>

                        Schedule
                        <div className="text-sm text-white/80">
                          <span className="font-medium">Praktek: </span>
                          {doctor.schedule.join(', ')}
                        </div>
                      </div>
                    </CardContent>
            </div>

                ))}
              </div>

              Show All Link
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
        */}
      </div>
    </section>
  )
}
