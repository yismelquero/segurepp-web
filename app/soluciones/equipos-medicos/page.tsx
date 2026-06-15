import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/global/Container'
import { schemaBreadcrumb } from '@/lib/schema-org'

export const metadata: Metadata = {
  title: 'Equipos Médicos en Bolivia · Monitores, ECG y Ecógrafos',
  description:
    'Equipos de diagnóstico médico, monitores multiparámetro, electrocardiógrafos y ecógrafos para clínicas y hospitales en Bolivia. Importación directa con asesoría técnica.',
  alternates: { canonical: '/soluciones/equipos-medicos' },
}

const breadcrumb = [
  { name: 'Inicio', url: '/' },
  { name: 'Soluciones', url: '/soluciones' },
  { name: 'Equipos Médicos', url: '/soluciones/equipos-medicos' },
]

const COLOR = '#0E7490'

const APLICACIONES = [
  {
    title: 'Diagnóstico',
    items: ['Electrocardiógrafos', 'Ecógrafos portátiles', 'Desfibriladores', 'Tensiómetros digitales'],
  },
  {
    title: 'Monitoreo',
    items: ['Monitores multiparámetro', 'Pulsioxímetros', 'Monitores de presión', 'Telemetría clínica'],
  },
  {
    title: 'Insumos Médicos',
    items: ['Material fungible', 'Consumibles de diagnóstico', 'Accesorios clínicos', 'Repuestos originales'],
  },
]

const SECTORES = ['Clínicas privadas', 'Hospitales públicos', 'Centros de salud', 'Consultorios médicos', 'Laboratorios', 'Ambulancias']

export default function EquiposMedicosPage() {
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
            Equipos Médicos
          </h1>
          <p className="text-gray-3 text-[14px] mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Diagnóstico · Monitoreo · Insumos médicos en Bolivia
          </p>
        </Container>
      </div>

      <Container className="py-12 lg:py-16">
        {/* Descripción */}
        <div className="mb-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_420px]">
          <div className="max-w-3xl">
            <p className="text-gray-4 text-[16px] leading-relaxed" style={{ fontFamily: 'var(--font-montserrat)' }}>
              SEGUREPP provee equipamiento médico de diagnóstico y monitoreo para clínicas, hospitales y centros
              de salud en toda Bolivia. Trabajamos con importación directa, sin intermediarios, garantizando
              calidad, soporte técnico y entrega oportuna para cada institución.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-1">
            <Image
              src="/images/solutionsgrid-medical.webp"
              alt="Equipos médicos de diagnóstico y monitoreo"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Aplicaciones */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {APLICACIONES.map(({ title, items }) => (
            <div
              key={title}
              className="bg-white rounded-lg p-6 border border-gray-2 shadow-sm"
              style={{ borderTop: `4px solid ${COLOR}` }}
            >
              <h2 className="font-bold text-[15px] mb-3" style={{ color: COLOR, fontFamily: 'var(--font-montserrat)' }}>
                {title}
              </h2>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-gray-4 text-[13px] flex items-start gap-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    <span style={{ color: COLOR }} className="mt-0.5 flex-shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sectores */}
        <div className="bg-gray-1 rounded-lg p-8 border border-gray-2 mb-12">
          <h2 className="text-navy font-bold text-[18px] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Sectores que atendemos
          </h2>
          <div className="flex flex-wrap gap-2">
            {SECTORES.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded text-[12px] font-medium"
                style={{ backgroundColor: `${COLOR}14`, color: COLOR, fontFamily: 'var(--font-montserrat)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/catalogo/equipos-medicos"
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

        {/* SEO local */}
        <p className="text-gray-3 text-[12px] mt-8 italic" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Servicio de equipos médicos disponible en La Paz, Santa Cruz, Cochabamba y todo Bolivia.
          Importación directa · Soporte técnico · Entrega garantizada.
        </p>
      </Container>
    </>
  )
}
