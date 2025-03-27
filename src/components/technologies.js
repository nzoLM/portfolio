import { DiPhp, DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill  } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import Star from "../../public/white-star.svg";

export function Technologies() {
  // const li = 

  return (
    <div id="tech-section" className="relative min-h-screen max-h-screen flex flex-col bg-black">
      <h1 className="text-6xl p-20">Technologies utilisées</h1>
      <ul className="grid grid-cols-2 w-1/2 self-center gap-10">
        <li className="flex items-center justify-center"><Image src={Star} className="w-24 h-24"/><DiPhp className="w-24 h-24"/></li>
        <li className="flex items-center justify-center"><Image src={Star} className="w-24 h-24"/><DiJavascript1 className="w-24 h-24"/></li>
        <li className="flex items-center justify-center col-span-2"><Image src={Star} className="w-24 h-24"/><RiNextjsFill className="w-24 h-24"/></li>
        <li className="flex items-center justify-center"><Image src={Star} className="w-24 h-24"/><RiTailwindCssFill className="w-24 h-24"/></li>
        <li className="flex items-center justify-center"><Image src={Star} className="w-24 h-24"/><FaReact className="w-24 h-24"/></li>
      </ul>
    </div>
  );
}
