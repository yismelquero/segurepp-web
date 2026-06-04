import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export default defineConfig({
  name: 'segurepp-studio',
  title: 'SEGUREPP Studio',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido SEGUREPP')
          .items([
            S.listItem()
              .title('Configuración Global')
              .id('configGlobal')
              .child(
                S.document()
                  .schemaType('configGlobal')
                  .documentId('configGlobal')
              ),
            S.divider(),
            S.listItem()
              .title('Productos')
              .child(
                S.documentTypeList('producto')
                  .title('Todos los productos')
              ),
            S.listItem()
              .title('Categorías')
              .child(S.documentTypeList('categoria').title('Categorías')),
            S.divider(),
            S.listItem()
              .title('Clientes')
              .child(S.documentTypeList('cliente').title('Clientes')),
            S.listItem()
              .title('Sucursales')
              .child(S.documentTypeList('sucursal').title('Sucursales')),
            S.divider(),
            S.listItem()
              .title('Páginas estáticas')
              .child(S.documentTypeList('paginaEstatica').title('Páginas')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
