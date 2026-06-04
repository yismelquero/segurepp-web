'use client'

/**
 * Formulario de contacto
 * react-hook-form + Zod · Resend · Validación tipada client + server
 * Mensaje: "Respondemos a la brevedad posible." (Auditoría Final)
 */

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Button } from '@/components/global/Button'

const schema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  empresa: z.string().min(2, 'El nombre de empresa debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Email no válido'),
  telefono: z.string().min(7, 'Teléfono no válido').max(20).optional().or(z.literal('')),
  lineaNegocio: z.enum(['medico', 'industrial', 'uniformes', 'general']),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(1000),
})

type FormData = z.infer<typeof schema>

const LINEAS = [
  { value: 'general', label: 'Consulta general' },
  { value: 'medico', label: 'Equipos Médicos' },
  { value: 'industrial', label: 'Seguridad Industrial' },
  { value: 'uniformes', label: 'Uniformes y Merchandising' },
]

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { lineaNegocio: 'general' },
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Error del servidor')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (error?: { message?: string }) =>
    `w-full px-4 py-3 rounded-md text-navy text-[16px] border transition-colors duration-150 min-h-[48px] outline-none focus:ring-2 focus:ring-blue focus:border-blue ${
      error
        ? 'bg-red-50 border-red-form text-red-form'
        : 'bg-gray-1 border-gray-2 focus:bg-white'
    }`

  const labelClass = 'block text-navy font-semibold text-[12px] mb-1'

  return (
    <div>
      {status === 'success' ? (
        <div className="bg-green/10 border border-green rounded-lg p-6 text-center">
          <p
            className="text-green font-bold text-[16px]"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            ✓ Mensaje enviado exitosamente
          </p>
          <p
            className="text-gray-4 text-[13px] mt-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Respondemos a la brevedad posible · info@segurepp.com
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4"
            onClick={() => setStatus('idle')}
          >
            Enviar otro mensaje
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          {/* Nombre + Empresa */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className={labelClass} style={{ fontFamily: 'var(--font-montserrat)' }}>
                Nombre completo *
              </label>
              <input
                id="nombre"
                type="text"
                autoComplete="name"
                className={inputClass(errors.nombre)}
                style={{ fontFamily: 'var(--font-montserrat)' }}
                {...register('nombre')}
              />
              {errors.nombre && (
                <p className="text-red-form text-[12px] mt-1 flex items-center gap-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  <span aria-hidden="true">✕</span> {errors.nombre.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="empresa" className={labelClass} style={{ fontFamily: 'var(--font-montserrat)' }}>
                Empresa / Institución *
              </label>
              <input
                id="empresa"
                type="text"
                autoComplete="organization"
                className={inputClass(errors.empresa)}
                style={{ fontFamily: 'var(--font-montserrat)' }}
                {...register('empresa')}
              />
              {errors.empresa && (
                <p className="text-red-form text-[12px] mt-1 flex items-center gap-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  <span aria-hidden="true">✕</span> {errors.empresa.message}
                </p>
              )}
            </div>
          </div>

          {/* Email + Teléfono */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className={labelClass} style={{ fontFamily: 'var(--font-montserrat)' }}>
                Email *
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={inputClass(errors.email)}
                style={{ fontFamily: 'var(--font-montserrat)' }}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-form text-[12px] mt-1 flex items-center gap-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  <span aria-hidden="true">✕</span> {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="telefono" className={labelClass} style={{ fontFamily: 'var(--font-montserrat)' }}>
                Teléfono / WhatsApp
              </label>
              <input
                id="telefono"
                type="tel"
                autoComplete="tel"
                className={inputClass(errors.telefono)}
                placeholder="(+591)"
                style={{ fontFamily: 'var(--font-montserrat)' }}
                {...register('telefono')}
              />
            </div>
          </div>

          {/* Línea de negocio */}
          <div>
            <label htmlFor="lineaNegocio" className={labelClass} style={{ fontFamily: 'var(--font-montserrat)' }}>
              Línea de interés
            </label>
            <select
              id="lineaNegocio"
              className={`${inputClass(errors.lineaNegocio)} cursor-pointer`}
              style={{ fontFamily: 'var(--font-montserrat)' }}
              {...register('lineaNegocio')}
            >
              {LINEAS.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="mensaje" className={labelClass} style={{ fontFamily: 'var(--font-montserrat)' }}>
              Mensaje *
            </label>
            <textarea
              id="mensaje"
              rows={5}
              className={`${inputClass(errors.mensaje)} min-h-[120px] resize-y`}
              placeholder="Describa su necesidad o consulta..."
              style={{ fontFamily: 'var(--font-montserrat)' }}
              {...register('mensaje')}
            />
            {errors.mensaje && (
              <p className="text-red-form text-[12px] mt-1 flex items-center gap-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <span aria-hidden="true">✕</span> {errors.mensaje.message}
              </p>
            )}
          </div>

          {status === 'error' && (
            <p className="text-red-form text-[13px] bg-red-50 border border-red-form rounded p-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Error al enviar el mensaje. Por favor intente de nuevo o escríbanos a info@segurepp.com
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full justify-center mt-2"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
          </Button>

          <p
            className="text-gray-3 text-[11px] text-center mt-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Respondemos a la brevedad posible · info@segurepp.com
          </p>
        </form>
      )}
    </div>
  )
}
