"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById(
      "particle-canvas"
    ) as HTMLCanvasElement;
    if (!canvas) return;
    const maybeCtx = canvas.getContext("2d");
    if (!maybeCtx) return;
    const ctx = maybeCtx as CanvasRenderingContext2D;

    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);

    const mouse = { x: w / 2, y: h / 2 };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const maxParticles = window.innerWidth < 768 ? 40 : 100;
    const particles: { x: number; y: number; r: number; d: number }[] = [];
    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 3 + 1,
        d: Math.random() * maxParticles,
      });
    }

    let angle = 0;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      for (let i = 0; i < maxParticles; i++) {
        const p = particles[i];
        ctx.globalAlpha = 0.6 + Math.random() * 0.4;
        ctx.fillStyle = "#888888";
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      update();
    }

    function update() {
      angle += 0.01;
      for (let i = 0; i < maxParticles; i++) {
        const p = particles[i];

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 100;
        if (dist < repulsionRadius) {
          const force = (repulsionRadius - dist) / repulsionRadius;
          p.x += (dx / dist) * force * 5;
          p.y += (dy / dist) * force * 5;
          p.r = Math.min(6, p.r + 0.1);
        } else {
          p.r = Math.max(1, p.r - 0.05);
        }

        p.y += Math.cos(angle + p.d) + 0.6;
        p.x += Math.sin(angle) * 0.6;

        if (p.x > w + 5 || p.x < -5 || p.y > h) {
          if (i % 3 > 0) {
            particles[i] = { x: Math.random() * w, y: -10, r: p.r, d: p.d };
          } else {
            if (Math.sin(angle) > 0) {
              particles[i] = { x: -5, y: Math.random() * h, r: p.r, d: p.d };
            } else {
              particles[i] = { x: w + 5, y: Math.random() * h, r: p.r, d: p.d };
            }
          }
        }
      }
    }

    const interval = setInterval(draw, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-screen min-h-screen bg-[#f9f6ee] text-[#1c1c1c] dark:bg-[#0f0f0f] dark:text-[#f5f5f5] flex items-center justify-center px-4 py-8 sm:p-10 relative overflow-hidden font-inter">
      <canvas
        id="particle-canvas"
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      />
      <motion.div
        {...({
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1 },
          className: "text-center space-y-6 w-full z-10",
        } as HTMLMotionProps<"div">)}
      >
        <div className="flex flex-col items-center">
          <div className="text-[0.65rem] sm:text-sm text-[#888888] tracking-widest uppercase mb-1 dark:text-gray-400">
            🗂️ ILLUSTRATED COLLECTION
          </div>
          <h1 className="text-4xl sm:text-6xl font-playfair font-bold tracking-wide drop-shadow-[1px_1px_0px_rgba(0,0,0,0.05)]">
            HyewonDex
          </h1>
        </div>

        <p className="text-xs sm:text-xl italic text-gray-700 dark:text-gray-300 leading-relaxed px-4">
          An illustrated record of works, thoughts,
          <br />
          and findings by Hyewon
        </p>

        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 mt-4 px-6 py-2 text-sm sm:text-base border border-[#1c1c1c] dark:border-[#f5f5f5] rounded hover:bg-[#1c1c1c] dark:hover:bg-white hover:text-white dark:hover:text-black hover:scale-[1.02] transition shadow-md"
        >
          <span className="text-lg">🗂️</span>
          <span>Enter the Dex</span>
        </Link>

        <p className="mt-12 text-sm text-gray-400 dark:text-gray-500">
          © 2025 Hyewon. All rights reserved.
        </p>
      </motion.div>
    </main>
  );
}
