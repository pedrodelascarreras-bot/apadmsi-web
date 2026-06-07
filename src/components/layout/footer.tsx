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
            "radial-gradient(circle, rgba(232,168,124,0.12), transparent 70%)",
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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
