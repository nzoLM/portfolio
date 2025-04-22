import { useEffect, useState } from "react";
import Star from "../../public/long1.svg";
import Image from "next/image";
import WhiteStar from "../../public/white-star.svg";
import { motion } from "motion/react";

export function About(){
    useEffect(()=>{
        const cvLink = document.getElementById("cv-link");
        const cvBtn = document.getElementById("cv-btn");
        const cvBg = document.getElementById("cv-bg");
        cvBtn.addEventListener("mouseover", ()=>{
            cvBg.className="-z-10  w-full h-full top-0 left-0 absolute bg-[#A79EA1] scale-y-100 transition";
        })
        cvBtn.addEventListener("mouseout", ()=>{
            cvBg.className="-z-10  w-full h-full top-0 left-0 absolute bg-[#A79EA1] scale-y-0 transition";
        })
    })
    
    return(
        <div id="about" className="relative flex flex-col min-h-screen bg-black h-full overflow-hidden">
            <Image alt="Star-circle icon" src={Star} className="absolute w-full h-full p-5"/>
            <div className="z-0 flex flex-col items-center align-center lg:w-1/2 h-screen self-center">
                <motion.h1
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                animated={{opacity: 1, y:0}}
                transition={{
                    type: "spring",
                    damping: 10,
                    duration: 2,
                    }}
                viewport={{ once: true, amount: 0.5 }}
                 className="text-6xl text-center pt-16">À PROPOS</motion.h1>
                <div className="flex flex-col justify-center items-center text-center my-auto gap-5 sm:gap-10 sm:p-10">
                    <motion.p
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    animated={{opacity: 1, x:0}}
                    transition={{
                        type: "spring",
                        damping: 10,
                        duration: 1,
                        }}
                    viewport={{ once: true, amount: 0.5 }}
                     className="text-xl lg:text-2xl self-center leading-10">
                    Bonjour, je suis Enzo LE MOAL, développeur web en formation à la Web@cadémie by Epitech.  
                    Passionné par la programmation après un bac en maths et NSI, j&apos;ai tenté une licence maths-info,
                    mais l&apos;approche ne me convenait pas. 
                    Après deux ans d&apos;échecs, j&apos;ai décidé d&apos;apprendre le développement web par moi-même, et c&apos;est pour cette raison que je me retrouve actuellement ici dans cette formation.
                    </motion.p>
                    <motion.div
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    animated={{opacity: 1, x:0}}
                    transition={{x:{
                        type: "spring",
                        damping: 10,
                        duration: 1,
                        }}}
                    viewport={{ once: true, amount: 0.5 }}
                     id="cv-btn" className="relative w-fit h-fit border-4 border-[#A79EA1] border-double hover:text-black ">
                        <a id="cv-link" href="files/CV.pdf" download="EnzoLeMoal.pdf" className="z-100 flex gap-5 items-center text-lg lg:text-2xl cursor-pointer bg-transparent"><Image src={WhiteStar} alt="Star  logo" height={50}/>Télécharger mon CV<Image src={WhiteStar} alt="Star logo" height={50}/></a>
                        <div id="cv-bg" className="-z-10 w-full h-full top-0 left-0 absolute bg-[#A79EA1] scale-y-0 transition"></div>
                    </motion.div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}