import Link from 'next/link'
import { Button } from '.'
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'
import { SocialMedia } from './SocialMedia'

interface HeaderProps {
  isDarkMode: boolean
}

export const HomeSection = ({ isDarkMode }: HeaderProps) => {
  return (
    <section
      id="home"
      className={`md: flex h-screen flex-col items-center  justify-center space-y-4 ${
        isDarkMode ? 'bg-darkBackground-500' : 'bg-lightBackground-500'
      }`}
    >
      <h1
        className={`text-5xl font-bold ${
          isDarkMode ? 'text-textLight-500' : 'text-textDark-500'
        }`}
      >
        Desenvolvedor de Software
      </h1>
      <h1 className="font-pressstart text-5xl text-lightTitle-500">
        Diego Sousa
      </h1>
      <p
        className={`w-[576px] text-center text-2xl ${
          isDarkMode ? 'text-lightDescription-500' : 'text-darkDescription-500'
        }`}
      >
        Freelancer que presta serviços com programação e desenvolvimento web.
        Precisa ter presença online? Junte-se a mim abaixo e vamos tirar a sua
        ideia do papel!
      </p>
      <footer className="w-full px-12 pt-12 md:pt-24">
        <div className="flex flex-col items-center justify-center space-x-4 space-y-3 md:flex-row md:space-y-0">
          <Button
            isDarkMode={isDarkMode}
            title="Veja meu trabalho"
            onClick={() => console.log('Veja meu trabalho')}
            className={` ${
              isDarkMode ? 'bg-lightBackground-500' : 'bg-darkBackground-600'
            }`}
          />
          <Button
            isDarkMode={isDarkMode}
            title="Entre em contato"
            onClick={() => console.log('Entre em contato')}
            className="bg-lightTitle-500"
          />
        </div>
        <div className="mt-4 md:absolute md:bottom-3 md:right-3 md:mx-6 ">
          <SocialMedia />
        </div>
      </footer>
    </section>
  )
}
