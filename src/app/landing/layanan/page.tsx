import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { services, getServiceIcon } from '@/lib/service-data'

export function metadata() {
  return {
    title: 'Layanan & Fasilitas | RSUD H. Abdurrahman Sayoeti',
    description: 'Layanan dan fasilitas kesehatan terbaik di RSUD H. Abdurrahman Sayoeti. Rawat Jalan, Rawat Inap, Gawat Darurat, dan lainnya.',
  }
}

export default function LayananPage() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="outline" className="mb-4">Layanan & Fasilitas</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Layanan Terbaik untuk Anda
            </h2>
            <p className="text-lg text-muted-foreground">
              RSUD H. Abdurrahman Sayoeti menyediakan berbagai layanan kesehatan dan fasilitas yang lengkap untuk melayani kebutuhan kesehatan masyarakat dengan profesional dan berkualitas.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = getServiceIcon(service.iconName)
              return (
                <Card
                  key={service.id}
                  className="group overflow-hidden py-0 shadow-xs cursor-pointer hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Icon placeholder area */}
                    <div className="aspect-[4/3] flex items-center justify-center bg-muted/50 group-hover:bg-muted/80 transition-colors">
                      <Icon className="h-16 w-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                        {service.description}
                      </p>
                      <Link
                        href={`/landing/layanan/${service.id}`}
                        className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer text-sm mt-auto"
                      >
                        Detail Layanan
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
