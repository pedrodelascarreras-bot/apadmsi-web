"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ================================================================
   Color utilities
   ================================================================ */

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
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue2rgb = (t: number) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  return "#" + [hue2rgb(h + 1 / 3), hue2rgb(h), hue2rgb(h - 1 / 3)]
    .map(x => Math.round(x * 255).toString(16).padStart(2, "0")).join("");
}

function adj(hex: string, delta: number): string {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, s, Math.max(0, Math.min(100, l + delta)));
}

function lum(hex: string): number {
  return hexToHsl(hex)[2] / 100;
}

/* ================================================================
   Types & Presets
   ================================================================ */

type Colors = {
  cream: string; creamWarm: string; creamDeep: string; paper: string;
  burgundy: string; burgundyDeep: string; burgundySoft: string;
  ink: string; inkMuted: string; inkSoft: string;
  gold: string; goldWarm: string;
  border: string; peach: string; coral: string; sand: string;
};

type Preset = { name: string; colors: Colors };

const P: Preset[] = [
  {
    name: "Teal y Oro (actual)",
    colors: {
      cream: "#4A7B78", creamWarm: "#3D6C69", creamDeep: "#2F5C59", paper: "#F5F1E8",
      burgundy: "#C9AB6E", burgundyDeep: "#A8894D", burgundySoft: "#D4BC82",
      ink: "#FFFFFF", inkMuted: "#F0EBE0", inkSoft: "#E0D8C8",
      gold: "#C9AB6E", goldWarm: "#D4BC82",
      border: "#5A8E8B", peach: "#C9AB6E", coral: "#BDA05F", sand: "#3D6C69",
    },
  },
  {
    name: "Crema y Borravino",
    colors: {
      cream: "#FAF6F0", creamWarm: "#F0E8D8", creamDeep: "#6B1A2A", paper: "#FFFFFF",
      burgundy: "#8B1A2A", burgundyDeep: "#6B0A18", burgundySoft: "#B84050",
      ink: "#2A1A10", inkMuted: "#5A4A3A", inkSoft: "#8A7A6A",
      gold: "#C9A961", goldWarm: "#D4BC82",
      border: "#E0D4C0", peach: "#C9A961", coral: "#B89850", sand: "#F0E8D8",
    },
  },
  {
    name: "Azul Noche",
    colors: {
      cream: "#1B2744", creamWarm: "#162038", creamDeep: "#0F1628", paper: "#F5F0EB",
      burgundy: "#D4A574", burgundyDeep: "#B88A5C", burgundySoft: "#E0BE96",
      ink: "#FFFFFF", inkMuted: "#C0CBE0", inkSoft: "#8898B8",
      gold: "#D4A574", goldWarm: "#E0BE96",
      border: "#2A3854", peach: "#D4A574", coral: "#C09060", sand: "#162038",
    },
  },
  {
    name: "Bosque y Ambar",
    colors: {
      cream: "#1E3A2E", creamWarm: "#183024", creamDeep: "#0F241A", paper: "#F5F0E5",
      burgundy: "#D4A24C", burgundyDeep: "#B88830", burgundySoft: "#E0BE78",
      ink: "#FFFFFF", inkMuted: "#C0D8C8", inkSoft: "#88B098",
      gold: "#D4A24C", goldWarm: "#E0BE78",
      border: "#2E5A44", peach: "#D4A24C", coral: "#C09030", sand: "#183024",
    },
  },
  {
    name: "Rosa Antiguo",
    colors: {
      cream: "#F0E0E2", creamWarm: "#E4D0D4", creamDeep: "#7A3050", paper: "#FFFFFF",
      burgundy: "#7A3050", burgundyDeep: "#5C2038", burgundySoft: "#A06078",
      ink: "#2A1820", inkMuted: "#5A4850", inkSoft: "#8A7880",
      gold: "#C9A961", goldWarm: "#D4BC82",
      border: "#D4B8C0", peach: "#C9A961", coral: "#B89850", sand: "#E4D0D4",
    },
  },
  {
    name: "Arena y Verde",
    colors: {
      cream: "#EDE4D0", creamWarm: "#DED4BC", creamDeep: "#2D5A3E", paper: "#FAF6F0",
      burgundy: "#2D5A3E", burgundyDeep: "#1A4A2E", burgundySoft: "#4A7A5E",
      ink: "#1A1A10", inkMuted: "#4A4A38", inkSoft: "#7A7A68",
      gold: "#C9A961", goldWarm: "#D4BC82",
      border: "#C8BCA0", peach: "#C9A961", coral: "#B89850", sand: "#DED4BC",
    },
  },
  {
    name: "Lavanda",
    colors: {
      cream: "#E8E0F0", creamWarm: "#DCD0E8", creamDeep: "#5A3E80", paper: "#FFFFFF",
      burgundy: "#6A4A8A", burgundyDeep: "#4E3068", burgundySoft: "#8A70A8",
      ink: "#1A1520", inkMuted: "#4A4058", inkSoft: "#7A7088",
      gold: "#C9A961", goldWarm: "#D4BC82",
      border: "#C0B0D0", peach: "#C9A961", coral: "#B89850", sand: "#DCD0E8",
    },
  },
  {
    name: "Cielo y Coral",
    colors: {
      cream: "#E0ECF5", creamWarm: "#D0E0ED", creamDeep: "#2A5070", paper: "#FFFFFF",
      burgundy: "#D06040", burgundyDeep: "#B04830", burgundySoft: "#E08868",
      ink: "#1A2030", inkMuted: "#4A5068", inkSoft: "#7A8098",
      gold: "#D4A24C", goldWarm: "#E0BE78",
      border: "#B0C8D8", peach: "#D4A24C", coral: "#C05838", sand: "#D0E0ED",
    },
  },
  {
    name: "Menta y Violeta",
    colors: {
      cream: "#E0F0E8", creamWarm: "#D0E8DC", creamDeep: "#4A3068", paper: "#FFFFFF",
      burgundy: "#6A4A8A", burgundyDeep: "#4E3068", burgundySoft: "#8A70A8",
      ink: "#1A2020", inkMuted: "#405050", inkSoft: "#708080",
      gold: "#C9A961", goldWarm: "#D4BC82",
      border: "#A8C8B8", peach: "#C9A961", coral: "#B89850", sand: "#D0E8DC",
    },
  },
  {
    name: "Melocoton y Azul",
    colors: {
      cream: "#F5E8E0", creamWarm: "#EDDCCF", creamDeep: "#2A4A6A", paper: "#FFFFFF",
      burgundy: "#2A5A8A", burgundyDeep: "#1A4A70", burgundySoft: "#4A7AA8",
      ink: "#1A1510", inkMuted: "#4A4038", inkSoft: "#7A7068",
      gold: "#D4A574", goldWarm: "#E0C09A",
      border: "#D0C0B0", peach: "#D4A574", coral: "#C09060", sand: "#EDDCCF",
    },
  },
  {
    name: "Gris y Borgona",
    colors: {
      cream: "#E8E6E4", creamWarm: "#DCDAD6", creamDeep: "#6A1828", paper: "#FFFFFF",
      burgundy: "#8A2030", burgundyDeep: "#6A1020", burgundySoft: "#B04050",
      ink: "#1A1A1A", inkMuted: "#4A4A4A", inkSoft: "#7A7A7A",
      gold: "#C9A961", goldWarm: "#D4BC82",
      border: "#C0BCBA", peach: "#C9A961", coral: "#B89850", sand: "#DCDAD6",
    },
  },
  {
    name: "Tierra y Crema",
    colors: {
      cream: "#4A3020", creamWarm: "#3E2818", creamDeep: "#2A1A10", paper: "#F5EDE0",
      burgundy: "#D4BC82", burgundyDeep: "#B8A060", burgundySoft: "#E0D0A0",
      ink: "#FFFFFF", inkMuted: "#E0D8C8", inkSoft: "#B8A898",
      gold: "#D4BC82", goldWarm: "#E0D0A0",
      border: "#6A5040", peach: "#D4BC82", coral: "#C0A870", sand: "#3E2818",
    },
  },
];

/* ================================================================
   Derivation
   ================================================================ */

function derive(colors: Colors, key: string): Colors {
  const c = { ...colors };
  if (key === "cream") {
    const light = lum(c.cream) > 0.5;
    c.creamWarm = adj(c.cream, light ? -5 : -3);
    c.creamDeep = adj(c.cream, light ? -15 : -8);
    c.sand = c.creamWarm;
    c.border = adj(c.cream, light ? -12 : 12);
  }
  if (key === "burgundy") {
    c.burgundyDeep = adj(c.burgundy, -12);
    c.burgundySoft = adj(c.burgundy, 15);
    c.peach = c.burgundy;
    c.coral = adj(c.burgundy, -8);
  }
  if (key === "gold") {
    c.goldWarm = adj(c.gold, 10);
  }
  if (key === "ink") {
    const light = lum(c.ink) > 0.5;
    c.inkMuted = adj(c.ink, light ? -8 : 20);
    c.inkSoft = adj(c.ink, light ? -20 : 35);
  }
  return c;
}

/* ================================================================
   Sub-components
   ================================================================ */

function ColorRow({ label, value, onChange }: {
  label: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <span style={{ flex: 1, fontSize: 13, color: "#374151", fontWeight: 450 }}>{label}</span>
      <label style={{
        width: 28, height: 28, borderRadius: "50%", overflow: "hidden",
        border: "2px solid #E5E7EB", cursor: "pointer", flexShrink: 0,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
      }}>
        <input type="color" value={value} onChange={e => onChange(e.target.value)}
          style={{ width: 36, height: 36, border: "none", padding: 0, cursor: "pointer" }} />
      </label>
      <input type="text" value={value.toUpperCase()}
        onChange={e => {
          let v = e.target.value.trim();
          if (!v.startsWith("#")) v = "#" + v;
          if (/^#[0-9a-fA-F]{6}$/.test(v)) onChange(v.toLowerCase());
        }}
        style={{
          width: 78, fontSize: 11, fontFamily: "'SF Mono','Fira Code',monospace",
          padding: "5px 8px", border: "1px solid #E5E7EB", borderRadius: 6,
          color: "#374151", background: "#F9FAFB", lineHeight: 1.4,
        }} />
    </div>
  );
}

function PresetCard({ name, colors, active, onClick }: {
  name: string; colors: Colors; active: boolean; onClick: () => void;
}) {
  const sw = [colors.cream, colors.creamDeep, colors.burgundy, colors.gold, colors.ink];
  return (
    <button onClick={onClick} style={{
      display: "flex", flexDirection: "column", gap: 6,
      padding: "10px 10px 8px", borderRadius: 8, border: "none",
      outline: active ? "2px solid #3B82F6" : "1px solid #E5E7EB",
      outlineOffset: active ? -2 : -1,
      background: active ? "#EFF6FF" : "#FFFFFF", cursor: "pointer",
      transition: "all 0.15s", textAlign: "left",
    }}>
      <div style={{ display: "flex", gap: 2 }}>
        {sw.map((c, i) => (
          <div key={i} style={{
            width: 14, height: 14, borderRadius: "50%",
            background: c, border: "1px solid rgba(0,0,0,0.08)",
          }} />
        ))}
      </div>
      <span style={{
        fontSize: 10, color: active ? "#1D4ED8" : "#6B7280",
        whiteSpace: "nowrap", lineHeight: 1.2, fontWeight: active ? 600 : 400,
      }}>
        {name}
      </span>
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 10, fontWeight: 600, color: "#9CA3AF",
      textTransform: "uppercase" as const, letterSpacing: "0.08em",
      marginBottom: 12,
    }}>
      {children}
    </div>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", marginBottom: 8 }}>
      {children}
    </div>
  );
}

/* ================================================================
   Main Component
   ================================================================ */

export function ColorStudio() {
  const [colors, setColors] = useState<Colors>(P[0].colors);
  const [preset, setPreset] = useState(0);
  const [page, setPage] = useState<"inicio" | "donar">("inicio");
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const send = useCallback(() => {
    iframeRef.current?.contentWindow?.postMessage({ type: "palette-update", colors }, "*");
  }, [colors]);

  useEffect(() => { send(); }, [send]);

  const onLoad = useCallback(() => {
    setTimeout(send, 200);
    setTimeout(send, 600);
  }, [send]);

  const pick = (i: number) => { setPreset(i); setColors(P[i].colors); };

  const set = (key: string, value: string) => {
    setPreset(-1);
    setColors(prev => {
      const next = { ...prev, [key]: value };
      if (["cream", "burgundy", "gold", "ink"].includes(key)) return derive(next, key);
      return next;
    });
  };

  const copyCSS = async () => {
    const map: Record<string, string> = {
      "--color-burgundy": colors.burgundy,
      "--color-burgundy-deep": colors.burgundyDeep,
      "--color-burgundy-soft": colors.burgundySoft,
      "--color-cream": colors.cream,
      "--color-cream-warm": colors.creamWarm,
      "--color-cream-deep": colors.creamDeep,
      "--color-paper": colors.paper,
      "--color-ink": colors.ink,
      "--color-ink-muted": colors.inkMuted,
      "--color-ink-soft": colors.inkSoft,
      "--color-gold": colors.gold,
      "--color-gold-warm": colors.goldWarm,
      "--color-border": colors.border,
      "--color-peach": colors.peach,
      "--color-coral": colors.coral,
      "--color-sand": colors.sand,
    };
    const css = `:root {\n${Object.entries(map).map(([k, v]) => `  ${k}: ${v};`).join("\n")}\n}`;
    await navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const url = page === "donar" ? "/paleta/preview/donar" : "/paleta/preview";

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100, display: "flex",
      fontFamily: "-apple-system,'Segoe UI',system-ui,sans-serif",
      fontSize: 14, color: "#111827", background: "#F3F4F6",
    }}>
      {/* ── Sidebar ── */}
      <aside style={{
        width: 320, flexShrink: 0, background: "#FFFFFF",
        borderRight: "1px solid #E5E7EB", display: "flex", flexDirection: "column",
      }}>
        {/* Header */}
        <div style={{ padding: "18px 20px 14px", borderBottom: "1px solid #F3F4F6" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}>
                Estudio de Color
              </div>
              <div style={{
                fontSize: 10, color: "#9CA3AF", fontWeight: 500,
                letterSpacing: "0.06em", textTransform: "uppercase" as const, marginTop: 2,
              }}>
                APADMSI
              </div>
            </div>
            <a href="/" style={{
              width: 28, height: 28, borderRadius: 6,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              color: "#9CA3AF", textDecoration: "none", fontSize: 16,
              border: "1px solid #E5E7EB",
            }} title="Volver al sitio">
              &times;
            </a>
          </div>
        </div>

        {/* Scrollable */}
        <div style={{ flex: 1, overflowY: "auto", padding: "14px 20px 20px" }}>
          {/* Presets */}
          <SectionLabel>Paletas</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 16 }}>
            {P.map((p, i) => (
              <PresetCard key={i} name={p.name} colors={p.colors}
                active={preset === i} onClick={() => pick(i)} />
            ))}
          </div>

          <div style={{ height: 1, background: "#F3F4F6", margin: "4px 0 14px" }} />

          <SectionLabel>Personalizar</SectionLabel>

          <div style={{ marginBottom: 14 }}>
            <GroupLabel>Fondos</GroupLabel>
            <ColorRow label="Principal" value={colors.cream} onChange={v => set("cream", v)} />
            <ColorRow label="Intermedio" value={colors.creamWarm} onChange={v => set("creamWarm", v)} />
            <ColorRow label="Profundo" value={colors.creamDeep} onChange={v => set("creamDeep", v)} />
            <ColorRow label="Tarjetas" value={colors.paper} onChange={v => set("paper", v)} />
          </div>

          <div style={{ marginBottom: 14 }}>
            <GroupLabel>Acentos</GroupLabel>
            <ColorRow label="Principal" value={colors.burgundy} onChange={v => set("burgundy", v)} />
            <ColorRow label="Dorado" value={colors.gold} onChange={v => set("gold", v)} />
          </div>

          <div style={{ marginBottom: 14 }}>
            <GroupLabel>Texto</GroupLabel>
            <ColorRow label="Principal" value={colors.ink} onChange={v => set("ink", v)} />
          </div>

          <div style={{ marginBottom: 14 }}>
            <GroupLabel>Bordes</GroupLabel>
            <ColorRow label="Lineas" value={colors.border} onChange={v => set("border", v)} />
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "14px 20px", borderTop: "1px solid #F3F4F6", display: "flex", gap: 8 }}>
          <button onClick={() => pick(0)} style={{
            flex: 1, padding: "9px", fontSize: 12, fontWeight: 500,
            borderRadius: 8, border: "1px solid #E5E7EB",
            background: "#FFFFFF", color: "#6B7280", cursor: "pointer",
          }}>
            Restablecer
          </button>
          <button onClick={copyCSS} style={{
            flex: 1, padding: "9px", fontSize: 12, fontWeight: 600,
            borderRadius: 8, border: "none",
            background: copied ? "#059669" : "#111827",
            color: "#FFFFFF", cursor: "pointer", transition: "background 0.2s",
          }}>
            {copied ? "Copiado!" : "Copiar CSS"}
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Toolbar */}
        <div style={{
          height: 48, flexShrink: 0, display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "0 20px",
          background: "#FFFFFF", borderBottom: "1px solid #E5E7EB",
        }}>
          <div style={{ display: "flex", gap: 3, background: "#F3F4F6", borderRadius: 8, padding: 3 }}>
            {(["inicio", "donar"] as const).map(p => (
              <button key={p} onClick={() => setPage(p)} style={{
                padding: "5px 18px", fontSize: 13, fontWeight: 500, borderRadius: 6,
                border: "none", cursor: "pointer", transition: "all 0.15s",
                background: page === p ? "#FFFFFF" : "transparent",
                color: page === p ? "#111827" : "#6B7280",
                boxShadow: page === p ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
              }}>
                {p === "inicio" ? "Inicio" : "Donar"}
              </button>
            ))}
          </div>
          <span style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 450 }}>
            {preset >= 0 ? P[preset].name : "Personalizada"}
          </span>
        </div>

        {/* Preview */}
        <div style={{ flex: 1, padding: 12, overflow: "hidden" }}>
          <div style={{
            width: "100%", height: "100%", borderRadius: 8, overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
            border: "1px solid #E5E7EB", background: "#FFFFFF",
          }}>
            <iframe ref={iframeRef} key={page} src={url} onLoad={onLoad}
              style={{ width: "100%", height: "100%", border: "none", display: "block" }} />
          </div>
        </div>
      </main>
    </div>
  );
}
