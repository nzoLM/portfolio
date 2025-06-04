"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_l65h04p', 'template_bm7aw9n', form.current, {
        publicKey: 'bWVjjVqjuIMqe1JWN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-8 lg:w-1/2 p-8 bg-black/5"
    >
      <h1 className="text-4xl  text-black">Me contacter :</h1>

      <input
        type="text"
        name="name"
        placeholder="Nom"
        className="border-b-2 border-black bg-transparent text-xl text-black placeholder-gray-500 focus:outline-none focus:border-white transition duration-300"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border-b-2 border-black bg-transparent text-xl text-black placeholder-gray-500 focus:outline-none focus:border-white transition duration-300"
        required
      />

      <textarea
        name="message"
        placeholder="Écrivez votre message..."
        className="border-b-2 border-black bg-transparent text-xl text-black placeholder-gray-500 h-32 resize-none focus:outline-none focus:border-white transition duration-300"
        required
      ></textarea>

      <input
        type="submit"
        value="Envoyer"
        className="self-center mt-4 px-6 py-2 border-double border-4 border-black text-black text-lg font-medium hover:bg-black hover:text-white transition duration-150 cursor-pointer"
      />
    </form>

  );
};