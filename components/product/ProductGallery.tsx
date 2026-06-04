'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductGalleryProps {
  imagenes: string[]
  alts: string[]
  nombre: string
}

export function ProductGallery({ imagenes, alts, nombre }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!imagenes.length) {
    return (
      <div className="relative aspect-[4/3] bg-gray-1 rounded-lg overflow-hidden flex items-center justify-center">
        <span className="text-gray-3 text-[12px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
          [Fotografía de producción — sustituir imagen real]
        </span>
      </div>
    )
  }

  return (
    <div>
      <div className="relative aspect-[4/3] bg-gray-1 rounded-lg overflow-hidden">
        <Image
          src={imagenes[activeIndex]}
          alt={alts[activeIndex] ?? nombre}
          fill
          priority={activeIndex === 0}
          className="object-contain p-6"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {imagenes.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {imagenes.slice(0, 6).map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex-none w-16 h-16 rounded border overflow-hidden bg-gray-1 transition-colors ${
                i === activeIndex ? 'border-blue' : 'border-gray-2'
              }`}
              aria-label={`Ver imagen ${i + 1} de ${nombre}`}
            >
              <Image
                src={src}
                alt={alts[i] ?? `${nombre} vista ${i + 1}`}
                width={64}
                height={64}
                className="object-contain w-full h-full p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
