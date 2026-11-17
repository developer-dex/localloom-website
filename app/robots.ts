import type { MetadataRoute } from "next";
import { product } from "./lib/company";

/** Required by output: "export" — the route is emitted as a static file. */
export const dynamic = "force-static";

/** Emitted as /robots.txt at build time. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${product.url}/sitemap.xml`,
    host: product.url,
  };
}
