import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/global/Container'
import { schemaBreadcrumb } from '@/lib/schema-org'

export const metadata: Metadata = {
  title: 'Soluciones para Empresas · Equipos, Seguridad y Uniformes',
  description:
    'Tres líneas de negocio: Equipos Médicos, Seguridad Industrial y Uniformes. Un solo proveedor para múltiples necesidades empresariales en Bolivia.',
  alternates: { canonical: '/soluciones' },
}

const breadcrumb = [
  { name: 'Inicio', url: '/' },
  { name: 'Soluciones', url: '/soluciones' },
]

const SOLUCIONES = [
  {
    title: 'Equipos Médicos',
    subtitle: 'Diagnóstico · Monitoreo · Insumos',
    description: 'Monitores multiparámetro, electrocardiógrafos, ecógrafos y equipos hospitalarios para clínicas y hospitales en Bolivia. Importación directa con asesoría técnica.',
    href: '/soluciones/equipos-medicos',
    catalogHref: '/catalogo/equipos-medicos',
    color: '#0E7490',
    imageSrc: '/images/solutionsgrid-medical.webp',
    imageAlt: 'Equipos médicos de diagnóstico y monitoreo',
    tags: ['Monitores', 'Electrocardiógrafos', 'Ecógrafos', 'Insumos médicos'],
  },
  {
    title: 'Seguridad Industrial',
    subtitle: 'EPP · Señalización · Protección',
    description: 'Equipos de protección personal, señalización y seguridad ocupacional para minería, construcción e industria. Cobertura nacional en Bolivia.',
    href: '/soluciones/seguridad-industrial',
    catalogHref: '/catalogo/seguridad-industrial',
    color: '#1A6FBF',
    imageSrc: '/images/solutionsgrid-industrial.webp',
    imageAlt: 'Equipos de protección personal para seguridad industrial',
    tags: ['EPP', 'Cascos', 'Señalización', 'Arneses', 'Seguridad ocup.'],
  },
  {
    title: 'Uniformes y Merchandising',
    subtitle: 'Corporativos · Médicos · Industriales',
    description: 'Confección de uniformes a medida con bordado y sublimación. Merchandising corporativo para proyectar la imagen de su empresa. Atención personalizada.',
    href: '/soluciones/uniformes-merchandising',
    catalogHref: '/catalogo/uniformes-merchandising',
    color: '#F8AF00',
    imageSrc: '/images/solutionsgrid-uniforms.webp',
    imageAlt: 'Uniformes corporativos y merchandising SEGUREPP',
    tags: ['Uniformes médicos', 'Corporativos', 'Industriales', 'Merchandising'],
  },
]

export default function SolucionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb(breadcrumb)) }}
      />

      <div className="bg-navy py-10 border-b-[3px] border-amber">
        <Container>
          <h1
            className="text-white font-bold text-2xl lg:text-3xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Nuestras Soluciones
          </h1>
          <p className="text-gray-3 text-[14px] mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Un solo proveedor para múltiples necesidades empresariales
          </p>
        </Container>
      </div>

      <Container className="py-12 lg:py-16">
        <div className="space-y-10">
          {SOLUCIONES.map((sol, i) => (
            <div
              key={sol.title}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Área visual */}
              <div
                className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-lg bg-gray-1 lg:h-64 lg:w-2/5"
                style={{ backgroundColor: `${sol.color}12`, border: `2px solid ${sol.color}25` }}
              >
                <Image
                  src={sol.imageSrc}
                  alt={sol.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="flex-1">
                <span
                  className="text-[9px] font-bold uppercase tracking-widest"
                  style={{ color: sol.color, fontFamily: 'var(--font-montserrat)' }}
                >
                  {sol.subtitle}
                </span>
                <h2
                  className="text-navy font-bold text-xl lg:text-2xl mt-1 mb-3"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {sol.title}
                </h2>
                <p
                  className="text-gray-4 text-[15px] leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {sol.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {sol.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-medium"
                      style={{ backgroundColor: `${sol.color}14`, color: sol.color, fontFamily: 'var(--font-montserrat)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href={sol.catalogHref}
                    className="px-5 py-2.5 bg-amber text-navy font-bold text-[13px] rounded hover:bg-gold transition-colors min-h-[44px] flex items-center"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Ver catálogo
                  </Link>
                  <Link
                    href="/contacto"
                    className="px-5 py-2.5 bg-transparent text-navy font-semibold text-[13px] rounded border border-navy/80 hover:bg-navy hover:text-white transition-colors min-h-[44px] flex items-center"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Solicitar cotización
                  </Link>
                </div>

                {/* Bloque SEO local — sección 5.4.3 Auditoría Final */}
                <p
                  className="text-gray-3 text-[11px] mt-4 italic"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Servicio disponible en La Paz y todo Bolivia. Importación directa · Entrega garantizada.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
