"use client"

import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { User, Stethoscope, Building, Heart } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

const leaders = [
  {
    icon: User,
    title: 'Direktur',
    name: 'dr. Ade Delpita, Sp.PK',
    description: 'Memimpin RSUD H. Abdurrahman Sayoeti dengan komitmen tinggi dalam meningkatkan kualitas pelayanan kesehatan masyarakat.'
  },
  {
    icon: Stethoscope,
    title: 'Kasi Pelayanan',
    name: 'dr. Cici Lia Nopita, MARS',
    description: 'Bertanggung jawab dalam koordinasi dan pengelolaan seluruh kegiatan pelayanan medis rumah sakit.'
  },
  {
    icon: Building,
    title: 'Kabag Tata Usaha',
    name: 'Moh. Masykur,SKM',
    description: 'Mengelola administrasi dan ketatausahaan untuk mendukung operasional rumah sakit secara optimal.'
  },
  {
    icon: Heart,
    title: 'Kasi Penunjang',
    name: 'Amiruddin, SKM',
    description: 'Mengkoordinasikan unit penunjang medis untuk menunjang pelayanan kesehatan yang komprehensif.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mx-auto max-w-4xl text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
            variants={itemVariants}
          >
            Profil RSUD H. Abdurrahman Sayoeti
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            variants={itemVariants}
          >
            RSUD H. Abdurrahman Sayoeti adalah rumah sakit umum tipe D milik Pemerintah Kota Jambi yang berlokasi di Jl. KH Hasan Anang, Kota Jambi. Rumah sakit ini berstatus Badan Layanan Umum Daerah (BLUD) dan dipimpin oleh dr. Hj. Ade Delpita, Sp.PK. RSUD ini fokus melayani kesehatan masyarakat, khususnya di wilayah sekitarnya.
          </motion.p>
          <motion.p 
            className="text-lg text-muted-foreground mt-4"
            variants={itemVariants}
          >
            Dengan komitmen untuk memberikan pelayanan kesehatan yang berkualitas dan terjangkau, RSUD H. Abdurrahman Sayoeti terus berupaya meningkatkan fasilitas dan kompetensi tenaga medis. Rumah sakit ini melayani berbagai jenis pelayanan kesehatan termasuk rawat jalan, rawat inap, dan pelayanan gawat darurat dan lainnya.
          </motion.p>
        </motion.div>

        {/* Leadership Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {leaders.map((leader, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className='group shadow-xs py-2 h-full'>
                <CardContent className='p-8'>
                  <div className='flex flex-col items-center text-center'>
                    <CardDecorator>
                      <leader.icon className='h-6 w-6' aria-hidden />
                    </CardDecorator>
                    <h3 className='mt-6 font-medium text-balance'>{leader.title}</h3>
                    <p className='font-semibold text-primary mt-2'>{leader.name}</p>
                    <p className='text-muted-foreground mt-3 text-sm'>{leader.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
