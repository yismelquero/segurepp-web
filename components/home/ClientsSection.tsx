'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'
import type { Cliente } from '@/types'

interface ClientsSectionProps {
  clientes: Cliente[]
}

const SECTORES = [
  { label: 'Todos' },
  { label: 'Salud' },
  { label: 'Minería' },
  { label: 'Industria' },
  { label: 'Educación' },
  { label: 'Sector público' },
  { label: 'Construcción' },
]

/**
 * "Empresas que confían en SEGUREPP"
 * Auditoría Final: SOLO clientes, no partners ni distribuidores.
 */
export function ClientsSection({ clientes }: ClientsSectionProps) {
  return (
    <section aria-label="Empresas que confían en SEGUREPP" className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.4 }}
        >
          <p
            className="text-amber font-bold text-[10px] tracking-[0.12em] uppercase mb-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Confianza empresarial
          </p>
          <h2
            className="text-navy font-bold text-2xl lg:text-3xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Empresas que confían en SEGUREPP
          </h2>
          <p
            className="text-gray-4 text-[14px] mt-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Más de 200 empresas e instituciones en Bolivia confían en nuestras soluciones.
          </p>
        </motion.div>

        {/* Chips de sector */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {SECTORES.map(({ label }) => (
            <span
              key={label}
              className="flex-none px-3 py-1.5 rounded-full text-[11px] font-medium text-navy bg-gray-1 border border-gray-2 whitespace-nowrap cursor-default"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Grid de logos */}
        {clientes.length > 0 ? (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {clientes.slice(0, 12).map((cliente) => (
              <motion.div
                key={cliente.id}
                variants={staggerItem}
                className="bg-white border border-gray-2 rounded-md p-4 flex items-center justify-center h-20 hover:shadow-md hover:border-gray-3 transition-all duration-180"
              >
                <Image
                  src={cliente.logoUrl}
                  alt={cliente.logoAlt}
                  width={120}
                  height={60}
                  className="object-contain max-h-10 grayscale hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Placeholder mientras no hay logos cargados */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-1 border border-gray-2 rounded-md h-20 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-gray-3 text-[9px] font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Cliente {i + 1}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
