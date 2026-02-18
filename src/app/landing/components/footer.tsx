"use client"

import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/logo'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Heart } from 'lucide-react'

const footerLinks = {
  layanan: [
    { name: 'Rawat Jalan', href: '#rawat-jalan' },
    { name: 'Rawat Inap', href: '#rawat-inap' },
    { name: 'Gawat Darurat', href: '#gawat-darurat' },
    { name: 'Laboratorium', href: '#laboratorium' },
  ],
  informasi: [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Dokter', href: '#team' },
    { name: 'Berita', href: '#news' },
    { name: 'Jadwal Dokter', href: '#jadwal-dokter' },
  ],
  pasien: [
    { name: 'Cara Daftar', href: '#cara-daftar' },
    { name: 'BPJS Kesehatan', href: '#bpjs' },
    { name: 'Feedback', href: '#feedback' },
    { name: 'Hubungi Kami', href: '#kontak' },
  ],
  legal: [
    { name: 'Kebijakan Privasi', href: '#privacy' },
    { name: 'Syarat & Ketentuan', href: '#terms' },
    { name: 'Hak Pasien', href: '#hak-pasien' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
]

const contactInfo = [
  { icon: MapPin, text: 'Jl. KH Hasan Anang, Kota Jambi, Jambi' },
  { icon: Phone, text: '(0741) 123456' },
  { icon: Mail, text: 'info@rsudhasjambi.go.id' },
  { icon: Clock, text: 'Senin - Minggu: 24 Jam' },
]

export function LandingFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 grid-cols-4 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-4 lg:col-span-2 max-w-2xl">
            <div className="flex items-center space-x-2 mb-4 max-lg:justify-center">
              <a href="#" className="flex items-center space-x-2 cursor-pointer">
                <Logo size={24} />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm leading-[1.15]">
                    Rumah Sakit Umum Daerah
                  </span>
                  <span className="font-bold text-sm leading-[1.15]">
                    H. Abdurrahman Sayoeti
                  </span>
                </div>
              </a>
            </div>
            <p className="text-muted-foreground mb-6 max-lg:text-center max-lg:flex max-lg:justify-center">
              RSUD H. Abdurrahman Sayoeti adalah rumah sakit umum tipe D milik Pemerintah Kota Jambi yang berkomitmen memberikan pelayanan kesehatan terbaik untuk masyarakat.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground max-lg:justify-center">
                  <info.icon className="h-4 w-4 text-primary" />
                  <span>{info.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 max-lg:justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">Informasi</h4>
            <ul className="space-y-3">
              {footerLinks.informasi.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">Pasien</h4>
            <ul className="space-y-3">
              {footerLinks.pasien.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='max-md:col-span-2 lg:col-span-1'>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <span>Dengan</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>kami melayani masyarakat</span>
            </div>
          </div>
          <div className="text-center lg:text-right">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} RSUD H. Abdurrahman Sayoeti. Pemerintah Kota Jambi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
