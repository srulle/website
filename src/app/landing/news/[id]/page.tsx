import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { JsonLd } from '@/components/seo/json-ld'
import { LandingNavbar } from '@/app/landing/components/navbar'
import { createNewsArticleJsonLd, createNewsMetadata, type SeoNewsItem } from '@/config/site-seo'
import { news } from '@/lib/news-data'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

function toSeoNewsItem(item: (typeof news)[number]): SeoNewsItem {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    date: item.date,
    category: item.category,
    image: item.image,
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const newsItem = news.find((item) => item.id === parseInt(id))

  if (!newsItem) {
    return {
      title: 'Berita tidak ditemukan',
      robots: { index: false, follow: false },
    }
  }

  return createNewsMetadata(toSeoNewsItem(newsItem))
}

export default async function NewsPage({ params }: PageProps) {
  const { id } = await params
  const newsItem = news.find((item) => item.id === parseInt(id))

  if (!newsItem) {
    notFound()
  }

  const seoNewsItem = toSeoNewsItem(newsItem)

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={createNewsArticleJsonLd(seoNewsItem)} />
      <LandingNavbar />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/landing">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>

        {/* News Header */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-4">{newsItem.category}</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {newsItem.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {newsItem.date}
          </p>
        </div>

        {/* News Image */}
        <div className="aspect-video mb-8 overflow-hidden rounded-lg">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        {/* News Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {newsItem.description}
          </p>
          <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
            {newsItem.fullContent}
          </div>
        </div>
      </div>
    </div>
  )
}