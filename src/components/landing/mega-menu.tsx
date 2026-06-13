"use client"

import Link from "next/link"
import {
  Stethoscope,
  BedDouble,
  Ambulance,
  FlaskConical,
  Scan,
  Pill,
  HeartPulse,
  Baby,
  Calendar,
  ClipboardList,
  CreditCard,
  FileText,
  type LucideIcon,
} from "lucide-react"
type LayananItem = {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

const layananDetails: Record<string, Omit<LayananItem, "title">> = {
  "Rawat Jalan": { description: "Pelayanan poliklinik umum dan spesialis", icon: Stethoscope, href: "/landing/layanan/rawat-jalan" },
  "Rawat Inap": { description: "Perawatan dengan fasilitas ruangan nyaman", icon: BedDouble, href: "/landing/layanan/rawat-inap" },
  "Gawat Darurat": { description: "Layanan 24 jam untuk keadaan darurat", icon: Ambulance, href: "/landing/layanan/gawat-darurat" },
  Radiologi: { description: "X-Ray, USG, dan pemeriksaan penunjang", icon: Scan, href: "/landing/layanan/radiologi" },
  Laboratorium: { description: "Pemeriksaan lab lengkap dan akurat", icon: FlaskConical, href: "/landing/layanan/laboratorium" },
  Farmasi: { description: "Layanan obat dan konsultasi farmasi", icon: Pill, href: "/landing/layanan/farmasi" },
  ICU: { description: "Unit perawatan intensif modern", icon: HeartPulse, href: "/landing/layanan/icu" },
  "Ruang Bersalin": { description: "Fasilitas persalinan nyaman dan aman", icon: Baby, href: "/landing/layanan/ruang-bersalin" },
  "Jadwal Dokter": { description: "Lihat jadwal praktik dokter spesialis", icon: Calendar, href: "/landing/informasi/jadwal-dokter" },
  "Alur Pelayanan": { description: "Panduan langkah pelayanan di rumah sakit", icon: FileText, href: "/landing/informasi/alur-pelayanan" },
  "Informasi Tempat Tidur": { description: "Ketersediaan tempat tidur rawat inap", icon: BedDouble, href: "/landing/informasi/tempat-tidur" },
  "Cara Daftar": { description: "Panduan pendaftaran pasien baru", icon: ClipboardList, href: "/landing/informasi/cara-daftar" },
  "BPJS Kesehatan": { description: "Informasi layanan BPJS dan asuransi", icon: CreditCard, href: "/landing/informasi/bpjs" },
}

const menuSections = [
  { title: "Layanan Unggulan", names: ["Rawat Jalan", "Rawat Inap", "Gawat Darurat"] },
  { title: "Fasilitas", names: ["Radiologi", "Laboratorium", "Farmasi", "ICU", "Ruang Bersalin"] },
  { title: "Informasi Pasien", names: ["Jadwal Dokter", "Alur Pelayanan", "Informasi Tempat Tidur", "Cara Daftar", "BPJS Kesehatan"] },
].map((section) => ({
  title: section.title,
  items: section.names.map<LayananItem>((name) => ({
    title: name,
    ...layananDetails[name],
  })),
}))

export function MegaMenu() {
  return (
    <div className="w-[700px] max-w-[95vw] bg-background p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3 lg:gap-12">
        {menuSections.map((section) => (
          <div key={section.title} className="space-y-4 lg:space-y-6">
            <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{section.title}</h3>
            <div className="space-y-3 lg:space-y-4">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="my-0 block cursor-pointer space-y-1 rounded-md p-2 transition-colors hover:bg-accent group lg:-mx-3 lg:space-y-2 lg:p-3"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <item.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">{item.title}</span>
                  </div>
                  <p className="ml-6 text-xs leading-relaxed text-muted-foreground lg:ml-7">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
