import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ProductActions } from '@/components/product/ProductActions'
import { ProductCard } from '@/components/catalog/ProductCard'
import { Breadcrumb } from '@/components/global/Breadcrumb'
import { Container } from '@/components/global/Container'
import { schemaBreadcrumb, schemaProduct } from '@/lib/schema-org'
import { LINEA_LABELS, LINEA_SLUGS, SLUG_TO_LINEA } from '@/lib/utils'
import { getProductoBySlug, getProductosRelacionados, getTodosSlugProductos } from '@/data/productos'
import type { ProductoParams } from '@/types'

export function generateStaticParams() {
  return getTodosSlugProductos().map((p) => ({
    linea: LINEA_SLUGS[p.lineaNegocio] ?? 'equipos-medicos',
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<ProductoParams> }): Promise<Metadata> {
  const { slug, linea } = await params
  const producto = getProductoBySlug(slug)
  if (!producto) return { title: 'Producto no encontrado' }

  const title = producto.metaTitle ?? `${producto.nombre} · Bolivia | SEGUREPP`
  const description = producto.metaDescription ?? producto.descripcionCorta

  return {
    title,
    description,
    alternates: { canonical: `/catalogo/${linea}/${slug}` },
    openGraph: { title, description },
  }
}

export default async function ProductoPage({ params }: { params: Promise<ProductoParams> }) {
  const { linea, slug } = await params
  const lineaEnum = SLUG_TO_LINEA[linea]

  const producto = getProductoBySlug(slug)
  if (!producto) notFound()

  const relacionados = lineaEnum ? getProductosRelacionados(lineaEnum, slug) : []

  const imgPrincipal = producto.imagenes?.[0] ?? null

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Catálogo', href: '/catalogo' },
    { label: LINEA_LABELS[producto.lineaNegocio] ?? '', href: `/catalogo/${linea}` },
    { label: producto.nombre, href: `/catalogo/${linea}/${slug}` },
  ]
  const breadcrumbSchema = breadcrumbItems.map((b) => ({ name: b.label, url: b.href }))

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaBreadcrumb(breadcrumbSchema)),
        }}
      />
      {/* Product Schema */}
      {imgPrincipal && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              schemaProduct({
                nombre: producto.nombre,
                descripcion: producto.descripcionCorta,
                sku: producto.sku,
                marca: producto.marca,
                imagenUrl: imgPrincipal,
                slug: `${linea}/${slug}`,
                categoria: producto.categoria?.nombre ?? '',
              })
            ),
          }}
        />
      )}

      <Container className="py-8 lg:py-12">
        <Breadcrumb items={breadcrumbItems} className="mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Galería */}
          <div>
            <div className="relative aspect-[4/3] bg-gray-1 rounded-lg overflow-hidden">
              {imgPrincipal ? (
                <Image
                  src={imgPrincipal}
                  alt={producto.imagenesAlt?.[0] ?? producto.nombre}
                  fill
                  priority
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-3 text-[12px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    [Fotografía de producción — sustituir imagen real]
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {producto.imagenes?.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto">
                {producto.imagenes.slice(0, 6).map((img, i) => (
                  <div
                    key={i}
                    className="flex-none w-16 h-16 rounded border border-gray-2 overflow-hidden bg-gray-1"
                  >
                    <Image
                      src={img}
                      alt={producto.imagenesAlt?.[i] ?? `${producto.nombre} vista ${i + 1}`}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full p-1"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Información */}
          <div className="flex flex-col">
            <span
              className="text-[9px] font-bold uppercase tracking-wider mb-2"
              style={{ color: '#0E7490', fontFamily: 'var(--font-montserrat)' }}
            >
              {producto.categoria?.nombre}
            </span>

            <h1
              className="text-navy font-bold text-2xl lg:text-[28px] leading-tight mb-1"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {producto.nombre}
            </h1>

            {producto.marca && (
              <p className="text-gray-3 text-[13px] mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                {producto.marca}
              </p>
            )}

            <p
              className="text-gray-4 text-[15px] leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {producto.descripcionCorta}
            </p>

            <ProductActions
              nombreProducto={producto.nombre}
              fichaTecnicaUrl={producto.fichaTecnicaUrl}
            />

            <p
              className="text-gray-3 text-[10px] mt-4"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Ref: {producto.sku}
            </p>

            {producto.especificaciones?.length ? (
              <div className="mt-6 border-t border-gray-2 pt-4">
                <h2
                  className="text-navy font-bold text-[14px] mb-3"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Especificaciones técnicas
                </h2>
                <div className="grid grid-cols-1 gap-0 border border-gray-2 rounded overflow-hidden">
                  {producto.especificaciones.map(({ clave, valor }, i) => (
                    <div
                      key={i}
                      className={`flex text-[12px] ${i % 2 === 0 ? 'bg-white' : 'bg-gray-1'}`}
                    >
                      <span
                        className="w-2/5 px-3 py-2 text-navy font-semibold border-r border-gray-2"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                      >
                        {clave}
                      </span>
                      <span
                        className="flex-1 px-3 py-2 text-gray-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                      >
                        {valor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Productos relacionados */}
        {relacionados.length > 0 && (
          <div className="mt-16">
            <h2
              className="text-navy font-bold text-[20px] mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Productos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relacionados.map((p) => (
                <ProductCard key={p.id} producto={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  )
}
