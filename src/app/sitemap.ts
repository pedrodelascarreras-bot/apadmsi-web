import type { MetadataRoute } from "next";
import { activityDetailPages } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3100";
  const now = new Date();

  const activityRoutes: MetadataRoute.Sitemap = Object.keys(
    activityDetailPages
  ).map((slug) => ({
    url: `${base}/actividades/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/donar`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/galeria`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...activityRoutes,
  ];
}
