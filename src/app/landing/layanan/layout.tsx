import type { Metadata } from "next"
import { layananPageMetadata } from "@/config/site-seo"

export const metadata: Metadata = layananPageMetadata

export default function LayananLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
