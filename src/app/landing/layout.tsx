import type { Metadata } from "next"
import { landingPageMetadata } from "@/config/site-seo"

export const metadata: Metadata = landingPageMetadata

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
