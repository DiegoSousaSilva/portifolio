import Link from 'next/link'
import { useEffect } from 'react'

interface NavigationMenuProps {
  isMenuOpen?: boolean
  toggleMenu?: () => void
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Cleanup da função de efeito
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <nav
      className={`mt-2 flex-col md:flex md:flex-row ${
        isMenuOpen ? 'flex h-screen ' : 'hidden'
      }`}
    >
      {menuItems.map((item) => {
        return (
          <Link
            onClick={toggleMenu && (() => toggleMenu())}
            key={item.text}
            href={item.href}
            className={`font-poppins mr-4 mt-4 block text-2xl md:mt-0 md:inline-block md:text-xl ${
              isMenuOpen ? 'p-8' : ''
            }`}
          >
            {item.text}
          </Link>
        )
      })}
    </nav>
  )
}
