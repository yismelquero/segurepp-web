import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

/**
 * API Route — Formulario de contacto
 * Validación server-side con Zod
 * Sanitización de inputs
 * Rate limiting básico por IP
 * Envío via Resend
 */

const resend = new Resend(process.env.RESEND_API_KEY)

// Schema de validación server-side (idéntico al del cliente)
const schema = z.object({
  nombre: z.string().min(2).max(100),
  empresa: z.string().min(2).max(100),
  email: z.string().email(),
  telefono: z.string().min(7).max(20).optional().or(z.literal('')),
  lineaNegocio: z.enum(['medico', 'industrial', 'uniformes', 'general']),
  mensaje: z.string().min(10).max(1000),
})

// Rate limiting en memoria (para producción usar Redis/Upstash)
const requestCounts = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 3         // máx 3 envíos
const WINDOW_MS  = 60 * 60 * 1000  // por hora

function getIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)

  if (!record || now > record.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  if (record.count >= RATE_LIMIT) return true

  record.count++
  return false
}

/** Sanitiza strings eliminando HTML básico */
function sanitize(str: string): string {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
}

const LINEA_LABELS: Record<string, string> = {
  medico: 'Equipos Médicos',
  industrial: 'Seguridad Industrial',
  uniformes: 'Uniformes y Merchandising',
  general: 'Consulta general',
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = getIp(req)
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Por favor intente más tarde.' },
      { status: 429 }
    )
  }

  // Parsear y validar
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Datos inválidos', details: parsed.error.flatten() },
      { status: 422 }
    )
  }

  const { nombre, empresa, email, telefono, lineaNegocio, mensaje } = parsed.data

  // Sanitizar
  const safe = {
    nombre: sanitize(nombre),
    empresa: sanitize(empresa),
    email: sanitize(email),
    telefono: telefono ? sanitize(telefono) : 'No proporcionado',
    lineaNegocio: LINEA_LABELS[lineaNegocio] ?? lineaNegocio,
    mensaje: sanitize(mensaje),
  }

  // Enviar email via Resend
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'noreply@segurepp.com',
      to: [process.env.RESEND_TO_EMAIL ?? 'info@segurepp.com'],
      replyTo: email,
      subject: `Nueva consulta: ${safe.lineaNegocio} — ${safe.empresa}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #071D4F; padding: 24px; border-top: 4px solid #F8AF00;">
            <h2 style="color: white; margin: 0; font-size: 18px;">Nueva consulta — SEGUREPP</h2>
          </div>
          <div style="padding: 24px; background: #f4f6f9;">
            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ['Nombre', safe.nombre],
                ['Empresa', safe.empresa],
                ['Email', email],
                ['Teléfono', safe.telefono],
                ['Línea de interés', safe.lineaNegocio],
              ]
                .map(
                  ([k, v]) => `
                <tr>
                  <td style="padding: 8px 12px; font-weight: bold; color: #071D4F; width: 35%; border-bottom: 1px solid #e2e8f0;">${k}</td>
                  <td style="padding: 8px 12px; color: #64748b; border-bottom: 1px solid #e2e8f0;">${v}</td>
                </tr>`
                )
                .join('')}
            </table>
            <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 6px; border-left: 4px solid #F8AF00;">
              <p style="font-weight: bold; color: #071D4F; margin: 0 0 8px;">Mensaje:</p>
              <p style="color: #64748b; margin: 0; white-space: pre-wrap;">${safe.mensaje}</p>
            </div>
          </div>
          <div style="padding: 16px 24px; background: #071D4F; text-align: center;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              SEGUREPP · info@segurepp.com · (+591) 78407223
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[contacto/route] Resend error:', err)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Intente de nuevo.' },
      { status: 500 }
    )
  }
}

// Solo POST está permitido
export function GET() {
  return NextResponse.json({ error: 'Método no permitido' }, { status: 405 })
}
