interface Especificacion {
  clave: string
  valor: string
}

interface ProductSpecsProps {
  especificaciones: Especificacion[]
}

export function ProductSpecs({ especificaciones }: ProductSpecsProps) {
  if (!especificaciones.length) return null

  return (
    <div className="mt-6 border-t border-gray-2 pt-4">
      <h2
        className="text-navy font-bold text-[14px] mb-3"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        Especificaciones técnicas
      </h2>
      <div className="grid grid-cols-1 gap-0 border border-gray-2 rounded overflow-hidden">
        {especificaciones.map(({ clave, valor }, i) => (
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
  )
}
