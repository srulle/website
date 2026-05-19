import {
  Stethoscope,
  BedDouble,
  Ambulance,
  Scan,
  FlaskConical,
  Pill,
  HeartPulse,
  Baby,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  iconName: string
  description: string
  fullContent: string
  features: string[]
}

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  BedDouble,
  Ambulance,
  Scan,
  FlaskConical,
  Pill,
  HeartPulse,
  Baby,
}

export const services: Service[] = [
  {
    id: 'rawat-jalan',
    iconName: 'Stethoscope',
    title: 'Rawat Jalan',
    description:
      'Pelayanan poliklinik umum dan spesialis dengan pendaftaran yang mudah dan proses yang cepat.',
    fullContent: `
Layanan rawat jalan di RSUD H. Abdurrahman Sayoeti tersedia untuk pasien yang memerlukan konsultasi dan perawatan medis tanpa perlu dirawat di rumah sakit.

Layanan rawat jalan meliputi:
- Poliklinik Umum
- Poliklinik Spesialis Penyakit Dalam
- Poliklinik Spesialis Bedah
- Poliklinik Spesialis Anak
- Poliklinik Spesialis Kandungan & Kebidanan
- Poliklinik Spesialis Mata
- Poliklinik Spesialis Kulit & Kelamin
- Poliklinik Spesialis THT
- Poliklinik Spesialis Orthopedi
- Poliklinik Spesialis Saraf
- Poliklinik Spesialis Radiologi
- Poliklinik Spesialis Jantung
- Poliklinik Spesialis Gizi
- Poliklinik Spesialis Kedokteran Fisik & Rehabilitasi
- Poliklinik Spesialis Patologi Klinik
- Poliklinik Spesialis Bedah Mulut
- Poliklinik Spesialis Kesehatan Gigi Anak
- Poliklinik Spesialis Umum (VCT)
- Poliklinik Gigi & Mulut
- Poliklinik TB DOTS

Pasien dapat mendaftar melalui pendaftaran online atau datang langsung ke loket pendaftaran.
    `,
    features: [
      'Poliklinik Spesialis & Umum',
      'Pendaftaran Online & Tatap Muka',
      'Tersedia BPJS & Umum',
      'Antrian Teratur & Transparan',
      'Hasil Pemeriksaan Cepat',
    ],
  },
  {
    id: 'rawat-inap',
    iconName: 'BedDouble',
    title: 'Rawat Inap',
    description:
      'Perawatan dengan fasilitas ruangan nyaman dan perawatan medis 24 jam oleh tim dokter dan perawat profesional.',
    fullContent: `
RSUD H. Abdurrahman Sayoeti menyediakan layanan rawat inap yang nyaman dan aman untuk pasien yang memerlukan perawatan intensif.

Fasilitas kamar rawat inap:
- Kelas VIP dengan fasilitas lengkap
- Kelas I dengan fasilitas standar
- Kelas II dengan harga terjangkau
- Kelas III untuk aksesibilitas

Setiap kamar dilengkapi dengan peralatan medis modern dan perawatan standard yang sesuai protokol rumah sakit.
    `,
    features: [
      'Kelas I, II, III & VIP',
      'Perawatan 24 Jam',
      'Peralatan Medis Modern',
      'Tim Dokter Spesialis Berpengalaman',
      'Makanan Pasien Sesuai Standar',
    ],
  },
  {
    id: 'gawat-darurat',
    iconName: 'Ambulance',
    title: 'Gawat Darurat',
    description:
      'Layanan darurat 24 jam yang siap menangani keadaan darurat medis dengan respons cepat dan profesional.',
    fullContent: `
Unit Gawat Darurat RSUD H. Abdurrahman Sayoeti beroperasi 24 jam sehari, 7 hari seminggu untuk menangani keadaan darurat medis.

Layanan Rawat Darurat meliputi:
- Penerimaan pasien gawat darurat
- Pemeriksaan awal (triage)
- Stabilisasi kondisi pasien
- Koordinasi dengan dokter spesialis
- Rujukan lanjutan jika diperlukan

Tim medis di unit gawat darurat terdiri dari dokter umum, perawat, dan tenaga medis terlatih yang siap merespons setiap keadaan darurat.
    `,
    features: [
      'Layanan 24 Jam',
      'Respon Cepat',
      'Tim Medis Terlatih',
      'Alat Medis Lengkap',
      'Koordinasi Rujukan',
    ],
  },
  {
    id: 'radiologi',
    iconName: 'Scan',
    title: 'Radiologi',
    description:
      'Pemeriksaan pencitraan medis seperti X-Ray, USG, CT-Scan, dan MRI dengan hasil yang akurat dan cepat.',
    fullContent: `
Unit Radiologi RSUD menyediakan layanan pemeriksaan pencitraan medis yang lengkap dan akurat, mendukung diagnosis penyakit oleh tim dokter spesialis.

Layanan yang tersedia:
- Rontgen (X-Ray) Digital
- Ultrasound (USG) 2D & 3D
- CT-Scan
- MRI
- Mammografi
- Fotografi Khusus

Semua peralatan radiologi menjamin hasil berkualitas tinggi dengan standar keselamatan radiasi yang terjamin sesuai regulasi Kemenkes RI.
    `,
    features: [
      'X-Ray Digital',
      'USG 2D & 3D',
      'CT-Scan',
      'MRI',
      'Hasil Cepat & Akurat',
    ],
  },
  {
    id: 'laboratorium',
    iconName: 'FlaskConical',
    title: 'Laboratorium',
    description:
      'Pemeriksaan laboratorium lengkap dengan hasil yang akurat dan terpercaya.',
    fullContent: `
Laboratorium Klinik RSUD H. Abdurrahman Sayoeti menyediakan layanan pemeriksaan medis dengan hasil akurat dan terpercaya.

Layanan yang tersedia:
- Pemeriksaan darah rutin (CBC, GDS, Lipid Profile)
- Pemeriksaan fungsi organ (Hati, Ginjal)
- Pemeriksaan urine rutin
- Pemeriksaan feses
- Pemeriksaan darah khusus (Trombosit, HIV, Hepatitis)
- Pemeriksaan kehamilan (Hamil Test, USG Kehamilan)
- Pemeriksaan imunologi & alergi
- Pemeriksaan patologi anatomi

Tim laboratorium yang profesional menjamin setiap hasil pemeriksaan akurat dan terpercaya.
    `,
    features: [
      'Pemeriksaan Hematologi',
      'Pemeriksaan Kimia Klinik',
      'Pemeriksaan Urinalisa',
      'Mikrobiologi',
      'Hasil Cepat & Akurat',
    ],
  },
  {
    id: 'farmasi',
    iconName: 'Pill',
    title: 'Farmasi',
    description:
      'Layanan obat dan konsultasi farmasi dengan pelayanan profesional dan ramah.',
    fullContent: `
Instalasi Farmasi RSUD H. Abdurrahman Sayoeti menyediakan layanan distribusi obat dan konsultasi penggunaan obat secara profesional.

Layanan yang tersedia:
- Pengambilan obat sesuai resep dokter
- Konsultasi penggunaan obat dan efek sampingnya
- Informasi interaksi obat secara detail
- Pelayanan obat untuk pasien rawat inap
- Pelayanan antibiotik
- Pbisuan & obat luka
- Suplemen & vitamin

Semua obat yang disediakan adalah original dan terjamin kualitasnya dari distributor resmi.
    `,
    features: [
      'Obat Original & Terjamin',
      'Konsultasi Penggunaan Obat',
      'Tersedia Obat Generik & Paten',
      'Pelayanan 24 Jam',
      'Terima Resep Digital',
    ],
  },
  {
    id: 'icu',
    iconName: 'HeartPulse',
    title: 'ICU',
    description:
      'Unit perawatan intensif modern dengan peralatan medis lengkap dan tenaga medis profesional.',
    fullContent: `
Intensive Care Unit (ICU) RSUD H. Abdurrahman Sayoeti merupakan ruang perawatan khusus untuk pasien dalam kondisi kritis yang memerlukan pengawasan intensif.

Fasilitas di ICU:
- Ventilator untuk perawatan pernafasan
- Monitor vital sign 24 jam
- Alat infus dan obat intravena
- Alat resuscitasi darurat
- Peralatan hemodinamik
- ICU khusus neonatus
- ICU khusus dewasa

Tim ICUn terdiri dari dokter spesialis intensif, perawat ICU, dan fisioterapis yang terdedikasi untuk perawatan pasien kritis.
    `,
    features: [
      'ICU Dewasa & Neonatus',
      'Ventilator & Monitor 24 Jam',
      'Tim Dokter Spesialis',
      'Peralatan Medis Modern',
      'Asuhan Intensif',
    ],
  },
  {
    id: 'ruang-bersalin',
    iconName: 'Baby',
    title: 'Ruang Bersalin',
    description:
      'Fasilitas persalinan nyaman dan aman dengan dukungan tim medis profesional untuk ibu dan bayi.',
    fullContent: `
Ruang Bersalin RSUD H. Abdurrahman Sayoeti menyediakan layanan persalinan yang aman, nyaman, dan profesional.

Layanan yang tersedia:
- Vaginal Delivery (Camilan)
- Operasi Seksio Cesarea
- Persalinan dengan metode normal
- Neonatal Intensive Care (NICU)
- Konseling laktasi
- Imunisasi dasar bagi bayi
- UKS (Usaha Kesehatan Sekolah)

Tim medis di ruang bersalin terdiri dari dokter spesialis kebidanan & kandungan, perawat bersalin, dan bidan yang berpengalaman menjamin keamanan ibu dan bayi.
    `,
    features: [
      'Persalinan Normal & SC',
      'NICU untuk Bayi Prematur',
      'Dokter Spesialis Kebidanan',
      'Perawatan Ibu & Anak',
      'Imunisasi Bayi',
    ],
  },
]

export function getServiceIcon(iconName: string): React.ElementType {
  return iconMap[iconName] ?? Stethoscope
}
