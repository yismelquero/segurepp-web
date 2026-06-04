'use client'

import { useEffect, useState } from 'react'

/**
 * Detecta prefers-reduced-motion.
 * Todas las animaciones deben consultar este hook.
 * Si retorna true → no animar.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}
