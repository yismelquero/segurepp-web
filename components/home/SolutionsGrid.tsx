'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'

/**
 * 3 líneas de negocio — aprobadas en Auditoría Final
 * Exactamente 3 cards. Sin cuarta card de Merchandising independiente.
 */
const SOLUTIONS = [
  {
    id: 'medico',
    title: 'Equipos Médicos',
    description:
      'Equipos de diagnóstico, monitores multiparámetro, electrocardiógrafos, ecógrafos e insumos médicos para clínicas, hospitales y centros de salud en Bolivia.',
    tags: ['Monitores', 'ECG', 'Ecógrafos', 'Diagnóstico', 'Insumos'],
    accentColor: '#0E7490',
    href: '/soluciones/equipos-medicos',
    catalogHref: '/catalogo/equipos-medicos',
  },
  {
    id: 'industrial',
    title: 'Seguridad Industrial',
    description:
      'EPP, señalización industrial y protección ocupacional para minería, construcción e industria. Soluciones integrales de seguridad laboral para empresas en Bolivia.',
    tags: ['EPP', 'Señalización', 'Cascos', 'Arneses', 'Protección'],
    accentColor: '#1A6FBF',
    href: '/soluciones/seguridad-industrial',
    catalogHref: '/catalogo/seguridad-industrial',
  },
  {
    id: 'uniformes',
    title: 'Uniformes y Merchandising',
    description:
      'Confección de uniformes médicos, corporativos e industriales con bordado y sublimación. Merchandising empresarial a medida para proyectar la imagen de su organización.',
    tags: ['Uniformes Médicos', 'Corporativos', 'Industriales', 'Merchandising'],
    accentColor: '#F8AF00',
    href: '/soluciones/uniformes-merchandising',
    catalogHref: '/catalogo/uniformes-merchandising',
  },
]

export function SolutionsGrid() {
  return (
    <section aria-label="Nuestras soluciones" className="py-16 lg:py-20 bg-gray-1">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.4 }}
        >
          <p
            className="text-amber font-bold text-[10px] tracking-[0.12em] uppercase mb-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Nuestras soluciones
          </p>
          <h2
            className="text-navy font-bold text-2xl lg:text-3xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Tres líneas de negocio,<br className="hidden lg:inline" /> una sola solución
          </h2>
        </motion.div>

        {/* Grid de 3 cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {SOLUTIONS.map((sol) => (
            <motion.div
              key={sol.id}
              variants={staggerItem}
              className="bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-180 overflow-hidden group"
              style={{ borderTop: `5px solid ${sol.accentColor}` }}
            >
              {/* Área visual — sustituir por imagen real en producción */}
              <div
                className="h-32 flex items-center justify-center"
                style={{ backgroundColor: `${sol.accentColor}10` }}
                aria-hidden="true"
              >
                <span
                  className="font-bold text-[10px] tracking-widest uppercase opacity-40"
                  style={{ color: sol.accentColor, fontFamily: 'var(--font-montserrat)' }}
                >
                  [Imagen de producción]
                </span>
              </div>

              <div className="p-5">
                <h3
                  className="text-navy font-bold text-[18px] mb-2"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {sol.title}
                </h3>
                <p
                  className="text-gray-4 text-[14px] leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {sol.description}
                </p>

                {/* Tags de subcategorías */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {sol.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-medium"
                      style={{
                        backgroundColor: `${sol.accentColor}14`,
                        color: sol.accentColor,
                        fontFamily: 'var(--font-montserrat)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-2">
                  <Link
                    href={sol.href}
                    className="flex-1 text-center py-2.5 text-[13px] font-semibold text-navy border border-navy/80 rounded hover:bg-navy hover:text-white transition-colors min-h-[44px] flex items-center justify-center"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Ver solución
                  </Link>
                  <Link
                    href={sol.catalogHref}
                    className="flex-1 text-center py-2.5 text-[13px] font-bold bg-amber text-navy rounded hover:bg-gold transition-colors min-h-[44px] flex items-center justify-center"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Catálogo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
