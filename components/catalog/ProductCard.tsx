import Link from 'next/link'
import Image from 'next/image'
import type { ProductoCard } from '@/types'
import { LINEA_SLUGS, LINEA_COLORS } from '@/lib/utils'
import { siteConfig } from '@/data/site'

interface ProductCardProps {
  producto: ProductoCard
}

/**
 * Card de producto en el catálogo.
 * Sin precio público — modelo B2B cotización.
 * Accent superior por línea de negocio.
 */
export function ProductCard({ producto }: ProductCardProps) {
  const lineaSlug = LINEA_SLUGS[producto.lineaNegocio] ?? 'equipos-medicos'
  const accentColor = LINEA_COLORS[producto.lineaNegocio] ?? '#004372'
  const href = `/catalogo/${lineaSlug}/${producto.slug}`
  const imgSrc = producto.imagenes?.[0] ?? null
  const priceMessage = encodeURIComponent(
    `Hola, quiero consultar el precio del producto: ${producto.nombre}.`
  )

  return (
    <article
      className="bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-180 overflow-hidden flex flex-col border border-gray-2"
      style={{ borderTop: `6px solid ${accentColor}` }}
    >
      {/* Imagen */}
      <Link href={href} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
        <div className="relative aspect-[4/3] bg-gray-1">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={producto.imagenesAlt?.[0] ?? producto.nombre}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-4"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-3 text-[10px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
                [Imagen de producción]
              </span>
            </div>
          )}
          {producto.destacado && (
            <span
              className="absolute top-2 right-2 px-2 py-0.5 bg-amber text-navy text-[9px] font-bold rounded"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Destacado
            </span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <span
          className="text-[9px] font-bold uppercase tracking-wider mb-1"
          style={{ color: accentColor, fontFamily: 'var(--font-montserrat)' }}
        >
          {producto.categoria?.nombre}
        </span>
        <Link href={href}>
          <h3
            className="text-navy font-bold text-[14px] leading-tight hover:text-blue transition-colors line-clamp-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {producto.nombre}
          </h3>
        </Link>
        {producto.marca && (
          <p
            className="text-gray-3 text-[11px] mt-0.5"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {producto.marca}
          </p>
        )}
        <p
          className="text-gray-4 text-[12px] leading-relaxed mt-2 flex-1 line-clamp-2"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {producto.descripcionCorta}
        </p>

        {/* CTA — sin precio público */}
        <div className="mt-4 flex gap-2">
          <Link
            href={href}
            className="flex-1 text-center py-2 text-[12px] font-semibold text-navy border border-navy/80 rounded hover:bg-navy hover:text-white transition-colors min-h-[40px] flex items-center justify-center"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Ver ficha
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${priceMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 text-[12px] font-bold bg-amber text-navy rounded hover:bg-gold transition-colors min-h-[40px] flex items-center justify-center"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Consultar precio
          </a>
        </div>
      </div>
    </article>
  )
}
