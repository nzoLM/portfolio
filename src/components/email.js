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
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10 w-1/2">
        <h1 className="text-4xl text-black p-10">Me contacter :</h1>
        <input type="text" name='name' className="border-b border-black text-black text-2xl" placeholder="Nom" />
        <input type="email" name='email' className="border-b border-black text-black text-2xl" placeholder="Email" />
        <textarea type="text" name='message' className="border-b border-black text-black text-2xl h-[8em] resize-none   " placeholder="Écrivez votre message . . ." />
        <input className="cursor-pointer w-fit border border-black self-center p-1" type="submit" value="Envoyer" />
    </form>
  );
};