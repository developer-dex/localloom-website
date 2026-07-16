import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for S3 + CloudFront hosting.
  // Remove this line if you need SSR/API routes in the future
  // and switch to AWS Amplify or ECS deployment instead.
  output: "export",
  images: {
    // All images are pre-sized static exports from Figma; Next's sharp-based
    // optimizer was re-quantizing small PNGs to indexed color, shifting the
    // gold star icons toward green. Nothing here benefits from re-encoding.
    unoptimized: true,
  },
};

export default nextConfig;
