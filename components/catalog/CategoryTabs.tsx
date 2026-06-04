'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Tab {
  label: string
  href: string
  active: boolean
}

interface CategoryTabsProps {
  tabs: Tab[]
}

/**
 * Tabs de categoría del catálogo
 * Desktop: fila horizontal · todas visibles
 * Mobile: scroll horizontal sin envolver · indicador visual de scroll
 * E3 sección 3.5
 */
export function CategoryTabs({ tabs }: CategoryTabsProps) {
  return (
    <div className="relative">
      {/* Scroll horizontal en mobile */}
      <div className="flex overflow-x-auto scrollbar-none gap-1 pb-1 border-b border-gray-2">
        {tabs.map(({ label, href, active }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex-none px-4 py-2.5 text-[13px] font-semibold rounded-t-md whitespace-nowrap transition-colors duration-120 min-h-[44px] flex items-center',
              active
                ? 'bg-navy text-white'
                : 'text-gray-4 hover:text-navy hover:bg-gray-1'
            )}
            style={{ fontFamily: 'var(--font-montserrat)' }}
            aria-current={active ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Indicador de scroll en mobile */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white pointer-events-none lg:hidden" />
    </div>
  )
}
