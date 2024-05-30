import Image from 'next/image'

import web from '../assets/images/web.png'
import mobile from '../assets/images/mobile.png'
import api from '../assets/images/api.png'

export const Services = () => {
  const allServices = [
    {
      image: web,
      title: 'Desenvolvimento web',
      dscription:
        'Você tem uma ideia para o seu próximo grande site? Vamos fazer disso um realidade!',
    },
    {
      image: mobile,
      title: 'Desenvolvimento de aplicativos',
      dscription:
        'Precisa criar um aplicativo para impulsionar vendas ou mostrar o seu trabalho? Vamos juntos tornar seu sonho realidade!',
    },
    {
      image: api,
      title: "Desenvolvimento de API's",
      dscription:
        'Precisando descentralizar as informações? Vamos padronizar o formato de entrega de dados!',
    },
  ]
  return (
    <ul className="grid gap-6 py-12 text-lg md:grid-cols-2 md:gap-x-12 lg:grid-cols-3">
      {allServices.map((service) => {
        return (
          <li
            key={service.title}
            className="relative h-[467px] rounded-lg bg-backgroundItem p-4 shadow-xl"
          >
            <Image
              src={service.image}
              width={248}
              height={196}
              alt="Picture of the author"
              className="p-3"
            />
            <hgroup className="absolute left-0 right-0 px-3 md:top-[58%]">
              <h2 className="py-4 text-center font-poppins text-base font-bold text-textDark-500">
                {service.title}
              </h2>
              <p className="px-3 font-poppins text-sm leading-7 text-darkDescription-500">
                {service.dscription}
              </p>
            </hgroup>
          </li>
        )
      })}
    </ul>
  )
}
