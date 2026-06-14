import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { LandingFooter } from '@/app/landing/components/footer'
import { LandingNavbar } from '@/app/landing/components/navbar'
import { ppidMenuSections } from '@/config/landing-navigation'
import { ppidPageMetadata } from '@/config/site-seo'

export const metadata: Metadata = ppidPageMetadata

export default function PpidPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Badge variant="outline" className="mb-4">PPID</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">PPID</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Informasi Publik dan dokumen PPID RSUD H. Abdurrahman Sayoeti Kota Jambi.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ppidMenuSections.map((section) => (
            <section key={section.title} className="rounded-lg border bg-card p-5">
              <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <LandingFooter />
    </div>
  )
}
