import { notFound } from 'next/navigation'
import { services } from '@/lib/service-data'
import { ServicePageClient } from './components/service-detail-layout'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function LayananPage({ params }: PageProps) {
  const { id } = await params
  const service = services.find(s => s.id === id)

  if (!service) {
    notFound()
  }

  return <ServicePageClient service={service} />
}
