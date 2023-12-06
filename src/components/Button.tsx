import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
  className?: string
  isDarkMode: boolean
  onClick?: () => void
}

export const Button = ({
  title,
  className,
  onClick,
  isDarkMode,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${className} ${
        isDarkMode ? 'text-textDark-500' : 'text-textLight-500'
      } font-poppins w-[244px] rounded-lg px-3 py-3 font-bold shadow-md transition duration-150 ease-in-out hover:bg-opacity-60 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 focus:hover:bg-opacity-60 `}
    >
      {title}
    </button>
  )
}
