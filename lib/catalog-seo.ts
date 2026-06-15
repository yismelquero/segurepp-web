import { LINEA_LABELS } from '@/lib/utils'

export const CATEGORY_SEO: Record<string, { title: string; description: string }> = {
  'proteccion-manos': {
    title: 'Guantes de Seguridad y Protección de Manos en Bolivia',
    description:
      'Guantes de seguridad industrial, guantes de nitrilo, carnaza, soldador y protección de manos para empresas en Bolivia. Cotización personalizada.',
  },
  'proteccion-visual-facial': {
    title: 'Lentes, Gafas y Protección Visual Industrial en Bolivia',
    description:
      'Lentes de seguridad, gafas antiempañantes, goggles y pantallas faciales para protección visual y facial industrial. Atención B2B en Bolivia.',
  },
  'proteccion-auditiva': {
    title: 'Protección Auditiva Industrial en Bolivia',
    description:
      'Protectores auditivos de copa, tapones y auditivos adosables al casco para ruido industrial, construcción y mantenimiento en Bolivia.',
  },
  'proteccion-respiratoria': {
    title: 'Protección Respiratoria, Respiradores y Filtros en Bolivia',
    description:
      'Respiradores, barbijos N95, filtros 3M y protección respiratoria para seguridad industrial, salud y mantenimiento en Bolivia.',
  },
  'ropa-seguridad': {
    title: 'Ropa de Seguridad Industrial y Overoles en Bolivia',
    description:
      'Ropa de seguridad, overoles, ponchos impermeables y chalecos reflectivos para trabajo industrial y construcción en Bolivia.',
  },
  'calzado-seguridad': {
    title: 'Botas de Seguridad Industrial en Bolivia',
    description:
      'Botas de goma con punta de acero, calzado de seguridad y protección para industria, obra, limpieza y entornos laborales en Bolivia.',
  },
  'botines-seguridad': {
    title: 'Botines de Seguridad Industrial en Bolivia',
    description:
      'Botines de seguridad Strong y calzado industrial para empresas, obras, almacenes e industria en Bolivia. Cotización personalizada.',
  },
  'soldadura': {
    title: 'Protección para Soldadura en Bolivia',
    description:
      'Caretas, mandiles, mangas, capuchas y guantes de soldador para protección industrial en trabajos de soldadura en Bolivia.',
  },
  'ecografos': {
    title: 'Ecógrafos y Equipos de Ultrasonido en Bolivia',
    description:
      'Ecógrafos, ultrasonido, sondas y accesorios para clínicas, hospitales y centros médicos en Bolivia. Asesoría técnica y cotización.',
  },
  'electrocardiografos': {
    title: 'Electrocardiógrafos y Equipos ECG en Bolivia',
    description:
      'Electrocardiógrafos, papel térmico ECG, electrodos, cables y accesorios para diagnóstico cardiológico en Bolivia.',
  },
  'monitoreo-diagnostico': {
    title: 'Monitoreo y Diagnóstico Médico en Bolivia',
    description:
      'Monitores de signos vitales, presión arterial, otoscopios, holter y equipos de diagnóstico para instituciones de salud en Bolivia.',
  },
  'ultrasonido': {
    title: 'Accesorios de Ultrasonido y Sondas en Bolivia',
    description:
      'Cobertores, almohadillas de gel, estuches para sondas y accesorios de ultrasonido para uso clínico en Bolivia.',
  },
  'uniformes-especiales': {
    title: 'Uniformes Médicos, Deportivos y Especiales en Bolivia',
    description:
      'Uniformes médicos, deportivos, de mantenimiento y prendas especiales con confección personalizada para empresas en Bolivia.',
  },
  'camisas-corporativas': {
    title: 'Camisas Corporativas Personalizadas en Bolivia',
    description:
      'Camisas corporativas, técnicas, oxford y reflectantes con confección personalizada, bordado y branding empresarial en Bolivia.',
  },
  'chalecos-corporativos': {
    title: 'Chalecos Corporativos e Industriales en Bolivia',
    description:
      'Chalecos corporativos, institucionales e industriales personalizados para empresas, eventos, campo y operación en Bolivia.',
  },
  'merchandising-corporativo': {
    title: 'Merchandising Corporativo Personalizado en Bolivia',
    description:
      'Kits corporativos, tazas, libretas, lapiceros, mochilas y artículos promocionales personalizados para empresas en Bolivia.',
  },
}

export function getCategorySeo(slug: string, name: string, linea: string) {
  const fallbackLine = LINEA_LABELS[linea] ?? 'Catálogo'
  return (
    CATEGORY_SEO[slug] ?? {
      title: `${name} en Bolivia`,
      description: `${name} para ${fallbackLine.toLowerCase()} con atención B2B, cotización personalizada y cobertura en Bolivia.`,
    }
  )
}
