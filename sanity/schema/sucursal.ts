import { defineField, defineType } from 'sanity'

/**
 * Modelo: Sucursal
 * Auditoría Final — Array vacío en v1. Listo para expansión futura.
 * Sin modificar código cuando se añadan sucursales — solo agregar en CMS.
 */
export const sucursalObject = defineType({
  name: 'sucursal',
  title: 'Sucursal',
  type: 'object',
  fields: [
    defineField({ name: 'nombre', type: 'string', title: 'Nombre', description: 'Ej: "Oficina Cochabamba"', validation: (R) => R.required() }),
    defineField({ name: 'direccion', type: 'string', title: 'Dirección completa', validation: (R) => R.required() }),
    defineField({ name: 'ciudad', type: 'string', title: 'Ciudad · Departamento', validation: (R) => R.required() }),
    defineField({ name: 'telefono', type: 'string', title: 'Teléfono local (opcional)' }),
    defineField({ name: 'whatsapp', type: 'string', title: 'WhatsApp local (opcional)' }),
    defineField({ name: 'email', type: 'string', title: 'Email local (opcional)' }),
    defineField({ name: 'horario', type: 'string', title: 'Horario (opcional)' }),
    defineField({ name: 'latitud', type: 'number', title: 'Latitud GPS' }),
    defineField({ name: 'longitud', type: 'number', title: 'Longitud GPS' }),
    defineField({
      name: 'estado',
      type: 'string',
      title: 'Estado',
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
    defineField({ name: 'orden', type: 'number', title: 'Orden', initialValue: 0 }),
  ],
  preview: {
    select: { title: 'nombre', subtitle: 'ciudad' },
  },
})
