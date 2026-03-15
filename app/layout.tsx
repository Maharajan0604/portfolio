import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { Navbar } from '@/components/navbar'
import { AnimatedBackground } from '@/components/animated-background'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Maharajan Konar | Full Stack Developer',
  description: 'Maharajan Konar - Full Stack Developer from Mumbai, specializing in React, Next.js, and AI-driven solutions.',
  keywords: ['Maharajan Konar', 'Full Stack Developer', 'React', 'Next.js', 'AI Engineering', 'Mumbai'],
  authors: [{ name: 'Maharajan Konar' }],
  creator: 'Maharajan Konar',
}

export const viewport: Viewport = {
  themeColor: '#030303',
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
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground`}>
        <CustomCursor />
        <AnimatedBackground />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}