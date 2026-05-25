import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ASTORiA Development Group | Timeless Real Estate Development',
  description: 'Astoria Development Group creates refined residential, commercial, and mixed-use environments shaped by design, discipline, and lasting value.',
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
