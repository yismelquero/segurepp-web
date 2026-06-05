'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const LINES = [
  { label: 'Equipos Médicos',          color: '#0E7490', href: '/soluciones/equipos-medicos' },
  { label: 'Seguridad Industrial',     color: '#1A6FBF', href: '/soluciones/seguridad-industrial' },
  { label: 'Uniformes y Merchandising', color: '#F8AF00', href: '/soluciones/uniformes-merchandising' },
]

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      aria-label="SEGUREPP — Proveedor integral en Bolivia"
      className="bg-navy overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 py-16 lg:py-24">

          {/* ── Columna izquierda — Copy ──────────────────────────────── */}
          <div className="flex-1 flex flex-col items-start">

            {/* Eyebrow */}
            <motion.p
              className="text-amber font-bold text-[10px] tracking-[0.18em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              La Paz, Bolivia · Desde 2019
            </motion.p>

            {/* Título */}
            <motion.h1
              className="text-white font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Un solo proveedor<br />
              para múltiples<br />
              necesidades empresariales
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="text-white/70 text-[15px] leading-relaxed max-w-md mb-8"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Equipos médicos, seguridad industrial y uniformes corporativos.
              Importación directa con cobertura en todo Bolivia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contacto"
                className="px-8 py-3.5 bg-amber text-navy font-bold text-[14px] rounded-md hover:bg-gold transition-colors min-h-[48px] flex items-center justify-center text-center"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Solicitar cotización
              </Link>
              <Link
                href="/catalogo"
                className="px-8 py-3.5 bg-transparent text-white font-semibold text-[14px] rounded-md border border-white/40 hover:bg-white/10 transition-colors min-h-[48px] flex items-center justify-center text-center"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Ver catálogo
              </Link>
            </motion.div>
          </div>

          {/* ── Columna derecha — Visual de 3 líneas ─────────────────── */}
          <motion.div
            className="w-full lg:w-[420px] flex-shrink-0 flex flex-col gap-3"
            initial={reduced ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            aria-hidden="true"
          >
            {LINES.map((line) => (
              <Link
                key={line.label}
                href={line.href}
                className="group flex items-center justify-between px-5 py-4 rounded-lg border border-white/10 hover:border-white/25 transition-all duration-200"
                style={{ backgroundColor: `${line.color}18` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2 h-8 rounded-full flex-shrink-0"
                    style={{ backgroundColor: line.color }}
                  />
                  <span
                    className="text-white font-semibold text-[14px]"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {line.label}
                  </span>
                </div>
                {/* Arrow */}
                <svg
                  className="w-4 h-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-200"
                  viewBox="0 0 16 16" fill="none"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}

            {/* Tagline bajo las líneas */}
            <p
              className="text-white/35 text-[10px] text-right mt-1 pr-1"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Más de 200 empresas confían en SEGUREPP
            </p>
          </motion.div>

        </div>
      </div>

      {/* Amber accent bottom */}
      <div className="h-[3px] bg-amber w-full" />
    </section>
  )
}
