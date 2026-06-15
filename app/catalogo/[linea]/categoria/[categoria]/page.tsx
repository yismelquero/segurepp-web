import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/global/Breadcrumb'
import { CategoryTabs } from '@/components/catalog/CategoryTabs'
import { CatalogSearchGrid } from '@/components/catalog/CatalogSearchGrid'
import { Container } from '@/components/global/Container'
import { getCategorySeo } from '@/lib/catalog-seo'
import { schemaBreadcrumb } from '@/lib/schema-org'
import { LINEA_LABELS, SLUG_TO_LINEA } from '@/lib/utils'
import {
  getCategoriaBySlug,
  getProductosByCategoria,
  getTodosSlugCategorias,
} from '@/data/productos'

const VALID_LINEAS = ['equipos-medicos', 'seguridad-industrial', 'uniformes-merchandising']

type CategoryParams = {
  linea: 'equipos-medicos' | 'seguridad-industrial' | 'uniformes-merchandising'
  categoria: string
}

export function generateStaticParams() {
  return getTodosSlugCategorias().map((categoria) => ({
    linea:
      categoria.lineaNegocio === 'medico'
        ? 'equipos-medicos'
        : categoria.lineaNegocio === 'industrial'
          ? 'seguridad-industrial'
          : 'uniformes-merchandising',
    categoria: categoria.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CategoryParams>
}): Promise<Metadata> {
  const { linea, categoria } = await params
  const lineaEnum = SLUG_TO_LINEA[linea]
  const category = lineaEnum ? getCategoriaBySlug(lineaEnum, categoria) : null
  if (!category) return { title: 'Categoría no encontrada' }

  const seo = getCategorySeo(category.slug, category.nombre, lineaEnum)

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `/catalogo/${linea}/categoria/${categoria}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `/catalogo/${linea}/categoria/${categoria}`,
    },
  }
}

export default async function CatalogoCategoriaPage({
  params,
}: {
  params: Promise<CategoryParams>
}) {
  const { linea, categoria } = await params

  if (!VALID_LINEAS.includes(linea)) notFound()

  const lineaEnum = SLUG_TO_LINEA[linea]
  const category = lineaEnum ? getCategoriaBySlug(lineaEnum, categoria) : null
  if (!lineaEnum || !category) notFound()

  const lineaLabel = LINEA_LABELS[lineaEnum] ?? linea
  const productos = getProductosByCategoria(lineaEnum, categoria)
  const seo = getCategorySeo(category.slug, category.nombre, lineaEnum)

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Catálogo', href: '/catalogo' },
    { label: lineaLabel, href: `/catalogo/${linea}` },
    { label: category.nombre, href: `/catalogo/${linea}/categoria/${categoria}` },
  ]

  const tabs = [
    { label: 'Todos', href: '/catalogo', active: false },
    { label: 'Equipos Médicos', href: '/catalogo/equipos-medicos', active: linea === 'equipos-medicos' },
    { label: 'Seguridad Industrial', href: '/catalogo/seguridad-industrial', active: linea === 'seguridad-industrial' },
    { label: 'Uniformes y Merchandising', href: '/catalogo/uniformes-merchandising', active: linea === 'uniformes-merchandising' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            schemaBreadcrumb(breadcrumbItems.map((item) => ({ name: item.label, url: item.href })))
          ),
        }}
      />

      <div className="bg-navy py-10 border-b-[3px] border-amber">
        <Container>
          <p
            className="text-[10px] font-bold uppercase tracking-widest text-amber"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {lineaLabel}
          </p>
          <h1
            className="text-white font-bold text-2xl lg:text-3xl mt-1"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {category.nombre}
          </h1>
          <p className="text-gray-3 text-[14px] mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
            {seo.description}
          </p>
        </Container>
      </div>

      <Container className="py-8 lg:py-12">
        <Breadcrumb items={breadcrumbItems} className="mb-6" />
        <CategoryTabs tabs={tabs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={`/catalogo/${linea}`}
            className="rounded border border-gray-2 bg-white px-3 py-2 text-[12px] font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Ver todas las categorías de {lineaLabel}
          </Link>
          <Link
            href="/contacto"
            className="rounded bg-amber px-3 py-2 text-[12px] font-bold text-navy transition-colors hover:bg-gold"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Solicitar cotización
          </Link>
        </div>

        <CatalogSearchGrid
          productos={productos}
          emptyMessage="Productos próximamente. Contáctenos para cotización."
        />

        <section className="mt-16 border-t border-gray-2 pt-8">
          <h2
            className="text-navy font-bold text-[18px] mb-3"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {category.nombre} para empresas en Bolivia
          </h2>
          <p
            className="max-w-3xl text-gray-4 text-[14px] leading-relaxed"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            SEGUREPP atiende solicitudes B2B de {category.nombre.toLowerCase()} con asesoría,
            cotización personalizada y cobertura para empresas e instituciones en La Paz y Bolivia.
          </p>
        </section>
      </Container>
    </>
  )
}
