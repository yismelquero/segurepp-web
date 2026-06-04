import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-2 flex-wrap', className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-gray-3 text-[11px]" aria-hidden="true">/</span>
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-[11px] text-gray-3 hover:text-blue transition-colors font-medium"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  'text-[11px] font-medium',
                  isLast ? 'text-navy' : 'text-gray-3'
                )}
                style={{ fontFamily: 'var(--font-montserrat)' }}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
