import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { contact, site } from "@/lib/content";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Coordiná una visita, sumate como voluntario o socio, o consultanos por una derivación. Estamos en Beccar, San Isidro.",
};

const dtStyle = {
  fontSize: "0.78rem",
  letterSpacing: "0.12em",
  minWidth: "90px",
} as const;

const linkStyle = {
  color: "var(--color-ink)",
  borderBottom: "2px solid var(--color-peach)",
  paddingBottom: "1px",
  textDecoration: "none",
} as const;

export default function ContactoPage() {
  const mapSrc = `https://maps.google.com/maps?q=${site.geo.lat},${site.geo.lng}&hl=es&z=16&output=embed`;

  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-cream-warm py-14 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px]"
          style={{
            background:
              "radial-gradient(circle, rgba(232,168,124,0.22), transparent 70%)",
          }}
        />
        <Container className="relative z-10 max-w-[860px] text-center">
          <p className="section-label">{contact.eyebrow}</p>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              lineHeight: 1.15,
              marginBottom: "1rem",
              textWrap: "balance",
            }}
          >
            {contact.heading}
          </h1>
          <p
            className="text-ink-muted"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.65,
              textWrap: "balance",
            }}
          >
            {contact.lede}
          </p>
        </Container>
      </section>

      {/* Form + datos */}
      <section className="bg-cream py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.15fr_1fr]">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Datos institucionales + mapa */}
            <aside className="flex flex-col gap-8">
              <div>
                <h2
                  className="mb-5"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  Dónde encontrarnos.
                </h2>
                <dl className="flex flex-col gap-4">
                  <Row dt="Dirección" dd={site.address} />
                  <Row dt="Horario" dd={site.hours} />
                  <Row
                    dt="Teléfono"
                    dd={
                      <a href={`tel:${site.phoneTel}`} style={linkStyle}>
                        {site.phone}
                      </a>
                    }
                  />
                  <Row
                    dt="Email"
                    dd={
                      <a href={`mailto:${site.email}`} style={linkStyle}>
                        {site.email}
                      </a>
                    }
                  />
                  <Row
                    dt="Instagram"
                    dd={
                      <a
                        href={site.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                      >
                        {site.instagram.handle}
                      </a>
                    }
                  />
                  <Row
                    dt="Facebook"
                    dd={
                      <a
                        href={site.facebook.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                      >
                        apadmsi.sanisidro
                      </a>
                    }
                  />
                </dl>
              </div>

              <div
                className="relative w-full overflow-hidden rounded-[12px]"
                style={{
                  aspectRatio: "4/3",
                  boxShadow: "0 12px 40px rgba(31,22,17,0.08)",
                }}
              >
                <iframe
                  title={`Mapa: ${site.address}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function Row({ dt, dd }: { dt: string; dd: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 flex-wrap">
      <dt
        className="font-semibold uppercase text-ink-muted"
        style={dtStyle}
      >
        {dt}
      </dt>
      <dd className="text-ink" style={{ fontSize: "1rem" }}>
        {dd}
      </dd>
    </div>
  );
}
