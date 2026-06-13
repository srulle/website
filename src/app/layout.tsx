import type { Metadata } from "next"
import "./globals.css"

import NextTopLoader from "nextjs-toploader"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarConfigProvider } from "@/contexts/sidebar-context"
import { inter, geist } from "@/lib/fonts"
import SmoothScroll from "@/components/smooth-scroll"
import { hospitalMetadata } from "@/config/site-seo"

export const metadata: Metadata = hospitalMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${geist.variable} ${inter.variable} antialiased`}>
      <body className={geist.className}>
        <NextTopLoader
          color="#2299DD"
          height={3}
          crawl={true}
          showSpinner={true}
          showForHashAnchor={false}
          zIndex={1600}
        />
        <SmoothScroll />
        <ThemeProvider defaultTheme="light" storageKey="nextjs-ui-theme">
          <SidebarConfigProvider>
            {children}
          </SidebarConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
