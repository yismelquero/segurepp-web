import type { MetadataRoute } from 'next'
import { sanityFetch } from '@/lib/sanity/client'
import { TODOS_SLUGS_PRODUCTOS } from '@/lib/sanity/queries'
import { LINEA_SLUGS } from '@/lib/utils'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://segurepp.com'

/**
 * Sitemap automático — next/sitemap integrado en App Router
 * Auditoría Final sección 4.4 — URLs definitivas
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Rutas estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/nosotros`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/soluciones`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/soluciones/equipos-medicos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/soluciones/seguridad-industrial`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/soluciones/uniformes-merchandising`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/catalogo`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/catalogo/equipos-medicos`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/catalogo/seguridad-industrial`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/catalogo/uniformes-merchandising`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  // Rutas dinámicas de fichas de producto (ISR daily)
  let productRoutes: MetadataRoute.Sitemap = []
  try {
    const products = await sanityFetch<Array<{ slug: string; lineaNegocio: string }>>(
      TODOS_SLUGS_PRODUCTOS, {}, false
    )
    productRoutes = products.map((p) => ({
      url: `${SITE_URL}/catalogo/${LINEA_SLUGS[p.lineaNegocio] ?? 'equipos-medicos'}/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  } catch {
    // Si Sanity no está configurado, continuar sin productos
  }

  return [...staticRoutes, ...productRoutes]
}
