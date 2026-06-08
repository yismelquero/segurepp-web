import Link from 'next/link'
import Image from 'next/image'

const FOOTER_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Catálogo', href: '/catalogo' },
  { label: 'Contacto', href: '/contacto' },
]

const CONTACT_ITEMS = [
  { label: 'Teléfono', value: '+591 78407223' },
  { label: 'Email', value: 'info@segurepp.com' },
  { label: 'Dirección', value: 'La Paz, Bolivia' },
  { label: 'Horario', value: 'Lun - Vie: 08:00 - 18:00' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.62fr_0.95fr_0.85fr] lg:gap-12">
          <div className="lg:border-r lg:border-white/22 lg:pr-12">
            <div className="mb-8 inline-flex">
              <Image
                src="/images/logo-segurepp-horizontal-negativo.svg"
                alt="SEGUREPP"
                width={220}
                height={53}
                className="h-auto w-[220px]"
              />
            </div>
            <p className="max-w-md text-[17px] leading-relaxed text-white/84">
              Somos tu aliado estratégico en equipos médicos, seguridad industrial
              y uniformes corporativos. Soluciones integrales para empresas e
              instituciones en todo Bolivia.
            </p>
            <div className="mt-9 flex gap-4">
              {['in', 'f', 'ig', 'wa'].map((item) => (
                <span
                  key={item}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-[16px] font-bold text-white"
                  aria-hidden="true"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <nav className="lg:border-r lg:border-white/22 lg:pr-10" aria-label="Navegacion de pie de pagina">
            <h2 className="mb-7 text-[20px] font-bold uppercase tracking-[0.06em] text-white">
              Navegación
            </h2>
            <div className="flex flex-col gap-4">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-[16px] text-white/82 transition-colors hover:text-amber">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="lg:border-r lg:border-white/22 lg:pr-10">
            <h2 className="mb-7 text-[20px] font-bold uppercase tracking-[0.06em] text-white">
              Contáctanos
            </h2>
            <div className="space-y-5">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-blue text-blue" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M6 4h12v16H6V4zM8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-amber">{item.label}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-white/82">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-7 text-[20px] font-bold uppercase tracking-[0.06em] text-white">
              Suscríbete a nuestro newsletter
            </h2>
            <p className="mb-7 text-[16px] leading-relaxed text-white/82">
              Recibe novedades, promociones y contenido especializado.
            </p>
            <form className="space-y-5">
              <label className="sr-only" htmlFor="footer-email">Tu correo electrónico</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Tu correo electrónico"
                className="min-h-[56px] w-full rounded-md border border-white/35 bg-transparent px-5 text-[15px] text-white placeholder:text-white/60 outline-none focus:border-amber"
              />
              <button
                type="button"
                className="flex min-h-[56px] w-full items-center justify-center gap-4 rounded-md bg-amber px-6 text-[17px] font-bold text-navy transition-colors hover:bg-gold"
              >
                Suscribirme <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/25 pt-8 text-[14px] text-white/76 lg:flex-row lg:items-center lg:justify-between">
          <p>© {year} SEGUREPP. Todos los derechos reservados.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            <Link href="/politica-de-privacidad" className="hover:text-amber">
              Política de Privacidad
            </Link>
            <span className="hidden text-white/35 sm:inline" aria-hidden="true">|</span>
            <span>Términos y Condiciones</span>
            <span className="hidden text-white/35 sm:inline" aria-hidden="true">|</span>
            <span>Mapa del sitio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
