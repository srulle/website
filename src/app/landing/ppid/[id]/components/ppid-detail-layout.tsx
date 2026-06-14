"use client"

import React from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckIcon,
  ExternalLink,
  FileText,
  MoveLeft,
  Target,
  ClipboardList,
  FileCheck,
  Wallet,
  Coins,
  ChartBar,
  Scale,
  BookOpen,
  BookMarked,
  Signature,
  ClipboardCheck,
  FileBarChart,
  type LucideIcon,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { PpidPage } from '@/lib/ppid-data'
import { LandingNavbar } from '@/app/landing/components/navbar'
import { LandingThemeCustomizer } from '@/app/landing/components/landing-theme-customizer'

const iconMap: Record<string, LucideIcon> = {
  'file-text': FileText,
  target: Target,
  'clipboard-list': ClipboardList,
  'file-check': FileCheck,
  wallet: Wallet,
  coins: Coins,
  'chart-bar': ChartBar,
  scale: Scale,
  'book-open': BookOpen,
  'book-marked': BookMarked,
  signature: Signature,
  'clipboard-check': ClipboardCheck,
  'file-bar-chart': FileBarChart,
}

interface PpidDetailLayoutProps {
  page: PpidPage
}

export function PpidDetailLayout({ page }: PpidDetailLayoutProps) {
  const [themeCustomizerOpen, setThemeCustomizerOpen] = React.useState(false)
  const Icon = iconMap[page.iconName] ?? FileText
  const documents = page.documents ?? (page.documentHref ? [{ href: page.documentHref, label: page.documentLabel }] : [])

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar onThemeCustomizerClick={() => setThemeCustomizerOpen(true)} />
      <LandingThemeCustomizer open={themeCustomizerOpen} onOpenChange={setThemeCustomizerOpen} />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => window.history.back()}>
            <MoveLeft className="mr-2 h-4 w-4" />
            Kembali
          </Button>
        </div>

        <div className="mb-8">
          <Badge variant="outline" className="mb-4">PPID</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {page.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {page.description}
          </p>
        </div>

        {documents.length === 0 && (
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <Icon className="h-44 w-44 text-primary/35" />
            </div>
          </div>
        )}

        {documents.length > 0 ? (
          <div className="mb-8 rounded-lg border bg-card p-5">
            <h2 className="text-lg font-semibold mb-3">Dokumen Terkait</h2>
            <div className="space-y-6">
              {documents.map((document) => (
                <div key={document.href}>
                  <a
                    href={document.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Lihat dokumen
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  {document.label && <p className="mt-1 text-sm text-muted-foreground">{document.label}</p>}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-8 rounded-lg border bg-card p-5 text-center text-sm text-muted-foreground">
            Tidak ada dokumen terkait saat ini
          </div>
        )}

        {documents.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-6">Informasi Dokumen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-lg border bg-card"
                >
                  <CheckIcon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
            {page.fullContent}
          </div>
        </div>

        <div className="mt-10">
          <Link href="/landing">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
