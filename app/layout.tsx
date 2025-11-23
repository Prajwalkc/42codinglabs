import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '42 Coding Labs',
  description: '42 Coding Labs - Online coding school teaching multiple tech stacks - mobile development, AI, full-stack web, and UI/UX design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

