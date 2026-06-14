import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/seo/json-ld'
import { createPpidJsonLd, createPpidMetadata } from '@/config/site-seo'
import { ppidPages, getPpidPage } from '@/lib/ppid-data'
import { PpidDetailLayout } from './components/ppid-detail-layout'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return ppidPages.map((page) => ({ id: page.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const page = getPpidPage(id)

  if (!page) {
    return {
      title: 'PPID tidak ditemukan',
      robots: { index: false, follow: false },
    }
  }

  return createPpidMetadata(page)
}

export default async function PpidPage({ params }: PageProps) {
  const { id } = await params
  const page = getPpidPage(id)

  if (!page) {
    notFound()
  }

  return (
    <>
      <JsonLd data={createPpidJsonLd(page)} />
      <PpidDetailLayout page={page} />
    </>
  )
}
