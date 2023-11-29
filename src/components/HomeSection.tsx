import { AppThemeProps } from '@/app/page'
import { Button } from '.'
import { SocialMedia } from './SocialMedia'

export const HomeSection = ({ isDarkMode }: AppThemeProps) => {
  return (
    <section
      id="home"
      className={`md: flex h-screen flex-col items-center  justify-center space-y-4 ${
        isDarkMode ? 'bg-darkBackground-500' : 'bg-lightBackground-500'
      }`}
    >
      <h1
        className={`text-center text-2xl font-bold md:text-5xl ${
          isDarkMode ? 'text-textLight-500' : 'text-textDark-500'
        }`}
      >
        Desenvolvedor de Software
      </h1>
      <h1 className="text-center font-pressstart text-2xl text-lightTitle-500 md:text-5xl">
        Diego Sousa
      </h1>
      <p
        className={`px-4 text-center text-xl md:w-[576px] md:text-2xl ${
          isDarkMode ? 'text-lightDescription-500' : 'text-darkDescription-500'
        }`}
      >
        Freelancer que presta serviços com programação e desenvolvimento web.
        Precisa ter presença online? Junte-se a mim abaixo e vamos tirar a sua
        ideia do papel!
      </p>
      <footer className="w-full px-12 pt-12 md:pt-24">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:space-y-0">
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
        <div className="mt-12 md:absolute md:bottom-3 md:right-3 md:mx-6 md:mt-0 ">
          <SocialMedia />
        </div>
      </footer>
    </section>
  )
}
