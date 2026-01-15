import { Inter, Geist } from 'next/font/google'

// Configure Geist font as primary
export const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
})

// Configure Inter font as secondary/fallback
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
