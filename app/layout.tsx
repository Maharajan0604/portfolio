import type { Metadata } from "next"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Maharajan Konar — Full Stack Engineer",
  description: "CS Engineer specializing in Full Stack, Cloud, and AI. Building digital experiences that matter.",
  keywords: ["Full Stack Engineer", "React", "Node.js", "AWS", "AI", "Maharajan Konar"],
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
