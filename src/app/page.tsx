'use client'
import { useState } from 'react'
import {
  HomeSection,
  Header,
  AboutSection,
  ServicesSection,
  Footer,
  ToolsSection,
  ContactSection,
} from '@/components'
import { ProjectsSection } from '@/components/ProjectsSection'

export interface AppThemeProps {
  isDarkMode: boolean
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <main>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <HomeSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
      <ServicesSection isDarkMode={isDarkMode} />
      <ToolsSection isDarkMode={isDarkMode} />
      <ProjectsSection isDarkMode={isDarkMode} />
      <ContactSection />
      <Footer isDarkMode={isDarkMode} />
    </main>
  )
}
