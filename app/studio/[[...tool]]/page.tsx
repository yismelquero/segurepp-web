/**
 * Sanity Studio — Acceso externo
 *
 * Sanity Studio no es compatible con Turbopack (Next.js 16).
 * El Studio se despliega por separado en Sanity CDN:
 *   npx sanity deploy → https://segurepp.sanity.studio
 *
 * Esta página redirige al Studio hospedado.
 */
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  // En producción: redirige al Studio hospedado en Sanity CDN
  // Para acceso local, ejecutar: npx sanity dev (en /sanity)
  redirect('https://segurepp.sanity.studio')
}
