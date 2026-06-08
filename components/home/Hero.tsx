'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const TRUST_METRICS = [
  {
    value: '+200',
    label: 'Clientes',
    icon: (
      <path d="M8 11a4 4 0 118 0M4 20c0-3 3.5-5 8-5s8 2 8 5M5 12a3 3 0 100-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    ),
  },
  {
    value: 'Desde',
    label: '2019',
    icon: (
      <path d="M7 3v4M17 3v4M4 9h16M6 5h12a2 2 0 012 2v12H4V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    ),
  },
  {
    value: 'Cobertura',
    label: 'Nacional',
    icon: (
      <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    value: 'Importación',
    label: 'Directa',
    icon: (
      <path d="M4 7l8-4 8 4-8 4-8-4zM4 12l8 4 8-4M4 17l8 4 8-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

const HERO_TILES = [
  {
    title: 'Equipos Médicos',
    subtitle: 'e Insumos',
    src: '/images/hero-medical.png',
    className: 'lg:col-span-2 h-[260px] sm:h-[340px] lg:h-[380px]',
    imageClassName: 'object-center',
    icon: (
      <path d="M12 4v16M4 12h16M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Seguridad Industrial',
    subtitle: 'y EPP',
    src: '/images/hero-industrial.png',
    className: 'h-[235px] sm:h-[310px] lg:h-[330px]',
    imageClassName: 'object-center',
    icon: (
      <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4zM9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Uniformes y',
    subtitle: 'Merchandising',
    src: '/images/hero-uniforms.png',
    className: 'h-[235px] sm:h-[310px] lg:h-[330px]',
    imageClassName: 'object-center',
    icon: (
      <path d="M8 4l4 3 4-3 4 4-3 3v9H7v-9L4 8l4-4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      aria-label="SEGUREPP - Proveedor integral en Bolivia"
      className="relative isolate overflow-hidden bg-[linear-gradient(115deg,#001B3F_0%,#004372_54%,#001B3F_100%)] text-white"
    >
      <div
        className="absolute inset-x-0 bottom-0 h-[210px] opacity-80"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(26,111,191,0.72) 1px, transparent 0)',
          backgroundSize: '18px 18px',
          maskImage: 'linear-gradient(to top, black 0%, transparent 78%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-amber" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1536px] px-4 py-10 sm:px-8 lg:px-12 lg:py-12 xl:px-12 xl:py-14">
        <div className="grid min-h-[calc(100svh-72px)] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)] lg:gap-12">
          <div className="flex max-w-[650px] flex-col items-start">
            <motion.p
              className="mb-7 flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.04em] text-amber sm:text-[15px]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21s7-5.4 7-12a7 7 0 10-14 0c0 6.6 7 12 7 12zM12 10.5a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Bolivia · Desde 2019
            </motion.p>

            <motion.h1
              className="mb-7 max-w-[650px] text-[44px] font-bold leading-[1.04] sm:text-[62px] sm:leading-[1.02] lg:text-[68px] lg:leading-[1.03] xl:text-[76px] xl:leading-[1.04]"
              style={{ fontFamily: 'var(--font-playfair)' }}
              initial={reduced ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              Un solo proveedor para múltiples{' '}
              <span className="block text-amber">necesidades empresariales</span>
            </motion.h1>

            <motion.div
              className="mb-6 h-[3px] w-16 bg-amber"
              initial={reduced ? false : { opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              aria-hidden="true"
            />

            <motion.p
              className="mb-8 max-w-[560px] text-[16px] leading-[1.65] text-white/86 lg:text-[18px]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Equipos médicos e insumos, seguridad industrial y EPP, uniformes y
              merchandising para empresas e instituciones en Bolivia.
            </motion.p>

            <motion.div
              className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
            >
              <Link
                href="/contacto"
                className="flex min-h-[56px] items-center justify-center gap-4 rounded-md bg-amber px-8 text-[15px] font-bold text-navy shadow-amber transition-colors hover:bg-gold sm:min-w-[240px]"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Solicitar cotización
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/catalogo"
                className="flex min-h-[56px] items-center justify-center gap-4 rounded-md border border-white/75 px-8 text-[15px] font-semibold text-white transition-colors hover:bg-white/10 sm:min-w-[190px]"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Ver catálogo
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>

            <motion.dl
              className="mt-14 grid w-full grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-0"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.46 }}
            >
              {TRUST_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="flex min-w-0 items-center gap-3 sm:border-r sm:border-white/28 sm:px-4 first:sm:pl-0 last:sm:border-r-0 xl:px-5"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center text-amber" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      {metric.icon}
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <dt className="whitespace-nowrap text-[15px] font-semibold leading-tight text-white xl:text-[16px]">{metric.value}</dt>
                    <dd className="whitespace-nowrap text-[12px] leading-tight text-white/78 xl:text-[13px]">{metric.label}</dd>
                  </div>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            className="relative"
            initial={reduced ? false : { opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {HERO_TILES.map((tile, index) => (
                <article
                  key={tile.title}
                  className={`relative overflow-hidden rounded-lg border border-white/10 bg-navy-dark shadow-[0_22px_55px_rgba(0,0,0,0.28)] ${tile.className}`}
                >
                  <Image
                    src={tile.src}
                    alt=""
                    fill
                    priority={index === 0}
                    sizes={index === 0 ? '(max-width: 1024px) 100vw, 820px' : '(max-width: 1024px) 100vw, 410px'}
                    className={`object-cover ${tile.imageClassName}`}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/82 via-navy/18 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 bg-navy/70 px-5 py-4 backdrop-blur-[2px] lg:px-6 lg:py-5">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md border border-amber/35 text-amber" aria-hidden="true">
                      <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
                        {tile.icon}
                      </svg>
                    </span>
                    <h2 className="min-w-0 text-[17px] font-medium leading-snug text-white/94 lg:text-[19px]">
                      {tile.title}
                      <span className="block">{tile.subtitle}</span>
                    </h2>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
