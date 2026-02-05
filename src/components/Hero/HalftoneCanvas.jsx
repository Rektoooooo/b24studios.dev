import { useEffect, useRef } from 'react'

export default function HalftoneCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    const DOT_SPACING = 20
    const BASE_RADIUS = 1.5
    const MAX_RADIUS = 5
    const DOT_COLOR = 'rgba(255, 255, 255, 0.15)'

    // Two blob centers that drift slowly
    const blobs = [
      { x: 0.3, y: 0.2, vx: 0.0003, vy: 0.0002, radius: 0.25 },
      { x: 0.7, y: 0.4, vx: -0.0002, vy: 0.0003, radius: 0.2 },
    ]

    function smoothstep(edge0, edge1, x) {
      const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)))
      return t * t * (3 - 2 * t)
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const w = window.innerWidth
      const h = document.documentElement.scrollHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function animate() {
      time += 1
      const w = window.innerWidth
      const h = document.documentElement.scrollHeight

      ctx.clearRect(0, 0, w, h)

      // Update blob positions with gentle sine drift
      for (const blob of blobs) {
        blob.x += blob.vx + Math.sin(time * 0.005) * 0.0001
        blob.y += blob.vy + Math.cos(time * 0.004) * 0.0001

        if (blob.x < 0.1 || blob.x > 0.9) blob.vx *= -1
        if (blob.y < 0.1 || blob.y > 0.9) blob.vy *= -1

        blob.x = Math.max(0.05, Math.min(0.95, blob.x))
        blob.y = Math.max(0.05, Math.min(0.95, blob.y))
      }

      // Dots are full in the hero, fade out into the content
      const vh = window.innerHeight
      const fadeOutStart = vh * 0.7    // start fading near bottom of hero
      const fadeOutEnd = vh * 1.4      // fully gone a bit into the content

      // Draw dot grid
      for (let x = DOT_SPACING / 2; x < w; x += DOT_SPACING) {
        for (let y = DOT_SPACING / 2; y < h; y += DOT_SPACING) {
          // Skip dots that are fully faded
          if (y > fadeOutEnd) continue

          // Per-dot fade: full at top, smoothly disappear downward
          const fade = 1 - smoothstep(fadeOutStart, fadeOutEnd, y)
          if (fade < 0.01) continue

          let influence = 0

          for (const blob of blobs) {
            const bx = blob.x * w
            const by = blob.y * h
            const dist = Math.sqrt((x - bx) ** 2 + (y - by) ** 2)
            const blobRadius = blob.radius * Math.min(w, h)
            influence += smoothstep(blobRadius, 0, dist)
          }

          influence = Math.min(influence, 1)
          const radius = BASE_RADIUS + influence * (MAX_RADIUS - BASE_RADIUS)

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${0.15 * fade})`
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)

    // Re-measure when page height changes
    const observer = new ResizeObserver(resize)
    observer.observe(document.body)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
