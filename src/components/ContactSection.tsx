import React, { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSent, setIsSent] = useState(false)

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm('service_vchwvtd', 'template_4ugwh5n', form.current, {
          publicKey: 'e1oV04kRiKxk7VUha',
        })
        .then(
          () => {
            alert('Mensagem enviada com sucesso!')
            setIsSent(true)
          },
          (error) => {
            alert('Erro ao enviar mensagem, tente novamente.')
            console.error('FAILED...', error.text)
          },
        )
    }
  }

  return (
    <section id="contact" className="bg-lightBackground-500 py-12">
      <div className="mx-auto w-4/5">
        <div>
          <h1 className="py-4 text-center text-xl font-bold text-textDark-400 md:text-left md:text-3xl">
            Entre em contato
          </h1>
          <h4 className="text-center text-base font-bold text-darkDescription-500 md:text-left">
            Vamos trabalhar juntos!
          </h4>
        </div>
        {isSent ? (
          <div>
            <h1 className="py-4 text-center text-xl font-bold text-textDark-400 md:text-left md:text-3xl">
              E-mail enviado com sucesso!
            </h1>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="mt-6">
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-textDark-400"
                htmlFor="name"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                className="w-full rounded-lg border px-3 py-2 text-base leading-6 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-textDark-400"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border px-3 py-2 text-base leading-6 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="mb-2 block text-sm font-bold text-textDark-400"
                htmlFor="message"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                className="w-full rounded-lg border px-3 py-2 text-base leading-6 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                rows={4}
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="rounded-full bg-indigo-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
