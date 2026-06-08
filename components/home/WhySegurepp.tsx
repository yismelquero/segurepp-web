'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'

const DIFERENCIADORES = [
  {
    id: 'calidad',
    titulo: 'Calidad garantizada',
    descripcion: 'Trabajamos con marcas líderes y productos que cumplen estándares profesionales.',
    icon: (
      <path d="M12 3l2.2 4.4 4.8.7-3.5 3.4.8 4.8L12 14.8 7.7 17.3l.8-4.8L5 9.1l4.8-.7L12 3z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    id: 'asesoria',
    titulo: 'Asesoría especializada',
    descripcion: 'Nuestro equipo acompaña cada paso para encontrar la solución ideal para tu empresa.',
    icon: (
      <path d="M6 12v-2a6 6 0 0112 0v2M6 12h2v5H6a2 2 0 01-2-2v-1a2 2 0 012-2zM18 12h-2v5h2a2 2 0 002-2v-1a2 2 0 00-2-2zM13 19h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    id: 'entrega',
    titulo: 'Entrega confiable',
    descripcion: 'Logística eficiente y cobertura nacional para recibir tus productos donde los necesites.',
    icon: (
      <path d="M4 7h10v10H4V7zM14 11h3l3 3v3h-6v-6zM7 19a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4zM2 10h4M2 14h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    id: 'respaldo',
    titulo: 'Respaldo y confianza',
    descripcion: 'Más de cinco años siendo aliados estratégicos de empresas e instituciones.',
    icon: (
      <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4zM9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    id: 'medida',
    titulo: 'Soluciones a tu medida',
    descripcion: 'Adaptamos cada propuesta a necesidades reales, con opciones personalizadas y escalables.',
    icon: (
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6zM19 12a7 7 0 01-.1 1l2 1.5-2 3.4-2.4-1a7 7 0 01-1.7 1L14.5 21h-4l-.4-3.1a7 7 0 01-1.7-1l-2.4 1-2-3.4L6.1 13A7 7 0 016 12c0-.3 0-.7.1-1L4 9.5l2-3.4 2.4 1a7 7 0 011.7-1L10.5 3h4l.4 3.1a7 7 0 011.7 1l2.4-1 2 3.4-2.1 1.5c.1.3.1.7.1 1z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    id: 'compromiso',
    titulo: 'Compromiso que se nota',
    descripcion: 'Construimos relaciones duraderas basadas en honestidad, cumplimiento y resultados.',
    icon: (
      <path d="M8 12l3 3 6-6M4 13l4-4 4 4M12 13l4-4 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

export function WhySegurepp() {
  return (
    <section aria-label="Por qué elegir SEGUREPP" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mx-auto mb-12 max-w-5xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.28em] text-blue">
            ¿Por qué SEGUREPP?
          </p>
          <div className="mx-auto mb-5 h-[3px] w-20 bg-amber" aria-hidden="true" />
          <h2 className="text-[34px] font-bold leading-tight text-navy sm:text-[44px] lg:text-[54px]">
            Más que productos, soluciones que{' '}
            <span className="text-blue">protegen y hacen crecer</span> tu empresa
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[17px] leading-relaxed text-gray-4">
            Un solo proveedor, múltiples soluciones. Calidad, respaldo y experiencia
            para acompañar cada desafío de tu empresa.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {DIFERENCIADORES.map((d) => (
            <motion.article
              key={d.id}
              variants={staggerItem}
              className="flex min-h-[300px] flex-col items-center rounded-lg border border-gray-2 bg-white px-5 py-8 text-center shadow-[0_16px_35px_rgba(0,67,114,0.08)]"
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-ice text-navy">
                <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
                  {d.icon}
                </svg>
              </div>
              <div className="mb-5 h-[2px] w-10 bg-amber" aria-hidden="true" />
              <h3 className="mb-4 text-[19px] font-bold leading-tight text-navy">
                {d.titulo}
              </h3>
              <p className="text-[13px] leading-relaxed text-gray-4">
                {d.descripcion}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 rounded-lg bg-navy p-8 shadow-navy lg:mt-12 lg:p-12"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <p className="mx-auto max-w-6xl text-center text-[25px] font-bold leading-tight text-white sm:text-[32px] lg:text-[42px]">
            En <span className="text-amber">SEGUREPP</span>, cada solución está
            respaldada por un equipo que entiende tu negocio y se compromete con{' '}
            <span className="text-amber">tu crecimiento</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
