import type { Metadata } from 'next'
import './globals.css'
import { playfair, montserrat } from '@/lib/fonts'
import { Header } from '@/components/global/Header'
import { Footer } from '@/components/global/Footer'
import { WhatsAppFloat } from '@/components/global/WhatsAppFloat'
import { schemaOrganization } from '@/lib/schema-org'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://segurepp.com'
const SITE_DESCRIPTION =
  'SEGUREPP provee equipos médicos, seguridad industrial, EPP, uniformes y merchandising para empresas. Cotización y atención personalizada.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'SEGUREPP',
  title: {
    default: 'SEGUREPP — Equipos Médicos, Seguridad Industrial y Uniformes en Bolivia',
    template: '%s | SEGUREPP',
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [{ url: '/app-icon.svg', type: 'image/svg+xml', sizes: 'any' }],
    shortcut: '/app-icon.svg',
  },
  openGraph: {
    title: 'SEGUREPP — Equipos Médicos, Seguridad Industrial y Uniformes',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    siteName: 'SEGUREPP',
    locale: 'es_BO',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'SEGUREPP — Equipos Médicos, Seguridad Industrial y Uniformes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@segurepp',
    title: 'SEGUREPP — Equipos Médicos, Seguridad Industrial y Uniformes',
    description: SITE_DESCRIPTION,
    images: ['/opengraph-image'],
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
        <WhatsAppFloat />
      </body>
    </html>
  )
}
