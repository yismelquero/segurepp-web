import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './client'
import type { Image } from '@sanity/types'

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: Image) {
  return builder.image(source)
}

/** URL optimizada con dimensiones y formato WEBP */
export function imageUrl(
  source: Image,
  { width, height, quality = 85 }: { width?: number; height?: number; quality?: number } = {}
) {
  let img = builder.image(source).format('webp').quality(quality)
  if (width) img = img.width(width)
  if (height) img = img.height(height)
  return img.url()
}
