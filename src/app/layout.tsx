import type { Metadata, Viewport } from 'next'
import {
  Roboto_Flex as Roboto,
  Press_Start_2P as PressStart2P,
  Poppins,
} from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const pressStart = PressStart2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start-2p',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
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
      <body
        className={`${roboto.variable} ${poppins.variable} ${pressStart.variable} font-sans`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  )
}
