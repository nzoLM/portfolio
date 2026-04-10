"use client";
import Star from "../../public/wide.svg";
import Image from 'next/image';
import {motion} from "motion/react";
import profilPhoto from "@public/pictures/photo-de-profil.jpg";

export function Hero(){
    return(
        <div className="flex flex-col-reverse lg:flex-row grow items-center justify-center overflow-hidden pb-6">
            <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            animated={{opacity: 1, x:0}}
            transition={{duration: 1.5, bounce: 0.6, type: "spring"}}
            viewport={{ once: true, amount: 0.5 }}
             className="w-1/2 lg:p-10 flex items-center justify-center ">
                <motion.div className="w-full"
                >
                <Image alt="Photo de profil" src={profilPhoto} className=" lg:w-4/5 m-auto w-full items-center rounded-full shadow-lg shadow-black border-2 border-white"/>
                </motion.div>
            </motion.div>
            <motion.div className="flex flex-col text-center lg:text-right lg:w-1/2 h-full lg:p-5 gap-10 " 
                initial={{opacity: 0, x: 50}}
                whileInView={{opacity: 1, x: 0}}
                animated={{opacity: 1, x:0}}
                transition={{duration: 1.5, bounce: 0.6, type: "spring"}}
                viewport={{ once: true, amount: 0.5 }}>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold">DÉVELOPPEUR WEB - FULL STACK</h1>
                {/* <p className="text-xl analogist">En recherche d&apos;alternance,<br /> Durée 14 mois,<br /> Rythme 3 semaines entreprise, 1 semaine formation</p> */}
                {/* <p className="text-xl text-right">Born to be an artist, forced to be a developer.</p>
                <p className="text-2xl text-right font-bold">╮&#40; ˘ ､ ˘ &#41;╭</p> */}
                <p className="text-base sm:text-lg lg:text-2xl font-bold" >Conception et développement full stack | Applications & Sites Web</p>
                <p className="text-base sm:text-lg lg:text-2xl font-bold" >Créations de solutions web</p>
                <p className="text-sm sm:text-base lg:text-xl font-bold" >I would have liked to make art, but unfortunately <span className="google-sans-code italic ">I beep-boop</span></p>
            </motion.div>
        </div>
    )
}