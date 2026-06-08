import localFont from 'next/font/local'

export const playfair = localFont({
  src: '../public/fonts/PlayfairDisplay-Bold.ttf',
  weight: '700',
  display: 'swap',
  variable: '--font-playfair-display',
})

export const montserrat = localFont({
  src: '../public/fonts/Montserrat-VariableFont_wght.ttf',
  weight: '400 700',
  display: 'swap',
  variable: '--font-montserrat',
})
