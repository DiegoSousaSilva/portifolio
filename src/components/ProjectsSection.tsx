import { AppThemeProps } from '@/app/page'
import { Projects } from './Projects'

export const ProjectsSection = ({ isDarkMode }: AppThemeProps) => {
  return (
    <section
      id="services"
      className={`${
        isDarkMode ? 'bg-darkBackground-500' : 'bg-lightBackground-500'
      }`}
    >
      <div className="mx-auto w-4/5 py-3">
        <div>
          <h1
            className={`py-4 text-center text-xl font-bold md:text-left md:text-3xl ${
              isDarkMode ? 'text-textLight-500' : 'text-textDark-400'
            }`}
          >
            Portifolio
          </h1>
          <h4
            className={`text-center text-base font-bold md:text-left ${
              isDarkMode
                ? 'text-lightDescription-500'
                : 'text-darkDescription-500'
            }`}
          >
            Conheça alguns dos meus projetos desenvolvidos utilizando as
            melhores tecnologias disponíveis.
          </h4>
        </div>
        <Projects />
      </div>
    </section>
  )
}
