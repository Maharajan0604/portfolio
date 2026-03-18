"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
  hue: number   // 195–210 cyan range
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []
    let W = 0, H = 0

    /* ── Resize ── */
    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    /* ── Spawn a single particle ── */
    const spawn = (): Particle => ({
      x:       Math.random() * W,
      y:       Math.random() * H,
      vx:      (Math.random() - 0.5) * 0.25,
      vy:      -Math.random() * 0.35 - 0.08,
      size:    Math.random() * 1.4 + 0.2,
      opacity: 0,
      life:    0,
      maxLife: Math.random() * 320 + 180,
      hue:     195 + Math.random() * 20,          // cyan 195 – 215
    })

    /* Seed with spread-out life values so they don't all fade at once */
    for (let i = 0; i < 70; i++) {
      const p = spawn()
      p.life = Math.random() * p.maxLife
      particles.push(p)
    }

    /* ── Draw loop ── */
    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      /* ── 1. Deep vignette ── */
      const vignette = ctx.createRadialGradient(
        W / 2, H / 2, 0,
        W / 2, H / 2, Math.max(W, H) * 0.72
      )
      vignette.addColorStop(0, "transparent")
      vignette.addColorStop(1, "rgba(7, 8, 18, 0.65)")
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, W, H)

      /* ── 2. Cyan orb — top centre ── */
      const orb1 = ctx.createRadialGradient(W * 0.50, -H * 0.05, 0, W * 0.50, -H * 0.05, W * 0.55)
      orb1.addColorStop(0, "rgba(0, 210, 255, 0.055)")
      orb1.addColorStop(1, "transparent")
      ctx.fillStyle = orb1
      ctx.fillRect(0, 0, W, H)

      /* ── 3. Cyan orb — bottom left ── */
      const orb2 = ctx.createRadialGradient(W * 0.08, H * 0.90, 0, W * 0.08, H * 0.90, W * 0.32)
      orb2.addColorStop(0, "rgba(0, 200, 240, 0.04)")
      orb2.addColorStop(1, "transparent")
      ctx.fillStyle = orb2
      ctx.fillRect(0, 0, W, H)

      /* ── 4. Green orb — bottom right ── */
      const orb3 = ctx.createRadialGradient(W * 0.92, H * 0.88, 0, W * 0.92, H * 0.88, W * 0.28)
      orb3.addColorStop(0, "rgba(0, 220, 130, 0.03)")
      orb3.addColorStop(1, "transparent")
      ctx.fillStyle = orb3
      ctx.fillRect(0, 0, W, H)

      /* ── 5. Particles ── */
      particles.forEach((p, i) => {
        p.life++
        p.x += p.vx
        p.y += p.vy

        const progress = p.life / p.maxLife
        p.opacity =
          progress < 0.15
            ? progress / 0.15
            : progress > 0.78
            ? 1 - (progress - 0.78) / 0.22
            : 1

        if (p.life >= p.maxLife) particles[i] = spawn()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        // Use actual CSS-parseable color string
        ctx.fillStyle = `hsla(${p.hue}, 85%, 65%, ${p.opacity * 0.30})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
