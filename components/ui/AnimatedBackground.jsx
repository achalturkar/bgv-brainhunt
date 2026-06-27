"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    /* ── resize ────────────────────────────────────────────────────────────── */
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const W = () => canvas.width;
    const H = () => canvas.height;

    /* ── particles ─────────────────────────────────────────────────────────── */
    const PARTICLE_COUNT = 70;
    const LINE_DIST      = 120;

    const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      x:   Math.random() * window.innerWidth,
      y:   Math.random() * window.innerHeight,
      vx:  (Math.random() - 0.5) * 0.4,
      vy:  (Math.random() - 0.5) * 0.4,
      r:   1.4 + Math.random() * 1.8,
      hue: [210, 190, 160, 38][i % 4],
    }));

    /* ── slow-drifting glow orbs ────────────────────────────────────────────── */
    const orbs = [
      // orange — top-left
      { cx: 0.12, cy: 0.22, r: 0.38, color: "rgba(255,100,30,0.13)", dx: 0.00018, dy: 0.00012 },
      // blue — bottom-right
      { cx: 0.85, cy: 0.72, r: 0.42, color: "rgba(30,140,255,0.11)", dx: -0.00014, dy: -0.00010 },
      // cyan — top-right
      { cx: 0.78, cy: 0.10, r: 0.28, color: "rgba(60,220,200,0.09)", dx: 0.00010, dy: 0.00018 },
      // amber — center-bottom
      { cx: 0.48, cy: 0.85, r: 0.30, color: "rgba(255,200,40,0.07)", dx: -0.00008, dy: -0.00014 },
    ];

    /* ── falling vertical lines ─────────────────────────────────────────────── */
    const vlines = Array.from({ length: 8 }, (_, i) => ({
      x:     (i + 1) / 9,   // fraction of W
      y:    -160 - i * 70,
      speed:  0.55 + i * 0.15,
      len:    110 + i * 18,
    }));

    /* ── scanning horizontal lines ──────────────────────────────────────────── */
    const hlines = Array.from({ length: 4 }, (_, i) => ({
      y:    0.18 + i * 0.20, // fraction of H
      x:   -260,
      speed: 0.45 + i * 0.12,
      len:   180 + i * 20,
    }));

    /* ── shooting stars ─────────────────────────────────────────────────────── */
    const mkStar = () => ({
      x:       Math.random() * 0.7,
      y:       Math.random() * 0.35,
      len:     60 + Math.random() * 70,
      speed:   2.2 + Math.random() * 2,
      life:    0,
      maxLife: 55 + Math.random() * 45,
    });
    const shootingStars = Array.from({ length: 3 }, mkStar);

    /* ── draw helpers ────────────────────────────────────────────────────────── */
    function drawGrid() {
      const size = 72;
      ctx.strokeStyle = "rgba(80,150,255,0.035)";
      ctx.lineWidth   = 0.5;
      for (let x = 0; x < W(); x += size) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H()); ctx.stroke();
      }
      for (let y = 0; y < H(); y += size) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W(), y); ctx.stroke();
      }
    }

    let orbT = 0;
    function drawOrbs() {
      orbs.forEach(o => {
        const cx = (Math.cos(orbT * o.dx * 2000) * 0.06 + o.cx) * W();
        const cy = (Math.sin(orbT * o.dy * 2000) * 0.05 + o.cy) * H();
        const rr = o.r * Math.min(W(), H());
        const g  = ctx.createRadialGradient(cx, cy, 0, cx, cy, rr);
        g.addColorStop(0, o.color);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, rr, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawVLines() {
      vlines.forEach(l => {
        l.y += l.speed;
        if (l.y > H() + l.len) l.y = -l.len - 30;
        const x = l.x * W();
        const g = ctx.createLinearGradient(x, l.y, x, l.y + l.len);
        g.addColorStop(0,   "transparent");
        g.addColorStop(0.5, "rgba(90,170,255,0.18)");
        g.addColorStop(1,   "transparent");
        ctx.strokeStyle = g;
        ctx.lineWidth   = 0.8;
        ctx.beginPath(); ctx.moveTo(x, l.y); ctx.lineTo(x, l.y + l.len); ctx.stroke();
      });
    }

    function drawHLines() {
      hlines.forEach(l => {
        l.x += l.speed;
        if (l.x > W() + l.len) l.x = -l.len;
        const y = l.y * H();
        const g = ctx.createLinearGradient(l.x, y, l.x + l.len, y);
        g.addColorStop(0,   "transparent");
        g.addColorStop(0.5, "rgba(255,160,50,0.16)");
        g.addColorStop(1,   "transparent");
        ctx.strokeStyle = g;
        ctx.lineWidth   = 0.8;
        ctx.beginPath(); ctx.moveTo(l.x, y); ctx.lineTo(l.x + l.len, y); ctx.stroke();
      });
    }

    function drawParticles() {
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W(); if (p.x > W()) p.x = 0;
        if (p.y < 0) p.y = H(); if (p.y > H()) p.y = 0;
      });

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < LINE_DIST) {
            const alpha = (1 - d / LINE_DIST) * 0.20;
            ctx.strokeStyle = `rgba(110,175,255,${alpha})`;
            ctx.lineWidth   = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // dots
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},75%,68%,0.65)`;
        ctx.fill();
      });
    }

    function drawShootingStars() {
      shootingStars.forEach((s, idx) => {
        s.life++;
        s.x += (s.speed / W()) * 1.8;
        s.y += (s.speed / H()) * 0.7;
        const alive = s.life < 12 ? s.life / 12 : s.life > s.maxLife - 12 ? (s.maxLife - s.life) / 12 : 1;
        if (s.life > s.maxLife) {
          shootingStars[idx] = mkStar();
          return;
        }
        const x = s.x * W();
        const y = s.y * H();
        const g = ctx.createLinearGradient(x, y, x - s.len, y - s.len * 0.4);
        g.addColorStop(0, `rgba(255,220,110,${alive * 0.75})`);
        g.addColorStop(0.6, `rgba(255,180,60,${alive * 0.25})`);
        g.addColorStop(1, "transparent");
        ctx.strokeStyle = g;
        ctx.lineWidth   = 1.3;
        ctx.lineCap     = "round";
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - s.len, y - s.len * 0.4); ctx.stroke();

        // star dot
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,240,160,${alive * 0.9})`;
        ctx.fill();
      });
    }

    /* ── raf loop ────────────────────────────────────────────────────────────── */
    let raf;
    function loop(t) {
      orbT = t;
      ctx.clearRect(0, 0, W(), H());
      drawGrid();
      drawOrbs();
      drawVLines();
      drawHLines();
      drawParticles();
      drawShootingStars();
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      {/*
        Canvas-based animated background.
        All elements drawn in JS via requestAnimationFrame:
          • subtle dark-grid overlay
          • 4 slow-drifting radial glow orbs (orange, blue, cyan, amber)
          • 8 falling vertical gradient lines
          • 4 scanning horizontal gradient lines
          • 70 floating particles with connected network lines
          • 3 shooting stars with fade-in/out tails

        Usage: place as first child of a `relative overflow-hidden` container
        with a dark background (e.g. bg-slate-950). Its z-index is 0 so
        content placed after it sits on top.
      */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ zIndex: 0 }}
      />
    </>
  );
}