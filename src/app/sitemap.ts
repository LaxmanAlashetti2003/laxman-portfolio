import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // This is a single-page site. Sitemap entries must be canonical URLs,
  // so we only list the homepage here. In-page anchors like #about are
  // not valid sitemap URLs and are ignored by search engines.
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
