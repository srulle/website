import type { Metadata } from "next"
import { informasiPageMetadata } from "@/config/site-seo"

export const metadata: Metadata = informasiPageMetadata

export default function InformasiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
