'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'

const SOLUTIONS = [
  {
    id: 'medico',
    title: 'Equipos Médicos',
    description:
      'Equipos de diagnóstico, monitoreo e insumos para clínicas, hospitales y centros de salud.',
    accentColor: '#1A6FBF',
    imageSrc: '/images/solutionsgrid-medical.webp',
    imageAlt: 'Equipos médicos de diagnóstico y monitoreo',
    href: '/soluciones/equipos-medicos',
    catalogHref: '/catalogo/equipos-medicos',
    icon: (
      <path d="M12 4v16M4 12h16M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    id: 'industrial',
    title: 'Seguridad Industrial',
    description:
      'EPP, señalización, protección ocupacional y seguridad para industria, minería y construcción.',
    accentColor: '#F8AF00',
    imageSrc: '/images/solutionsgrid-industrial.webp',
    imageAlt: 'Equipos de protección personal para seguridad industrial',
    href: '/soluciones/seguridad-industrial',
    catalogHref: '/catalogo/seguridad-industrial',
    icon: (
      <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4zM9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    id: 'uniformes',
    title: 'Uniformes y Merchandising',
    description:
      'Uniformes corporativos, industriales y médicos. Merchandising para fortalecer tu marca.',
    accentColor: '#004372',
    imageSrc: '/images/solutionsgrid-uniforms.webp',
    imageAlt: 'Uniformes corporativos y merchandising SEGUREPP',
    href: '/soluciones/uniformes-merchandising',
    catalogHref: '/catalogo/uniformes-merchandising',
    icon: (
      <path d="M8 4l4 3 4-3 4 4-3 3v9H7v-9L4 8l4-4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

export function SolutionsGrid() {
  return (
    <section aria-label="Nuestras soluciones" className="bg-white py-18 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mb-10 max-w-3xl lg:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.28em] text-amber">
            Nuestras soluciones
          </p>
          <h2
            className="text-[38px] font-bold leading-[1.02] text-navy sm:text-[50px] lg:text-[58px]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Tres líneas de negocio,{' '}
            <span className="text-amber">una sola solución</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-gray-4">
            Ofrecemos equipos, insumos y soluciones especializadas que impulsan la
            productividad, seguridad y bienestar de tu organización.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {SOLUTIONS.map((sol) => (
            <motion.article
              key={sol.id}
              variants={staggerItem}
              className="group overflow-hidden rounded-lg border border-gray-2 bg-white shadow-[0_18px_40px_rgba(0,67,114,0.10)] transition-transform duration-180 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-gray-1">
                <Image
                  src={sol.imageSrc}
                  alt={sol.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,27,63,0.16),rgba(0,27,63,0.08)_42%,rgba(0,27,63,0.28))]" aria-hidden="true" />
                <div
                  className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-lg border border-white/30 bg-navy text-amber shadow-lg"
                  aria-hidden="true"
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    {sol.icon}
                  </svg>
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <div className="mb-4 flex items-start gap-4">
                  <span
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md border border-amber/20 text-amber"
                    aria-hidden="true"
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      {sol.icon}
                    </svg>
                  </span>
                  <div>
                    <h3
                      className="text-[24px] font-bold leading-tight text-navy lg:text-[26px]"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {sol.title}
                    </h3>
                    <div className="mt-3 h-[2px] w-8 bg-amber" aria-hidden="true" />
                  </div>
                </div>

                <p className="min-h-[72px] text-[14px] leading-relaxed text-gray-4">
                  {sol.description}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <Link
                    href={sol.catalogHref}
                    className="flex min-h-[50px] items-center justify-center gap-3 rounded-md bg-amber px-4 text-[13px] font-bold text-navy transition-colors hover:bg-gold"
                  >
                    Ver catálogo <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    href={sol.href}
                    className="flex min-h-[50px] items-center justify-center gap-3 rounded-md border border-navy px-4 text-[13px] font-bold text-navy transition-colors hover:bg-navy hover:text-white"
                  >
                    Ver solución <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-9 flex flex-col items-center justify-center gap-5 text-center text-[14px] text-gray-4 sm:flex-row">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-2 text-navy" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 3h9l3 3v15H6V3zM9 13h6M9 17h6M9 7h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>Descubre nuestro catálogo completo con todas las categorías y productos.</span>
          <Link href="/catalogo" className="rounded-md bg-navy px-7 py-4 text-[13px] font-bold text-white transition-colors hover:bg-navy-dark">
            Ver catálogo completo <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
