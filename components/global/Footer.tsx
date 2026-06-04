import Link from 'next/link'

/**
 * Footer — E1 sección 1.11
 * Fondo navy · border-top 3px amber
 * Links: Montserrat Regular 8px · #94A3B8
 * Layout desktop: 3 columnas · Mobile: 1 columna stack
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy border-t-[3px] border-amber mt-auto">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">

          {/* Columna 1 — Logo + Legal */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              {/* Isotipo placeholder — sustituir por SVG real */}
              <div className="w-6 h-6 bg-amber rounded-sm flex items-center justify-center">
                <span className="text-navy font-bold text-[10px] leading-none">S</span>
              </div>
              <span
                className="text-white font-bold text-[11px] tracking-wider"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                SEGUREPP
              </span>
            </div>
            <p
              className="text-gray-3 leading-relaxed"
              style={{ fontFamily: 'var(--font-montserrat)', fontSize: '7px' }}
            >
              Un solo proveedor para múltiples necesidades empresariales.
              <br />
              La Paz, Bolivia · Desde 2019
            </p>
            <p
              className="text-gray-4 mt-2"
              style={{ fontFamily: 'var(--font-montserrat)', fontSize: '7px' }}
            >
              © {year} SEGUREPP. Todos los derechos reservados.
            </p>
          </div>

          {/* Columna 2 — Información */}
          <div className="flex flex-col gap-2">
            <p
              className="text-amber font-bold mb-1"
              style={{ fontFamily: 'var(--font-montserrat)', fontSize: '8px', letterSpacing: '0.12em' }}
            >
              CONTACTO
            </p>
            {[
              { label: 'info@segurepp.com', href: 'mailto:info@segurepp.com' },
              { label: '(+591) 78407223', href: 'https://wa.me/59178407223' },
              { label: 'Calle Cañada Strongest 1842, Torre Centrum, Piso 3, Of.301', href: null },
              { label: 'La Paz, Bolivia', href: null },
              { label: 'Lun–Vie 08:00 – 18:00', href: null },
            ].map(({ label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  className="text-gray-3 hover:text-amber transition-colors duration-120"
                  style={{ fontFamily: 'var(--font-montserrat)', fontSize: '8px' }}
                >
                  {label}
                </a>
              ) : (
                <span
                  key={label}
                  className="text-gray-3"
                  style={{ fontFamily: 'var(--font-montserrat)', fontSize: '8px' }}
                >
                  {label}
                </span>
              )
            )}
          </div>

          {/* Columna 3 — Links */}
          <div className="flex flex-col gap-2">
            <p
              className="text-amber font-bold mb-1"
              style={{ fontFamily: 'var(--font-montserrat)', fontSize: '8px', letterSpacing: '0.12em' }}
            >
              NAVEGACIÓN
            </p>
            {[
              { label: 'Inicio', href: '/' },
              { label: 'Nosotros', href: '/nosotros' },
              { label: 'Soluciones', href: '/soluciones' },
              { label: 'Catálogo', href: '/catalogo' },
              { label: 'Contacto', href: '/contacto' },
              { label: 'Política de Privacidad', href: '/politica-de-privacidad' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-3 hover:text-amber transition-colors duration-120"
                style={{ fontFamily: 'var(--font-montserrat)', fontSize: '8px' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
