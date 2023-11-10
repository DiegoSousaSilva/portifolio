'use client'
import { useState } from 'react'
import Header from '../components/Header'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <main>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <section
        id="home"
        className={`flex h-screen flex-col items-center justify-center space-y-4 ${
          isDarkMode ? 'bg-darkBackground-500' : 'bg-lightBackground-500'
        }`}
      >
        <h1
          className={`text-5xl font-bold ${
            isDarkMode ? 'text-textLight-500' : 'text-textDark-500'
          }`}
        >
          Desenvolvedor de Software
        </h1>
        <h1 className="font-pressstart text-5xl text-lightTitle-500">
          Diego Sousa
        </h1>
        <p
          className={`w-[576px] text-center text-2xl ${
            isDarkMode
              ? 'text-lightDescription-500'
              : 'text-darkDescription-500'
          }`}
        >
          Freelancer que presta serviços com programação e desenvolvimento web.
          Precisa ter presença online? Junte-se a mim abaixo e vamos tirar a sua
          ideia do papel!
        </p>
      </section>
      <section
        id="about"
        className={`${
          isDarkMode ? 'bg-darkBackground-100' : 'bg-darkBackground-500'
        }`}
      >
        <div className="mx-auto flex w-4/5 flex-row py-6">
          <div>
            <h4
              className={`${
                isDarkMode
                  ? 'text-darkDescription-900'
                  : 'text-lightDescription-500'
              }`}
            >
              Seja bem-vindo ao meu portifólio
            </h4>
            <h1
              className={`py-4 text-3xl font-bold ${
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
              className={`w-[576px] pt-3 text-2xl ${
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
          <div className="flex w-full items-center justify-center">
            <p className="text-2xl  text-darkDescription-800">
              [Aqui entra uma Imagem]
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
