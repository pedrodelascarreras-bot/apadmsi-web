import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Caveat } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCta } from "@/components/shared/floating-cta";
import { BackToTop } from "@/components/shared/back-to-top";
import { StructuredData } from "@/components/shared/structured-data";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { ReadingMode } from "@/components/shared/reading-mode";
import { ViewTransitions } from "@/components/shared/view-transitions";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3100";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "APADMSI · Centro de Día · San Isidro",
    template: "%s · APADMSI",
  },
  description:
    "APADMSI es un Centro de Día sin fines de lucro fundado en 1982. Acompañamos a 34 jóvenes y adultos con discapacidad mental severa en San Isidro, Buenos Aires.",
  applicationName: "APADMSI",
  authors: [{ name: "APADMSI" }],
  keywords: [
    "APADMSI",
    "Centro de Día",
    "San Isidro",
    "discapacidad mental",
    "fundación",
    "donar",
    "Buenos Aires",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "APADMSI",
    title: "APADMSI · Centro de Día · San Isidro",
    description:
      "Una casa con más de 40 años. Acompañamos a 34 personas con discapacidad mental severa y a sus familias.",
    images: [
      {
        url: `${siteUrl}/images/fotodeportadaFUNDACION.PNG`,
        width: 1200,
        height: 630,
        alt: "APADMSI Centro de Día — grupo de concurrentes y equipo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APADMSI · Centro de Día · San Isidro",
    description:
      "Una casa con más de 40 años. Acompañamos a 34 personas con discapacidad mental severa y a sus familias.",
    images: [`${siteUrl}/images/fotodeportadaFUNDACION.PNG`],
  },
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // viewport-fit=cover: necesario para usar safe-area-inset en iPhone con notch
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF6EE" },
    { media: "(prefers-color-scheme: dark)", color: "#FBF6EE" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${manrope.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <StructuredData />
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <FloatingCta />
        <BackToTop />
        <CustomCursor />
        <ReadingMode />
        <ViewTransitions />
      </body>
    </html>
  );
}
