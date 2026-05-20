import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { contact, site } from "@/lib/content";

const linkStyle = {
  color: "var(--color-ink)",
  borderBottom: "2px solid var(--color-peach)",
  paddingBottom: "1px",
  textDecoration: "none",
} as const;

const dtStyle = {
  fontSize: "0.78rem",
  letterSpacing: "0.12em",
  minWidth: "90px",
} as const;

export function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${site.geo.lat},${site.geo.lng}&hl=es&z=16&output=embed`;

  return (
    <section id="contacto" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header centrado arriba */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-[860px] text-center">
            <p className="section-label">{contact.eyebrow}</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                marginBottom: "1rem",
                textWrap: "balance",
              }}
            >
              {contact.heading}
            </h2>
            <p
              className="text-ink-muted"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                textWrap: "balance",
              }}
            >
              {contact.lede}
            </p>
          </div>
        </Reveal>

        <div className="grid items-start gap-10 lg:gap-16 lg:grid-cols-2">
          <Reveal>
          <div>
            <dl className="flex flex-col gap-5">
              <div className="flex items-baseline gap-4 flex-wrap">
                <dt className="font-semibold uppercase text-ink-muted" style={dtStyle}>
                  Dirección
                </dt>
                <dd className="text-ink" style={{ fontSize: "1rem" }}>
                  {site.address}
                </dd>
              </div>
              <div className="flex items-baseline gap-4 flex-wrap">
                <dt className="font-semibold uppercase text-ink-muted" style={dtStyle}>
                  Horario
                </dt>
                <dd className="text-ink" style={{ fontSize: "1rem" }}>
                  {site.hours}
                </dd>
              </div>
              <div className="flex items-baseline gap-4 flex-wrap">
                <dt className="font-semibold uppercase text-ink-muted" style={dtStyle}>
                  Teléfono
                </dt>
                <dd>
                  <a href={`tel:${site.phoneTel}`} style={linkStyle}>
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline gap-4 flex-wrap">
                <dt className="font-semibold uppercase text-ink-muted" style={dtStyle}>
                  Email
                </dt>
                <dd>
                  <a href={`mailto:${site.email}`} style={linkStyle}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline gap-4 flex-wrap">
                <dt className="font-semibold uppercase text-ink-muted" style={dtStyle}>
                  Instagram
                </dt>
                <dd>
                  <a
                    href={site.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    {site.instagram.handle}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline gap-4 flex-wrap">
                <dt className="font-semibold uppercase text-ink-muted" style={dtStyle}>
                  Facebook
                </dt>
                <dd>
                  <a
                    href={site.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                  >
                    apadmsi.sanisidro
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          </Reveal>

          <Reveal as="scale" delay={150}>
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
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
