import type { Metadata } from "next"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Maharajan Konar — Full Stack Engineer",
  description:
    "CS Engineer specializing in Full Stack, Cloud, and AI. Building digital experiences that matter.",
  keywords: [
    "Full Stack Engineer",
    "React",
    "Node.js",
    "AWS",
    "AI",
    "Maharajan Konar",
  ],
  authors: [{ name: "Maharajan Konar" }],
  openGraph: {
    title: "Maharajan Konar — Full Stack Engineer",
    description: "CS Engineer specializing in Full Stack, Cloud, and AI.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* ── Preload critical fonts ── */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Syne:wght@400;500;600;700;800&family=Onest:wght@100..900&display=swap"
          rel="stylesheet"
        />
        {/* ── Favicon placeholder — swap with your own ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0a0b12" />
      </head>
      <body className="antialiased">

        {/* ── Custom cursor (above everything) ── */}
        <CustomCursor />

        {/* ── Ambient top glow ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% -10%, oklch(0.80 0.15 200 / 0.10) 0%, transparent 70%)",
          }}
        />

        {/* ── Bottom vignette ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[300px]"
          style={{
            background:
              "linear-gradient(to top, oklch(0.07 0.005 260) 0%, transparent 100%)",
          }}
        />

        {/* ── Main content ── */}
        <SmoothScroll>
          <main className="relative z-10">{children}</main>
        </SmoothScroll>

        <Analytics />
      </body>
    </html>
  )
}