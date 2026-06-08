'use client'

import { useSyncExternalStore } from 'react'

/**
 * Detecta prefers-reduced-motion.
 * Todas las animaciones deben consultar este hook.
 * Si retorna true → no animar.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      const handler = () => onStoreChange()
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false
  )
}
