/**
 * Framer Motion variants — SEGUREPP
 * Solo animaciones aprobadas: scroll reveal, fade, hover states
 * PROHIBIDO: carruseles automáticos, autoplay, cualquier loop
 */

import type { Variants } from 'framer-motion'

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.48, ease: 'easeOut' },
  },
}

export const heroContent: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// ─── STAGGER CONTAINER ────────────────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
  },
}

// ─── DRAWER NAV MOBILE ────────────────────────────────────────────────────────

export const drawerVariants: Variants = {
  closed: { x: '100%', opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

export const overlayVariants: Variants = {
  closed: { opacity: 0, pointerEvents: 'none' as const },
  open: { opacity: 1, pointerEvents: 'auto' as const },
}

// ─── OPCIONES VIEWPORT (Intersection Observer de Framer) ─────────────────────
// Equivalente al IntersectionObserver aprobado: threshold 0.1, once: true

export const viewportOptions = {
  once: true,
  margin: '0px 0px -40px 0px',
  amount: 0.1,
} as const
