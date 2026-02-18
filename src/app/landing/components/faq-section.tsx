"use client"

import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: 'item-1',
    question: 'Bagaimana cara mendaftar sebagai pasien baru di RSUD H. Abdurrahman Sayoeti?',
    answer:
      'Untuk mendaftar sebagai pasien baru, Anda dapat datang langsung ke loket pendaftaran dengan membawa KTP, Kartu Keluarga, dan Kartu BPJS (jika memiliki). Pendaftaran juga dapat dilakukan secara online melalui website atau datang langsung ke rumah sakit pada jam operasional. Pastikan membawa dokumen yang diperlukan untuk mempermudah proses pendaftaran.',
  },
  {
    value: 'item-2',
    question: 'Dokumen apa saja yang perlu dibawa saat berobat ke rumah sakit?',
    answer:
      'Dokumen yang perlu dibawa saat berobat meliputi: KTP (Kartu Tanda Penduduk), Kartu BPJS Kesehatan atau kartu berobat RSUD, surat rujukan dari fasilitas kesehatan tingkat pertama (jika menggunakan BPJS), serta hasil pemeriksaan atau rekam medis sebelumnya jika ada. Untuk pasien baru, bawa juga Kartu Keluarga.',
  },
  {
    value: 'item-3',
    question: 'Apakah RSUD H. Abdurrahman Sayoeti menerima pasien BPJS Kesehatan?',
    answer:
      'Ya, RSUD H. Abdurrahman Sayoeti melayani pasien BPJS Kesehatan. Pastikan Anda membawa kartu BPJS yang masih aktif dan surat rujukan dari fasilitas kesehatan tingkat pertama (Puskesmas atau klinik pratama) untuk pelayanan rawat jalan spesialis. Untuk layanan gawat darurat, rujukan tidak diperlukan.',
  },
  {
    value: 'item-4',
    question: 'Bagaimana cara mengetahui jadwal praktik dokter spesialis?',
    answer:
      'Jadwal praktik dokter spesialis dapat dilihat melalui website resmi RSUD, menghubungi call center rumah sakit, atau datang langsung ke informasi rumah sakit. Jadwal dokter dapat berubah, disarankan untuk konfirmasi ulang sebelum datang. Anda juga dapat bertanya di loket informasi saat tiba di rumah sakit.',
  },
  {
    value: 'item-5',
    question: 'Apakah RSUD menyediakan layanan rawat inap?',
    answer:
      'Ya, RSUD H. Abdurrahman Sayoeti menyediakan layanan rawat inap dengan berbagai kelas ruangan mulai dari kelas III, II, I, hingga VIP. Fasilitas rawat inap dilengkapi dengan perawat yang berdedikasi dan didukung oleh tim medis yang profesional. Untuk informasi ketersediaan tempat tidur, silakan hubungi bagian informasi rumah sakit.',
  },
  {
    value: 'item-6',
    question: 'Bagaimana cara mendapatkan rujukan ke rumah sakit yang lebih tinggi?',
    answer:
      'Jika kondisi Anda memerlukan penanganan lebih lanjut di rumah sakit dengan fasilitas lebih lengkap, dokter yang merawat akan memberikan surat rujukan ke rumah sakit rujukan. Proses ini akan dijelaskan oleh petugas medis dan administrasi rumah sakit. Pastikan untuk membawa semua dokumen medis saat melakukan rujukan.',
  },
  {
    value: 'item-7',
    question: 'Jam berapa pelayanan poliklinik rawat jalan dibuka?',
    answer:
      'Pelayanan poliklinik rawat jalan dibuka pada hari Senin sampai Sabtu, pukul 08.00 - 14.00 WIB. Pendaftaran rawat jalan dibuka mulai pukul 07.00 WIB. Disarankan untuk datang lebih awal untuk menghindari antrian panjang. Untuk jadwal spesifik setiap poliklinik, silakan hubungi bagian informasi.',
  },
  {
    value: 'item-8',
    question: 'Apakah tersedia layanan gawat darurat 24 jam?',
    answer:
      'Ya, Instalasi Gawat Darurat (IGD) RSUD H. Abdurrahman Sayoeti beroperasi 24 jam setiap hari termasuk hari libur nasional. Layanan gawat darurat siap menangani keadaan darurat medis dengan tim medis yang berpengalaman dan peralatan medis yang memadai. Untuk keadaan darurat, Anda dapat langsung datang ke IGD tanpa perlu rujukan.',
  },
  {
    value: 'item-9',
    question: 'Metode pembayaran apa saja yang diterima di RSUD?',
    answer:
      'RSUD H. Abdurrahman Sayoeti menerima berbagai metode pembayaran meliputi: BPJS Kesehatan, pembayaran tunai, transfer bank, dan kartu debit/kredit. Untuk pasien BPJS, pastikan kartu BPJS dalam keadaan aktif. Informasi lebih lanjut mengenai biaya pelayanan dapat ditanyakan di loket informasi atau kasir.',
  },
  {
    value: 'item-10',
    question: 'Bagaimana prosedur penggunaan BPJS Kesehatan di RSUD?',
    answer:
      'Untuk menggunakan BPJS Kesehatan, pastikan kartu BPJS Anda aktif dan membawa KTP. Untuk rawat jalan spesialis, diperlukan surat rujukan dari fasilitas kesehatan tingkat pertama (Puskesmas/klinik pratama). Untuk rawat inap, rujukan dari dokter spesialis RSUD diperlukan. Layanan gawat darurat tidak memerlukan rujukan. Pastikan semua dokumen lengkap untuk kelancaran pelayanan.',
  },
]

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan yang sering diajukan seputar pelayanan di RSUD H. Abdurrahman Sayoeti. 
            Masih ada pertanyaan? Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className='bg-transparent'>
            <div className='p-0'>
              <Accordion type='single' collapsible className='space-y-5'>
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className='rounded-md !border bg-transparent'>
                    <AccordionTrigger className='cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b'>
                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full'>
                          <CircleHelp className='size-5' />
                        </div>
                        <span className='text-start font-semibold'>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-4 bg-transparent'>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Masih ada pertanyaan? Kami siap membantu Anda.
            </p>
            <Button className='cursor-pointer' asChild>
              <a href="#feedback">
                Hubungi Kami
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FaqSection }
