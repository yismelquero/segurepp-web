'use client'

/**
 * KPI Bar — Home
 * Auditoría Final sección 4.6 — ESPECIFICACIÓN DEFINITIVA
 *
 * KPI 1: Contador animado → +200 clientes atendidos
 * KPI 2: Texto estático   → Cobertura Nacional
 * KPI 3: Texto estático   → Importación Directa
 * KPI 4: Texto estático   → Atención Personalizada
 *
 * PROHIBIDO: animar KPIs 2, 3 y 4 como contadores numéricos.
 */

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'
import { useKPICounter } from '@/hooks/useKPICounter'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const STATIC_KPIS = [
  { label: 'Cobertura Nacional', sublabel: 'Todo Bolivia' },
  { label: 'Importación Directa', sublabel: 'Sin intermediarios' },
  { label: 'Atención Personalizada', sublabel: 'B2B dedicado' },
]

function AnimatedCounter() {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const count = useKPICounter(200, 1200, triggered)

  useEffect(() => {
    if (reducedMotion) { setTriggered(true); return }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span
        className="text-amber font-bold text-2xl lg:text-3xl leading-none"
        style={{ fontFamily: 'var(--font-montserrat)' }}
        aria-label="Más de 200 clientes atendidos"
      >
        {triggered ? `+${count}` : '+0'}
      </span>
      <span
        className="text-navy text-[10px] font-semibold mt-1"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        clientes atendidos
      </span>
      <span
        className="text-gray-4 text-[9px] mt-0.5"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        Desde 2019
      </span>
    </div>
  )
}

export function KPIBar() {
  return (
    <section aria-label="Indicadores SEGUREPP" className="bg-white py-6 border-y border-gray-2">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-gray-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* KPI 1 — Contador animado */}
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center py-3 lg:py-4"
          >
            <AnimatedCounter />
          </motion.div>

          {/* KPIs 2, 3, 4 — Texto estático */}
          {STATIC_KPIS.map(({ label, sublabel }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="flex flex-col items-center text-center py-3 lg:py-4 px-4"
            >
              <span
                className="text-navy font-bold text-[13px] lg:text-[14px] leading-tight"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {label}
              </span>
              <span
                className="text-gray-4 text-[9px] mt-1"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {sublabel}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
