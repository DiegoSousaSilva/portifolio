'use client'
import { useState } from 'react'
import {
  HomeSection,
  Header,
  AboutSection,
  ServicesSection,
} from '@/components'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <main>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <HomeSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
      <ServicesSection isDarkMode={isDarkMode} />
    </main>
  )
}
