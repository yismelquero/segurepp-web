'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, viewportOptions } from '@/lib/animations'

/**
 * Sección 2 — 3 líneas de negocio
 * Layout alternado: visual izq / content der · content izq / visual der
 * Más espacio visual por línea. Ritmo de scroll progresivo.
 */
const SOLUTIONS = [
  {
    id: 'medico',
    title: 'Equipos Médicos',
    description:
      'Equipos de diagnóstico, monitores multiparámetro, electrocardiógrafos, ecógrafos e insumos médicos para clínicas, hospitales y centros de salud en Bolivia.',
    tags: ['Monitores', 'Electrocardiógrafos', 'Ecógrafos', 'Diagnóstico', 'Insumos'],
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
    <section aria-label="Nuestras soluciones" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.4 }}
        >
          <p
            className="text-amber font-bold text-[10px] tracking-[0.18em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Nuestras soluciones
          </p>
          <h2
            className="text-navy font-bold text-2xl lg:text-[36px] leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Tres líneas de negocio,<br className="hidden lg:inline" /> una sola solución
          </h2>
        </motion.div>

        {/* Líneas — layout alternado */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={sol.id}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {/* Visual block */}
              <div
                className="w-full lg:w-[420px] flex-shrink-0 h-56 lg:h-72 rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: `${sol.accentColor}0D`, border: `1px solid ${sol.accentColor}25` }}
                aria-hidden="true"
              >
                {/* Accent corner */}
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-xl"
                  style={{ backgroundColor: sol.accentColor }}
                />
                <span
                  className="text-[10px] font-medium opacity-30"
                  style={{ color: sol.accentColor, fontFamily: 'var(--font-montserrat)' }}
                >
                  [Imagen de producción — {sol.title}]
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <span
                  className="text-[9px] font-bold uppercase tracking-widest mb-3"
                  style={{ color: sol.accentColor, fontFamily: 'var(--font-montserrat)' }}
                >
                  Línea de negocio
                </span>
                <h3
                  className="text-navy font-bold text-[22px] lg:text-[26px] leading-tight mb-4"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {sol.title}
                </h3>
                <p
                  className="text-gray-4 text-[15px] leading-relaxed mb-5"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {sol.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {sol.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-[11px] font-medium"
                      style={{
                        backgroundColor: `${sol.accentColor}12`,
                        color: sol.accentColor,
                        fontFamily: 'var(--font-montserrat)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href={sol.catalogHref}
                    className="px-6 py-2.5 bg-amber text-navy font-bold text-[13px] rounded hover:bg-gold transition-colors min-h-[44px] flex items-center"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Ver catálogo
                  </Link>
                  <Link
                    href={sol.href}
                    className="px-6 py-2.5 bg-transparent text-navy font-semibold text-[13px] rounded border border-navy/70 hover:bg-navy hover:text-white transition-colors min-h-[44px] flex items-center"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Ver solución
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
