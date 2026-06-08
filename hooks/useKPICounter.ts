'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Contador animado con requestAnimationFrame.
 * Solo KPI 1 (+200 clientes) usa este hook.
 * Auditoría Final: KPIs 2, 3, 4 son texto estático — NO usar este hook.
 *
 * @param target   Valor objetivo (ej: 200)
 * @param duration Duración en ms (default: 1200)
 * @param trigger  Si true, inicia la animación
 */
export function useKPICounter(target: number, duration = 1200, trigger = false) {
  const reducedMotion = useReducedMotion()
  const [count, setCount] = useState(() => (trigger && reducedMotion ? target : 0))
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!trigger) return
    if (reducedMotion) {
      return
    }

    const startTime = performance.now()

    // easeOutCubic — aprobado en E2, sección 2.4
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedValue = easeOutCubic(progress)
      setCount(Math.floor(easedValue * target))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setCount(target)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [trigger, target, duration, reducedMotion])

  return trigger && reducedMotion ? target : count
}
