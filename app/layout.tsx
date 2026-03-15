import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Andre Alonzo - Full Stack Developer',
  description: 'Professional portfolio showcasing my experience, skills, and projects in web development.',
  keywords: 'developer, full stack, react, typescript, portfolio',
  icons: {
    icon: [
      {
        url: '/nextjs-icon.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/nextjs-icon.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/nextjs-icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/nextjs-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
