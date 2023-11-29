import { Services } from './Services'

interface HeaderProps {
  isDarkMode: boolean
}

export const ServicesSection = ({ isDarkMode }: HeaderProps) => {
  return (
    <section
      id="services"
      className={`${
        isDarkMode ? 'bg-darkDescription-500' : 'bg-lightBackground-500'
      }`}
    >
      <div className="mx-auto w-4/5 py-3">
        <div>
          <h1
            className={`py-4 text-center text-xl font-bold md:text-left md:text-3xl ${
              isDarkMode ? 'text-textLight-500' : 'text-textDark-400'
            }`}
          >
            Serviços que ofereço
          </h1>
          <h4
            className={`text-center text-base font-bold md:text-left ${
              isDarkMode
                ? 'text-lightDescription-500'
                : 'text-darkDescription-500'
            }`}
          >
            Ofereço serviços na area de programação incluindo desenvolvimento
            web, mobile, backend e design.
          </h4>
        </div>
        <Services />
      </div>
    </section>
  )
}
