"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
  friction: number;
  flicker: boolean;
  trail: { x: number; y: number }[];
}

interface BurstGlow {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

// Festive Diwali Color Palettes: Gold, Orange, Ruby, Saffron, Silver & Emerald
const FESTIVE_COLORS = [
  "#FFD700", // Bright Gold
  "#FFA500", // Deep Orange
  "#FF4500", // Fiery Red-Orange
  "#FF1493", // Festive Pink
  "#00FFCC", // Peacock Turquoise
  "#FFEA00", // Sparkler Yellow
  "#FFFFFF", // Diamond White
  "#00E676", // Festive Green
];

export function DiwaliCrackers() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const glowsRef = useRef<BurstGlow[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const isRunningRef = useRef<boolean>(false);
  const burstCountRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Handle high-DPI screens cleanly
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    // Animation Loop (runs ONLY when active particles exist)
    const updateAndDraw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // 1. Draw glowing bursts at click points
      for (let i = glowsRef.current.length - 1; i >= 0; i--) {
        const glow = glowsRef.current[i];
        glow.radius += (glow.maxRadius - glow.radius) * 0.15;
        glow.alpha -= 0.05;

        if (glow.alpha <= 0) {
          glowsRef.current.splice(i, 1);
          continue;
        }

        const gradient = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, glow.radius);
        gradient.addColorStop(
          0,
          glow.color.replace(")", `, ${glow.alpha * 0.8})`).replace("rgb", "rgba"),
        );
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(glow.x, glow.y, glow.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw and update Cracker Particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];

        // Store trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 4) {
          p.trail.shift();
        }

        // Physics
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        const currentAlpha = p.flicker && Math.random() > 0.4 ? p.alpha * 0.3 : p.alpha;

        // Draw sparkler trail
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let j = 1; j < p.trail.length; j++) {
            ctx.lineTo(p.trail[j].x, p.trail[j].y);
          }
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = currentAlpha * 0.45;
          ctx.lineWidth = p.size * 0.8;
          ctx.stroke();
        }

        // Draw particle head with bright core
        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra white-hot glowing center
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      ctx.globalAlpha = 1;

      // Keep running if particles or glows exist, otherwise sleep loop
      if (particlesRef.current.length > 0 || glowsRef.current.length > 0) {
        animFrameRef.current = requestAnimationFrame(updateAndDraw);
      } else {
        isRunningRef.current = false;
        animFrameRef.current = null;
      }
    };

    const startLoopIfNeeded = () => {
      if (!isRunningRef.current) {
        isRunningRef.current = true;
        animFrameRef.current = requestAnimationFrame(updateAndDraw);
      }
    };

    // Spawn Cracker Effects
    const createCrackerBurst = (x: number, y: number) => {
      burstCountRef.current += 1;
      const type = burstCountRef.current % 3; // 0 = Anar (fountain), 1 = Phuljhadi (sparkler), 2 = Chakri / Sky Burst

      // Add central glow
      glowsRef.current.push({
        x,
        y,
        radius: 10,
        maxRadius: 70,
        alpha: 0.6,
        color: "rgb(255, 200, 50)",
      });

      if (type === 0) {
        // ── Type 1: ANAR (Fountain Cracker) ──
        // Shoots upward like a Diwali Anar fountain, showering outward
        const count = 35 + Math.floor(Math.random() * 15);
        for (let i = 0; i < count; i++) {
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.3; // -90 deg with spread
          const speed = 4 + Math.random() * 9;
          const color = FESTIVE_COLORS[Math.floor(Math.random() * FESTIVE_COLORS.length)];

          particlesRef.current.push({
            x,
            y,
            vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 2,
            vy: Math.sin(angle) * speed,
            size: 1.8 + Math.random() * 2.5,
            color,
            alpha: 1,
            decay: 0.016 + Math.random() * 0.02,
            gravity: 0.18 + Math.random() * 0.08,
            friction: 0.98,
            flicker: true,
            trail: [],
          });
        }
      } else if (type === 1) {
        // ── Type 2: PHULJHADI (Sparkler) ──
        // Random 360-degree sparkling crackling embers
        const count = 40 + Math.floor(Math.random() * 15);
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 1.5 + Math.random() * 7;
          const color =
            Math.random() > 0.4
              ? "#FFD700"
              : FESTIVE_COLORS[Math.floor(Math.random() * FESTIVE_COLORS.length)];

          particlesRef.current.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: 1.4 + Math.random() * 2.2,
            color,
            alpha: 1,
            decay: 0.018 + Math.random() * 0.022,
            gravity: 0.06,
            friction: 0.96,
            flicker: true,
            trail: [],
          });
        }
      } else {
        // ── Type 3: CHAKRI / SKY FIREWORK BURST ──
        // High-velocity blooming circle of festive sparks
        const count = 45 + Math.floor(Math.random() * 15);
        const baseColor = FESTIVE_COLORS[Math.floor(Math.random() * FESTIVE_COLORS.length)];
        const secondaryColor = FESTIVE_COLORS[Math.floor(Math.random() * FESTIVE_COLORS.length)];

        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 3 + Math.random() * 8;
          const color = i % 2 === 0 ? baseColor : secondaryColor;

          particlesRef.current.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: 2 + Math.random() * 2.2,
            color,
            alpha: 1,
            decay: 0.014 + Math.random() * 0.018,
            gravity: 0.12,
            friction: 0.97,
            flicker: Math.random() > 0.3,
            trail: [],
          });
        }
      }

      startLoopIfNeeded();
    };

    // Listen to all pointer/click events globally
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ("touches" in e) {
        if (e.touches && e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        }
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      if (clientX && clientY) {
        createCrackerBurst(clientX, clientY);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointerdown", handlePointerDown);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99] h-full w-full select-none"
    />
  );
}
