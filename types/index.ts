// ─── LÍNEAS DE NEGOCIO ────────────────────────────────────────────────────────
export type LineaNegocio = 'medico' | 'industrial' | 'uniformes'
export type ProductoEstado = 'activo' | 'inactivo' | 'descatalogado'
export type ClienteEstado = 'activo' | 'inactivo'

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
  id: string
  nombre: string
  slug: string
  lineaNegocio: LineaNegocio
  descripcion?: string
  orden?: number
}

// ─── PRODUCTO ─────────────────────────────────────────────────────────────────
export interface Producto {
  id: string
  nombre: string
  sku: string
  slug: string
  lineaNegocio: LineaNegocio
  categoria: Omit<Categoria, 'lineaNegocio' | 'descripcion'>
  marca?: string
  descripcionCorta: string
  descripcionLarga?: string        // texto plano o HTML mínimo
  especificaciones?: Especificacion[]
  fichaTecnicaUrl?: string         // URL pública del PDF
  imagenes: string[]               // URLs públicas
  imagenesAlt: string[]
  estado: ProductoEstado
  destacado: boolean
  orden?: number
  metaTitle?: string
  metaDescription?: string
}

// ─── PRODUCTO CARD (datos mínimos para listados) ──────────────────────────────
export type ProductoCard = Pick<
  Producto,
  'id' | 'nombre' | 'slug' | 'lineaNegocio' | 'categoria' |
  'marca' | 'descripcionCorta' | 'imagenes' | 'imagenesAlt' | 'destacado'
>

// ─── CLIENTE ──────────────────────────────────────────────────────────────────
export interface Cliente {
  id: string
  nombreEmpresa: string
  logoUrl: string                  // URL pública del logo (SVG/WebP)
  logoAlt: string
  sector: ClienteSector
  ciudad?: string
  estado: ClienteEstado
  orden?: number
}

// ─── CONFIGURACIÓN DEL SITIO ──────────────────────────────────────────────────
export interface SiteConfig {
  whatsapp: string
  email: string
  direccion: string
  ciudad: string
  horario: string
  yearFundacion: number
  mapaEmbed?: string
  latitud?: number
  longitud?: number
}

// ─── KPI ──────────────────────────────────────────────────────────────────────
export interface KPIItem {
  valor: string | number
  sufijo?: string
  label: string
  animado: boolean
}

// ─── PARÁMETROS DE RUTA ───────────────────────────────────────────────────────
export interface LineaParams {
  linea: 'equipos-medicos' | 'seguridad-industrial' | 'uniformes-merchandising'
}

export interface ProductoParams extends LineaParams {
  slug: string
}
