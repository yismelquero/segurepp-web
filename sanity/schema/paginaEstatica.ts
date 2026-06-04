import { defineField, defineType } from 'sanity'

export const paginaEstaticaSchema = defineType({
  name: 'paginaEstatica',
  title: 'Página estática',
  type: 'document',
  fields: [
    defineField({
      name: 'pagina',
      title: 'Página',
      type: 'string',
      options: {
        list: [
          { title: 'Home (/)', value: 'home' },
          { title: 'Nosotros (/nosotros)', value: 'nosotros' },
          { title: 'Soluciones (/soluciones)', value: 'soluciones' },
          { title: 'Contacto (/contacto)', value: 'contacto' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'heroTitulo',
      title: 'Título del hero',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'heroSubtitulo',
      title: 'Subtítulo del hero',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta title (SEO)',
      type: 'string',
      validation: (R) => R.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description (SEO)',
      type: 'text',
      rows: 3,
      validation: (R) => R.max(160),
    }),
    defineField({
      name: 'ogImagen',
      title: 'Imagen Open Graph (1200×630px)',
      type: 'image',
      description: 'JPG · fondo navy con logo. Almacenada en Sanity CDN.',
    }),
    defineField({
      name: 'contenidoRich',
      title: 'Contenido adicional (Portable Text)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: { title: 'heroTitulo', subtitle: 'pagina' },
  },
})
