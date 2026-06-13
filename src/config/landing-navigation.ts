export type LandingNavigationItem = {
  name: string
  href: string
  hasMegaMenu?: boolean
}

export type LayananMenuItem = {
  title?: string
  name?: string
  href?: string
}

export const landingNavigationItems: LandingNavigationItem[] = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Layanan', href: '#layanan', hasMegaMenu: true },
  { name: 'Tim Medis', href: '#team' },
  { name: 'Berita', href: '#news' },
  { name: 'Feedback', href: '#feedback' },
]

export const layananMenuItems: LayananMenuItem[] = [
  { title: 'Layanan Unggulan' },
  { name: 'Rawat Jalan', href: '/landing/layanan/rawat-jalan' },
  { name: 'Rawat Inap', href: '/landing/layanan/rawat-inap' },
  { name: 'Gawat Darurat', href: '/landing/layanan/gawat-darurat' },
  { title: 'Fasilitas' },
  { name: 'Radiologi', href: '/landing/layanan/radiologi' },
  { name: 'Laboratorium', href: '/landing/layanan/laboratorium' },
  { name: 'Farmasi', href: '/landing/layanan/farmasi' },
  { name: 'ICU', href: '/landing/layanan/icu' },
  { name: 'Ruang Bersalin', href: '/landing/layanan/ruang-bersalin' },
  { title: 'Informasi Pasien' },
  { name: 'Jadwal Dokter', href: '/landing/informasi/jadwal-dokter' },
  { name: 'Alur Pelayanan', href: '/landing/informasi/alur-pelayanan' },
  { name: 'Informasi Tempat Tidur', href: '/landing/informasi/tempat-tidur' },
  { name: 'Cara Daftar', href: '/landing/informasi/cara-daftar' },
  { name: 'BPJS Kesehatan', href: '/landing/informasi/bpjs' },
]
