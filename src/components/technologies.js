import { DiPhp, DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill  } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import Star from "../../public/white-star.svg";
import { useEffect } from "react";
import {motion} from "motion/react";

export function Technologies() {
  

  return (
    <div id="tech-section" className="relative min-h-screen max-h-screen flex flex-col bg-black">
      <h1 className="text-5xl lg:text-6xl lg:p-20 text-center lg:text-left">Technologies utilisées</h1>
      <ul className="grid grid-cols-2 grow mb-10 lg:w-1/2 self-center gap-10">
        <li className="flex items-center justify-center w-fit">
          <motion.div whileHover={{ rotate: 180, scale:2 }} whileTap={{rotate : 180, scale:0.95}}
          transition={{duration: 0.9,
            ease: [0, 0.71, 0.2, 1.4], bounce: 0.25, type:"spring"}} className="relative">
              <Image src={Star} className="w-24 h-24 transition" alt="Star icon"/></motion.div><DiPhp className="w-24 h-24"/></li>
        <li className="flex items-center justify-center w-fit">
        <motion.div whileHover={{ rotate: 180, scale:2 }} whileTap={{rotate : 180, scale:0.95}}
          transition={{duration: 0.9,
            ease: [0, 0.71, 0.2, 1.4], bounce: 0.25, type:"spring"}}><Image src={Star} className="w-24 h-24 transition" alt="Star icon"/></motion.div><DiJavascript1 className="w-24 h-24"/></li>
        <li className="flex items-center justify-center col-span-2 "><motion.div whileHover={{ rotate: 180, scale:2 }} whileTap={{rotate : 180, scale:0.95}}
          transition={{duration: 0.9,
            ease: [0, 0.71, 0.2, 1.4], bounce: 0.25, type:"spring"}}><Image src={Star} className="w-24 h-24 transition" alt="Star icon"/></motion.div><RiNextjsFill className="w-24 h-24"/></li>
        <li className="flex items-center justify-center w-fit"><motion.div whileHover={{ rotate: 180, scale:2 }} whileTap={{rotate : 180, scale:0.95}}
          transition={{duration: 0.9,
            ease: [0, 0.71, 0.2, 1.4], bounce: 0.25, type:"spring"}}><Image src={Star} className="w-24 h-24 transition" alt="Star icon"/></motion.div><RiTailwindCssFill className="w-24 h-24"/></li>
        <li className="flex items-center justify-center w-fit"><motion.div whileHover={{ rotate: 180, scale:2 }} whileTap={{rotate : 180, scale:0.95}}
          transition={{duration: 0.9,
            ease: [0, 0.71, 0.2, 1.4], bounce: 0.25, type:"spring"}}><Image src={Star} className="w-24 h-24 transition" alt="Star icon"/></motion.div><FaReact className="w-24 h-24"/></li>
      </ul>
    </div>
  );
}
