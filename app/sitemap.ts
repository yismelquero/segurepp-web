import type { MetadataRoute } from 'next'
import { getTodosSlugProductos } from '@/data/productos'
import { LINEA_SLUGS } from '@/lib/utils'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://segurepp.com'

export default function sitemap(): MetadataRoute.Sitemap {
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

  const productRoutes: MetadataRoute.Sitemap = getTodosSlugProductos().map((p) => ({
    url: `${SITE_URL}/catalogo/${LINEA_SLUGS[p.lineaNegocio] ?? 'equipos-medicos'}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...productRoutes]
}
