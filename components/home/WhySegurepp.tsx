'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'
import { useRef, useState, useEffect } from 'react'
import { useKPICounter } from '@/hooks/useKPICounter'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/**
 * Sección 3 — ¿Por qué elegir SEGUREPP?
 * 6 diferenciadores + contador animado de clientes.
 * Reemplaza KPIBar horizontal con sección de mayor jerarquía visual.
 */

const DIFERENCIADORES = [
  {
    id: 'importacion',
    titulo: 'Importación directa',
    descripcion: 'Sin intermediarios. Trabajamos directamente con fabricantes para garantizar calidad y precio competitivo.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'atencion',
    titulo: 'Atención personalizada',
    descripcion: 'Cada cliente recibe asesoría técnica dedicada. Entendemos las necesidades específicas de su empresa.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'cobertura',
    titulo: 'Cobertura nacional',
    descripcion: 'Atendemos empresas en La Paz, Santa Cruz, Cochabamba y todo Bolivia. Presencia nacional real.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 3a9 9 0 010 18M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'entrega',
    titulo: 'Entrega garantizada',
    descripcion: 'Cumplimos los plazos acordados. Seguimiento de pedidos y comunicación proactiva en cada etapa.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'fundacion',
    titulo: 'Fundada en 2019',
    descripcion: 'Empresa boliviana con trayectoria comprobada. Años de experiencia proveyendo a empresas e instituciones.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="9" width="18" height="13" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 9V5a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

function ClientCounter() {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const count = useKPICounter(200, 1400, triggered)

  useEffect(() => {
    if (reducedMotion) { setTriggered(true); return }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <div ref={ref} className="flex flex-col items-start">
      <span
        className="text-amber font-bold text-[44px] lg:text-[56px] leading-none"
        style={{ fontFamily: 'var(--font-montserrat)' }}
        aria-label="Más de 200 clientes atendidos"
      >
        +{triggered ? count : '0'}
      </span>
      <span
        className="text-navy font-bold text-[13px] mt-1"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        clientes atendidos
      </span>
      <span
        className="text-gray-3 text-[11px] mt-0.5"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        Empresas e instituciones
      </span>
    </div>
  )
}

export function WhySegurepp() {
  return (
    <section aria-label="Por qué elegir SEGUREPP" className="py-16 lg:py-24 bg-gray-1">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.4 }}
        >
          <p
            className="text-amber font-bold text-[10px] tracking-[0.18em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Nuestra propuesta de valor
          </p>
          <h2
            className="text-navy font-bold text-2xl lg:text-[36px] leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            ¿Por qué elegir SEGUREPP?
          </h2>
        </motion.div>

        {/* Layout: contador izquierda + grid de 5 diferenciadores derecha */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Contador destacado */}
          <motion.div
            className="flex-shrink-0 lg:w-48 flex flex-col items-start justify-center bg-white rounded-xl p-8 border border-gray-2 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <ClientCounter />
          </motion.div>

          {/* 5 diferenciadores */}
          <motion.div
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {DIFERENCIADORES.map((d) => (
              <motion.div
                key={d.id}
                variants={staggerItem}
                className="bg-white rounded-xl p-5 border border-gray-2 shadow-sm flex gap-4"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-amber"
                  style={{ backgroundColor: '#F8AF0014' }}
                >
                  {d.icon}
                </div>
                <div>
                  <h3
                    className="text-navy font-bold text-[13px] mb-1 leading-tight"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {d.titulo}
                  </h3>
                  <p
                    className="text-gray-4 text-[12px] leading-relaxed"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {d.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
