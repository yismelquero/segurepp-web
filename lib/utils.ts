import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Combina clases de Tailwind eliminando conflictos */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Formatea el año dinámicamente sin hardcodear */
export function getAnosDesde(year: number): number {
  return new Date().getFullYear() - year
}

/** Trunca texto a N caracteres */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '…'
}

/** Convierte slug a título legible */
export function slugToTitle(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

/** Mapa de líneas de negocio → nombre UI */
export const LINEA_LABELS: Record<string, string> = {
  medico: 'Equipos Médicos',
  industrial: 'Seguridad Industrial',
  uniformes: 'Uniformes y Merchandising',
}

/** Mapa de líneas de negocio → slug de URL */
export const LINEA_SLUGS: Record<string, string> = {
  medico: 'equipos-medicos',
  industrial: 'seguridad-industrial',
  uniformes: 'uniformes-merchandising',
}

/** Mapa inverso: slug → enum CMS */
export const SLUG_TO_LINEA: Record<string, string> = {
  'equipos-medicos': 'medico',
  'seguridad-industrial': 'industrial',
  'uniformes-merchandising': 'uniformes',
}

/** Color de acento por línea de negocio */
export const LINEA_COLORS: Record<string, string> = {
  medico: '#0E7490',      // teal — solo para Equipos Médicos
  industrial: '#1A6FBF',  // electric blue
  uniformes: '#071D4F',   // navy
}
