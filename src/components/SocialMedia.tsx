import Link from 'next/link'
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

export const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center gap-x-8 text-lg text-gray-600">
      <Link href="https://github.com/DiegoSousaSilva" passHref>
        <FaGithub size={32} />
      </Link>
      <Link href="www.linkedin.com/in/diego-sousa-dev" passHref>
        <FaLinkedinIn size={32} />
      </Link>
      <Link href="https://instagram.com" passHref>
        <FaInstagram size={32} />
      </Link>
      <Link href="https://www.facebook.com/diegosousa.dasilva.1" passHref>
        <FaFacebookF size={32} />
      </Link>
    </div>
  )
}
