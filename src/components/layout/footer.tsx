import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { ShareButtons } from "@/components/shared/share-buttons";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { footerNav, newsletter, site } from "@/lib/content";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-cream pt-16 pb-8"
      style={{
        background:
          "linear-gradient(135deg, #2A1F18 0%, #3D2E25 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-[350px] w-[350px]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,171,110,0.12), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] mb-12">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              aria-label={`${site.name} · inicio`}
              className="inline-flex items-center gap-3 text-cream no-underline"
            >
              <span className="relative block h-12 w-[72px] shrink-0 sm:h-14 sm:w-[84px]">
                <Image
                  src="/logo.png"
                  alt={site.name}
                  fill
                  sizes="84px"
                  className="object-contain"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <strong className="font-display text-lg font-semibold tracking-wide">
                  {site.name}
                </strong>
                <span className="text-sm text-cream/60 tracking-wide">
                  {site.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              {site.longName}. Asociación civil sin fines de lucro.
            </p>
            <span
              className="mt-6 inline-block font-script text-xl text-peach"
            >
              Gracias por estar acá ♥
            </span>
          </div>

          {/* Navegar */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-peach mb-5">
              Navegar
            </h4>
            <ul className="space-y-2.5 list-none">
              {footerNav.navegar.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sumate */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-peach mb-5">
              Sumate
            </h4>
            <ul className="space-y-2.5 list-none">
              {footerNav.sumate.map((link, i) => (
                <li key={`${link.label}-${i}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Seguinos */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-peach mb-5">
              Seguinos
            </h4>
            <ul className="space-y-2.5 list-none">
              {footerNav.seguinos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cream/75 hover:text-cream transition-colors"
                  >
                    {link.label === "Instagram" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    )}
                    {link.label === "Facebook" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.94c0-.9.25-1.51 1.54-1.51H17V4.62c-.36-.05-1.36-.16-2.51-.16-2.49 0-4.2 1.52-4.2 4.32V11H7.5v3.1H10.3V22h3.2Z" />
                      </svg>
                    )}
                    {link.label === "WhatsApp" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.93 7.93 0 0 0-6.84 11.92L4 20l4.2-1.1A7.92 7.92 0 0 0 20 11.93a7.85 7.85 0 0 0-2.4-5.62Zm-5.6 12.2a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1 1 5.6 3.1Zm3.6-4.93c-.2-.1-1.16-.57-1.34-.64-.18-.06-.31-.1-.44.1-.13.2-.5.64-.62.78-.11.13-.23.15-.42.05a5.4 5.4 0 0 1-1.6-.99 5.97 5.97 0 0 1-1.1-1.38c-.12-.2 0-.3.09-.4.1-.1.2-.23.3-.34.1-.11.13-.2.2-.32.07-.13.03-.24-.02-.34-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.34.05-.52.24a2.1 2.1 0 0 0-.66 1.56 3.65 3.65 0 0 0 .77 1.94 8.4 8.4 0 0 0 3.21 2.84c.45.2.8.31 1.07.4.45.15.86.13 1.18.08.36-.05 1.16-.47 1.32-.93.16-.46.16-.85.11-.93-.05-.08-.18-.13-.38-.24Z" />
                      </svg>
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Boletín + compartir */}
        <div className="grid gap-8 border-t border-cream/10 pt-10 mb-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
          {newsletter.label && (
            <div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-peach mb-3">
                {newsletter.label}
              </h4>
              <p className="mb-4 text-sm text-cream/70" style={{ lineHeight: 1.55, maxWidth: "420px" }}>
                {newsletter.intro}
              </p>
              <NewsletterForm />
            </div>
          )}
          <div className="md:flex md:flex-col md:items-end md:justify-end">
            <ShareButtons variant="dark" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-cream/10 pt-8 text-xs text-cream/50">
          <span>
            © {currentYear} {site.name}.{" "}
            {site.cuit ? `CUIT ${site.cuit}. ` : ""}Todos los derechos
            reservados.
          </span>
          <span>{site.addressShort}</span>
        </div>
      </Container>
    </footer>
  );
}
