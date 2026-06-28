"use client";

import { useEffect, useState } from "react";
import { share, site } from "@/lib/content";

type Variant = "light" | "dark";

type Props = {
  /** URL a compartir. Si no se pasa, se usa la URL actual. */
  url?: string;
  /** Texto que acompaña al link. Por defecto el del config. */
  message?: string;
  /** Tema visual: light (sobre crema) o dark (sobre fondo oscuro). */
  variant?: Variant;
};

const ICON_PROPS = {
  width: 18,
  height: 18,
  fill: "currentColor",
  "aria-hidden": true,
};

function WhatsappIcon() {
  return (
    <svg {...ICON_PROPS} viewBox="0 0 24 24">
      <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.93 7.93 0 0 0-6.84 11.92L4 20l4.2-1.1A7.92 7.92 0 0 0 20 11.93a7.85 7.85 0 0 0-2.4-5.62Zm-5.6 12.2a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1 1 5.6 3.1Zm3.6-4.93c-.2-.1-1.16-.57-1.34-.64-.18-.06-.31-.1-.44.1-.13.2-.5.64-.62.78-.11.13-.23.15-.42.05a5.4 5.4 0 0 1-1.6-.99 5.97 5.97 0 0 1-1.1-1.38c-.12-.2 0-.3.09-.4.1-.1.2-.23.3-.34.1-.11.13-.2.2-.32.07-.13.03-.24-.02-.34-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.34.05-.52.24a2.1 2.1 0 0 0-.66 1.56 3.65 3.65 0 0 0 .77 1.94 8.4 8.4 0 0 0 3.21 2.84c.45.2.8.31 1.07.4.45.15.86.13 1.18.08.36-.05 1.16-.47 1.32-.93.16-.46.16-.85.11-.93-.05-.08-.18-.13-.38-.24Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg {...ICON_PROPS} viewBox="0 0 24 24">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.94c0-.9.25-1.51 1.54-1.51H17V4.62c-.36-.05-1.36-.16-2.51-.16-2.49 0-4.2 1.52-4.2 4.32V11H7.5v3.1H10.3V22h3.2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...ICON_PROPS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...ICON_PROPS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkIcon({ done }: { done: boolean }) {
  if (done) {
    return (
      <svg {...ICON_PROPS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <polyline points="5 12 10 17 19 7" />
      </svg>
    );
  }
  return (
    <svg {...ICON_PROPS} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 1 0-5.66-5.66L11 7" />
      <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 1 0 5.66 5.66L13 17" />
    </svg>
  );
}

export function ShareButtons({ url, message, variant = "light" }: Props) {
  const [copied, setCopied] = useState(false);
  // Diferimos la URL al post-mount para evitar hydration mismatch
  // (server no conoce window.location).
  const [pageUrl, setPageUrl] = useState<string>(url ?? "");

  useEffect(() => {
    if (url) return;
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, [url]);

  function getUrl() {
    return pageUrl;
  }

  const text = message ?? share.message;

  function buildLink(target: "wa" | "fb" | "mail") {
    const u = encodeURIComponent(getUrl());
    const t = encodeURIComponent(text);
    if (target === "wa") return `https://api.whatsapp.com/send?text=${t}%20${u}`;
    if (target === "fb") return `https://www.facebook.com/sharer/sharer.php?u=${u}`;
    return `mailto:?subject=${encodeURIComponent(
      "APADMSI — Centro de Día"
    )}&body=${t}%20${u}`;
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  }

  const isDark = variant === "dark";
  const baseBtn = `inline-flex h-10 w-10 items-center justify-center rounded-full transition-all hover:-translate-y-0.5 ${
    isDark
      ? "border border-cream/25 bg-cream/[0.04] text-cream hover:bg-cream/15 hover:border-cream/50"
      : "border border-border bg-paper text-ink hover:border-burgundy hover:text-burgundy"
  }`;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span
        className={`text-xs font-bold uppercase tracking-[0.16em] ${
          isDark ? "text-cream/70" : "text-ink-muted"
        }`}
      >
        {share.label}
      </span>
      <div className="flex items-center gap-2">
        <a
          href={buildLink("wa")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir por WhatsApp"
          className={baseBtn}
        >
          <WhatsappIcon />
        </a>
        <a
          href={buildLink("fb")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir en Facebook"
          className={baseBtn}
        >
          <FacebookIcon />
        </a>
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir en Instagram"
          className={baseBtn}
        >
          <InstagramIcon />
        </a>
        <a
          href={buildLink("mail")}
          aria-label="Compartir por email"
          className={baseBtn}
        >
          <MailIcon />
        </a>
        <button
          type="button"
          onClick={copyLink}
          aria-label={copied ? "Link copiado" : "Copiar link"}
          className={baseBtn}
        >
          <LinkIcon done={copied} />
        </button>
      </div>
    </div>
  );
}
