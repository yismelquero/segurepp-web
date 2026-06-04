import { ProductCard } from '@/components/catalog/ProductCard'
import type { ProductoCard } from '@/types'

interface RelatedProductsProps {
  productos: ProductoCard[]
}

export function RelatedProducts({ productos }: RelatedProductsProps) {
  if (!productos.length) return null

  return (
    <div className="mt-16">
      <h2
        className="text-navy font-bold text-[20px] mb-6"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        Productos relacionados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((p) => (
          <ProductCard key={p._id} producto={p} />
        ))}
      </div>
    </div>
  )
}
