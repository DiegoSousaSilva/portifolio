import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'

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
      } p-4 px-12 py-10`}
    >
      <div className="flex items-center">
        <p className="font-pressstart text-sm font-bold">Diego Sousa</p>
      </div>

      {/* Ícone do menu para dispositivos móveis */}
      <div className="lg:hidden">
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

      {/* Menu de navegação */}
      <nav
        className={`lg:flex lg:items-center ${isMenuOpen ? 'flex' : 'hidden'}`}
      >
        {menuItems.map((item) => {
          return (
            <Link
              key={item.text}
              href={item.href}
              className="mr-4 mt-4 block text-xl lg:mt-0 lg:inline-block"
            >
              {item.text}
            </Link>
          )
        })}
      </nav>

      {/* Botão para alternar o tema */}
      <div className="flex items-center">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ícone da lua (modo escuro) */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 2L2 13M13 22l7-7-6-6 9-9M5 11a6 6 0 0010 0"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ícone do sol (modo claro) */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5a1 1 0 011 1v2a1 1 0 11-2 0V6a1 1 0 011-1zm0 12a1 1 0 100-2 1 1 0 000 2zm-9-6a1 1 0 011-1h2a1 1 0 010 2H4a1 1 0 01-1-1zm14 0a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1zM5 6a1 1 0 100 2 1 1 0 000-2z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}
