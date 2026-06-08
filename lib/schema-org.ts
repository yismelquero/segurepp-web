/**
 * JSON-LD Schema Markup — SEGUREPP
 * Auditoría Final: LocalBusiness + Organization + MedicalBusiness + Product + Breadcrumb
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://segurepp.com'

// ─── ORGANIZATION + LOCAL BUSINESS + MEDICAL BUSINESS ────────────────────────
// Incluir en todas las páginas (head global)
export const schemaOrganization = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'MedicalBusiness'],
      '@id': `${SITE_URL}/#business`,
      name: 'SEGUREPP',
      description:
        'Proveedor de equipos médicos, seguridad industrial y uniformes en Bolivia',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
      image: `${SITE_URL}/og-image.jpg`,
      telephone: '+59178407223',
      email: 'info@segurepp.com',
      foundingDate: '2019',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Cañada Strongest Nro 1842, Torre Centrum, Piso 3, Oficina Nro 301',
        addressLocality: 'La Paz',
        addressRegion: 'La Paz',
        addressCountry: 'BO',
      },
      geo: {
        '@type': 'GeoCoordinates',
        // Aproximado La Paz centro — reemplazar con coordenadas exactas de Torre Centrum antes del launch
        latitude: -16.4897,
        longitude: -68.1193,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      areaServed: {
        '@type': 'Country',
        name: 'Bolivia',
      },
      priceRange: 'Cotización personalizada',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'SEGUREPP',
      description:
        'Equipos médicos, seguridad industrial y uniformes corporativos en Bolivia',
      publisher: { '@id': `${SITE_URL}/#business` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/catalogo?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

// ─── PRODUCT SCHEMA ───────────────────────────────────────────────────────────
export function schemaProduct({
  nombre,
  descripcion,
  sku,
  marca,
  imagenUrl,
  slug,
  categoria,
}: {
  nombre: string
  descripcion: string
  sku: string
  marca?: string
  imagenUrl: string
  slug: string
  categoria: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: nombre,
    description: descripcion,
    sku,
    ...(marca && { brand: { '@type': 'Brand', name: marca } }),
    image: imagenUrl,
    url: `${SITE_URL}/catalogo/${slug}`,
    category: categoria,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BOB',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/contacto`,
      seller: { '@id': `${SITE_URL}/#business` },
      // Sin precio público — modelo B2B cotización
      description: 'Precio disponible mediante cotización personalizada',
    },
  }
}

// ─── BREADCRUMB SCHEMA ────────────────────────────────────────────────────────
export function schemaBreadcrumb(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

// ─── FAQ SCHEMA (opcional — Contacto) ────────────────────────────────────────
export function schemaFAQ(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}
