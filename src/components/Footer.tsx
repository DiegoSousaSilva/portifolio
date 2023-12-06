import { AppThemeProps } from '@/app/page'
import { NavigationMenu, SocialMedia } from '.'

export const Footer = ({ isDarkMode }: AppThemeProps) => {
  return (
    <div
      className={` ${
        isDarkMode
          ? 'bg-lightBackground-500  text-darkDescription-500'
          : 'bg-darkBackground-500 text-lightDescription-500'
      }`}
    >
      <div className="py-4 md:flex md:justify-around md:py-6">
        <SocialMedia />

        <NavigationMenu />
      </div>

      <div
        className={`border ${
          isDarkMode
            ? 'border-lightDescription-500'
            : 'border-lightDescription-600'
        }`}
      />

      <h2
        className={`py-3 text-center font-poppins text-base text-lightDescription-600 md:text-lg`}
      >
        Copyright 2023 - Diego Sousa
      </h2>
    </div>
  )
}
