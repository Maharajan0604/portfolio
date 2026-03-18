import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Stats } from "@/components/sections/stats"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      {/* ── Layered background effects ── */}
      <AnimatedBackground />

      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Page sections ── */}
      <main className="relative z-10 flex flex-col">

        {/* Hero — full viewport */}
        <Hero />

        {/* Divider glow line */}
        <div className="divider-cyan mx-auto w-full max-w-6xl opacity-40" />

        <About />

        <div className="divider-cyan mx-auto w-full max-w-6xl opacity-20" />

        <Skills />

        <div className="divider-cyan mx-auto w-full max-w-6xl opacity-20" />

        <Projects />

        <div className="divider-cyan mx-auto w-full max-w-6xl opacity-20" />

        <Experience />

        <div className="divider-cyan mx-auto w-full max-w-6xl opacity-20" />

        <Stats />

        <div className="divider-cyan mx-auto w-full max-w-6xl opacity-20" />

        <Contact />

      </main>

      {/* ── Footer ── */}
      <Footer />
    </>
  )
}