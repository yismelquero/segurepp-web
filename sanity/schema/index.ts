import { productoSchema } from './producto'
import { categoriaSchema } from './categoria'
import { clienteSchema } from './cliente'
import { configGlobalSchema } from './configGlobal'
import { paginaEstaticaSchema } from './paginaEstatica'
import { sucursalObject } from './sucursal'

export const schemaTypes = [
  // Documentos principales
  productoSchema,
  categoriaSchema,
  clienteSchema,
  configGlobalSchema,
  paginaEstaticaSchema,
  // Objetos reutilizables
  sucursalObject,
]
