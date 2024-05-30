import Image from 'next/image'

import project1 from '../assets/images/fromit-1.png'
import project2 from '../assets/images/inovar-1.png'
import project3 from '../assets/images/vitaamazon-1.png'
import project4 from '../assets/images/beagah.png'
import project5 from '../assets/images/therapy.png'

export const Projects = () => {
  const allProjects = [
    {
      image: project1,
      title: 'Fromit Brasil',
      description:
        'A Fromit Brasil Eireli é uma empresa que atua no setor de arquitetura e construção, com mais de 20 anos de experiência no mercado.', //, especialmente na aplicação e distribuição de equipamentos para pintura mecanizada (airless) e na construção e restauração de edifícios de diversos tipos, incluindo edifícios históricos e religiosos.
      link: 'https://fromit.com.br/',
    },
    {
      image: project2,
      title: 'Inovar Arquitetura',
      description:
        'A Inovar Arquitetura é uma empresa que oferece serviços especializados em Projetos de Arquitetura e de Engenharia de Proteção Contra Incêndio e Emergências.', // A Inovar Arquitetura desenvolve projetos para diversos tipos de empreendimentos, incluindo corporativos, bancários, residenciais e Estabelecimentos Assistenciais de Saúde (EAS).
      link: 'https://inovararq.com.br/',
    },
    {
      image: project3,
      title: 'Vita Amazon',
      description:
        'A Vita Amazon Ltda é uma empresa do ramo de agronegócio com operação na Amazônia, focada em sustentabilidade, tecnologia e bioeconomia.', // A Vita Amazon oferece à sociedade produtos da Amazônia, com respeito à sua biodiversidade. A Vita Amazon Ltda é um exemplo de empreendimento comprometido com a preservação ambiental e o desenvolvimento sustentável da região amazônica.
      link: 'https://vitaamazon.com/',
    },
    {
      image: project4,
      title: 'BeagaH Men',
      description:
        'No projeto da BeagaH Men foi desenvolvido uma loja virtual para a Boutique Masculina BeagaH.', // Fundada pelo jovem casal Marcos e Gisele, a BeagaH Men tem como objetivo oferecer o que há de mais completo no universo da moda masculina. Com um serviço de delivery que atende a toda Marabá e envios para todo o Brasil, a BeagaH Men visa levar autoestima através da moda, buscando transformar e elevar cada cliente em sua melhor versão.
    },
    {
      image: project5,
      title: 'Therapy Centro de Estética',
      description:
        'A Therapy é um centro de estética completo que oferece uma ampla gama de tratamentos visando o bem-estar e a beleza dos clientes. ', // Localizado em um ambiente acolhedor e relaxante, a Therapy Centro de Estética proporciona um espaço onde os clientes podem desfrutar de uma variedade de tratamentos personalizados, realizados por profissionais altamente qualificados e experientes.
    },
  ]

  return (
    <ul className="grid gap-6 py-12 text-lg md:grid-cols-2 md:gap-x-12 lg:grid-cols-3">
      {allProjects.map((project) => {
        return (
          <li
            key={project.title}
            className="relative rounded-lg bg-backgroundItem pb-4 shadow-xl"
          >
            <Image
              src={project.image}
              alt={`Image of ${project.title}`}
              className="p-3"
            />
            <hgroup className="px-3 md:top-[58%]">
              <h2 className="py-3 text-center font-poppins text-base font-bold text-textDark-500">
                {project.title}
              </h2>
              <p className="px-3 pb-5 font-poppins text-sm leading-7 text-darkDescription-500">
                {project.description}
              </p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-1 right-0 hover:underline"
                >
                  <p className="px-3 font-poppins text-sm font-semibold text-textDark-500">
                    Visitar Site
                  </p>
                </a>
              ) : (
                <p className="absolute bottom-1 px-3 font-poppins text-xs font-semibold text-darkDescription-500">
                  Site encerrado devido a uma mudança na estratégia de negócios.
                </p>
              )}
            </hgroup>
          </li>
        )
      })}
    </ul>
  )
}
