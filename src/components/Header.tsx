import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

interface HeaderProps {
  setIsDarkMode: Dispatch<SetStateAction<boolean>>
  isDarkMode: boolean
}

const menuItems = [
  {
    href: '/',
    text: 'Inicio',
  },
  {
    href: '/#about',
    text: 'Sobre',
  },
  {
    href: '/#projects',
    text: 'Portifólio',
  },
  {
    href: '/#contact',
    text: 'Contato',
  },
]

export const Header = ({ setIsDarkMode, isDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <header
      className={`flex items-center justify-between ${
        isDarkMode
          ? 'bg-darkBackground-500 text-textLight-500'
          : 'bg-lightBackground-500 text-textDark-500'
      }  px-12 py-10`}
    >
      <div className={`flex items-center ${isMenuOpen ? 'hidden' : 'flex'}`}>
        <p className="font-pressstart text-sm font-bold">Diego Sousa</p>
      </div>

      {/* Menu de navegação */}
      <nav
        className={`mt-2 flex-col items-center md:flex md:flex-row ${
          isMenuOpen ? 'flex h-screen ' : 'hidden'
        }`}
      >
        {menuItems.map((item) => {
          return (
            <Link
              key={item.text}
              href={item.href}
              className={`mr-4 mt-4 block text-2xl md:mt-0 md:inline-block md:text-xl ${
                isMenuOpen ? 'p-12' : ''
              }`}
            >
              {item.text}
            </Link>
          )
        })}
      </nav>

      {/* Botão para alternar o tema */}
      <div className={`flex items-center ${isMenuOpen ? 'hidden' : 'flex'}`}>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
        </button>
      </div>

      {/* Ícone do menu para dispositivos móveis */}
      <div className="absolute right-2 top-10 md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ícone do menu */}
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
    </header>
  )
}
