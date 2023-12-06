import { Dispatch, SetStateAction, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { NavigationMenu } from '.'

interface HeaderProps {
  setIsDarkMode: Dispatch<SetStateAction<boolean>>
  isDarkMode: boolean
}

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
          {isDarkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
        </button>
      </div>

      <div
        className={`col-span-2 items-center  md:flex ${
          isMenuOpen ? 'hidden' : 'flex'
        }`}
      >
        <p className="font-poppins text-lg font-bold md:text-base">
          Diego Sousa
        </p>
      </div>

      {/* Menu de navegação */}
      <NavigationMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

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
