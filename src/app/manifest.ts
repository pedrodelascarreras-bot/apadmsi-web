import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "APADMSI · Centro de Día · San Isidro",
    short_name: "APADMSI",
    description:
      "Centro de Día sin fines de lucro fundado en 1982. Acompañamos a personas con discapacidad mental en San Isidro.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF6EE",
    theme_color: "#B91C2C",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    lang: "es-AR",
  };
}
