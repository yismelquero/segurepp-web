import type { PortableTextComponents } from '@portabletext/react'
import { PortableText as SanityPortableText } from '@portabletext/react'

// Instalado con next-sanity → @portabletext/react

interface PortableTextProps {
  value: unknown[]
  className?: string
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p
        className="text-gray-4 text-[15px] leading-relaxed mb-4"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2
        className="text-navy font-bold text-xl mt-8 mb-3"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-navy font-bold text-[17px] mt-6 mb-2"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="border-l-4 border-amber pl-4 italic text-gray-3 my-4"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-1 mb-4 text-gray-4 text-[14px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-1 mb-4 text-gray-4 text-[14px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-navy">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-blue hover:underline font-medium"
      >
        {children}
      </a>
    ),
  },
}

export function PortableText({ value, className }: PortableTextProps) {
  if (!value?.length) return null

  return (
    <div className={className}>
      <SanityPortableText value={value} components={components} />
    </div>
  )
}
