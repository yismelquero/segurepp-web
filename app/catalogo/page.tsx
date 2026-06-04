import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/global/Container'
import { CategoryTabs } from '@/components/catalog/CategoryTabs'
import { ProductCard } from '@/components/catalog/ProductCard'
import { schemaBreadcrumb } from '@/lib/schema-org'
import { getTodosProductos } from '@/data/productos'

export const metadata: Metadata = {
  title: 'Catálogo de Productos · Equipos, Seguridad, Uniformes | SEGUREPP',
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

export default function CatalogoPage() {
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

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.length > 0 ? (
            productos.map((p) => <ProductCard key={p.id} producto={p} />)
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-3 text-[14px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Catálogo en preparación. Contáctenos para cotización personalizada.
              </p>
              <Link
                href="/contacto"
                className="inline-block mt-4 px-6 py-3 bg-amber text-navy font-bold text-[14px] rounded hover:bg-gold transition-colors"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Solicitar información
              </Link>
            </div>
          )}
        </div>
      </Container>
    </>
  )
}
