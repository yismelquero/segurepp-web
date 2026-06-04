/**
 * Catálogo de productos SEGUREPP
 * ─────────────────────────────────────────────────────────────────────────────
 * Agregar productos aquí. Campos requeridos:
 *   id, nombre, sku, slug, lineaNegocio, categoria, descripcionCorta, estado
 *
 * Imágenes: colocar en /public/productos/<slug>/ y referenciar como:
 *   imagenes: ['/productos/mi-producto/imagen-1.webp']
 *
 * Sin precio público — modelo B2B cotización.
 */

import type { Producto } from '@/types'

export const productos: Producto[] = [
  // ── EQUIPOS MÉDICOS ──────────────────────────────────────────────────────
  // {
  //   id: 'mon-001',
  //   nombre: 'Monitor Multiparámetro XYZ',
  //   sku: 'MON-001',
  //   slug: 'monitor-multiparametro-xyz',
  //   lineaNegocio: 'medico',
  //   categoria: { id: 'cat-monitores', nombre: 'Monitores', slug: 'monitores' },
  //   marca: 'Fabricante',
  //   descripcionCorta: 'Monitor de signos vitales con pantalla táctil de 12".',
  //   especificaciones: [
  //     { clave: 'Pantalla', valor: '12" táctil' },
  //     { clave: 'Parámetros', valor: 'SpO2, NIBP, ECG, Temperatura' },
  //   ],
  //   imagenes: ['/productos/monitor-xyz/principal.webp'],
  //   imagenesAlt: ['Monitor multiparámetro XYZ vista frontal'],
  //   estado: 'activo',
  //   destacado: true,
  //   orden: 1,
  // },

  // ── SEGURIDAD INDUSTRIAL ─────────────────────────────────────────────────
  // {
  //   id: 'epp-001',
  //   nombre: 'Casco de Seguridad Industrial',
  //   sku: 'CSI-001',
  //   slug: 'casco-seguridad-industrial',
  //   lineaNegocio: 'industrial',
  //   categoria: { id: 'cat-cascos', nombre: 'Cascos', slug: 'cascos' },
  //   descripcionCorta: 'Casco tipo ratchet con suspensión de 6 puntos.',
  //   imagenes: [],
  //   imagenesAlt: [],
  //   estado: 'activo',
  //   destacado: false,
  //   orden: 1,
  // },

  // ── UNIFORMES Y MERCHANDISING ────────────────────────────────────────────
  // {
  //   id: 'uni-001',
  //   nombre: 'Uniforme Médico Premium',
  //   sku: 'UNI-001',
  //   slug: 'uniforme-medico-premium',
  //   lineaNegocio: 'uniformes',
  //   categoria: { id: 'cat-uniformes-medicos', nombre: 'Uniformes Médicos', slug: 'uniformes-medicos' },
  //   descripcionCorta: 'Uniforme médico en tela antifluido con bordado corporativo.',
  //   imagenes: [],
  //   imagenesAlt: [],
  //   estado: 'activo',
  //   destacado: false,
  //   orden: 1,
  // },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getProductoBySlug(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug && p.estado === 'activo')
}

export function getProductosByLinea(linea: string): Producto[] {
  return productos
    .filter((p) => p.lineaNegocio === linea && p.estado === 'activo')
    .sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0) || (a.orden ?? 99) - (b.orden ?? 99))
}

export function getTodosProductos(): Producto[] {
  return productos
    .filter((p) => p.estado === 'activo')
    .sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0) || (a.orden ?? 99) - (b.orden ?? 99))
}

export function getProductosRelacionados(linea: string, slugActual: string): Producto[] {
  return productos
    .filter((p) => p.lineaNegocio === linea && p.slug !== slugActual && p.estado === 'activo')
    .slice(0, 3)
}

export function getTodosSlugProductos(): Array<{ slug: string; lineaNegocio: string }> {
  return productos
    .filter((p) => p.estado === 'activo')
    .map((p) => ({ slug: p.slug, lineaNegocio: p.lineaNegocio }))
}
