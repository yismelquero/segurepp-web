'use client'

/**
 * Header / Navegación
 * E1 sección 1.10 — Auditoría Final aprobada
 * - Desktop: nav links Montserrat Medium 15px · navy
 * - Mobile: drawer lateral derecho · hamburger 3 líneas
 * - Sticky con backdrop-blur al scroll > 10px
 * - CTA "Cotizar ahora" → amber filled
 */

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { drawerVariants, overlayVariants } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'
import { Button } from './Button'

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Catálogo', href: '/catalogo' },
  { label: 'Contacto', href: '/contacto' },
]

export function Header() {
  const pathname = usePathname()
  const reducedMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  // Sticky con blur al scroll > 10px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar drawer con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setDrawerOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Bloquear scroll del body cuando drawer está abierto
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] bg-white transition-shadow duration-200',
          scrolled && 'bg-white/95 backdrop-blur-sm shadow-lg'
        )}
        style={{ height: '48px' }}
      >
        <div className="mx-auto max-w-[1440px] h-full flex items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="SEGUREPP — Ir al inicio"
          >
            {/* Isotipo placeholder — sustituir por SVG real en producción */}
            <div className="w-7 h-7 bg-navy rounded-sm flex items-center justify-center">
              <span className="text-amber font-bold text-xs leading-none">S</span>
            </div>
            <span
              className="font-bold text-[13px] text-navy tracking-wide"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              SEGUREPP
            </span>
          </Link>

          {/* Nav desktop */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-[15px] font-medium text-navy transition-colors duration-120',
                  'hover:text-blue relative',
                  isActive(href) &&
                    'text-navy after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-amber after:rounded-full'
                )}
                style={{ fontFamily: 'var(--font-montserrat)' }}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              href="/contacto"
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex text-[15px]"
            >
              Cotizar ahora
            </Button>

            {/* Hamburger mobile */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded hover:bg-gray-1 transition-colors"
              aria-label="Abrir menú"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
            >
              <span className="w-6 h-[1.5px] bg-navy" />
              <span className="w-6 h-[1.5px] bg-navy" />
              <span className="w-6 h-[1.5px] bg-navy" />
            </button>
          </div>
        </div>
      </header>

      {/* Espaciador del header fijo */}
      <div style={{ height: '48px' }} />

      {/* ── DRAWER MOBILE ─────────────────────────────────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              variants={reducedMotion ? undefined : overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[150] bg-navy/40 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-drawer"
              ref={drawerRef}
              variants={reducedMotion ? undefined : drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 z-[200] w-72 bg-white shadow-lg flex flex-col"
              aria-label="Menú de navegación"
              role="dialog"
              aria-modal="true"
            >
              {/* Header del drawer */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-2">
                <span
                  className="font-bold text-[13px] text-navy"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  SEGUREPP
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded hover:bg-gray-1 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2l12 12M14 2L2 14" stroke="#071D4F" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 flex flex-col py-2">
                {NAV_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setDrawerOpen(false)}
                    className={cn(
                      'px-5 py-4 text-[14px] font-medium text-navy transition-colors',
                      'hover:bg-gray-1 border-l-[3px]',
                      isActive(href)
                        ? 'border-l-amber bg-gray-1'
                        : 'border-l-transparent'
                    )}
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                    aria-current={isActive(href) ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* CTA en el drawer */}
              <div className="px-5 py-5 border-t border-gray-2">
                <Button
                  href="/contacto"
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setDrawerOpen(false)}
                >
                  Solicitar cotización
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
