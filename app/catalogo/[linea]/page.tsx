import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/global/Container'
import { CategoryTabs } from '@/components/catalog/CategoryTabs'
import { CatalogSearchGrid } from '@/components/catalog/CatalogSearchGrid'
import { Breadcrumb } from '@/components/global/Breadcrumb'
import { schemaBreadcrumb } from '@/lib/schema-org'
import { LINEA_LABELS, SLUG_TO_LINEA } from '@/lib/utils'
import { getCategoriasByLinea, getProductosByLinea } from '@/data/productos'
import type { LineaParams } from '@/types'

const VALID_LINEAS = ['equipos-medicos', 'seguridad-industrial', 'uniformes-merchandising']

const SEO_META: Record<string, { title: string; description: string }> = {
  'equipos-medicos': {
    title: 'Equipos Médicos en Bolivia · Monitores, ECG y Ecógrafos',
    description:
      'Monitores multiparámetro, electrocardiógrafos, ecógrafos y equipos hospitalarios en Bolivia. Asesoría técnica y cotización personalizada para clínicas y hospitales.',
  },
  'seguridad-industrial': {
    title: 'Seguridad Industrial y EPP en Bolivia · Protección Personal',
    description:
      'EPP, cascos, arneses, lentes y señalización industrial en Bolivia. Soluciones para minería, construcción e industria. Solicite cotización.',
  },
  'uniformes-merchandising': {
    title: 'Uniformes y Merchandising Corporativo en Bolivia',
    description:
      'Uniformes corporativos, médicos e industriales con bordado y sublimación en Bolivia. Merchandising empresarial a medida. Imagen corporativa para su empresa.',
  },
}

export function generateStaticParams() {
  return VALID_LINEAS.map((linea) => ({ linea }))
}

export async function generateMetadata({ params }: { params: Promise<LineaParams> }): Promise<Metadata> {
  const { linea } = await params
  const meta = SEO_META[linea]
  if (!meta) return { title: 'Catálogo | SEGUREPP' }
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/catalogo/${linea}` },
  }
}

export default async function CatalogoLineaPage({ params }: { params: Promise<LineaParams> }) {
  const { linea } = await params

  if (!VALID_LINEAS.includes(linea)) notFound()

  const lineaEnum = SLUG_TO_LINEA[linea]
  const lineaLabel = LINEA_LABELS[lineaEnum] ?? linea
  const productos = getProductosByLinea(lineaEnum)
  const categorias = getCategoriasByLinea(lineaEnum)

  const breadcrumbSchema = [
    { name: 'Inicio', url: '/' },
    { name: 'Catálogo', url: '/catalogo' },
    { name: lineaLabel, url: `/catalogo/${linea}` },
  ]
  const breadcrumb = [
    { label: 'Inicio', href: '/' },
    { label: 'Catálogo', href: '/catalogo' },
    { label: lineaLabel, href: `/catalogo/${linea}` },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb(breadcrumbSchema)) }}
      />

      <div className="bg-navy py-10 border-b-[3px] border-amber">
        <Container>
          <h1
            className="text-white font-bold text-2xl lg:text-3xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {lineaLabel}
          </h1>
          <p className="text-gray-3 text-[14px] mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Catálogo · {lineaLabel} · Bolivia
          </p>
        </Container>
      </div>

      <Container className="py-8 lg:py-12">
        <Breadcrumb items={breadcrumb} className="mb-6" />
        <CategoryTabs tabs={tabs} />

        {categorias.length > 0 && (
          <nav className="mt-6 flex flex-wrap gap-2" aria-label={`Categorías de ${lineaLabel}`}>
            {categorias.map((categoria) => (
              <Link
                key={categoria.slug}
                href={`/catalogo/${linea}/categoria/${categoria.slug}`}
                className="rounded border border-gray-2 bg-white px-3 py-2 text-[12px] font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {categoria.nombre} ({categoria.count})
              </Link>
            ))}
          </nav>
        )}

        <CatalogSearchGrid
          productos={productos}
          emptyMessage="Productos próximamente. Contáctenos para cotización."
        />

        <div className="mt-16 p-6 bg-gray-1 rounded-lg border border-gray-2">
          <h2
            className="text-navy font-bold text-[16px] mb-3"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {lineaLabel} en La Paz y Bolivia
          </h2>
          <p
            className="text-gray-4 text-[14px] leading-relaxed"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            SEGUREPP provee soluciones de {lineaLabel.toLowerCase()} para empresas e instituciones
            en La Paz y todo Bolivia. Con presencia nacional y más de 200 clientes atendidos
            desde 2019, ofrecemos asesoría técnica personalizada, importación directa y
            entrega garantizada.{' '}
            <a href="/contacto" className="text-blue hover:underline font-semibold">
              Solicite cotización
            </a>.
          </p>
        </div>
      </Container>
    </>
  )
}
