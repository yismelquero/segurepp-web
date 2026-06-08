'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'
import type { Cliente } from '@/types'

interface ClientsSectionProps {
  clientes: Cliente[]
}

const CLIENT_SECTIONS = [
  {
    label: 'Salud',
    description: 'Clínicas, hospitales y centros médicos que cuidan vidas.',
    folder: 'ClientsSection%20-%20Salud',
  },
  {
    label: 'Industria',
    description: 'Empresas industriales, manufactureras y de producción.',
    folder: 'ClientsSection%20-%20Industria',
  },
  {
    label: 'Construcción',
    description: 'Constructoras y contratistas que desarrollan grandes proyectos.',
    folder: 'ClientsSection%20-%20Construccion',
  },
  {
    label: 'Educación',
    description: 'Universidades e institutos comprometidos con el futuro.',
    folder: 'ClientsSection%20-%20Colegios',
  },
  {
    label: 'Gobierno',
    description: 'Entidades públicas que trabajan por el desarrollo del país.',
    folder: 'ClientsSection%20-%20Gobierno',
  },
]

const LOGOS_PER_SECTION = 5

export function ClientsSection({ clientes }: ClientsSectionProps) {
  return (
    <section aria-label="Empresas que confían en SEGUREPP" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mx-auto mb-10 max-w-5xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.24em] text-blue">
            Empresas que confían en SEGUREPP
          </p>
          <div className="mx-auto mb-5 h-[3px] w-20 bg-amber" aria-hidden="true" />
          <h2 className="text-[34px] font-bold leading-tight text-navy sm:text-[44px] lg:text-[54px]">
            Más de 200 empresas e instituciones confían en{' '}
            <span className="text-blue">nuestras soluciones.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[17px] leading-relaxed text-gray-4">
            Acompañamos a organizaciones líderes en diversos sectores, brindando
            productos de calidad y un servicio confiable.
          </p>
        </motion.div>

        {clientes.length > 0 ? (
          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {clientes.slice(0, 12).map((cliente) => (
              <motion.div
                key={cliente.id}
                variants={staggerItem}
                className="flex h-32 items-center justify-center rounded-lg border border-gray-2 bg-white p-3 shadow-sm"
              >
                <Image
                  src={cliente.logoUrl}
                  alt={cliente.logoAlt}
                  width={220}
                  height={120}
                  className="max-h-24 object-contain grayscale transition-all hover:grayscale-0"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {CLIENT_SECTIONS.map((sector) => (
              <motion.div
                key={sector.label}
                variants={staggerItem}
                className="grid grid-cols-1 items-center gap-5 rounded-lg border border-gray-2 bg-white p-5 shadow-[0_12px_30px_rgba(0,67,114,0.07)] lg:grid-cols-[280px_1fr]"
              >
                <div className="flex items-center gap-5 border-gray-2 lg:border-r lg:pr-6">
                  <span className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-ice text-blue" aria-hidden="true">
                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
                      <path d="M4 20V8l8-4 8 4v12M8 20v-7h8v7M8 10h.01M12 10h.01M16 10h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[19px] font-bold uppercase text-blue">{sector.label}</h3>
                    <div className="my-2 h-[2px] w-8 bg-amber" aria-hidden="true" />
                    <p className="text-[12px] leading-relaxed text-gray-4">{sector.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {Array.from({ length: LOGOS_PER_SECTION }).map((_, index) => (
                    <div
                      key={`${sector.label}-${index}`}
                      className="flex h-32 items-center justify-center rounded-md border border-gray-2 bg-white p-2 shadow-sm sm:h-36"
                    >
                      <Image
                        src={`/images/${sector.folder}/${index + 1}.png`}
                        alt={`Logo cliente ${sector.label.toLowerCase()} ${index + 1}`}
                        width={240}
                        height={240}
                        className="h-full w-full object-contain grayscale transition-all hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="mt-5 grid grid-cols-1 items-center gap-4 rounded-lg bg-ice px-6 py-5 text-navy lg:grid-cols-[auto_1fr_auto] lg:px-10">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.6 4 5.7 4 9s-1.5 6.4-4 9M12 3c-2.5 2.6-4 5.7-4 9s1.5 6.4 4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <p className="text-[18px] font-semibold leading-relaxed">
            Atendemos organizaciones de salud, industria, construcción, educación
            y sector público <span className="text-blue">en todo Bolivia.</span>
          </p>
          <span className="hidden h-14 w-px bg-gray-2 lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
