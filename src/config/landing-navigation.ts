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
  { name: 'PPID', href: '/landing/ppid', hasMegaMenu: true },
  { name: 'Berita', href: '#news' },
  { name: 'FAQ & Feedback', href: '#feedback' },
]

export type PpidMenuItem = {
  title: string
  description: string
  icon: string
  href: string
}

export const ppidMenuItems: PpidMenuItem[] = [
  { title: 'Dokumen Perencanaan', description: 'Rencana strategis dan dokumen perencanaan tahunan', icon: 'file-text', href: '/landing/ppid/dokumen-perencanaan' },
  { title: 'Renstra', description: 'Rencana strategis rumah sakit', icon: 'target', href: '/landing/ppid/renstra' },
  { title: 'RKA', description: 'Rencana kerja dan anggaran', icon: 'clipboard-list', href: '/landing/ppid/rka' },
  { title: 'DPA', description: 'Dokumen pelaksanaan anggaran', icon: 'file-check', href: '/landing/ppid/dpa' },
  { title: 'Dokumen Keuangan', description: 'Informasi anggaran dan realisasi keuangan', icon: 'wallet', href: '/landing/ppid/dokumen-keuangan' },
  { title: 'APBD', description: 'Anggaran pendapatan dan belanja daerah', icon: 'coins', href: '/landing/ppid/apbd' },
  { title: 'Realisasi Anggaran', description: 'Laporan realisasi penggunaan anggaran', icon: 'chart-bar', href: '/landing/ppid/realisasi-anggaran' },
  { title: 'Regulasi', description: 'Dasar hukum dan regulasi pelayanan publik', icon: 'scale', href: '/landing/ppid/regulasi' },
  { title: 'Perwal', description: 'Peraturan wali kota terkait pelayanan publik', icon: 'book-open', href: '/landing/ppid/perwal' },
  { title: 'Perda', description: 'Peraturan daerah terkait pelayanan publik', icon: 'book-marked', href: '/landing/ppid/perda' },
  { title: 'SK Direktur', description: 'Surat keputusan direktur rumah sakit', icon: 'signature', href: '/landing/ppid/sk-direktur' },
  { title: 'Laporan', description: 'Laporan kinerja dan laporan tahunan', icon: 'report', href: '/landing/ppid/laporan' },
  { title: 'LKjIP', description: 'Laporan kinerja instansi pemerintah', icon: 'clipboard-check', href: '/landing/ppid/lkjip' },
  { title: 'Laporan Tahunan', description: 'Laporan tahunan rumah sakit', icon: 'file-bar-chart', href: '/landing/ppid/laporan-tahunan' },
]

export const ppidMenuSections = [
  { title: 'Dokumen Perencanaan', items: ['Renstra', 'RKA', 'DPA'] },
  { title: 'Dokumen Keuangan', items: ['APBD', 'Realisasi Anggaran'] },
  { title: 'Regulasi', items: ['Perwal', 'Perda', 'SK Direktur'] },
  { title: 'Laporan', items: ['LKjIP', 'Laporan Tahunan'] },
].map((section) => ({
  title: section.title,
  items: section.items.map((item) => {
    const menuItem = ppidMenuItems.find((ppid) => ppid.title === item)

    if (!menuItem) {
      throw new Error(`PPID menu item not found: ${item}`)
    }

    return {
      title: menuItem.title,
      description: menuItem.description,
      icon: menuItem.icon,
      href: menuItem.href,
    }
  }),
}))

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
