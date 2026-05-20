import { site } from "@/lib/content";

/**
 * Schema.org JSON-LD para que Google entienda qué es APADMSI:
 * organización sin fines de lucro, ubicación, contacto, redes.
 * Se inyecta como <script type="application/ld+json"> en el layout.
 */
export function StructuredData() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3100";

  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${url}#org`,
    name: site.longName,
    alternateName: [site.name, site.brandShort],
    description:
      "Centro de Día sin fines de lucro fundado en 1982. Acompañamos a jóvenes y adultos con discapacidad mental severa en San Isidro, y a sus familias.",
    url,
    logo: `${url}/logo.png`,
    foundingDate: `${site.foundedYear}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Billinghurst 1260",
      addressLocality: "Beccar",
      addressRegion: "San Isidro, Buenos Aires",
      postalCode: "1642",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    telephone: site.phone,
    email: site.email,
    sameAs: [site.facebook.url, site.instagram.url],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "16:30",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "San Isidro, Garín, Tigre y San Fernando",
    },
    knowsAbout: [
      "discapacidad mental",
      "centro de día",
      "asistencia integral",
      "integración social",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
