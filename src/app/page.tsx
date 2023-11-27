'use client'
import { useState } from 'react'
import { HomeSection, Header } from '@/components'
import { AboutSection } from '@/components/AboutSection'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <main>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <HomeSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
    </main>
  )
}
