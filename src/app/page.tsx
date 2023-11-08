export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="bg-darkBackground-500 flex h-screen flex-col items-center justify-center space-y-4"
      >
        <h1 className="text-textLight-500 text-5xl font-bold">
          Desenvolvedor de Software
        </h1>
        <h1 className="font-pressstart text-lightTitle-500 text-5xl">
          Diego Sousa
        </h1>
        <p className="text-lightDescription-500 w-[576px] text-center text-2xl">
          Freelancer que presta serviços com programação e desenvolvimento web.
          Precisa ter presença online? Junte-se a mim abaixo e vamos tirar a sua
          ideia do papel!
        </p>
      </section>
      <section id="about-me" className="bg-lightDescription-500">
        <div className="mx-auto flex w-4/5 flex-row py-6">
          <div>
            <h4 className="text-textDark-500">
              Seja bem-vindo ao meu portifólio
            </h4>
            <h1 className="text-textDark-500 py-4 text-3xl font-bold">
              Olá, meu nome é <span className="text-lightTitle-700">Diego</span>
              , prazer em conhecê-lo.
            </h1>
            <p className="text-darkDescription-800 w-[576px] pt-3 text-2xl">
              Apenas um apaixonado desenvolvedor de software e entusiasta da
              tecnologia, dedicado a criar soluções inovadoras que fazem a
              diferença. Com uma mente curiosa e uma paixão pela resolução de
              problemas, estou constantemente explorando novas tecnologias e
              aprimorando minhas habilidades para levar projetos além das
              expectativas
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="text-darkDescription-800  text-2xl">
              [Aqui entra uma Imagem]
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
