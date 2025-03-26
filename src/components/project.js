// importer icones de technologies
import { DiPhp, DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import Image from "next/image";
import Stars from "../../public/stars.svg";
import Ray2 from "../../public/ray2.svg";
import {Carousel} from "./carousel";

export function Project(){

    const projects = [
        <div className="gap-10 flex flex-col">
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
            <a className="w-fit self-center" href="https://github.com/nzoLM/tweet-academie" target="_blank"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></a>
        </div>,
        <div className="gap-10 flex flex-col">
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
                Reproduction des fonctionnalités d'un site de rencontre.
            </p>
            <a className="w-fit self-center" target="_blank" href="https://github.com/nzoLM/my-meetic"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></a>
        </div>,
         <div className="gap-10 flex flex-col">
         <div >
             <h1 className="text-6xl">CSS Generator</h1>
         </div>
             <div className="w-fit m-auto flex justify-center gap-5">
                 <DiPhp className="text-5xl"/>
             </div>
         <p className="text-2xl h-full text-center">
             Projet solo, durée de 2 semaines<br/>
            Génération d'un sprite à partir de plusieures images.
         </p>
         <a className="w-fit self-center" href="https://github.com/nzoLM/css-generator" target="_blank"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></a>
        </div>,
        <div className="gap-10 flex flex-col">
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
            <a className="w-fit self-center" href="https://github.com/nzoLM/todo-list" target="_blank"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></a>
            <a href="https://nzolm.github.io/todo-list/">Preview</a>
       </div>,
       <div className="gap-10 flex flex-col">
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
        <a className="w-fit self-center" href="https://github.com/nzoLM/todo-list" target="_blank"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></a>
        <a href="https://nzolm.github.io/todo-list/">Preview</a>
      </div>,
      <div className="gap-10 flex flex-col">
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
      <a className="w-fit self-center" href="https://github.com/nzoLM/odin-calculator" target="_blank"><FaGithub className="text-5xl hover:fill-white transition-all duration-200"/></a>
      <a href="https://nzolm.github.io/odin-calculator/">Preview</a>
    </div>,
    ];

    return(
        <div id="project" className="flex flex-col bg-[#A79EA1] min-h-screen max-h-screen text-black ">
            <div className="flex justify-around my-5">
                <div>
                    <Image src={Ray2}/>
                </div>
                <h1 className="text-6xl text-center h-fit self-center">Projets</h1>
                <div>
                    <Image src={Ray2} className="rotate-180"/>
                </div>
            </div>
            <h1 className="text-4xl self-center">{projects.length} projets réalisés</h1>
            <div className="flex h-full grow justify-center">
                {/* Animation : rotation de plusieurs étoiles ici */}
                {/* Afficher les projets en hover étoiles */}
                
                <div className="w-full z-10 flex m-10 flex-col text-center gap-10">
                    <Carousel slides={projects}/>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <Image src={Stars} className="self-center hover:fill-black "/>
                </div>
            </div>
        </div>
    );
}