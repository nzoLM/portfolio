"use client";
import { useEffect, useState } from "react";
import Star from "../../public/long1.svg";
import Image from "next/image";
import WhiteStar from "../../public/white-star.svg";
import { motion } from "motion/react";

export function About() {
    useEffect(() => {
        const cvLink = document.getElementById("cv-link");
        const cvBtn = document.getElementById("cv-btn");
        const cvBg = document.getElementById("cv-bg");
        cvBtn.addEventListener("mouseover", () => {
            cvBg.className = "-z-10  w-full h-full top-0 left-0 absolute bg-primary scale-y-100 transition";
        })
        cvBtn.addEventListener("mouseout", () => {
            cvBg.className = "-z-10  w-full h-full top-0 left-0 absolute bg-primary scale-y-0 transition";
        })
    })

    return (
        <div id="about" className="relative flex flex-col min-h-screen text-foreground-secondary bg-black h-full">
            <Image alt="Star-circle icon" src={Star} className="absolute w-full h-full p-5" />
            <div className="z-0 flex flex-col items-center align-center h-screen self-center ">
                <div className="flex flex-col justify-center items-center text-left h-screen gap-5 sm:gap-10 sm:p-10">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animated={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            damping: 10,
                            duration: 2,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-6xl w-full text-left p-8">&Agrave; propos</motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        animated={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            damping: 10,
                            duration: 1,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-2xl lg:text-3xl self-center leading-10">
                        Je m&apos;appelle Enzo LE MOAL, d&eacute;veloppeur web en formation &agrave; la Web@cad&eacute;mie by Epitech.<br />
                        Apr&egrave;s un baccalaur&eacute;at ( sp&eacute;cialit&eacute;s math&eacute;matiques et NSI ), j&apos;ai tent&eacute; une licence Math&eacute;matiques et Informatique,
                        mais l&apos;approche ne me convenait pas.<br />
                        Durant cette licence je me suis form&eacute; en autodidacte au d&eacute;veloppement web, apr&egrave;s avoir &eacute;chou&eacute;
                         2 fois ma premi&egrave;re ann&eacute;e, j&apos;ai quitt&eacute; la fac pour rejoindre ma formation actuelle.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        animated={{ opacity: 1, x: 0 }}
                        transition={{
                            x: {
                                type: "spring",
                                damping: 10,
                                duration: 1,
                            }
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        id="cv-btn" className="relative w-fit h-fit border-4 border-primary border-double hover:text-black ">
                        <a id="cv-link" href="files/CV.pdf" download="EnzoLeMoal.pdf" className="z-100 flex gap-5 items-center text-lg lg:text-2xl cursor-pointer bg-transparent"><Image src={WhiteStar} alt="Star  logo" height={50} />T&eacute;l&eacute;charger mon CV<Image src={WhiteStar} alt="Star logo" height={50} /></a>
                        <div id="cv-bg" className="-z-10 w-full h-full top-0 left-0 absolute bg-primary scale-y-0 transition"></div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animated={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            damping: 10,
                            duration: 2,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-6xl w-full text-right p-8">Mes passions</motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        animated={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            damping: 10,
                            duration: 1,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="w-full text-2xl lg:text-3xl text-right leading-10 ">
                        En dehors de tout &ccedil;a j&apos;&eacute;coute beaucoup de musique, c&apos;est ma plus grande passion et j&apos;ai m&ecirc;me commenc&eacute; &agrave; jouer de la guitare &eacute;lectrique.<br />
                        Je suis un grand fan de rap, de rock, de metal, et tous les sous-genres que je ne vais pas citer. Mais je peux &eacute;couter tout et n&apos;importe quoi, je ne me ferme pas &agrave; d&apos;autres horizons.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}