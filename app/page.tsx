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
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
