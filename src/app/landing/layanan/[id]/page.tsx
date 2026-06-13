import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/seo/json-ld'
import { createServiceJsonLd, createServiceMetadata } from '@/config/site-seo'
import { services } from '@/lib/service-data'
import { ServicePageClient } from './components/service-detail-layout'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const service = services.find((item) => item.id === id)

  if (!service) {
    return {
      title: 'Layanan tidak ditemukan',
      robots: { index: false, follow: false },
    }
  }

  return createServiceMetadata(service)
}

export default async function LayananPage({ params }: PageProps) {
  const { id } = await params
  const service = services.find((item) => item.id === id)

  if (!service) {
    notFound()
  }

  return (
    <>
      <JsonLd data={createServiceJsonLd(service)} />
      <ServicePageClient service={service} />
    </>
  )
}
