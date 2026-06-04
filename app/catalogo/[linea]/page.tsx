import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/global/Container'
import { CategoryTabs } from '@/components/catalog/CategoryTabs'
import { ProductCard } from '@/components/catalog/ProductCard'
import { Breadcrumb } from '@/components/global/Breadcrumb'
import { sanityFetch } from '@/lib/sanity/client'
import { PRODUCTOS_POR_LINEA } from '@/lib/sanity/queries'
import { schemaBreadcrumb } from '@/lib/schema-org'
import { LINEA_LABELS, SLUG_TO_LINEA } from '@/lib/utils'
import type { ProductoCard as ProductoCardType, LineaParams } from '@/types'

export const revalidate = 3600

// Solo 3 slugs válidos — Auditoría Final sección 4.4
const VALID_LINEAS = ['equipos-medicos', 'seguridad-industrial', 'uniformes-merchandising']

const SEO_META: Record<string, { title: string; description: string }> = {
  'equipos-medicos': {
    title: 'Equipos Médicos en Bolivia · Monitores, Diagnóstico y Ecógrafos | SEGUREPP',
    description:
      'Monitores multiparámetro, electrocardiógrafos, ecógrafos y equipos hospitalarios en Bolivia. Asesoría técnica y cotización personalizada para clínicas y hospitales.',
  },
  'seguridad-industrial': {
    title: 'Seguridad Industrial y EPP en Bolivia · Protección, Señalización | SEGUREPP',
    description:
      'EPP, cascos, arneses, lentes y señalización industrial en Bolivia. Soluciones para minería, construcción e industria. Solicite cotización.',
  },
  'uniformes-merchandising': {
    title: 'Catálogo Uniformes y Merchandising · SEGUREPP',
    description:
      'Uniformes corporativos, médicos e industriales con bordado y sublimación en Bolivia. Merchandising empresarial a medida. Imagen corporativa para su empresa.',
  },
}

export async function generateStaticParams() {
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

  const productos = await sanityFetch<ProductoCardType[]>(
    PRODUCTOS_POR_LINEA, { linea: lineaEnum }, 3600
  ).catch(() => [])

  const breadcrumb = [
    { name: 'Inicio', url: '/' },
    { name: 'Catálogo', url: '/catalogo' },
    { name: lineaLabel, url: `/catalogo/${linea}` },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb(breadcrumb)) }}
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

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.length > 0 ? (
            productos.map((p) => <ProductCard key={p._id} producto={p} />)
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-3 text-[14px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Productos próximamente. Contáctenos para cotización.
              </p>
            </div>
          )}
        </div>

        {/* Bloque SEO local — Auditoría Final sección 4.5 (E5 sección 5.4.3) */}
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
