"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches
    if (isMobile) return

    const dot = dotRef.current
    const ringEl = ringRef.current
    if (!dot || !ringEl) return

    document.body.style.cursor = "none"

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
    }

    const onEnter = () => {
      ringEl.style.width = "56px"
      ringEl.style.height = "56px"
      ringEl.style.borderColor = "oklch(0.78 0.12 78 / 0.8)"
    }

    const onLeave = () => {
      ringEl.style.width = "32px"
      ringEl.style.height = "32px"
      ringEl.style.borderColor = "oklch(0.78 0.12 78 / 0.5)"
    }

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12)
      ringEl.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`
      raf.current = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener("mousemove", onMove)

    const interactables = document.querySelectorAll("a, button, [data-cursor-hover]")
    interactables.forEach(el => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf.current)
      document.body.style.cursor = ""
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
