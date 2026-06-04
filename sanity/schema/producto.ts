import { defineField, defineType } from 'sanity'

/**
 * Modelo: Producto
 * Auditoría Final — lineaNegocio: 3 valores exactos (medico|industrial|uniformes)
 * NUNCA exponer precio público en ningún campo.
 */
export const productoSchema = defineType({
  name: 'producto',
  title: 'Producto',
  type: 'document',
  groups: [
    { name: 'basico', title: 'Información básica', default: true },
    { name: 'contenido', title: 'Contenido' },
    { name: 'multimedia', title: 'Imágenes y archivos' },
    { name: 'seo', title: 'SEO' },
    { name: 'configuracion', title: 'Configuración' },
  ],
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre del producto',
      type: 'string',
      group: 'basico',
      validation: (R) => R.required().min(3).max(120),
    }),
    defineField({
      name: 'sku',
      title: 'SKU (Referencia interna)',
      type: 'string',
      group: 'basico',
      description: 'Formato: [A-Z0-9-]+ · Debe ser único',
      validation: (R) =>
        R.required()
          .uppercase()
          .regex(/^[A-Z0-9-]+$/, { name: 'SKU válido', invert: false }),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      group: 'basico',
      options: { source: 'nombre', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'lineaNegocio',
      title: 'Línea de negocio',
      type: 'string',
      group: 'basico',
      description:
        'SEGUREPP tiene 3 líneas de negocio. "uniformes" incluye Confección y Merchandising.',
      options: {
        list: [
          { title: 'Equipos Médicos', value: 'medico' },
          { title: 'Seguridad Industrial', value: 'industrial' },
          { title: 'Uniformes y Merchandising', value: 'uniformes' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'categoria' }],
      group: 'basico',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'marca',
      title: 'Marca / Fabricante',
      type: 'string',
      group: 'basico',
      validation: (R) => R.max(60),
    }),
    defineField({
      name: 'descripcionCorta',
      title: 'Descripción corta',
      type: 'string',
      group: 'contenido',
      description: 'Máximo 160 caracteres. Aparece en cards y meta description.',
      validation: (R) => R.required().max(160),
    }),
    defineField({
      name: 'descripcionLarga',
      title: 'Descripción completa',
      type: 'array',
      group: 'contenido',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'especificaciones',
      title: 'Especificaciones técnicas',
      type: 'array',
      group: 'contenido',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'clave', type: 'string', title: 'Característica' }),
            defineField({ name: 'valor', type: 'string', title: 'Valor' }),
          ],
          preview: { select: { title: 'clave', subtitle: 'valor' } },
        },
      ],
      validation: (R) => R.max(20),
    }),
    defineField({
      name: 'fichaTecnicaPDF',
      title: 'Ficha técnica PDF',
      type: 'file',
      group: 'multimedia',
      options: { accept: 'application/pdf' },
      description: 'Máximo 10MB. Descargable desde la ficha del producto.',
    }),
    defineField({
      name: 'imagenes',
      title: 'Imágenes del producto',
      type: 'array',
      group: 'multimedia',
      of: [{ type: 'image', options: { hotspot: true } }],
      description:
        'Mínimo 1, máximo 10. Primera imagen = principal. Formato WEBP o JPG.',
      validation: (R) => R.required().min(1).max(10),
    }),
    defineField({
      name: 'imagenesAlt',
      title: 'Texto alternativo de imágenes',
      type: 'array',
      group: 'multimedia',
      of: [{ type: 'string' }],
      description: 'Un alt text por imagen. Obligatorio para accesibilidad y SEO.',
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta title (SEO)',
      type: 'string',
      group: 'seo',
      description: 'Máximo 60 chars. Si vacío, usa el nombre del producto.',
      validation: (R) => R.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description (SEO)',
      type: 'string',
      group: 'seo',
      description: 'Máximo 160 chars. Si vacío, usa la descripción corta.',
      validation: (R) => R.max(160),
    }),
    defineField({
      name: 'estado',
      title: 'Estado',
      type: 'string',
      group: 'configuracion',
      options: {
        list: [
          { title: '✅ Activo', value: 'activo' },
          { title: '🔒 Inactivo', value: 'inactivo' },
          { title: '🗑️ Descatalogado', value: 'descatalogado' },
        ],
        layout: 'radio',
      },
      initialValue: 'activo',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'destacado',
      title: 'Producto destacado',
      type: 'boolean',
      group: 'configuracion',
      description: 'Aparece primero en el catálogo y en el Home.',
      initialValue: false,
    }),
    defineField({
      name: 'orden',
      title: 'Orden en listados',
      type: 'number',
      group: 'configuracion',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Destacados primero',
      name: 'destacadoDesc',
      by: [
        { field: 'destacado', direction: 'desc' },
        { field: 'orden', direction: 'asc' },
      ],
    },
    { title: 'Nombre A-Z', name: 'nombreAsc', by: [{ field: 'nombre', direction: 'asc' }] },
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'lineaNegocio',
      media: 'imagenes.0',
    },
    prepare({ title, subtitle, media }) {
      const labels: Record<string, string> = {
        medico: '🏥 Equipos Médicos',
        industrial: '🦺 Seguridad Industrial',
        uniformes: '👔 Uniformes y Merchandising',
      }
      return { title, subtitle: labels[subtitle] ?? subtitle, media }
    },
  },
})
