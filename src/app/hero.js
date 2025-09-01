"use client";
import Star from "../../public/wide.svg";
import Image from 'next/image';
import {motion} from "motion/react";

export function Hero(){
    return(
        <div className="flex flex-col-reverse lg:flex-row grow text-black items-center justify-center bg-[#A79EA1] overflow-hidden">
            <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            animated={{opacity: 1, x:0}}
            transition={{duration: 1.5, bounce: 0.6, type: "spring"}}
            viewport={{ once: true, amount: 0.5 }}
             className="w-1/2 mb-10 lg:p-10 flex items-center justify-center ">
                <motion.div className="w-full"
                    animate={{
                        // Keyframes : définit les étapes de l'animation pour 'y'
                        y: ["0%", "10%", "0%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}

                >
                <Image alt="Star icon" src={Star} className="lg:w-3/5 w-full items-center"/>
                </motion.div>
            </motion.div>
            <motion.div className="flex flex-col text-center lg:text-right lg:w-1/2 h-full lg:p-5 gap-10" 
                initial={{opacity: 0, x: 50}}
                whileInView={{opacity: 1, x: 0}}
                animated={{opacity: 1, x:0}}
                transition={{duration: 1.5, bounce: 0.6, type: "spring"}}
                viewport={{ once: true, amount: 0.5 }}>
                <h2 className="text-5xl lg:text-7xl">DÉVELOPPEUR WEB - FULL STACK</h2>
                {/* <p className="text-xl analogist">En recherche d&apos;alternance,<br /> Durée 14 mois,<br /> Rythme 3 semaines entreprise, 1 semaine formation</p> */}
                <p className="text-xl">Born to be an artist, forced to be a developer. ╮( ˘ ､ ˘ )╭</p>
            </motion.div>
        </div>
    )
}