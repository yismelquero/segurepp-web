import type { Metadata } from 'next'
import { Container } from '@/components/global/Container'
import { CategoryTabs } from '@/components/catalog/CategoryTabs'
import { CatalogSearchGrid } from '@/components/catalog/CatalogSearchGrid'
import { schemaBreadcrumb } from '@/lib/schema-org'
import { getTodosProductos } from '@/data/productos'

export const metadata: Metadata = {
  title: 'Catálogo de Productos · Equipos Médicos, EPP y Uniformes',
  description:
    'Catálogo completo SEGUREPP: equipos médicos, EPP y uniformes. Solicite cotización sin compromiso para su empresa o institución en Bolivia.',
  alternates: { canonical: '/catalogo' },
}

const breadcrumb = [
  { name: 'Inicio', url: '/' },
  { name: 'Catálogo', url: '/catalogo' },
]

const CATALOG_TABS = [
  { label: 'Todos', href: '/catalogo', active: true },
  { label: 'Equipos Médicos', href: '/catalogo/equipos-medicos', active: false },
  { label: 'Seguridad Industrial', href: '/catalogo/seguridad-industrial', active: false },
  { label: 'Uniformes y Merchandising', href: '/catalogo/uniformes-merchandising', active: false },
]

export default async function CatalogoPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; buscar?: string }>
}) {
  const queryParams = await searchParams
  const query = queryParams?.q ?? queryParams?.buscar ?? ''
  const productos = getTodosProductos()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb(breadcrumb)) }}
      />

      <div className="bg-navy py-10 border-b-[3px] border-amber">
        <Container>
          <h1
            className="text-white font-bold text-2xl lg:text-3xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Catálogo de Productos
          </h1>
          <p className="text-gray-3 text-[14px] mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Equipos Médicos · Seguridad Industrial · Uniformes y Merchandising
          </p>
        </Container>
      </div>

      <Container className="py-8 lg:py-12">
        <CategoryTabs tabs={CATALOG_TABS} />

        <CatalogSearchGrid
          productos={productos}
          emptyMessage="Catálogo en preparación. Contáctenos para cotización personalizada."
          emptyCtaHref="/contacto"
          emptyCtaLabel="Solicitar información"
          initialQuery={query}
        />
      </Container>
    </>
  )
}
