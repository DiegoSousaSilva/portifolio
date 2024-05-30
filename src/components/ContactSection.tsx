import React, { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { AppThemeProps } from '@/app/page'
import toast from 'react-hot-toast'

interface FormData {
  name: string
  email: string
  message: string
}

export const ContactSection = ({ isDarkMode }: AppThemeProps) => {
  const form = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm('service_vchwvtd', 'template_4ugwh5n', form.current, {
          publicKey: 'e1oV04kRiKxk7VUha',
        })
        .then(
          () => {
            toast.success('Mensagem enviada com sucesso!', {
              duration: 6000,
            })
            setFormData({
              name: '',
              email: '',
              message: '',
            })
          },
          (error) => {
            toast.error('Erro ao enviar mensagem, tente novamente.', {
              duration: 6000,
            })
            console.error('FAILED...', error.text)
          },
        )
    }
  }

  return (
    <section
      id="contact"
      className={`${
        isDarkMode ? 'bg-darkBackground-500' : 'bg-lightBackground-500'
      } border-t-4 border-dotted py-12`}
    >
      <div className="mx-auto w-4/5">
        <div className="flex items-center justify-center">
          <h1
            className={`py-4 text-center  font-poppins text-xl font-bold md:text-left md:text-3xl ${
              isDarkMode ? 'text-textLight-500' : 'text-textDark-400'
            }`}
          >
            Entre em contato
          </h1>
        </div>
        <div className=" flex flex-col space-y-6 py-6 md:flex-row">
          <hgroup className="md:w-2/4">
            <h4
              className={`py-4 text-center font-poppins text-base font-bold md:text-left md:text-2xl ${
                isDarkMode ? 'text-textLight-500' : 'text-textDark-400'
              }`}
            >
              Vamos trabalhar juntos!
            </h4>
            <p
              className={`pt-3 font-poppins text-base md:pr-10 md:text-xl ${
                isDarkMode
                  ? 'text-lightDescription-500'
                  : 'text-darkDescription-500'
              }`}
            >
              Transforme sua visão em realidade! Estou aqui para tornar seu
              projeto uma experiência incrível. Vamos construir juntos algo
              extraordinário. Entre em contato e vamos começar essa jornada!
            </p>
          </hgroup>
          <form ref={form} onSubmit={sendEmail} className="md:w-2/4">
            <div className="mb-4">
              <label
                className={`mb-2 block font-poppins text-sm font-bold md:text-base ${
                  isDarkMode
                    ? 'text-lightDescription-500'
                    : 'text-darkDescription-500'
                }`}
                htmlFor="name"
              >
                Nome
              </label>
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                name="name"
                className="w-full rounded-lg border px-3 py-2 font-poppins text-base leading-6 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className={`mb-2 block font-poppins text-sm font-bold md:text-base ${
                  isDarkMode
                    ? 'text-lightDescription-500'
                    : 'text-darkDescription-500'
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2 font-poppins text-base leading-6 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className={`mb-2 block font-poppins text-sm font-bold md:text-base ${
                  isDarkMode
                    ? 'text-lightDescription-500'
                    : 'text-darkDescription-500'
                }`}
                htmlFor="message"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2 font-poppins text-base leading-6 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                rows={4}
                required
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-6 py-2 font-poppins text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
