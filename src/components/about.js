import { useEffect, useState } from "react";
import Star from "../../public/long1.svg";
import Image from "next/image";
import WhiteStar from "../../public/white-star.svg";

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
        <div id="about" className="relative flex flex-col min-h-screen bg-black h-full">
            <Image alt="Star-circle icon" src={Star} className="absolute w-full h-full p-5"/>
            <div className="z-0 flex flex-col items-center align-center lg:w-1/2 h-screen self-center">
                <h1 className="text-6xl text-center pt-16">À PROPOS</h1>
                <div className="flex flex-col justify-center items-center text-center my-auto gap-5 sm:gap-10 sm:p-10">
                    <p className="text-xl lg:text-2xl self-center leading-10">
                    Bonjour, je suis Enzo LE MOAL, développeur web en formation à la Web@cadémie by Epitech.
                    J&apos;éprouve un grand intérêt pour l&apos;Art, notamment la musique, la mode et j&apos;ai toujours aimé dessiner.
                    Je me suis découvert une passion pour l&apos;informatique, la programmation plus précisément au lycée, 
                    c&apos;est comme ça que tout naturellement, je me suis tourné vers le développement web qui était un très bon compromis entre l&apos;art et la programmation.
                    </p>
                    <div id="cv-btn" className="relative w-fit h-fit border-4 border-[#A79EA1] border-double hover:text-black transition">
                        <a id="cv-link" href="files/CV.pdf" download="EnzoLeMoal.pdf" className="z-100 flex gap-5 items-center text-lg lg:text-2xl cursor-pointer bg-transparent"><Image src={WhiteStar} alt="Star  logo" height={50}/>Télécharger mon CV<Image src={WhiteStar} alt="Star logo" height={50}/></a>
                        <div id="cv-bg" className="-z-10 w-full h-full top-0 left-0 absolute bg-[#A79EA1] scale-y-0 transition"></div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}