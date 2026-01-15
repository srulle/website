import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const logosDir = path.join(process.cwd(), 'public/logo/svg')
    const files = await fs.readdir(logosDir)
    const svgFiles = files.filter(file => file.endsWith('.svg'))
    const logos = svgFiles.map(file => ({
      name: file.replace('.svg', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      src: `/logo/svg/${file}`
    }))
    return NextResponse.json(logos)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read logos' }, { status: 500 })
  }
}