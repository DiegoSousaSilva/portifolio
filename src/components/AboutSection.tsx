import Image from 'next/image'
import avatar from '../assets/images/avatar.png'
import { AppThemeProps } from '@/app/page'

export const AboutSection = ({ isDarkMode }: AppThemeProps) => {
  return (
    <section
      id="about"
      className={`${isDarkMode ? 'bg-textLight-800' : 'bg-darkBackground-500'}`}
    >
      <h4
        className={`pt-4 text-center font-poppins text-sm font-bold md:text-lg ${
          isDarkMode ? 'text-darkDescription-900' : 'text-lightDescription-500'
        }`}
      >
        Seja bem-vindo ao meu portifólio
      </h4>
      <div className="mx-6 flex flex-col py-6 md:mx-auto md:w-4/5 md:flex-row">
        <div className="flex items-center justify-center md:order-2 md:w-full">
          <Image
            src={avatar}
            alt="Picture of the author"
            className="w-40 p-3 md:w-[225px]"
          />
        </div>
        <div className="md:order-1">
          <h1
            className={`py-4 text-center font-poppins text-lg font-bold md:text-left md:text-3xl ${
              isDarkMode ? 'text-textDark-500' : 'text-textLight-500'
            }`}
          >
            Olá, meu nome é{' '}
            <span
              className={`${
                isDarkMode ? 'text-lightTitle-900' : 'text-lightTitle-500'
              }`}
            >
              Diego
            </span>
            , prazer em conhecê-lo.
          </h1>
          <p
            className={`pt-3 font-poppins text-base md:w-[576px] md:text-2xl ${
              isDarkMode ? 'text-textDark-500' : 'text-lightDescription-500'
            }`}
          >
            Apenas um apaixonado desenvolvedor de software e entusiasta da
            tecnologia, dedicado a criar soluções inovadoras que fazem a
            diferença. Com uma mente curiosa e uma paixão pela resolução de
            problemas, estou constantemente explorando novas tecnologias e
            aprimorando minhas habilidades para levar projetos além das
            expectativas
          </p>
        </div>
      </div>
    </section>
  )
}
