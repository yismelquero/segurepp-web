'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOptions } from '@/lib/animations'
import { Button } from '@/components/global/Button'

export function FinalCTA() {
  return (
    <section aria-label="Solicitar cotización" className="bg-navy py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="text-center lg:text-left">
            <h2
              className="text-white font-bold text-xl lg:text-2xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              ¿Listo para cotizar?
            </h2>
            <p
              className="text-gray-3 text-[14px] mt-1"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Respondemos a la brevedad posible · info@segurepp.com
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Button
              href="/contacto"
              variant="primary"
              className="justify-center sm:min-w-[180px]"
            >
              Solicitar cotización
            </Button>
            <Button
              href="/catalogo"
              variant="outline-white"
              className="justify-center sm:min-w-[160px]"
            >
              Ver catálogo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
