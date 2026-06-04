import { defineField, defineType } from 'sanity'

/**
 * Modelo: Configuración Global (Singleton)
 * Auditoría Final — incluye campos de expansión geográfica
 */
export const configGlobalSchema = defineType({
  name: 'configGlobal',
  title: 'Configuración Global',
  type: 'document',
  groups: [
    { name: 'contacto', title: 'Contacto', default: true },
    { name: 'seo', title: 'SEO por defecto' },
    { name: 'geo', title: 'Expansión geográfica' },
    { name: 'analytics', title: 'Analytics' },
  ],
  fields: [
    // ── CONTACTO ─────────────────────────────────────────────────────────────
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      group: 'contacto',
      initialValue: '(+591) 78407223',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email principal',
      type: 'string',
      group: 'contacto',
      initialValue: 'info@segurepp.com',
      validation: (R) => R.required().email(),
    }),
    defineField({
      name: 'direccionPrincipal',
      title: 'Dirección principal',
      type: 'string',
      group: 'contacto',
      initialValue: 'Calle Cañada Strongest 1842, Torre Centrum, Piso 3, Of.301',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'ciudadPrincipal',
      title: 'Ciudad',
      type: 'string',
      group: 'contacto',
      initialValue: 'La Paz, Bolivia',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'horario',
      title: 'Horario de atención',
      type: 'string',
      group: 'contacto',
      initialValue: 'Lunes a Viernes 08:00 – 18:00 (BOT)',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'yearFundacion',
      title: 'Año de fundación',
      type: 'number',
      group: 'contacto',
      initialValue: 2019,
      description: 'Usado para cálculo dinámico. NO modificar.',
      validation: (R) => R.required().integer().min(1900).max(2100),
    }),
    // ── SEO ───────────────────────────────────────────────────────────────────
    defineField({
      name: 'seoDefaultTitle',
      title: 'Sufijo de meta title',
      type: 'string',
      group: 'seo',
      initialValue: 'SEGUREPP',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'seoDefaultDescription',
      title: 'Meta description por defecto',
      type: 'text',
      group: 'seo',
      rows: 3,
      initialValue:
        'Proveedor boliviano de equipos médicos, seguridad industrial y uniformes corporativos. Más de 200 empresas en Bolivia confían en SEGUREPP. Solicite cotización.',
      validation: (R) => R.required().max(160),
    }),
    // ── EXPANSIÓN GEOGRÁFICA ──────────────────────────────────────────────────
    defineField({
      name: 'sucursales',
      title: 'Sucursales (vacío en v1)',
      type: 'array',
      group: 'geo',
      of: [{ type: 'sucursal' }],
      description: 'Agregar sucursales aquí cuando SEGUREPP expanda. Sin modificar código.',
    }),
    defineField({
      name: 'coberturaDescripcion',
      title: 'Descripción de cobertura',
      type: 'string',
      group: 'geo',
      description: 'Ej: "Atendemos en todo Bolivia"',
    }),
    defineField({
      name: 'ciudadesCoverage',
      title: 'Ciudades de cobertura',
      type: 'array',
      group: 'geo',
      of: [{ type: 'string' }],
      description: 'Ej: ["La Paz", "Cochabamba", "Santa Cruz"]',
    }),
    defineField({
      name: 'mapaEmbed',
      title: 'URL del mapa embed (Google Maps iframe)',
      type: 'url',
      group: 'geo',
    }),
    defineField({
      name: 'latitud',
      title: 'Latitud GPS (para Schema LocalBusiness)',
      type: 'number',
      group: 'geo',
      description:
        'Aproximado La Paz: -16.4897 · Reemplazar con coordenadas exactas de Torre Centrum',
      initialValue: -16.4897,
    }),
    defineField({
      name: 'longitud',
      title: 'Longitud GPS (para Schema LocalBusiness)',
      type: 'number',
      group: 'geo',
      description: 'Aproximado La Paz: -68.1193',
      initialValue: -68.1193,
    }),
    // ── ANALYTICS ─────────────────────────────────────────────────────────────
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics 4 ID',
      type: 'string',
      group: 'analytics',
      description: 'Formato: G-XXXXXXXXXX',
    }),
    defineField({
      name: 'metaPixelId',
      title: 'Meta Pixel ID (opcional)',
      type: 'string',
      group: 'analytics',
    }),
  ],
  preview: {
    select: { title: 'email' },
    prepare() {
      return { title: 'Configuración Global — SEGUREPP' }
    },
  },
})
