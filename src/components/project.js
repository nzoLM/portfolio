// importer icones de technologies
import { DiPhp, DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import Image from "next/image";
import Stars from "../../public/stars.svg";
import Ray2 from "../../public/ray2.svg";
import {Carousel} from "./carousel";
import {motion} from 'motion/react';
export function Project(){

    const projects = [
        <div key={0} className="gap-10 flex flex-col">
            <div>
                <h1 className="text-6xl">Tweet Academie</h1>
            </div>
                <div className="w-fit m-auto flex justify-center gap-5">
                    <DiPhp className="text-5xl"/>
                    <DiJavascript1 className="text-5xl" />
                    <RiTailwindCssFill className="text-5xl"/>
                </div>
            <p className="text-2xl h-full text-center w-fit m-auto flex items-center justify-center">
                Projet de groupe, 4 personnes, durée de 1 mois <br />
                Reproduction des fonctionnalités de Twitter/X.
            </p>
            <motion.a whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }} href="https://github.com/nzoLM/tweet-academie" className="w-fit self-center" target="_blank"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></motion.a>
            
        </div>,
        <div key={1} className="gap-10 flex flex-col">
            <div >
                <h1 className="text-6xl">My meetic</h1>
            </div>
                <div className="w-fit m-auto flex justify-center gap-5">
                    <DiPhp className="text-5xl"/>
                    <DiJavascript1 className="text-5xl" />
                    <RiTailwindCssFill className="text-5xl"/>
                </div>
            <p className="text-2xl h-full text-center">
                Projet solo, durée de 2 semaines<br/>
                Reproduction des fonctionnalités d&apos;un site de rencontre.
            </p>
            <motion.a whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }} href="https://github.com/nzoLM/my-meetic" className="w-fit self-center" target="_blank"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></motion.a>
        </div>,
         <div key={2} className="gap-10 flex flex-col">
         <div >
             <h1 className="text-6xl">CSS Generator</h1>
         </div>
             <div className="w-fit m-auto flex justify-center gap-5">
                 <DiPhp className="text-5xl"/>
             </div>
         <p className="text-2xl h-full text-center">
             Projet solo, durée de 2 semaines<br/>
            Génération d&apos;un sprite à partir de plusieures images.
         </p>
         <motion.a whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }} href="https://github.com/nzoLM/css-generator" className="w-fit self-center" target="_blank"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></motion.a>
        </div>,
        <div key={3} className="gap-10 flex flex-col">
            <div >
                <h1 className="text-6xl">Todo List</h1>
            </div>
                <div className="w-fit m-auto flex justify-center gap-5">
                    <DiJavascript1 className="text-5xl"/>
                    <FaCss3Alt className="text-5xl"/>
                    <FaHtml5 className="text-5xl"/>
                </div>
            <p className="text-2xl h-full text-center">
                Projet solo<br/>
            To do List réalisé en auto didacte.
            </p>
            <motion.a whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }} href="https://github.com/nzoLM/todo-list" className="w-fit self-center" target="_blank"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></motion.a>
            <a href="https://nzolm.github.io/todo-list/">Visit Website</a>
       </div>,
       <div key={4} className="gap-10 flex flex-col">
        <div >
            <h1 className="text-6xl">Morpion</h1>
        </div>
            <div className="w-fit m-auto flex justify-center gap-5">
                <DiJavascript1 className="text-5xl"/>
                <FaCss3Alt className="text-5xl"/>
                <FaHtml5 className="text-5xl"/>
            </div>
        <p className="text-2xl h-full text-center">
            Projet solo<br/>
            Morpion réalisé en auto didacte.
        </p>
        <motion.a whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }} href="https://github.com/nzoLM/tic-tac-toe" className="w-fit self-center" target="_blank"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></motion.a>
        <a href="https://nzolm.github.io/tic-tac-toe/">Visit Website</a>
      </div>,
      <div key={5} className="gap-10 flex flex-col">
      <div >
          <h1 className="text-6xl">Calculatrice</h1>
      </div>
          <div className="w-fit m-auto flex justify-center gap-5">
              <DiJavascript1 className="text-5xl"/>
              <FaCss3Alt className="text-5xl"/>
              <FaHtml5 className="text-5xl"/>
          </div>
      <p className="text-2xl h-full text-center">
          Projet solo<br/>
          Calculatrice réalisé en auto didacte.
      </p>
      
      <motion.a whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }} className="w-fit self-center" href="https://github.com/nzoLM/odin-calculator" target="_blank"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></motion.a>
      <a href="https://nzolm.github.io/odin-calculator/">Visit Website</a>
    </div>,
    ];

    return(
        <div id="project" className="flex flex-col bg-[#A79EA1] min-h-screen  text-black md:gap-0 gap-10 overflow-hidden">
            <div className="flex justify-around md:my-5 my-10">
                <motion.div initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    animated={{opacity: 1, x:0}}
                    transition={{x:{
                        type: "spring",
                        damping: 10,
                        duration: 1,
                        }}}
                    viewport={{ once: true, amount: 0.5 }}>
                    <Image alt="Arrow logo" src={Ray2}/>
                </motion.div>
                <motion.h1 
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                animated={{opacity: 1, y:0}}
                transition={{y:{
                    type: "spring",
                    damping: 10,
                    duration: 1,
                    }}}
                viewport={{ once: true, amount: 0.5 }}
                className="text-4xl lg:text-6xl text-center md:h-fit self-center">Projets</motion.h1>
                <motion.div
                initial={{opacity: 0, x: 50}}
                whileInView={{opacity: 1, x: 0}}
                animated={{opacity: 1, x:0}}
                transition={{x:{
                    type: "spring",
                    damping: 10,
                    duration: 1,
                    }}}
                viewport={{ once: true, amount: 0.5 }}>
                    <Image alt="Arrow logo" src={Ray2} className="rotate-180"/>
                </motion.div>
            </div>
            <motion.h1 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            animated={{opacity: 1, y:0}}
            transition={{y:{
                type: "spring",
                damping: 10,
                duration: 1,
                }}}
            viewport={{ once: true, amount: 0.5 }}
            className="lg:text-4xl text-2xl self-center">{projects.length} projets réalisés</motion.h1>
            <div className="flex md:grow justify-center">
                {/* Animation : rotation de plusieurs étoiles ici */}
                {/* Afficher les projets en hover étoiles */}
                
                <motion.div initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    animated={{opacity: 1, x:0}}
                    transition={{x:{
                        type: "spring",
                        damping: 10,
                        duration: 1,
                        }}}
                    viewport={{ once: true, amount: 0.5 }}
                className="w-full z-10 flex flex-col text-center gap-10">
                    <Carousel slides={projects}/>
                </motion.div>
                <motion.div initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    animated={{opacity: 1, x:0}}
                    viewport={{ once: true, amount: 0.5 }}
                    animate={{
                        // Keyframes : définit les étapes de l'animation pour 'y'
                        y: ["0%", "10%", "0%"],
                      }}
                      transition={{y:{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      },x:{
                        type: "spring",
                        damping: 10,
                        duration: 1,
                        }}}
                className="hidden w-1/2 xl:flex justify-center items-center">
                    <Image alt="Star logo" src={Stars} className="self-center hover:fill-black "/>
                </motion.div>
            </div>
        </div>
    );
}