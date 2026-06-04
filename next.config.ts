import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ── Branding ──────────────────────────────────────────────────────────────
  poweredByHeader: false,
  compress: true,

  // ── Imágenes ──────────────────────────────────────────────────────────────
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 3600,
  },

  // ── Headers de Seguridad ──────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  // ── Redirects ─────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // Auditoría Final CORR-04: URL legacy → canonical
      {
        source: '/catalogo/uniformes',
        destination: '/catalogo/uniformes-merchandising',
        permanent: true,
      },
      {
        source: '/catalogo/uniformes/:slug',
        destination: '/catalogo/uniformes-merchandising/:slug',
        permanent: true,
      },
      // Studio → Sanity CDN (incompatible con Turbopack/Next.js 16)
      {
        source: '/studio',
        destination: 'https://segurepp.sanity.studio',
        permanent: false,
      },
    ]
  },

  // ── Turbopack: silenciar advertencia de workspace root ────────────────────
  turbopack: {
    root: __dirname,
  },

  // ── Compilación ───────────────────────────────────────────────────────────
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig
