import type { MetadataRoute } from "next";
import { product } from "./lib/company";

/** Required by output: "export" — the route is emitted as a static file. */
export const dynamic = "force-static";

/**
 * Emitted as /sitemap.xml at build time (next.config.ts uses output: "export").
 * A crawlable sitemap is part of looking like an established site rather than
 * a placeholder, which Apple checks during organization verification.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${product.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${product.url}/about`, lastModified, changeFrequency: "yearly", priority: 0.9 },
    { url: `${product.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    {
      url: `${product.url}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    { url: `${product.url}/terms`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    {
      url: `${product.url}/delete-account`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
