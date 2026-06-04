import type { Metadata } from 'next'
import './globals.css'
import { playfair, montserrat } from '@/lib/fonts'
import { Header } from '@/components/global/Header'
import { Footer } from '@/components/global/Footer'
import { schemaOrganization } from '@/lib/schema-org'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://segurepp.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SEGUREPP — Equipos Médicos, Seguridad Industrial y Uniformes en Bolivia',
    template: '%s | SEGUREPP',
  },
  description:
    'Proveedor boliviano de equipos médicos, seguridad industrial y uniformes corporativos. Más de 200 empresas en Bolivia confían en SEGUREPP. Solicite cotización.',
  openGraph: {
    type: 'website',
    siteName: 'SEGUREPP',
    locale: 'es_BO',
    // app/opengraph-image.tsx genera la imagen automáticamente con next/og
  },
  twitter: {
    card: 'summary_large_image',
    site: '@segurepp',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect Google Fonts — Critical CSS performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Schema.org — Organization + LocalBusiness + MedicalBusiness (global) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
