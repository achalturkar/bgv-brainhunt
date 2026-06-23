'use client'
import { useEffect, useRef } from 'react'

export default function Particles({ density = 60 }) {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, raf
    const resize = () => { const r = canvas.getBoundingClientRect(); canvas.width = r.width * devicePixelRatio; canvas.height = r.height * devicePixelRatio; w = canvas.width; h = canvas.height }
    resize(); window.addEventListener('resize', resize)
    const pts = Array.from({ length: density }).map(() => ({ x: Math.random()*w, y: Math.random()*h, vx: (Math.random()-0.5)*0.35, vy: (Math.random()-0.5)*0.35, r: Math.random()*1.6+0.6 }))
    const draw = () => {
      ctx.clearRect(0,0,w,h)
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fillStyle = 'rgba(0,82,204,0.55)'; ctx.fill()
      }
      for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++) {
        const a=pts[i], b=pts[j]; const dx=a.x-b.x, dy=a.y-b.y; const d=Math.hypot(dx,dy)
        if (d < 140) { ctx.beginPath(); ctx.strokeStyle = `rgba(0,102,255,${0.18*(1-d/140)})`; ctx.lineWidth = 0.6; ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke() }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [density])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
}
