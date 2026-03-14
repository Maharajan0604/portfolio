import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Maharajan Konar | Full Stack Developer',
  description: 'Maharajan Konar - Full Stack Developer from Mumbai, building robust web applications with React, Next.js and Node.js.',
  keywords: ['Maharajan Konar', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Maharajan Konar' }],
  creator: 'Maharajan Konar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Maharajan Konar - Portfolio',
    title: 'Maharajan Konar | Full Stack Developer',
    description: 'Maharajan Konar - Full Stack Developer from Mumbai, building robust web applications with React, Next.js and Node.js.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maharajan Konar | Full Stack Developer',
    description: 'Maharajan Konar - Full Stack Developer from Mumbai, building robust web applications with React, Next.js and Node.js.',
    creator: '@maharajan_konar',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1219',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
