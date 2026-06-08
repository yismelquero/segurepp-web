/**
 * Configuración global del sitio SEGUREPP
 */
import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  whatsapp: process.env.NEXT_PUBLIC_WA_NUMBER ?? '59178407223',
  email: 'info@segurepp.com',
  direccion: 'Calle Cañada Strongest Nro 1842, Torre Centrum, Piso 3, Oficina Nro 301. La Paz-Bolivia.',
  ciudad: 'La Paz-Bolivia',
  horario: 'Lun–Vie 9:00 – 17:00 horas',
  yearFundacion: 2019,
  // mapaEmbed: 'https://www.google.com/maps/embed?...',
  // latitud: -16.5,
  // longitud: -68.15,
}
