import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/global/Container'
import { schemaBreadcrumb } from '@/lib/schema-org'

export const metadata: Metadata = {
  title: 'Uniformes y Merchandising Corporativo en Bolivia | SEGUREPP',
  description:
    'Confección de uniformes corporativos, médicos e industriales con bordado y sublimación. Merchandising empresarial personalizado en Bolivia. Atención B2B.',
  alternates: { canonical: '/soluciones/uniformes-merchandising' },
}

const breadcrumb = [
  { name: 'Inicio', url: '/' },
  { name: 'Soluciones', url: '/soluciones' },
  { name: 'Uniformes y Merchandising', url: '/soluciones/uniformes-merchandising' },
]

const COLOR = '#F8AF00'

const APLICACIONES = [
  {
    title: 'Uniformes',
    items: ['Uniformes médicos y clínicos', 'Uniformes corporativos', 'Uniformes industriales', 'Ropa de trabajo personalizada'],
  },
  {
    title: 'Personalización',
    items: ['Bordado corporativo', 'Sublimación textil', 'Serigrafía', 'Estampado digital'],
  },
  {
    title: 'Merchandising',
    items: ['Artículos promocionales', 'Material de escritorio', 'Bolsas y empaques', 'Regalos empresariales'],
  },
]

const SECTORES = ['Salud y clínicas', 'Sector corporativo', 'Minería e industria', 'Hotelería', 'Educación', 'Gobierno']

export default function UniformesMerchandisingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb(breadcrumb)) }}
      />

      <div className="bg-navy py-10 border-b-[3px] border-amber">
        <Container>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: COLOR, fontFamily: 'var(--font-montserrat)' }}>
            Línea de negocio
          </p>
          <h1 className="text-white font-bold text-2xl lg:text-3xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Uniformes y Merchandising
          </h1>
          <p className="text-gray-3 text-[14px] mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Corporativos · Médicos · Industriales · Imagen empresarial
          </p>
        </Container>
      </div>

      <Container className="py-12 lg:py-16">
        <div className="mb-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_420px]">
          <div className="max-w-3xl">
            <p className="text-gray-4 text-[16px] leading-relaxed" style={{ fontFamily: 'var(--font-montserrat)' }}>
              SEGUREPP diseña y confecciona uniformes a medida para empresas e instituciones en Bolivia.
              Con técnicas de bordado y sublimación de alta calidad, proyectamos la imagen corporativa
              de su organización con materiales duraderos y atención personalizada en cada pedido.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-1">
            <Image
              src="/images/solutionsgrid-uniforms.webp"
              alt="Uniformes corporativos y merchandising SEGUREPP"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {APLICACIONES.map(({ title, items }) => (
            <div
              key={title}
              className="bg-white rounded-lg p-6 border border-gray-2 shadow-sm"
              style={{ borderTop: `4px solid ${COLOR}` }}
            >
              <h2 className="font-bold text-[15px] mb-3" style={{ color: '#B87D00', fontFamily: 'var(--font-montserrat)' }}>
                {title}
              </h2>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-gray-4 text-[13px] flex items-start gap-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    <span style={{ color: '#B87D00' }} className="mt-0.5 flex-shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-1 rounded-lg p-8 border border-gray-2 mb-12">
          <h2 className="text-navy font-bold text-[18px] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Sectores que atendemos
          </h2>
          <div className="flex flex-wrap gap-2">
            {SECTORES.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded text-[12px] font-medium"
                style={{ backgroundColor: `${COLOR}20`, color: '#B87D00', fontFamily: 'var(--font-montserrat)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/catalogo/uniformes-merchandising"
            className="px-6 py-3 bg-amber text-navy font-bold text-[14px] rounded hover:bg-gold transition-colors min-h-[44px] flex items-center"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Ver catálogo completo
          </Link>
          <Link
            href="/contacto"
            className="px-6 py-3 border border-navy text-navy font-semibold text-[14px] rounded hover:bg-navy hover:text-white transition-colors min-h-[44px] flex items-center"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Solicitar cotización
          </Link>
        </div>

        <p className="text-gray-3 text-[12px] mt-8 italic" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Confección de uniformes disponible para empresas en La Paz y todo Bolivia.
          Personalización completa · Entrega garantizada · Atención B2B.
        </p>
      </Container>
    </>
  )
}
