export type PpidPage = {
  id: string
  title: string
  description: string
  iconName: string
  fullContent: string
  features: string[]
  downloadHref: string
  documentHref?: string
  documentLabel?: string
  documents?: {
    href: string
    label: string
  }[]
}

export const ppidPages: PpidPage[] = [
  {
    id: 'dokumen-perencanaan',
    title: 'Dokumen Perencanaan',
    description: 'Rencana strategis dan dokumen perencanaan tahunan RSUD H. Abdurrahman Sayoeti.',
    iconName: 'file-text',
    fullContent: `Halaman ini menyediakan informasi terkait dokumen perencanaan RSUD H. Abdurrahman Sayoeti.

Dokumen perencanaan digunakan sebagai acuan arah kebijakan, program, dan kegiatan rumah sakit untuk meningkatkan kualitas pelayanan publik.`,
    features: ['Renstra', 'RKA', 'DPA', 'Dokumen dapat diunduh publik setelah diunggah'],
    downloadHref: '/documents/ppid/dokumen-perencanaan.pdf',
  },
  {
    id: 'renstra',
    title: 'Renstra',
    description: 'Rencana strategis rumah sakit untuk periode perencanaan yang ditetapkan.',
    iconName: 'target',
    fullContent: `Rencana Strategis (Renstra) memuat arah kebijakan, tujuan, sasaran, program, dan indikator kinerja RSUD H. Abdurrahman Sayoeti.

Dokumen Renstra menjadi pedoman perencanaan jangka menengah rumah sakit.`,
    features: ['Visi dan misi rumah sakit', 'Tujuan dan sasaran strategis', 'Program kerja utama', 'Indikator kinerja'],
    downloadHref: '/documents/ppid/renstra.pdf',
    documentHref: '/document/PERWAL%20RENSTRA.pdf',
    documentLabel: 'PERWAL RENSTRA',
  },
  {
    id: 'rka',
    title: 'RKA',
    description: 'Rencana kerja dan anggaran sebagai dasar pelaksanaan program rumah sakit.',
    iconName: 'clipboard-list',
    fullContent: `Rencana Kerja dan Anggaran (RKA) berisi rencana kegiatan dan kebutuhan anggaran untuk mendukung pelaksanaan tugas rumah sakit.

Dokumen ini membantu publik memahami rencana kegiatan dan alokasi anggaran rumah sakit.`,
    features: ['Rencana kegiatan tahunan', 'Kebutuhan anggaran program', 'Indikator output kegiatan', 'Dasar pelaksanaan anggaran'],
    downloadHref: '/documents/ppid/rka.pdf',
    documentHref: '/document/RKA%20APBD-P%20RSUD%20H.%20Abdurrahman%20Sayoeti%20Tahun%202025.pdf',
    documentLabel: 'RKA APBD-P RSUD H. Abdurrahman Sayoeti Tahun 2025',
  },
  {
    id: 'dpa',
    title: 'DPA',
    description: 'Dokumen Pelaksanaan Anggaran untuk pelaksanaan kegiatan dan penggunaan anggaran.',
    iconName: 'file-check',
    fullContent: `Dokumen Pelaksanaan Anggaran (DPA) merupakan dokumen yang menjadi dasar pelaksanaan kegiatan dan penggunaan anggaran rumah sakit.

DPA disusun sebagai tindak lanjut dari rencana kerja dan anggaran yang telah ditetapkan.`,
    features: ['Dasar pelaksanaan anggaran', 'Rincian kegiatan', 'Rincian penggunaan anggaran', 'Target pelaksanaan'],
    downloadHref: '/documents/ppid/dpa.pdf',
    documents: [
      {
        href: '/document/DPA%20RSUD%20H.%20Abdurrahman%20Sayoeti%20Kota%20Jambi%20(APBD)%20Tahun%202025.pdf',
        label: 'DPA RSUD H. Abdurrahman Sayoeti Kota Jambi (APBD) Tahun 2025',
      },
      {
        href: '/document/DPA%20RSUD%20H.%20Abdurrahman%20Sayoeti%20Kota%20Jambi%20(APBN%20Prasarana%20Tahun)%20Tahun%202025.pdf',
        label: 'DPA RSUD H. Abdurrahman Sayoeti Kota Jambi (APBN Prasarana Tahun) Tahun 2025',
      },
      {
        href: '/document/DPA%20RSUD%20H.%20Abdurrahman%20Sayoeti%20Kota%20Jambi%20(APBN%20Alat%20Kesehatan)%20Tahun%202025.pdf',
        label: 'DPA RSUD H. Abdurrahman Sayoeti Kota Jambi (APBN Alat Kesehatan) Tahun 2025',
      },
      {
        href: '/document/DPPA%20APBN%20(Pengadaan%20Alkes)%20Tahun%202025%20(23%20Okt%202025).pdf',
        label: 'DPPA APBN (Pengadaan Alkes) Tahun 2025 (23 Okt 2025)',
      },
      {
        href: '/document/DPPA%20APBN%20(Pengembangan%20RS)%20Tahun%202025%20(23%20Okt%202025).pdf',
        label: 'DPPA APBN (Pengembangan RS) Tahun 2025 (23 Okt 2025)',
      },
      {
        href: '/document/DPPD%20APBD%20RSUD%20H.%20Abdurrahman%20Sayoeti%20(23%20Okt%202025).pdf',
        label: 'DPPD APBD RSUD H. Abdurrahman Sayoeti (23 Okt 2025)',
      },
    ],
  },
  {
    id: 'dokumen-keuangan',
    title: 'Dokumen Keuangan',
    description: 'Informasi anggaran, realisasi, dan dokumen keuangan rumah sakit.',
    iconName: 'wallet',
    fullContent: `Halaman ini menyediakan informasi terkait dokumen keuangan RSUD H. Abdurrahman Sayoeti.

Dokumen keuangan dipublikasikan sebagai bentuk keterbukaan informasi pengelolaan anggaran rumah sakit.`,
    features: ['APBD', 'Realisasi Anggaran', 'Informasi transparan', 'Dokumen dapat diunduh publik setelah diunggah'],
    downloadHref: '/documents/ppid/dokumen-keuangan.pdf',
  },
  {
    id: 'apbd',
    title: 'APBD',
    description: 'Anggaran Pendapatan dan Belanja Daerah yang menjadi dasar pengelolaan keuangan daerah.',
    iconName: 'coins',
    fullContent: `Anggaran Pendapatan dan Belanja Daerah (APBD) memuat rencana pendapatan dan belanja daerah untuk satu tahun anggaran.

Dokumen APBD menjadi acuan pelaksanaan program dan kegiatan rumah sakit.`,
    features: ['Rencana pendapatan daerah', 'Rencana belanja rumah sakit', 'Alokasi program prioritas', 'Dasar pengelolaan anggaran'],
    downloadHref: '/documents/ppid/apbd.pdf',
  },
  {
    id: 'realisasi-anggaran',
    title: 'Realisasi Anggaran',
    description: 'Laporan realisasi penggunaan anggaran rumah sakit.',
    iconName: 'chart-bar',
    fullContent: `Realisasi Anggaran menunjukkan pelaksanaan pendapatan dan belanja sesuai dengan anggaran yang telah ditetapkan.

Informasi ini membantu publik mengetahui capaian pelaksanaan anggaran secara berkala.`,
    features: ['Realisasi pendapatan', 'Realisasi belanja', 'Capaian program', 'Laporan berkala'],
    downloadHref: '/documents/ppid/realisasi-anggaran.pdf',
  },
  {
    id: 'regulasi',
    title: 'Regulasi',
    description: 'Dasar hukum dan regulasi terkait pelayanan publik rumah sakit.',
    iconName: 'scale',
    fullContent: `Halaman ini menyediakan regulasi yang menjadi dasar pelaksanaan tugas, fungsi, dan pelayanan publik RSUD H. Abdurrahman Sayoeti.

Regulasi mencakup peraturan daerah, peraturan wali kota, dan keputusan internal rumah sakit.`,
    features: ['Perwal', 'Perda', 'SK Direktur', 'Dasar hukum pelayanan publik'],
    downloadHref: '/documents/ppid/regulasi.pdf',
  },
  {
    id: 'perwal',
    title: 'Perwal',
    description: 'Peraturan Wali Kota terkait organisasi, tata kerja, dan pelayanan publik rumah sakit.',
    iconName: 'book-open',
    fullContent: `Peraturan Wali Kota (Perwal) menjadi salah satu dasar hukum pelaksanaan tugas dan fungsi RSUD H. Abdurrahman Sayoeti.

Dokumen ini memuat ketentuan terkait organisasi, tata kerja, dan aspek pelayanan publik rumah sakit.`,
    features: ['Dasar hukum organisasi', 'Ketentuan tata kerja', 'Ketentuan pelayanan publik', 'Regulasi daerah'],
    downloadHref: '/documents/ppid/perwal.pdf',
    documents: [
      {
        href: '/document/PERWAL%20TATA%20KELOLA.pdf',
        label: 'PERWAL TATA KELOLA',
      },
      {
        href: '/document/PERWAL%20SPM.pdf',
        label: 'PERWAL SPM',
      },
    ],
  },
  {
    id: 'perda',
    title: 'Perda',
    description: 'Peraturan Daerah yang menjadi landasan hukum rumah sakit.',
    iconName: 'book-marked',
    fullContent: `Peraturan Daerah (Perda) merupakan landasan hukum penting dalam pembentukan dan pengelolaan RSUD H. Abdurrahman Sayoeti.

Dokumen Perda dapat digunakan publik untuk memahami dasar hukum keberadaan dan tugas rumah sakit.`,
    features: ['Landasan pembentukan rumah sakit', 'Tugas dan fungsi rumah sakit', 'Ketentuan pengelolaan', 'Regulasi daerah'],
    downloadHref: '/documents/ppid/perda.pdf',
  },
  {
    id: 'sk-direktur',
    title: 'SK Direktur',
    description: 'Surat Keputusan Direktur terkait kebijakan dan keputusan internal rumah sakit.',
    iconName: 'signature',
    fullContent: `Surat Keputusan Direktur memuat keputusan internal RSUD H. Abdurrahman Sayoeti terkait kebijakan, struktur, prosedur, atau penetapan tertentu.

Dokumen SK Direktur dipublikasikan sesuai ketentuan keterbukaan informasi publik.`,
    features: ['Keputusan direktur', 'Kebijakan internal', 'Penetapan prosedur', 'Dokumen resmi rumah sakit'],
    downloadHref: '/documents/ppid/sk-direktur.pdf',
  },
  {
    id: 'laporan',
    title: 'Laporan',
    description: 'Laporan kinerja dan laporan tahunan rumah sakit.',
    iconName: 'file-bar-chart',
    fullContent: `Halaman ini menyediakan laporan kinerja dan laporan tahunan RSUD H. Abdurrahman Sayoeti.

Laporan tersebut memuat capaian kinerja, pelayanan, keuangan, dan program rumah sakit dalam periode tertentu.`,
    features: ['LKjIP', 'Laporan Tahunan', 'Capaian kinerja', 'Dokumen dapat diunduh publik setelah diunggah'],
    downloadHref: '/documents/ppid/laporan.pdf',
  },
  {
    id: 'lkjip',
    title: 'LKjIP',
    description: 'Laporan Kinerja Instansi Pemerintah sebagai bentuk akuntabilitas kinerja rumah sakit.',
    iconName: 'clipboard-check',
    fullContent: `Laporan Kinerja Instansi Pemerintah (LKjIP) menyajikan capaian kinerja RSUD H. Abdurrahman Sayoeti berdasarkan sasaran dan indikator yang ditetapkan.

LKjIP menjadi salah satu bentuk akuntabilitas rumah sakit kepada publik.`,
    features: ['Capaian sasaran kinerja', 'Indikator kinerja utama', 'Evaluasi program', 'Akuntabilitas publik'],
    downloadHref: '/documents/ppid/lkjip.pdf',
  },
  {
    id: 'laporan-tahunan',
    title: 'Laporan Tahunan',
    description: 'Laporan tahunan RSUD H. Abdurrahman Sayoeti untuk periode tertentu.',
    iconName: 'file-bar-chart',
    fullContent: `Laporan Tahunan memuat ringkasan kinerja, pelayanan, keuangan, sumber daya, dan capaian program RSUD H. Abdurrahman Sayoeti dalam satu tahun.

Dokumen ini memberikan gambaran menyeluruh mengenai kinerja rumah sakit kepada masyarakat.`,
    features: ['Ringkasan kinerja tahunan', 'Capaian pelayanan', 'Informasi keuangan', 'Program dan kegiatan rumah sakit'],
    downloadHref: '/documents/ppid/laporan-tahunan.pdf',
    documentHref: '/document/Laporan%20Tahunan%20RSUD%20H.%20Abdurrahman%20Sayoeti%20Tahun%202025.pdf',
    documentLabel: 'Laporan Tahunan RSUD H. Abdurrahman Sayoeti Tahun 2025',
  },
]

export function getPpidPage(id: string) {
  return ppidPages.find((page) => page.id === id)
}
