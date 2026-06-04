'use client'

/**
 * 4 CTAs obligatorios de la ficha de producto
 * Auditoría Final / E1 · Ficha de Producto:
 * 1. Cotización     → /contacto?producto=...
 * 2. WhatsApp       → wa.me
 * 3. Ficha Técnica  → PDF descargable
 * 4. Asesoría Técnica → /contacto?tipo=asesoria
 *
 * Sin precio público — modelo B2B cotización.
 */

interface ProductActionsProps {
  nombreProducto: string
  fichaTecnicaUrl?: string
  whatsapp?: string
}

export function ProductActions({
  nombreProducto,
  fichaTecnicaUrl,
  whatsapp = process.env.NEXT_PUBLIC_WA_NUMBER ?? '59178407223',
}: ProductActionsProps) {
  const waMessage = encodeURIComponent(
    `Hola, me interesa cotizar el producto: ${nombreProducto}. ¿Me pueden dar más información?`
  )

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      aria-label="Acciones del producto"
    >
      {/* CTA 1 — Cotización */}
      <a
        href={`/contacto?producto=${encodeURIComponent(nombreProducto)}`}
        className="flex items-center justify-center gap-2 bg-amber text-navy font-bold text-[14px] px-5 py-3.5 rounded-md hover:bg-gold hover:-translate-y-0.5 transition-all min-h-[44px]"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M14 10.667A1.333 1.333 0 0112.667 12H4L1.333 14.667V3.333A1.333 1.333 0 012.667 2h10A1.333 1.333 0 0114 3.333v7.334z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Solicitar cotización
      </a>

      {/* CTA 2 — WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green text-white font-bold text-[14px] px-5 py-3.5 rounded-md hover:bg-[#15803D] hover:-translate-y-0.5 transition-all min-h-[44px]"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M13.507 2.493A7.956 7.956 0 008 0C3.582 0 0 3.582 0 8c0 1.41.37 2.79 1.073 4L0 16l4.127-1.073A7.971 7.971 0 008 16c4.418 0 8-3.582 8-8 0-2.136-.833-4.146-2.493-5.507z" fill="currentColor" opacity=".2"/>
          <path d="M11.5 9.5c-.25-.125-1.5-.75-1.75-.875-.25-.125-.375-.125-.5.125s-.625.75-.75.875-.25.25-.5.125A6.25 6.25 0 016.125 7.5c-.25-.375 0-.5.25-.625.125-.125.25-.25.375-.5.125-.25.125-.375 0-.625C6.625 5.5 6 4 5.75 3.625 5.5 3.25 5.375 3.25 5.125 3.25H4.5c-.25 0-.625.125-.875.375S2.75 4.5 2.75 5.625 3.5 8 4.25 9 7.125 11.75 8.5 12.25c.875.375 1.625.375 2.125.25.625-.125 1.5-.625 1.75-1.25.25-.625.25-1.25.125-1.375s-.25-.25-.5-.375z" fill="currentColor"/>
        </svg>
        Cotizar por WhatsApp
      </a>

      {/* CTA 3 — Ficha Técnica PDF */}
      {fichaTecnicaUrl ? (
        <a
          href={fichaTecnicaUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center justify-center gap-2 bg-transparent text-navy font-semibold text-[14px] px-5 py-3.5 rounded-md border border-navy/80 hover:bg-navy hover:text-white transition-all min-h-[44px]"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M9.333 1.333H4a1.333 1.333 0 00-1.333 1.334v10.666A1.333 1.333 0 004 14.667h8a1.333 1.333 0 001.333-1.334V5.333L9.333 1.333z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.333 1.333V5.333H13.333M8 11.333V7.333M6 9.333l2 2 2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Descargar ficha técnica
        </a>
      ) : (
        <span
          className="flex items-center justify-center gap-2 bg-gray-1 text-gray-3 font-semibold text-[14px] px-5 py-3.5 rounded-md border border-gray-2 min-h-[44px] cursor-not-allowed"
          style={{ fontFamily: 'var(--font-montserrat)' }}
          title="Ficha técnica no disponible"
        >
          Ficha técnica (próximamente)
        </span>
      )}

      {/* CTA 4 — Asesoría Técnica */}
      <a
        href={`/contacto?tipo=asesoria&producto=${encodeURIComponent(nombreProducto)}`}
        className="flex items-center justify-center gap-2 bg-navy text-white font-bold text-[14px] px-5 py-3.5 rounded-md hover:bg-[#0D2563] hover:-translate-y-0.5 transition-all min-h-[44px]"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="5.333" r="2.667" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M2.667 14.667v-1.334A2.667 2.667 0 015.333 10.667h5.334A2.667 2.667 0 0113.333 13.333v1.334" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        Solicitar asesoría técnica
      </a>
    </div>
  )
}
