import type { Image, PortableTextBlock } from '@sanity/types'

// ─── LÍNEAS DE NEGOCIO ────────────────────────────────────────────────────────
export type LineaNegocio = 'medico' | 'industrial' | 'uniformes'
export type ProductoEstado = 'activo' | 'inactivo' | 'descatalogado'
export type ClienteEstado = 'activo' | 'inactivo'
export type SucursalEstado = 'activo' | 'inactivo'

export type ClienteSector =
  | 'salud'
  | 'mineria'
  | 'industria'
  | 'educacion'
  | 'retail'
  | 'publico'
  | 'construccion'

// ─── ESPECIFICACIÓN TÉCNICA ───────────────────────────────────────────────────
export interface Especificacion {
  clave: string
  valor: string
}

// ─── CATEGORÍA ────────────────────────────────────────────────────────────────
export interface Categoria {
  _id: string
  nombre: string
  slug: string
  lineaNegocio: LineaNegocio
  descripcion?: string
  orden?: number
}

// ─── PRODUCTO ─────────────────────────────────────────────────────────────────
export interface Producto {
  _id: string
  nombre: string
  sku: string
  slug: string
  lineaNegocio: LineaNegocio
  categoria: Categoria
  marca?: string
  descripcionCorta: string
  descripcionLarga: PortableTextBlock[]
  especificaciones?: Especificacion[]
  fichaTecnicaPDF?: { asset: { url: string } }
  imagenes: Image[]
  imagenesAlt: string[]
  estado: ProductoEstado
  destacado: boolean
  orden?: number
  metaTitle?: string
  metaDescription?: string
}

// ─── PRODUCTO CARD (datos mínimos para listados) ──────────────────────────────
export interface ProductoCard {
  _id: string
  nombre: string
  slug: string
  lineaNegocio: LineaNegocio
  categoria: { nombre: string; slug: string }
  marca?: string
  descripcionCorta: string
  imagenes: Image[]
  imagenesAlt: string[]
  destacado: boolean
}

// ─── CLIENTE ──────────────────────────────────────────────────────────────────
export interface Cliente {
  _id: string
  nombreEmpresa: string
  logo: Image
  logoAlt: string
  sector: ClienteSector
  ciudad?: string
  estado: ClienteEstado
  orden?: number
}

// ─── SUCURSAL ─────────────────────────────────────────────────────────────────
export interface Sucursal {
  _key: string
  nombre: string
  direccion: string
  ciudad: string
  telefono?: string
  whatsapp?: string
  email?: string
  horario?: string
  latitud?: number
  longitud?: number
  estado: SucursalEstado
  orden?: number
}

// ─── CONFIGURACIÓN GLOBAL ─────────────────────────────────────────────────────
export interface ConfigGlobal {
  _id: string
  whatsapp: string
  email: string
  direccionPrincipal: string
  ciudadPrincipal: string
  horario: string
  yearFundacion: number
  seoDefaultTitle: string
  seoDefaultDescription: string
  googleAnalyticsId?: string
  // Expansión geográfica
  sucursales?: Sucursal[]
  coberturaDescripcion?: string
  ciudadesCoverage?: string[]
  mapaEmbed?: string
  latitud?: number
  longitud?: number
}

// ─── PÁGINA ESTÁTICA ──────────────────────────────────────────────────────────
export type PaginaEnum = 'home' | 'nosotros' | 'soluciones' | 'contacto'

export interface PaginaEstatica {
  _id: string
  pagina: PaginaEnum
  heroTitulo: string
  heroSubtitulo?: string
  metaTitle?: string
  metaDescription?: string
  ogImagen?: Image
  contenidoRich?: PortableTextBlock[]
}

// ─── KPI ──────────────────────────────────────────────────────────────────────
export interface KPIItem {
  valor: string | number
  sufijo?: string
  label: string
  animado: boolean   // true solo para KPI con contador numérico
}

// ─── PARÁMETROS DE RUTA ───────────────────────────────────────────────────────
export interface LineaParams {
  linea: 'equipos-medicos' | 'seguridad-industrial' | 'uniformes-merchandising'
}

export interface ProductoParams extends LineaParams {
  slug: string
}
