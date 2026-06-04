import { defineField, defineType } from 'sanity'

export const clienteSchema = defineType({
  name: 'cliente',
  title: 'Empresa cliente',
  type: 'document',
  description: '"Empresas que confían en SEGUREPP" — Solo clientes, no partners ni distribuidores.',
  fields: [
    defineField({
      name: 'nombreEmpresa',
      title: 'Nombre de la empresa',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'SVG preferido · WEBP aceptado · fondo transparente',
      options: { hotspot: false },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'logoAlt',
      title: 'Texto alternativo del logo',
      type: 'string',
      description: 'Ej: "Logo de Hospital Municipal La Paz"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          { title: 'Salud', value: 'salud' },
          { title: 'Minería', value: 'mineria' },
          { title: 'Industria', value: 'industria' },
          { title: 'Educación', value: 'educacion' },
          { title: 'Retail', value: 'retail' },
          { title: 'Sector público', value: 'publico' },
          { title: 'Construcción', value: 'construccion' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'ciudad',
      title: 'Ciudad',
      type: 'string',
      description: 'Ciudad del cliente · campo de expansión geográfica',
    }),
    defineField({
      name: 'estado',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: '✅ Activo', value: 'activo' },
          { title: '🔒 Inactivo', value: 'inactivo' },
        ],
        layout: 'radio',
      },
      initialValue: 'activo',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'orden',
      title: 'Orden en la grilla del Home',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'nombreEmpresa', subtitle: 'sector', media: 'logo' },
  },
})
