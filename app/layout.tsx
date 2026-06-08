import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'School Redirect',
  description: 'Blue, black, pink, and yellow geometric redirect page',
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
