import {
  FaCss3,
  FaFigma,
  FaGit,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoFirebase } from 'react-icons/io5'
import {
  SiTypescript,
  SiTailwindcss,
  SiFastify,
  SiPrisma,
  SiSqlite,
} from 'react-icons/si'
import { DiMysql } from 'react-icons/di'
import { AppThemeProps } from '@/app/page'

export const Tools = ({ isDarkMode }: AppThemeProps) => {
  const tools = [
    {
      icon: <FaReact size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'React',
    },
    {
      icon: <FaHtml5 size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'HTML5',
    },
    {
      icon: <FaCss3 size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'CSS3',
    },
    {
      icon: <FaReact size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'React Native',
    },
    {
      icon: <FaNodeJs size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'NodeJS',
    },
    {
      icon: <FaGit size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'GIT',
    },
    {
      icon: (
        <IoLogoFirebase size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />
      ),
      title: 'Firebase',
    },
    {
      icon: (
        <SiTailwindcss size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />
      ),
      title: 'Tailwind',
    },
    {
      icon: <SiFastify size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'Fastify',
    },
    {
      icon: (
        <IoLogoJavascript
          size={36}
          color={isDarkMode ? '#DFDFDF' : '#263138'}
        />
      ),
      title: 'Javascript',
    },
    {
      icon: <SiPrisma size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'Prisma',
    },
    {
      icon: (
        <SiTypescript size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />
      ),
      title: 'Typescript',
    },
    {
      icon: <SiSqlite size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'SQLITE',
    },
    {
      icon: <FaPhp size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'PHP',
    },
    {
      icon: <DiMysql size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'MySQL',
    },
    {
      icon: <FaFigma size={36} color={isDarkMode ? '#DFDFDF' : '#263138'} />,
      title: 'Figma',
    },
  ]

  return (
    <section id="tools">
      <h1
        className={`py-3 text-center text-xl font-bold md:text-left md:text-3xl ${
          isDarkMode ? 'text-textLight-500' : 'text-textDark-400'
        }`}
      >
        Ferramentas utilizadas
      </h1>
      <ul className="grid grid-cols-4 gap-5 py-12 text-lg md:grid-cols-6 md:gap-x-12 lg:grid-cols-8">
        {tools.map((tool) => {
          return (
            <li
              key={tool.title}
              className="flex flex-col items-center justify-center"
            >
              {tool.icon}
              <h2
                className={`py-2 text-center font-poppins text-xs font-bold md:py-4 md:text-sm ${
                  isDarkMode ? 'text-textLight-500' : 'text-textDark-500'
                }`}
              >
                {tool.title}
              </h2>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
