import { JsonLd } from "@/components/seo/json-ld"
import { hospitalJsonLd, hospitalMetadata } from "@/config/site-seo"
import { LandingPageContent } from "./landing/landing-page-content"

export const metadata = hospitalMetadata

export default function HomePage() {
  return (
    <>
      <JsonLd data={hospitalJsonLd} />
      <LandingPageContent />
    </>
  )
}
