import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { hospitalJsonLd, landingPageMetadata } from "@/config/site-seo"
import { LandingPageContent } from "./landing-page-content"

export const metadata: Metadata = landingPageMetadata

export default function LandingPage() {
  return (
    <>
      <JsonLd data={hospitalJsonLd} />
      <LandingPageContent />
    </>
  )
}
