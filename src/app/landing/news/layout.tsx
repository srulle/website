import type { Metadata } from "next"
import { newsPageMetadata } from "@/config/site-seo"

export const metadata: Metadata = newsPageMetadata

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
