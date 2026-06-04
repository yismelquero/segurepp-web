import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  // ── Redirects (uniformes → uniformes-merchandising) ───────────────────────
  async redirects() {
    return [
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
    ]
  },

  // ── Compilación ───────────────────────────────────────────────────────────
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig
