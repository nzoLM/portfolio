"use client";
import { DiPhp, DiJavascript1 } from "react-icons/di";
import React from "react";
import Star from "../../public/star-with-star-field.svg"
import { RiTailwindCssFill, RiNextjsFill, RiNextjsLine, RiReactjsFill, RiSvelteFill } from "react-icons/ri";
import { FaGithub, FaHtml5, FaCss3Alt, FaDocker, FaNode, FaSymfony } from "react-icons/fa";
import Image from "next/image";
import Stars from "../../public/stars.svg";
import Ray2 from "../../public/ray2.svg";
import EcommerceImg from "../../public/pictures/e-commerce.png";
import LavanvidsImg from "../../public/pictures/lavanvids.png";
import MyIrcImg from "../../public/pictures/my-irc.png";
import MyQuizzImg from "../../public/pictures/my_quizz.png";
import { motion } from 'motion/react';

const projectData = [
  {
    title: "Kords (Work in progress)",
    description: "Projet solo, plateforme communautaire pour les guitaristes.",
    icons: [
      <RiNextjsFill className="text-5xl" key="nextjs" />,
      <FaNode className="text-5xl" key={"nodejs"} />
    ],
    github: "https://github.com/nzoLM/Kords",
    website: "https://kordz.netlify.app/",
    image: Stars,
  },
  {
    title: "E-commerce",
    description: "Projet de groupe, 4 personnes, durée de 6 semaines, plateforme e-commerce de vente de chaussures",
    icons: [
      <RiReactjsFill className="text-5xl" key="nextjs" />,
      <FaSymfony className="text-5xl" key="symfony" />,
      <RiTailwindCssFill className="text-5xl" key="tailwindcss" />
    ],
    github: "https://github.com/nzoLM/e-commerce",
    image: EcommerceImg,
  },
  {
    title: '"LavanVids" / Previously-on',
    description: "Projet de groupe, 2 personnes, projet visant à suivre la progression sur les séries consultées. Ce remake est développé en Svelte, avec Tailwind CSS pour le design et en utilisant l'API de BetaSeries",
    icons: [<DiJavascript1 className="text-5xl" key="js" />, <RiTailwindCssFill className="text-5xl" key="tw" />, <RiSvelteFill className="text-5xl" key="svelte" />],
    github: "https://github.com/nzoLM/LavanVids",
    // website: "https://lavanvids.netlify.app",
    image: LavanvidsImg, // Remplace par une image spécifique si besoin
  },
  {
    title: 'my-crud-tester',
    description: "Projet solo\nProjet de réalisations de tests unitaires, projet scolaire",
    icons: [<DiJavascript1 className="text-5xl" key="js" />, <FaDocker className="text-5xl" key="Docker" ></FaDocker>],
    github: "https://github.com/nzoLM/my-crud-tester",
    image: Stars, // Remplace par une image spécifique si besoin
  },
  {
    title: 'MyIRC',
    description: "Projet de groupe à 2 personnes\nProjet d'app de messagerie instantanée avec l'utilisation des socket en Javascript",
    icons: [<DiJavascript1 className="text-5xl" key="js" />, <RiReactjsFill className="text-5xl" key="reactjs" ></RiReactjsFill>],
    github: "https://github.com/nzoLM/my-irc",
    image: MyIrcImg,
  },
  {
    title: "My Quizz",
    description: "Projet de groupe, 3 personnes, durée de 2 semaines,\n Plateforme de quizz, avec création de quizz.",
    icons: [
      <RiReactjsFill className="text-5xl" key="nextjs" />,
      <FaSymfony className="text-5xl" key="symfony" />,
      <RiTailwindCssFill className="text-5xl" key="tailwindcss" />,
    ],
    github: "https://github.com/nzoLM/my_quizz",
    // website: "https://elm-myquizz.netlify.app",
    image: MyQuizzImg,
  },

];

export function Project() {
  return (
    <div id="project" className="flex flex-col min-h-screen pb-10 gap-10 overflow-x-hidden">
      <div className="flex justify-around md:my-5 my-10">
        <motion.div initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ x: { type: "spring", damping: 10, duration: 1 } }}
          viewport={{ once: true, amount: 0.5 }}>
          <Image alt="Arrow logo" src={Ray2} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ y: { type: "spring", damping: 10, duration: 1 } }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-2xl sm:text-4xl lg:text-6xl text-center md:h-fit self-center font-bold px-4">Projets</motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ x: { type: "spring", damping: 10, duration: 1 } }}
          viewport={{ once: true, amount: 0.5 }}>
          <Image style={{ color: "white" }} alt="Arrow logo" src={Ray2} className="rotate-180" />
        </motion.div>
      </div>
      <div className="flex flex-col justify-around">
        {projectData.map((proj, i) => (
          <React.Fragment key={proj.title}>
            <div
              className={`flex flex-col items-center justify-around gap-10 w-full ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ x: { type: "spring", damping: 10, duration: 1 } }}
                viewport={{ once: true, amount: 0.5 }}
                className="md:w-1/2 w-full flex justify-center p-4">
                {proj.website ? (
                  <a
                    href={proj.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      className="rounded-2xl max-h-72 w-auto object-contain"
                      src={`https://api.microlink.io/?url=${proj.website}&screenshot=true&meta=false&embed=screenshot.url`}
                      alt={`Aperçu de ${proj.title}`}
                      loading="lazy"
                    />
                  </a>
                ) : proj.image ? (
                  <div className="text-center">
                    <Image src={proj.image} alt={proj.title + " image"} className="rounded-2xl max-h-72 w-auto object-contain" />
                  </div>
                ) : (
                  <p className="font-bold text-xl text-center">Pas d&apos;aperçu disponible.</p>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ x: { type: "spring", damping: 10, duration: 1 } }}
                viewport={{ once: true, amount: 0.5 }}
                className="md:w-1/2 w-full flex flex-col gap-4 items-center justify-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold px-4 border-b-2">{proj.title}</h2>
                <div className="flex gap-4">{proj.icons}</div>
                <p className="text-sm sm:text-base lg:text-xl whitespace-pre-line text-center font-bold p-4">{proj.description}</p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    href={proj.github}
                    className="w-fit self-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="cursor-pointer text-3xl hover:fill-white transition-all duration-200" />
                  </motion.a>
                  {proj.website && (
                    <a
                      href={proj.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold hover:text-white transition"
                    >
                      Visit website
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
            {/* Séparateur sauf après le dernier projet */}
            {(
              <div className={`py-10 from-transparent to-[#937881]`}>
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-fit h-fit m-auto">
                  <Image alt="Star icon separator" src={Star} className="h-16 w-fit object-contain" />
                </motion.div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}