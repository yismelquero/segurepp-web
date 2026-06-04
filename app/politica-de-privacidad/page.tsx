import type { Metadata } from 'next'
import { Container } from '@/components/global/Container'
import { schemaBreadcrumb } from '@/lib/schema-org'

export const metadata: Metadata = {
  title: 'Política de Privacidad | SEGUREPP',
  description: 'Política de privacidad y tratamiento de datos personales de SEGUREPP Bolivia.',
  alternates: { canonical: '/politica-de-privacidad' },
  robots: { index: false },
}

const breadcrumb = [
  { name: 'Inicio', url: '/' },
  { name: 'Política de Privacidad', url: '/politica-de-privacidad' },
]

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb(breadcrumb)) }}
      />

      <div className="bg-navy py-10 border-b-[3px] border-amber">
        <Container>
          <h1 className="text-white font-bold text-2xl lg:text-3xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            Política de Privacidad
          </h1>
          <p className="text-gray-3 text-[14px] mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Última actualización: junio 2025
          </p>
        </Container>
      </div>

      <Container className="py-12 lg:py-16">
        <div className="max-w-3xl space-y-8">
          {[
            {
              title: '1. Responsable del tratamiento',
              content:
                'SEGUREPP, empresa boliviana con domicilio en La Paz, Bolivia, es responsable del tratamiento de los datos personales que usted proporcione a través de este sitio web.',
            },
            {
              title: '2. Datos que recopilamos',
              content:
                'Recopilamos únicamente los datos que usted facilita voluntariamente a través del formulario de contacto: nombre, empresa, correo electrónico, teléfono y mensaje. No recopilamos datos sensibles ni realizamos perfilado automático.',
            },
            {
              title: '3. Finalidad del tratamiento',
              content:
                'Los datos se utilizan exclusivamente para responder a sus consultas comerciales y cotizaciones. No se utilizan para envío de comunicaciones no solicitadas.',
            },
            {
              title: '4. Conservación de datos',
              content:
                'Los datos se conservan durante el tiempo necesario para gestionar su consulta y hasta 2 años adicionales para registro interno. Puede solicitar su eliminación en cualquier momento.',
            },
            {
              title: '5. Comunicación a terceros',
              content:
                'No cedemos sus datos a terceros salvo obligación legal. Utilizamos servicios de envío de correo electrónico (Resend) para gestionar las comunicaciones, bajo acuerdos de confidencialidad.',
            },
            {
              title: '6. Sus derechos',
              content:
                'Tiene derecho a acceder, rectificar, suprimir y oponerse al tratamiento de sus datos. Para ejercer sus derechos, contáctenos a través del formulario de contacto indicando su solicitud.',
            },
            {
              title: '7. Cookies',
              content:
                'Este sitio no utiliza cookies de seguimiento ni publicidad. Las únicas cookies funcionales son las estrictamente necesarias para el funcionamiento del sitio.',
            },
            {
              title: '8. Modificaciones',
              content:
                'SEGUREPP se reserva el derecho de actualizar esta política. Las modificaciones serán publicadas en esta página con la fecha de actualización correspondiente.',
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2
                className="text-navy font-bold text-[16px] mb-2"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {title}
              </h2>
              <p className="text-gray-4 text-[14px] leading-relaxed" style={{ fontFamily: 'var(--font-montserrat)' }}>
                {content}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </>
  )
}
