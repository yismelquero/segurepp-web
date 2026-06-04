'use client'

/**
 * Hero — Home
 * Auditoría Final / E3 sección 3.1
 *
 * Desktop (>=1024px): 3 paneles side-by-side · 36.5% / 29.5% / 34% · altura 230px
 * Tablet (768–1023px): 3 paneles apilados · altura 90px cada uno · estático
 * Mobile (<768px): 3 paneles apilados · altura 100–110px · sin carrusel · sin autoplay
 * PROHIBIDO: carousel con autoplay, slider automático, mecanismo que oculte paneles.
 */

import Link from 'next/link'
import { motion } from 'framer-motion'
import { heroContent, viewportOptions } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const PANELS = [
  {
    id: 'medico',
    label: 'Equipos Médicos',
    headline: 'Equipos de\nDiagnóstico Avanzado',
    subheadline: 'Monitores · Electrocardióg. · Ecógrafos',
    accentColor: '#0E7490',
    bg: 'from-[#040F2E] to-[#071D4F]',
    href: '/soluciones/equipos-medicos',
    // En producción: sustituir por fotografía/render real de equipo médico
    height: { mobile: 100, tablet: 90, desktop: 230 },
  },
  {
    id: 'industrial',
    label: 'Seguridad Industrial',
    headline: 'Protección Industrial\nCertificada',
    subheadline: 'EPP · Señalización · Seguridad Ocup.',
    accentColor: '#1A6FBF',
    bg: 'from-[#071D4F] to-[#0D2563]',
    href: '/soluciones/seguridad-industrial',
    height: { mobile: 110, tablet: 90, desktop: 230 },
  },
  {
    id: 'uniformes',
    label: 'Uniformes y Merchandising',
    headline: 'Imagen Corporativa\na tu Medida',
    subheadline: 'Uniformes · Bordado · Sublimación',
    accentColor: '#F8AF00',
    bg: 'from-[#040F2E] to-[#071D4F]',
    href: '/soluciones/uniformes-merchandising',
    height: { mobile: 100, tablet: 90, desktop: 230 },
  },
]

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section aria-label="Líneas de negocio SEGUREPP" className="relative w-full">

      {/* ─── PANELES ──────────────────────────────────────────────────────── */}
      {/* Desktop: flex row. Tablet/Mobile: flex col */}
      <div className="flex flex-col md:flex-col lg:flex-row w-full">
        {PANELS.map((panel, index) => (
          <Link
            key={panel.id}
            href={panel.href}
            className={`
              relative overflow-hidden group
              bg-gradient-to-br ${panel.bg}
              flex-1
              ${index < PANELS.length - 1 ? 'border-b border-white/15 lg:border-b-0 lg:border-r lg:border-white/15' : ''}
            `}
            style={{
              // Mobile: 100–110px; Tablet: 90px; Desktop: 230px via CSS clamp
              minHeight: 'clamp(90px, 15vw, 230px)',
            }}
            aria-label={`Ver soluciones de ${panel.label}`}
          >
            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

            {/* Contenido del panel */}
            <div className="relative z-10 h-full flex flex-col justify-end p-4 lg:p-6">
              {/* Label chip */}
              <span
                className="inline-block mb-1.5 px-2 py-0.5 rounded text-white font-bold text-[6px] tracking-widest uppercase w-fit"
                style={{
                  backgroundColor: panel.accentColor,
                  fontFamily: 'var(--font-montserrat)',
                }}
              >
                {panel.label}
              </span>

              {/* Headline */}
              <h2
                className="text-white font-bold leading-tight text-[13px] lg:text-[18px] whitespace-pre-line"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {panel.headline}
              </h2>

              {/* Subheadline — oculto en mobile (redundante con labels) */}
              <p
                className="hidden lg:block text-white/70 mt-1 text-[8px] lg:text-[10px]"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {panel.subheadline}
              </p>
            </div>

            {/* Accent top border */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ backgroundColor: panel.accentColor }}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                 style={{ backgroundColor: panel.accentColor }} />
          </Link>
        ))}
      </div>

      {/* ─── GLASS PILL — Desktop: flotante centrado · Mobile: debajo ──── */}
      {/* En desktop flota sobre los 3 paneles; en mobile aparece pegado al último */}
      <motion.div
        className="relative lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 lg:z-20
                   bg-navy/90 lg:bg-white/10 backdrop-blur-sm
                   px-6 py-4 lg:rounded-2xl
                   lg:w-[460px] w-full lg:border lg:border-white/20"
        variants={reducedMotion ? undefined : heroContent}
        initial="hidden"
        animate="visible"
      >
        {/* Posicionamiento aprobado (Auditoría Final) */}
        <h1
          className="text-white font-bold text-[14px] lg:text-[15px] text-center leading-snug"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Un solo proveedor para<br className="hidden lg:inline" /> múltiples necesidades empresariales
        </h1>

        {/* CTAs — Mobile: stack vertical full-width · Desktop: 3 pills horizontales */}
        <div className="mt-3 flex flex-col sm:flex-row gap-2 justify-center">
          <Link
            href="/contacto"
            className="flex-1 text-center bg-amber text-navy font-bold text-[13px] py-3 rounded-md hover:bg-gold transition-colors min-h-[44px] flex items-center justify-center"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Cotizar
          </Link>
          <Link
            href="/catalogo"
            className="flex-1 text-center bg-white/10 text-white font-semibold text-[13px] py-3 rounded-md hover:bg-white/20 transition-colors min-h-[44px] flex items-center justify-center border border-white/30"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Catálogo
          </Link>
          <a
            href="https://wa.me/59178407223"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-green text-white font-bold text-[13px] py-3 rounded-md hover:bg-[#15803D] transition-colors min-h-[44px] flex items-center justify-center"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Espaciador para el glass pill en desktop */}
      <div className="hidden lg:block h-10" />
    </section>
  )
}
