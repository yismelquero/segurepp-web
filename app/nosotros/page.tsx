import type { Metadata } from 'next'
import { Container } from '@/components/global/Container'
import { schemaBreadcrumb } from '@/lib/schema-org'

export const metadata: Metadata = {
  title: 'Sobre SEGUREPP · Soluciones Integrales en La Paz',
  description:
    'SEGUREPP, empresa boliviana fundada en 2019 especializada en equipamiento médico, EPP industrial y uniformes. Atendemos empresas e instituciones en toda Bolivia.',
  alternates: { canonical: '/nosotros' },
}

const breadcrumb = [
  { name: 'Inicio', url: '/' },
  { name: 'Nosotros', url: '/nosotros' },
]

// KPIs institucionales aprobados (Auditoría Final sección 4.3)
const KPIS = [
  { valor: '2019', label: 'Año de fundación', sublabel: 'La Paz, Bolivia' },
  { valor: '+200', label: 'Clientes atendidos', sublabel: 'Empresas e instituciones' },
  { valor: 'Nacional', label: 'Cobertura', sublabel: 'Todo Bolivia' },
  { valor: 'Directa', label: 'Importación', sublabel: 'Sin intermediarios' },
]

// Líneas de negocio (solo 3 — Auditoría Final)
const LINEAS = [
  {
    title: 'Equipos Médicos',
    items: ['Equipos de diagnóstico', 'Monitores multiparámetro', 'Electrocardiógrafos', 'Ecógrafos', 'Insumos médicos'],
    color: '#0E7490',
    href: '/soluciones/equipos-medicos',
  },
  {
    title: 'Seguridad Industrial',
    items: ['EPP completo', 'Señalización industrial', 'Protección industrial', 'Seguridad ocupacional'],
    color: '#1A6FBF',
    href: '/soluciones/seguridad-industrial',
  },
  {
    title: 'Uniformes y Merchandising',
    items: ['Uniformes médicos', 'Uniformes corporativos', 'Uniformes industriales', 'Merchandising corporativo'],
    color: '#F8AF00',
    href: '/soluciones/uniformes-merchandising',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb(breadcrumb)) }}
      />

      {/* Hero strip */}
      <div className="bg-navy py-10 border-b-[3px] border-amber">
        <Container>
          <h1
            className="text-white font-bold text-2xl lg:text-3xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Nuestra Empresa
          </h1>
          <p className="text-gray-3 text-[14px] mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Fundada en 2019 · La Paz, Bolivia
          </p>
        </Container>
      </div>

      {/* KPI cards institucionales */}
      <div className="bg-gray-1 py-8 border-b border-gray-2">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {KPIS.map(({ valor, label, sublabel }) => (
              <div key={label} className="bg-white rounded-lg p-5 text-center border border-gray-2 shadow-sm">
                <p
                  className="text-amber font-bold text-2xl"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {valor}
                </p>
                <p className="text-navy font-bold text-[12px] mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {label}
                </p>
                <p className="text-gray-3 text-[10px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {sublabel}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Quiénes somos + MVV */}
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          <div>
            <p
              className="text-amber font-bold text-[10px] tracking-[0.12em] uppercase mb-3"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Quiénes somos
            </p>
            <h2
              className="text-navy font-bold text-xl lg:text-2xl mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Un solo proveedor para múltiples necesidades empresariales
            </h2>
            <p
              className="text-gray-4 text-[15px] leading-relaxed"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              SEGUREPP es una empresa boliviana fundada en 2019, especializada en proveer
              soluciones integrales a empresas e instituciones. Operamos con importación
              directa, cobertura nacional y atención personalizada para cada cliente.
              Nuestro compromiso es la entrega garantizada y el acompañamiento técnico
              en cada proyecto.
            </p>
          </div>

          {/* MVV — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Misión',
                text: 'Proveer soluciones de equipamiento médico, seguridad industrial y uniformes con calidad, confianza y atención personalizada a empresas bolivianas.',
              },
              {
                title: 'Visión',
                text: 'Ser el proveedor integral de referencia en Bolivia, reconocido por nuestra cobertura nacional y la excelencia en cada solución.',
              },
              {
                title: 'Valores',
                text: 'Confianza · Compromiso · Calidad · Atención personalizada · Responsabilidad con el cliente.',
              },
            ].map(({ title, text }) => (
              <div
                key={title}
                className="bg-white rounded-lg p-5 border border-gray-2 shadow-sm"
                style={{ borderTop: '5px solid #F8AF00' }}
              >
                <h3
                  className="text-navy font-bold text-[14px] mb-2"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {title}
                </h3>
                <p
                  className="text-gray-4 text-[12px] leading-relaxed"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Líneas de negocio */}
        <div>
          <h2
            className="text-navy font-bold text-xl lg:text-2xl mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Nuestras líneas de negocio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {LINEAS.map(({ title, items, color, href }) => (
              <a
                key={title}
                href={href}
                className="bg-white rounded-lg p-6 border border-gray-2 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-180 block"
                style={{ borderTop: `5px solid ${color}` }}
              >
                <h3
                  className="font-bold text-[15px] mb-3"
                  style={{ fontFamily: 'var(--font-montserrat)', color }}
                >
                  {title}
                </h3>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-4 text-[12px] flex items-center gap-2"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      <span style={{ color }}>·</span> {item}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
