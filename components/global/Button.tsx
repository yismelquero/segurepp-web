'use client'

import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-white' | 'whatsapp'
type ButtonSize = 'md' | 'sm'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

// Botón estándar
type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }
// Enlace que parece botón
type LinkButtonProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Props = ButtonProps | LinkButtonProps

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-amber text-navy font-bold',
    'hover:bg-gold hover:-translate-y-0.5 hover:shadow-amber',
    'active:bg-[#E09E00] active:translate-y-0',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0',
    'focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
  ].join(' '),

  secondary: [
    'bg-navy text-white font-bold',
    'hover:bg-navy-dark hover:-translate-y-0.5',
    'active:bg-dark active:translate-y-0',
    'disabled:opacity-40 disabled:cursor-not-allowed',
    'focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2',
  ].join(' '),

  outline: [
    'bg-transparent text-navy font-semibold border border-navy/80',
    'hover:bg-navy/5 hover:-translate-y-px',
    'active:translate-y-0',
    'focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
  ].join(' '),

  'outline-white': [
    'bg-transparent text-white font-semibold border border-white/70',
    'hover:bg-white/8 hover:-translate-y-px',
    'active:translate-y-0',
    'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2',
  ].join(' '),

  whatsapp: [
    'bg-green text-white font-bold',
    'hover:bg-[#15803D] hover:-translate-y-0.5',
    'active:translate-y-0',
    'focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2',
  ].join(' '),
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-7 py-3.5 text-[15px] leading-none min-h-[48px] min-w-[132px]',
  sm: 'px-5 py-2.5 text-[13px] leading-none min-h-[40px] min-w-[108px]',
}

const base = 'inline-flex items-center justify-center gap-2 rounded-md transition-all duration-180 ease-in-out select-none'

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: Props) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className)

  if ('href' in props && props.href) {
    const { href, ...rest } = props as LinkButtonProps
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
