/**
 * Clientes SEGUREPP — logos para sección "Empresas que confían en nosotros"
 * ─────────────────────────────────────────────────────────────────────────────
 * Colocar logos en /public/clientes/<nombre>.svg (SVG preferido, fondo transparente)
 * y referenciar como logoUrl: '/clientes/empresa.svg'
 */

import type { Cliente } from '@/types'

export const clientes: Cliente[] = [
  // {
  //   id: 'cli-001',
  //   nombreEmpresa: 'Clínica del Sur',
  //   logoUrl: '/clientes/clinica-del-sur.svg',
  //   logoAlt: 'Logo Clínica del Sur',
  //   sector: 'salud',
  //   ciudad: 'La Paz',
  //   estado: 'activo',
  //   orden: 1,
  // },
]

export function getClientesActivos(): Cliente[] {
  return clientes
    .filter((c) => c.estado === 'activo')
    .sort((a, b) => (a.orden ?? 99) - (b.orden ?? 99))
}
