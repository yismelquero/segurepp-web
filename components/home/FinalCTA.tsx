'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOptions } from '@/lib/animations'
import { ContactForm } from '@/components/contact/ContactForm'

export function FinalCTA() {
  return (
    <section aria-label="Solicitar cotización" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mx-auto mb-10 max-w-5xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.24em] text-blue">
            ¿Listo para elevarnos juntos?
          </p>
          <div className="mx-auto mb-5 h-[3px] w-20 bg-amber" aria-hidden="true" />
          <h2 className="text-[34px] font-bold leading-tight text-navy sm:text-[44px] lg:text-[54px]">
            Hablemos de cómo podemos impulsar el{' '}
            <span className="text-blue">crecimiento</span> de tu empresa
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[17px] leading-relaxed text-gray-4">
            Nuestro equipo está listo para asesorarte y ofrecerte soluciones a la
            medida de tus necesidades.
          </p>
        </motion.div>

        <motion.div
          className="grid overflow-hidden rounded-xl border border-gray-2 bg-white shadow-[0_22px_55px_rgba(0,67,114,0.12)] lg:grid-cols-[0.55fr_0.45fr]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="relative overflow-hidden bg-navy p-8 text-white lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(26,111,191,0.45),transparent_34%),linear-gradient(120deg,rgba(0,27,63,0.0)_0%,rgba(0,27,63,0.48)_58%,rgba(0,27,63,0.72)_100%)]" aria-hidden="true" />
            <div className="relative z-10 grid min-h-[520px] grid-cols-1 content-between gap-8">
              <div>
                <h3 className="max-w-sm text-[28px] font-bold leading-tight lg:text-[32px]">
                  Tres líneas, un solo propósito:{' '}
                  <span className="text-amber">proteger</span> y hacer{' '}
                  <span className="text-amber">crecer</span> tu empresa.
                </h3>
                <div className="mt-7 h-[3px] w-16 bg-amber" aria-hidden="true" />
              </div>

              <div className="space-y-6">
                {[
                  ['Llámanos', '+591 78407223'],
                  ['Escríbenos', 'info@segurepp.com'],
                  ['Visítanos', 'La Paz, Bolivia'],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-4 border-b border-white/18 pb-5 last:border-b-0">
                    <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-blue text-blue" aria-hidden="true">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M6 4h12v16H6V4zM8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[18px] font-bold">{label}</p>
                      <p className="mt-1 text-[15px] text-white/82">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 border-t border-white/18 pt-6 sm:grid-cols-3">
                {['Equipos médicos', 'Seguridad industrial', 'Uniformes corporativos'].map((item) => (
                  <div key={item} className="text-[13px] font-bold uppercase tracking-[0.08em] text-white">
                    <span className="mb-2 block h-[2px] w-8 bg-amber" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 lg:p-10">
            <h3 className="mb-2 text-[28px] font-bold text-navy">Solicita más información</h3>
            <div className="mb-6 h-[3px] w-12 bg-amber" aria-hidden="true" />
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
