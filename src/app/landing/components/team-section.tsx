"use client"

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { UserRound } from 'lucide-react'


const doctors = [
  {
    id: 1,
    name: 'dr. Ahmad Fauzi, Sp.PD',
    role: 'Spesialis Penyakit Dalam',
    description: 'Berpengalaman lebih dari 15 tahun dalam menangani berbagai penyakit internal dan penyakit kronis.',
    fallback: 'AF',
  },
  {
    id: 2,
    name: 'drg. Siti Nurhaliza, Sp.Ort',
    role: 'Spesialis Ortodonti',
    description: 'Spesialis dalam perawatan kesehatan gigi dan susunan gigi dengan pengalaman lebih dari 10 tahun.',
    fallback: 'SN',
  },
  {
    id: 3,
    name: 'dr. Budi Santoso, Sp.JP',
    role: 'Spesialis Jantung',
    description: 'Konsultan jantung dan pembuluh darah dengan keahlian di bidang intervensi kardiologi.',
    fallback: 'BS',
  },
  {
    id: 4,
    name: 'dr. Dewi Lestari, Sp.OG',
    role: 'Spesialis Kandungan',
    description: 'Menangani kesehatan reproduksi wanita dan kehamilan dengan pendekatan holistik.',
    fallback: 'DL',
  },
  {
    id: 5,
    name: 'dr. Eko Prasetyo, Sp.B',
    role: 'Spesialis Bedah',
    description: 'Ahli bedah umum dengan keahlian dalam prosedur bedah minimal invasif dan laparoskopi.',
    fallback: 'EP',
  },
  {
    id: 6,
    name: 'dr. Fitri Handayani, Sp.A',
    role: 'Spesialis Anak',
    description: 'Dedikasi penuh untuk kesehatan dan tumbuh kembang anak sejak bayi hingga remaja.',
    fallback: 'FH',
  },
  {
    id: 7,
    name: 'dr. Gunawan Wijaya, Sp.M',
    role: 'Spesialis Mata',
    description: 'Menangani berbagai gangguan penglihatan dan melakukan operasi mata dengan teknologi terkini.',
    fallback: 'GW',
  },
  {
    id: 8,
    name: 'dr. Hartono, Sp.THT-KL',
    role: 'Spesialis THT',
    description: 'Spesialis telinga, hidung, dan tenggorokan dengan keahlian bedah kepala dan leher.',
    fallback: 'HT',
  }
]

export function TeamSection() {
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
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="shadow-xs py-2">
              <CardContent className="p-4">
                <div className="text-center">
                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <CardDecorator>
                      <Avatar className="h-24 w-24 border shadow-lg">
                        <AvatarFallback className="text-lg font-semibold bg-primary/10">
                          <UserRound className="h-10 w-10 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                    </CardDecorator>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {doctor.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doctor.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
