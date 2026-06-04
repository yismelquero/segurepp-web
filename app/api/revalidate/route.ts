/**
 * Webhook de Sanity para revalidación on-demand (ISR).
 * Configurar en Sanity → API → Webhooks:
 *   URL: https://tu-dominio.com/api/revalidate
 *   Secret: SANITY_REVALIDATE_SECRET (guardar en .env)
 *   Trigger: create, update, delete
 */
import { type NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

const WEBHOOK_SECRET = process.env.SANITY_REVALIDATE_SECRET

export async function POST(req: NextRequest) {
  // Validar secret
  const secret = req.headers.get('x-sanity-secret')
  if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  let body: { _type?: string; slug?: { current?: string }; lineaNegocio?: string } = {}
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 })
  }

  const { _type, slug, lineaNegocio } = body

  try {
    if (_type === 'producto') {
      // Revalidar ficha del producto si tiene slug
      if (slug?.current && lineaNegocio) {
        const lineaSlugMap: Record<string, string> = {
          medico: 'equipos-medicos',
          industrial: 'seguridad-industrial',
          uniformes: 'uniformes-merchandising',
        }
        const lineaSlug = lineaSlugMap[lineaNegocio]
        if (lineaSlug) {
          revalidatePath(`/catalogo/${lineaSlug}/${slug.current}`)
        }
      }
      // Revalidar listados del catálogo
      revalidatePath('/catalogo')
      revalidatePath('/catalogo/equipos-medicos')
      revalidatePath('/catalogo/seguridad-industrial')
      revalidatePath('/catalogo/uniformes-merchandising')
    }

    if (_type === 'cliente') {
      revalidatePath('/')
    }

    if (_type === 'configGlobal') {
      revalidatePath('/', 'layout')
    }

    if (_type === 'sucursal') {
      revalidatePath('/contacto')
    }

    if (_type === 'paginaEstatica') {
      if (slug?.current) {
        revalidatePath(`/${slug.current}`)
      }
    }

    return NextResponse.json({ revalidated: true, type: _type })
  } catch (err) {
    console.error('[revalidate] Error:', err)
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
