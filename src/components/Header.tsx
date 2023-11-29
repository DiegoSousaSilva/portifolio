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
      className={`grid grid-cols-3 px-6 md:flex md:justify-between ${
        isDarkMode
          ? 'bg-darkBackground-500 text-textLight-500'
          : 'bg-lightBackground-500 text-textDark-500'
      }  py-10 md:px-12`}
    >
      {/* Botão para alternar o tema */}
      <div
        className={`items-center md:order-2 md:m-0 ${
          isMenuOpen ? 'hidden' : 'flex'
        }`}
      >
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>
      </div>

      <div
        className={`col-span-2 items-center  md:flex ${
          isMenuOpen ? 'hidden' : 'flex'
        }`}
      >
        <p className="font-pressstart text-base font-bold">Diego Sousa</p>
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
                isMenuOpen ? 'p-8' : ''
              }`}
            >
              {item.text}
            </Link>
          )
        })}
      </nav>

      {/* Ícone do menu para dispositivos móveis */}
      <div className="absolute right-4 top-10 md:hidden">
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
