import type { Metadata, Viewport } from 'next'
import {
  Roboto_Flex as Roboto,
  Press_Start_2P as PressStart2P,
} from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const pressStart = PressStart2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start-2p',
})

export const metadata: Metadata = {
  title: 'Portifolio Diego Sousa',
  description: 'Meu Portifolio',
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${pressStart.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
