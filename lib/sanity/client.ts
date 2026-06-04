import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'placeholder'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2026-06-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN,
})

/** Fetch con revalidación ISR configurable.
 *  Retorna [] / null si no hay projectId configurado (build sin .env). */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  revalidate: number | false = 3600
): Promise<T> {
  if (projectId === 'placeholder') {
    // Sin credenciales de Sanity — devolver vacío seguro para el build
    return (Array.isArray([]) ? [] : null) as T
  }
  return sanityClient.fetch<T>(query, params, {
    next: revalidate === false ? { revalidate: 0 } : { revalidate },
  })
}
