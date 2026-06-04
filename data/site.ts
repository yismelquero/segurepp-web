/**
 * Configuración global del sitio SEGUREPP
 */
import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  whatsapp: process.env.NEXT_PUBLIC_WA_NUMBER ?? '59178407223',
  email: 'info@segurepp.com',
  direccion: 'Calle Cañada Strongest 1842, Torre Centrum, Piso 3, Of.301',
  ciudad: 'La Paz, Bolivia',
  horario: 'Lun–Vie 08:00 – 18:00',
  yearFundacion: 2019,
  // mapaEmbed: 'https://www.google.com/maps/embed?...',
  // latitud: -16.5,
  // longitud: -68.15,
}
