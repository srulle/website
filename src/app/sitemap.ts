import type { MetadataRoute } from "next"
import { SITE_URL } from "@/config/site-seo"
import { news } from "@/lib/news-data"
import { ppidPages } from "@/lib/ppid-data"
import { services } from "@/lib/service-data"

type SitemapEntry = {
  path: string
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>
  priority: number
}

const lastModified = new Date("2026-06-14")

const staticRoutes: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/landing", changeFrequency: "weekly", priority: 1 },
  { path: "/landing/layanan", changeFrequency: "weekly", priority: 0.9 },
  { path: "/landing/ppid", changeFrequency: "monthly", priority: 0.8 },
  { path: "/landing/informasi/jadwal-dokter", changeFrequency: "weekly", priority: 0.8 },
  { path: "/landing/informasi/alur-pelayanan", changeFrequency: "weekly", priority: 0.8 },
  { path: "/landing/informasi/cara-daftar", changeFrequency: "weekly", priority: 0.8 },
  { path: "/landing/informasi/tempat-tidur", changeFrequency: "daily", priority: 0.8 },
  { path: "/landing/informasi/bpjs", changeFrequency: "weekly", priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map<SitemapEntry>((service) => ({
    path: `/landing/layanan/${service.id}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }))

  const ppidRoutes = ppidPages.map<SitemapEntry>((page) => ({
    path: `/landing/ppid/${page.id}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }))

  const newsRoutes = news.map<SitemapEntry>((newsItem) => ({
    path: `/landing/news/${newsItem.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...ppidRoutes, ...newsRoutes].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
