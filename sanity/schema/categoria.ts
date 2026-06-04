import { defineField, defineType } from 'sanity'

export const categoriaSchema = defineType({
  name: 'categoria',
  title: 'Categoría',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      description: 'Ej: "Monitores", "EPP", "Uniformes médicos"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'nombre', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'lineaNegocio',
      title: 'Línea de negocio',
      type: 'string',
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
      name: 'descripcion',
      title: 'Descripción',
      type: 'string',
      validation: (R) => R.max(200),
    }),
    defineField({
      name: 'orden',
      title: 'Orden en filtros',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'nombre', subtitle: 'lineaNegocio' },
    prepare({ title, subtitle }) {
      const labels: Record<string, string> = {
        medico: 'Equipos Médicos',
        industrial: 'Seguridad Industrial',
        uniformes: 'Uniformes y Merchandising',
      }
      return { title, subtitle: labels[subtitle] ?? subtitle }
    },
  },
})
