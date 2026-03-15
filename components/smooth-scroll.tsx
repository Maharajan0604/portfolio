// app/layout.tsx
import { SmoothScroll } from "@/components/smooth-scroll"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${fontSans.variable} ${fontMono.variable}`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}