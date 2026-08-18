"use client";

import { useEffect } from "react";

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return [h * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  h /= 360; s /= 100; l /= 100;
  if (s === 0) {
    const v = Math.round(l * 255).toString(16).padStart(2, "0");
    return `#${v}${v}${v}`;
  }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return "#" + [hue2rgb(p, q, h + 1 / 3), hue2rgb(p, q, h), hue2rgb(p, q, h - 1 / 3)]
    .map(x => Math.round(x * 255).toString(16).padStart(2, "0")).join("");
}

function adjust(hex: string, delta: number): string {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, s, Math.max(0, Math.min(100, l + delta)));
}

export function ColorListener() {
  useEffect(() => {
    function handle(e: MessageEvent) {
      if (e.data?.type !== "palette-update") return;
      const c = e.data.colors;
      const root = document.documentElement;

      const vars: Record<string, string> = {
        "--color-burgundy": c.burgundy,
        "--color-burgundy-deep": c.burgundyDeep,
        "--color-burgundy-soft": c.burgundySoft,
        "--color-cream": c.cream,
        "--color-cream-warm": c.creamWarm,
        "--color-cream-deep": c.creamDeep,
        "--color-paper": c.paper,
        "--color-ink": c.ink,
        "--color-ink-muted": c.inkMuted,
        "--color-ink-soft": c.inkSoft,
        "--color-gold": c.gold,
        "--color-gold-warm": c.goldWarm,
        "--color-border": c.border,
        "--color-peach": c.peach,
        "--color-coral": c.coral,
        "--color-sand": c.sand,
      };

      for (const [k, v] of Object.entries(vars)) {
        root.style.setProperty(k, v);
      }

      document.body.style.backgroundColor = c.cream;

      const paperLum = hexToHsl(c.paper)[2] / 100;
      let paperInk: string, paperInkMuted: string, paperInkSoft: string, sectionLabel: string;

      if (paperLum > 0.5) {
        paperInk = c.creamDeep;
        paperInkMuted = adjust(c.creamDeep, 10);
        paperInkSoft = adjust(c.creamDeep, 25);
        sectionLabel = adjust(c.burgundy, -10);
      } else {
        paperInk = "#FFFFFF";
        paperInkMuted = "#C8C8C8";
        paperInkSoft = "#909090";
        sectionLabel = c.burgundy;
      }

      let style = document.getElementById("palette-overrides");
      if (!style) {
        style = document.createElement("style");
        style.id = "palette-overrides";
        document.head.appendChild(style);
      }

      style.textContent = `
        header {
          background-color: ${c.creamDeep} !important;
        }
        .bg-paper, .paper-ctx {
          --color-ink: ${paperInk} !important;
          --color-ink-muted: ${paperInkMuted} !important;
          --color-ink-soft: ${paperInkSoft} !important;
          color: ${paperInk} !important;
        }
        .paper-ctx .section-label {
          color: ${sectionLabel} !important;
        }
        .paper-ctx .highlight em {
          color: ${sectionLabel} !important;
        }
        .bg-cream-warm {
          background-color: ${c.creamWarm} !important;
        }
        .bg-cream-deep {
          background-color: ${c.creamDeep} !important;
        }
      `;
    }

    window.addEventListener("message", handle);
    return () => window.removeEventListener("message", handle);
  }, []);

  return null;
}
