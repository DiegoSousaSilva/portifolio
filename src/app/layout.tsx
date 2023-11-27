import type { Metadata } from 'next'
import {
  Roboto_Flex as Roboto,
  Press_Start_2P as PressStart2P,
} from 'next/font/google'
import './globals.css'
import Head from 'next/head'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, screen-orientation=portrait"
        />
      </Head>
      <body className={`${roboto.variable} ${pressStart.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
