import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main'
}

/**
 * Contenedor con max-width 1440px y márgenes responsivos.
 * Grid system: mobile 16px · tablet 24px · desktop 40px (E1 Grid System)
 */
export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10',
        className
      )}
    >
      {children}
    </Tag>
  )
}
