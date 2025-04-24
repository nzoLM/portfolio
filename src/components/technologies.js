import { DiPhp, DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import Star from "../../public/white-star.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Technologies() {
  const [tooltip, setTooltip] = useState(null);

  const technologies = [
    { name: "PHP", icon: <DiPhp className="w-24 h-24" /> },
    { name: "JavaScript", icon: <DiJavascript1 className="w-24 h-24" /> },
    { name: "Next.js", icon: <RiNextjsFill className="w-24 h-24" />, fullWidth: true },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-24 h-24" /> },
    { name: "React", icon: <FaReact className="w-24 h-24" /> },
  ];

  return (
    <div id="tech-section" className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <motion.h1 
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x: 0}}
      animated={{opacity: 1, x:0}}
      transition={{x:{
          type: "spring",
          damping: 10,
          duration: 1,
          }}}
      viewport={{ once: true, amount: 0.5 }}
      className="text-5xl lg:text-6xl py-20 lg:p-10 text-center lg:text-left">Technologies utilisées</motion.h1>
      <ul className="grid grid-cols-2 my-10 lg:w-1/2 grow self-center gap-10">
        {technologies.map((tech, index) => (
          <li key={index} className={`flex items-center justify-center relative ${tech.fullWidth ? 'col-span-2' : 'w-fit'}`}>
            <div className="relative flex items-center justify-center">
              <motion.div
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              animated={{opacity: 1, x:0}}
              viewport={{ once: true, amount: 0.5 }}
                whileHover={{ rotate: 180, scale: 2 }}
                whileTap={{ rotate: 180, scale: 0.95 }}
                transition={{
                  x: {
                    duration: 2,
                    type: "spring",
                    bounce: 0.6,
                  },
                  scale: { duration: 0.9, ease: [0, 0.71, 0.2, 1.4], bounce: 0.25, type: "spring" },
                  rotate: { duration: 0.9, ease: [0, 0.71, 0.2, 1.4], bounce: 0.25, type: "spring" },
                }}
                onMouseEnter={() => setTooltip(tech.name)}
                onMouseLeave={() => setTooltip(null)}
                className="relative z-10"
              >
                <Image src={Star} className="w-24 h-24 transition" alt="Star icon" />
              </motion.div>
              <AnimatePresence>
                {tooltip === tech.name && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute z-20 bg-white analogist text-black text-lg px-2 py-1 rounded shadow-lg pointer-events-none"
                    style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(0deg)" }}
                  >
                    {tech.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            {tech.icon}
          </li>
        ))}
      </ul>
    </div>
  );
}
