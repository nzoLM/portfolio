"use client";
import { DiPhp, DiJavascript1 } from "react-icons/di";
import React from "react";
import Star from "../../public/star-with-star-field.svg"
import { RiTailwindCssFill, RiNextjsFill, RiNextjsLine, RiReactjsFill } from "react-icons/ri";
import { FaGithub, FaHtml5, FaCss3Alt, FaDocker } from "react-icons/fa";
import Image from "next/image";
import Stars from "../../public/stars.svg";
import Ray2 from "../../public/ray2.svg";
import { motion } from 'motion/react';

const projectData = [
    {
  title: "Kords (Work in progress)",
  description: "Projet solo, plateforme type \"Letterboxd\" pour la musique : permet de lister, noter et commenter des albums ou morceaux favoris.",
  icons: [
    <RiNextjsFill className="text-5xl" key="nextjs"/>,
    <RiTailwindCssFill className="text-5xl" key="tailwindcss"/>
  ],
  github: "https://github.com/nzoLM/Kords",
  image: Stars,
},
  {
  title: "Spotify",
  description: "Projet de groupe, 2 personnes, durée de 1 semaine,\n Clone de spotify avec utilisation d'une api via Docker.",
  icons: [
    <RiReactjsFill className="text-5xl" key="nextjs"/>,
    <RiTailwindCssFill className="text-5xl" key="tailwindcss"/>,
    <FaDocker className="text-5xl" key="tailwindcss"/>
  ],
  github: "https://github.com/nzoLM/Kords",
  website : "https://kords-social.vercel.app/",
  image: Stars,
},
  {
    title: "Tweet Academie",
    description: "Projet de groupe, 4 personnes, durée de 1 mois\nReproduction des fonctionnalités de Twitter/X.",
    icons: [<DiPhp className="text-5xl" key="php"/>, <DiJavascript1 className="text-5xl" key="js"/>, <RiTailwindCssFill className="text-5xl" key="tw"/>],
    github: "https://github.com/nzoLM/tweet-academie",
    image: Stars, // Remplace par une image spécifique si besoin
  },
  {
    title: "My meetic",
    description: "Projet solo, durée de 2 semaines\nReproduction des fonctionnalités d'un site de rencontre.",
    icons: [<DiPhp className="text-5xl" key="php"/>, <DiJavascript1 className="text-5xl" key="js"/>, <RiTailwindCssFill className="text-5xl" key="tw"/>],
    github: "https://github.com/nzoLM/my-meetic",
    image: Stars,
  },
  {
    title: "Calculatrice",
    description: "Projet solo\nCalculatrice réalisé en auto didacte.",
    icons: [<DiJavascript1 className="text-5xl" key="js"/>, <FaCss3Alt className="text-5xl" key="css"/>, <FaHtml5 className="text-5xl" key="html"/>],
    github: "https://github.com/nzoLM/odin-calculator",
    website: "https://nzolm.github.io/odin-calculator/",
    image: Stars,
  },
];

export function Project() {
  return (
    <div id="project" className="flex flex-col bg-[#A79EA1] min-h-screen pb-10 text-black gap-10 overflow-x-hidden">
      <div className="flex justify-around md:my-5 my-10">
        <motion.div initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{x:{type: "spring", damping: 10, duration: 1}}}
          viewport={{ once: true, amount: 0.5 }}>
          <Image alt="Arrow logo" src={Ray2}/>
        </motion.div>
        <motion.h1 
          initial={{opacity: 0, y: -50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{y:{type: "spring", damping: 10, duration: 1}}}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl lg:text-6xl text-center md:h-fit self-center">Projets</motion.h1>
        <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{x:{type: "spring", damping: 10, duration: 1}}}
          viewport={{ once: true, amount: 0.5 }}>
          <Image alt="Arrow logo" src={Ray2} className="rotate-180"/>
        </motion.div>
      </div>
      <div className="flex flex-col justify-around">
        {projectData.map((proj, i) => (
          <React.Fragment key={proj.title}>
            <div
              className={`flex flex-col items-center justify-around gap-10 w-full ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{opacity: 1, x: 0}}
                transition={{x:{type: "spring", damping: 10, duration: 1}}}
                viewport={{ once: true, amount: 0.5 }}
                className="md:w-1/2 w-full flex justify-center">
                <Image src={proj.image} alt={proj.title + " image"} className="max-h-72 object-contain" />
              </motion.div>
              <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{opacity: 1, x: 0}}
                transition={{x:{type: "spring", damping: 10, duration: 1}}}
                viewport={{ once: true, amount: 0.5 }}
               className="md:w-1/2 w-full flex flex-col gap-4 items-center justify-center">
                <h2 className="text-4xl font-bold">{proj.title}</h2>
                <div className="flex gap-4">{proj.icons}</div>
                <p className="text-xl whitespace-pre-line text-center">{proj.description}</p>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    href={proj.github}
                    className="w-fit self-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-3xl hover:fill-white transition-all duration-200"/>
                  </motion.a>
                  {proj.website && (
                    <a
                      href={proj.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-black hover:text-white transition"
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
                whileInView={{opacity: 1, y: 0}}
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