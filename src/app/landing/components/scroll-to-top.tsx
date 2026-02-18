"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when hero section is fully scrolled past
  useEffect(() => {
    const toggleVisibility = () => {
      // Get the hero section element
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        const scrollPosition = window.scrollY
        
        // Show button only when scroll position has passed the entire hero section height
        if (scrollPosition > heroHeight) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    // Run once on mount
    toggleVisibility()
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg cursor-pointer animate-bounce"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}
