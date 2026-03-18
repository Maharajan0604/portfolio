"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const rafId   = useRef<number>(0)

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return

    const dot    = dotRef.current
    const ringEl = ringRef.current
    if (!dot || !ringEl) return

    document.body.style.cursor = "none"

    /* ── Mouse move → dot snaps instantly ── */
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX - 2.5}px, ${e.clientY - 2.5}px)`
    }

    /* ── Hover states ── */
    const onEnter = () => {
      ringEl.classList.add("hovering")
      dot.style.transform += " scale(0)"
      dot.style.opacity = "0"
    }

    const onLeave = () => {
      ringEl.classList.remove("hovering")
      dot.style.opacity = "1"
    }

    /* ── Ring lerp animation ── */
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.10)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.10)
      ringEl.style.transform =
        `translate(${ring.current.x - 14}px, ${ring.current.y - 14}px)`
      rafId.current = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener("mousemove", onMove)

    /* ── Attach to all interactables ── */
    const targets = document.querySelectorAll("a, button, [data-cursor-hover]")
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener("mousemove", onMove)
      document.body.style.cursor = ""
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{ transition: "opacity 0.2s ease" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block"
      />
    </>
  )
}
