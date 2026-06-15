'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ProductCard } from '@/components/catalog/ProductCard'
import type { Producto } from '@/types'

interface CatalogSearchGridProps {
  productos: Producto[]
  emptyMessage: string
  emptyCtaHref?: string
  emptyCtaLabel?: string
}

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function getSearchText(producto: Producto) {
  return normalize(
    [
      producto.nombre,
      producto.sku,
      producto.categoria?.nombre,
      producto.marca,
      producto.descripcionCorta,
      ...(producto.etiquetas ?? []),
    ]
      .filter(Boolean)
      .join(' ')
  )
}

export function CatalogSearchGrid({
  productos,
  emptyMessage,
  emptyCtaHref,
  emptyCtaLabel,
}: CatalogSearchGridProps) {
  const [query, setQuery] = useState('')
  const normalizedQuery = normalize(query.trim())

  const filteredProducts = useMemo(() => {
    if (!normalizedQuery) return productos
    const terms = normalizedQuery.split(/\s+/).filter(Boolean)
    return productos.filter((producto) => {
      const searchText = getSearchText(producto)
      return terms.every((term) => searchText.includes(term))
    })
  }, [normalizedQuery, productos])

  return (
    <section className="mt-8" aria-label="Listado de productos">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-md">
          <span className="sr-only">Buscar productos</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-3"
            fill="none"
          >
            <path
              d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por producto, SKU o categoría"
            className="h-12 w-full rounded border border-gray-2 bg-white pl-10 pr-4 text-[14px] text-navy outline-none transition-colors placeholder:text-gray-3 focus:border-blue focus:ring-2 focus:ring-blue/15"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          />
        </label>
        <p
          className="text-[12px] font-semibold text-gray-4"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          aria-live="polite"
        >
          {filteredProducts.length} de {productos.length} productos
        </p>
      </div>

      {productos.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-gray-3 text-[14px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
            {emptyMessage}
          </p>
          {emptyCtaHref && emptyCtaLabel && (
            <Link
              href={emptyCtaHref}
              className="inline-block mt-4 px-6 py-3 bg-amber text-navy font-bold text-[14px] rounded hover:bg-gold transition-colors"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {emptyCtaLabel}
            </Link>
          )}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-gray-3 text-[14px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
            No encontramos productos con esa búsqueda.
          </p>
        </div>
      )}
    </section>
  )
}
