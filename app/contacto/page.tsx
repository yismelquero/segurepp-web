import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'
import { Container } from '@/components/global/Container'
import { schemaBreadcrumb } from '@/lib/schema-org'

export const metadata: Metadata = {
  title: 'Contacto SEGUREPP · Solicitar Cotización · La Paz, Bolivia',
  description:
    'Contáctenos para cotización o asesoría técnica. Respondemos a la brevedad posible. WhatsApp (+591) 78407223 · info@segurepp.com · La Paz, Bolivia.',
  alternates: { canonical: '/contacto' },
}

const breadcrumb = [
  { name: 'Inicio', url: '/' },
  { name: 'Contacto', url: '/contacto' },
]

export default function ContactoPage() {
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
            Contacto
          </h1>
          <p
            className="text-gray-3 text-[14px] mt-1"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Respondemos a la brevedad posible.
          </p>
        </Container>
      </div>

      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Formulario */}
          <div>
            <h2
              className="text-navy font-bold text-[20px] mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Envíenos un mensaje
            </h2>
            <ContactForm />
          </div>

          {/* Info de contacto */}
          <div className="bg-navy rounded-lg p-8 h-fit">
            <h2
              className="text-white font-bold text-[18px] mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Información de contacto
            </h2>

            {[
              { label: 'Email', value: 'info@segurepp.com', href: 'mailto:info@segurepp.com' },
              { label: 'WhatsApp', value: '(+591) 78407223', href: 'https://wa.me/59178407223' },
              { label: 'Dirección', value: 'Calle Cañada Strongest 1842\nTorre Centrum, Piso 3, Of.301', href: null },
              { label: 'Ciudad', value: 'La Paz, Bolivia', href: null },
              { label: 'Horario', value: 'Lunes a Viernes\n08:00 – 18:00 (BOT)', href: null },
            ].map(({ label, value, href }) => (
              <div key={label} className="mb-5">
                <p
                  className="text-amber font-bold text-[9px] tracking-widest uppercase mb-1"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-white text-[14px] hover:text-amber transition-colors whitespace-pre-line"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {value}
                  </a>
                ) : (
                  <p
                    className="text-gray-3 text-[14px] whitespace-pre-line"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {value}
                  </p>
                )}
              </div>
            ))}

            {/* Mapa — placeholder para iframe de Google Maps embed */}
            <div className="mt-6 h-40 bg-navy/50 rounded border border-white/10 flex items-center justify-center">
              <p className="text-gray-3 text-[10px] text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>
                [Google Maps embed — configurar mapaEmbed en Config Global CMS]
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
