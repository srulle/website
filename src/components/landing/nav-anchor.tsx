"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

interface NavAnchorProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavAnchor({ href, children, className }: NavAnchorProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      const targetEl = document.querySelector(href)

      if (targetEl) {
        e.preventDefault()
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      // Anchor not found on current page → navigate to landing first, then scroll
      e.preventDefault()
      router.push('/landing' + href)
      return
    }

    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
