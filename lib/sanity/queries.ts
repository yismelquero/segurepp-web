// ─── PROYECCIONES REUTILIZABLES ───────────────────────────────────────────────

const IMAGEN_PROJECTION = `
  imagenes[]{
    asset->{ _id, url, metadata { dimensions } }
  },
  imagenesAlt
`

const CATEGORIA_PROJECTION = `
  categoria->{
    _id,
    nombre,
    slug,
    lineaNegocio
  }
`

// ─── PRODUCTO CARD (listados) ─────────────────────────────────────────────────
export const PRODUCTO_CARD_PROJECTION = `
  _id,
  nombre,
  "slug": slug.current,
  lineaNegocio,
  ${CATEGORIA_PROJECTION},
  marca,
  descripcionCorta,
  ${IMAGEN_PROJECTION},
  destacado
`

// ─── PRODUCTO COMPLETO (ficha) ────────────────────────────────────────────────
export const PRODUCTO_FULL_PROJECTION = `
  _id,
  nombre,
  sku,
  "slug": slug.current,
  lineaNegocio,
  ${CATEGORIA_PROJECTION},
  marca,
  descripcionCorta,
  descripcionLarga,
  especificaciones,
  fichaTecnicaPDF{ asset->{ url } },
  ${IMAGEN_PROJECTION},
  estado,
  destacado,
  orden,
  metaTitle,
  metaDescription
`

// ─── QUERIES ──────────────────────────────────────────────────────────────────

/** Todos los productos activos de una línea */
export const PRODUCTOS_POR_LINEA = `
  *[_type == "producto" && lineaNegocio == $linea && estado == "activo"] | order(destacado desc, orden asc) {
    ${PRODUCTO_CARD_PROJECTION}
  }
`

/** Todos los productos activos (catálogo general) */
export const TODOS_PRODUCTOS = `
  *[_type == "producto" && estado == "activo"] | order(destacado desc, orden asc) {
    ${PRODUCTO_CARD_PROJECTION}
  }
`

/** Producto por slug */
export const PRODUCTO_POR_SLUG = `
  *[_type == "producto" && slug.current == $slug && estado == "activo"][0] {
    ${PRODUCTO_FULL_PROJECTION}
  }
`

/** Productos destacados para Home */
export const PRODUCTOS_DESTACADOS = `
  *[_type == "producto" && destacado == true && estado == "activo"] | order(orden asc)[0...6] {
    ${PRODUCTO_CARD_PROJECTION}
  }
`

/** Productos relacionados (misma línea, excluir actual) */
export const PRODUCTOS_RELACIONADOS = `
  *[_type == "producto" && lineaNegocio == $linea && slug.current != $slug && estado == "activo"] | order(destacado desc)[0...3] {
    ${PRODUCTO_CARD_PROJECTION}
  }
`

/** Slugs de todos los productos (para generateStaticParams) */
export const TODOS_SLUGS_PRODUCTOS = `
  *[_type == "producto" && estado == "activo"] {
    "slug": slug.current,
    lineaNegocio
  }
`

/** Todas las categorías */
export const TODAS_CATEGORIAS = `
  *[_type == "categoria"] | order(orden asc) {
    _id,
    nombre,
    "slug": slug.current,
    lineaNegocio,
    descripcion,
    orden
  }
`

/** Categorías por línea */
export const CATEGORIAS_POR_LINEA = `
  *[_type == "categoria" && lineaNegocio == $linea] | order(orden asc) {
    _id,
    nombre,
    "slug": slug.current,
    lineaNegocio,
    descripcion
  }
`

/** Clientes activos */
export const CLIENTES_ACTIVOS = `
  *[_type == "cliente" && estado == "activo"] | order(orden asc) {
    _id,
    nombreEmpresa,
    logo{ asset->{ _id, url } },
    logoAlt,
    sector,
    ciudad
  }
`

/** Configuración global */
export const CONFIG_GLOBAL = `
  *[_type == "configGlobal"][0] {
    _id,
    whatsapp,
    email,
    direccionPrincipal,
    ciudadPrincipal,
    horario,
    yearFundacion,
    seoDefaultTitle,
    seoDefaultDescription,
    googleAnalyticsId,
    sucursales,
    coberturaDescripcion,
    ciudadesCoverage,
    mapaEmbed,
    latitud,
    longitud
  }
`

/** Página estática por tipo */
export const PAGINA_ESTATICA = `
  *[_type == "paginaEstatica" && pagina == $pagina][0] {
    _id,
    pagina,
    heroTitulo,
    heroSubtitulo,
    metaTitle,
    metaDescription,
    ogImagen{ asset->{ url } },
    contenidoRich
  }
`
