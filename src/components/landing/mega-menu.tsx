"use client"

import {
  Stethoscope,
  BedDouble,
  Ambulance,
  FlaskConical,
  Scan,
  Pill,
  HeartPulse,
  Baby,
  Scissors,
  Calendar,
  ClipboardList,
  CreditCard,
  Users,
  Phone,
  Clock,
  FileText
} from 'lucide-react'

const menuSections = [
  {
    title: 'Layanan Unggulan',
    items: [
      {
        title: 'Rawat Jalan',
        description: 'Pelayanan poliklinik umum dan spesialis',
        icon: Stethoscope,
        href: '#rawat-jalan'
      },
      {
        title: 'Rawat Inap',
        description: 'Perawatan dengan fasilitas ruangan nyaman',
        icon: BedDouble,
        href: '#rawat-inap'
      },
      {
        title: 'Gawat Darurat',
        description: 'Layanan 24 jam untuk keadaan darurat',
        icon: Ambulance,
        href: '#gawat-darurat'
      },
      {
        title: 'Laboratorium',
        description: 'Pemeriksaan lab lengkap dan akurat',
        icon: FlaskConical,
        href: '#laboratorium'
      }
    ]
  },
  {
    title: 'Fasilitas',
    items: [
      {
        title: 'Radiologi',
        description: 'X-Ray, USG, dan pemeriksaan penunjang',
        icon: Scan,
        href: '#radiologi'
      },
      {
        title: 'Farmasi',
        description: 'Layanan obat dan konsultasi farmasi',
        icon: Pill,
        href: '#farmasi'
      },
      {
        title: 'ICU',
        description: 'Unit perawatan intensif modern',
        icon: HeartPulse,
        href: '#icu'
      },
      {
        title: 'Ruang Bersalin',
        description: 'Fasilitas persalinan nyaman dan aman',
        icon: Baby,
        href: '#ruang-bersalin'
      }
    ]
  },
  {
    title: 'Informasi Pasien',
    items: [
      {
        title: 'Jadwal Dokter',
        description: 'Lihat jadwal praktik dokter spesialis',
        icon: Calendar,
        href: '#jadwal-dokter'
      },
      {
        title: 'Cara Daftar',
        description: 'Panduan pendaftaran pasien baru',
        icon: ClipboardList,
        href: '#cara-daftar'
      },
      {
        title: 'BPJS Kesehatan',
        description: 'Informasi layanan BPJS dan asuransi',
        icon: CreditCard,
        href: '#bpjs'
      },
      {
        title: 'Hubungi Kami',
        description: 'Nomor telepon dan alamat rumah sakit',
        icon: Phone,
        href: '#kontak'
      }
    ]
  }
]

export function MegaMenu() {
  return (
    <div className="w-[700px] max-w-[95vw] p-4 sm:p-6 lg:p-8 bg-background">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {menuSections.map((section) => (
          <div key={section.title} className="space-y-4 lg:space-y-6">
            {/* Section Header */}
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {section.title}
            </h3>

            {/* Section Links */}
            <div className="space-y-3 lg:space-y-4">
              {section.items.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => e.preventDefault()}
                  className="group block space-y-1 lg:space-y-2 hover:bg-accent rounded-md p-2 lg:p-3 -mx-2 lg:-mx-3 transition-colors my-0 cursor-pointer"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed ml-6 lg:ml-7">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
