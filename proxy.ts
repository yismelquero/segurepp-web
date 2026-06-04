import { NextRequest, NextResponse } from 'next/server'

/**
 * Middleware — SEGUREPP
 * Seguridad: headers de seguridad + protección básica
 * Redirect: /catalogo/uniformes → /catalogo/uniformes-merchandising (Auditoría Final CORR-04)
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ── Redirect legacy URL (Auditoría Final CORR-04) ─────────────────────────
  if (pathname === '/catalogo/uniformes') {
    return NextResponse.redirect(
      new URL('/catalogo/uniformes-merchandising', request.url),
      { status: 301 }
    )
  }
  if (pathname.startsWith('/catalogo/uniformes/')) {
    const slug = pathname.replace('/catalogo/uniformes/', '')
    return NextResponse.redirect(
      new URL(`/catalogo/uniformes-merchandising/${slug}`, request.url),
      { status: 301 }
    )
  }

  const response = NextResponse.next()

  // ── Security Headers ───────────────────────────────────────────────────────
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  )
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  )

  // ── Bloquear acceso directo a /api/ desde browser (no API routes legítimas) ─
  if (
    pathname.startsWith('/api/') &&
    !request.headers.get('content-type')?.includes('application/json') &&
    request.method !== 'GET'
  ) {
    // Solo aplicar si no viene del dominio correcto
    const origin = request.headers.get('origin')
    const host = request.headers.get('host')
    if (origin && host && !origin.includes(host)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}
