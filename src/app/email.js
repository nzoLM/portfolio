"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!publicKey) {
      setStatus({
        type: 'error',
        message: 'Configuration EmailJS manquante (NEXT_PUBLIC_EMAILJS_PUBLIC_KEY).',
      });
      console.error('Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY at build/deploy time.');
      return;
    }
    
    try {
      await emailjs.sendForm('service_84tu507', 'template_bm7aw9n', form.current, {
        publicKey,
      });
      setStatus({ type: 'success', message: 'Message envoye avec succes.' });
      e.target.reset();
    } catch (error) {
      setStatus({ type: 'error', message: "Echec de l'envoi. Reessaie dans quelques instants." });
      console.error('FAILED...', error?.text || error);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-8 lg:w-1/2 w-full mx-4 p-4 sm:p-8 bg-black/5"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl">Me contacter :</h2>
      <input
        type="text"
        name="title"
        placeholder="Titre"
        className="border-b-2 border-black bg-transparent text-sm sm:text-base lg:text-xl placeholder-gray-500 focus:outline-none focus:border-white transition duration-300"
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Nom"
        className="border-b-2 border-black bg-transparent text-sm sm:text-base lg:text-xl placeholder-gray-500 focus:outline-none focus:border-white transition duration-300"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border-b-2 border-black bg-transparent text-sm sm:text-base lg:text-xl  placeholder-gray-500 focus:outline-none focus:border-white transition duration-300"
        required
      />

      <textarea
        name="message"
        placeholder="Écrivez votre message..."
        className="border-b-2 border-black bg-transparent text-sm sm:text-base lg:text-xl  placeholder-gray-500 h-32 resize-none focus:outline-none focus:border-white transition duration-300"
        required
      ></textarea>

      <input
        type="submit"
        value="Envoyer"
        className="self-center mt-4 px-4 sm:px-6 py-2 border-double border-4 border-black text-sm sm:text-base lg:text-lg font-medium hover:bg-black hover:text-white transition duration-150 cursor-pointer"
      />

      {status && (
        <p
          className={`text-sm sm:text-base ${status.type === 'success' ? 'text-green-700' : 'text-red-700'
            }`}
        >
          {status.message}
        </p>
      )}
    </form>

  );
};