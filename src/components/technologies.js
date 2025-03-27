import { DiPhp, DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill  } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import Star from "../../public/white-star.svg";
import { useEffect } from "react";

export function Technologies() {
  useEffect(()=>{
    const techSection = document.getElementById("tech-section");
    const li = techSection.querySelectorAll("li");
    let scale = 'w-24 h-24 transition ';
    li.forEach(element => {
      const img = element.querySelector("img");
      element.addEventListener("mouseover", ()=>{
        img.className = scale + ' scale-200';
      });
      element.addEventListener("mouseout", ()=>{
        img.className = scale + ' scale-100';
      });
    });
  })

  return (
    <div id="tech-section" className="relative min-h-screen max-h-screen flex flex-col bg-black">
      <h1 className="text-6xl p-20">Technologies utilisées</h1>
      <ul className="grid grid-cols-2 w-1/2 self-center gap-10">
        <li className="flex items-center justify-center w-fit"><Image src={Star} className="w-24 h-24 transition" alt="Star icon"/><DiPhp className="w-24 h-24"/></li>
        <li className="flex items-center justify-center w-fit"><Image src={Star} className="w-24 h-24 transition" alt="Star icon"/><DiJavascript1 className="w-24 h-24"/></li>
        <li className="flex items-center justify-center col-span-2 "><Image src={Star} className="w-24 h-24 transition" alt="Star icon"/><RiNextjsFill className="w-24 h-24"/></li>
        <li className="flex items-center justify-center w-fit"><Image src={Star} className="w-24 h-24 transition" alt="Star icon"/><RiTailwindCssFill className="w-24 h-24"/></li>
        <li className="flex items-center justify-center w-fit"><Image src={Star} className="w-24 h-24 transition" alt="Star icon"/><FaReact className="w-24 h-24"/></li>
      </ul>
    </div>
  );
}
