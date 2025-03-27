import { useState } from "react";
import Star from "../../public/long1.svg";
import Image from "next/image";
import WhiteStar from "../../public/white-star.svg";

export function About(){

    return(
        <div id="about" className="relative flex flex-col min-h-screen bg-black h-full">
            <Image src={Star} className="absolute w-full h-full p-5"/>
            <div className="z-0 flex flex-col items-center align-center w-1/2 h-screen self-center">
                <h1 className="text-6xl text-center pt-16">À PROPOS</h1>
                <div className="flex flex-col justify-center items-center text-center my-auto gap-10">
                    <p className="text-2xl self-center leading-10">
                    Bonjour, je suis Enzo LE MOAL, développeur web en formation à la Web@cadémie by Epitech.
                    J'éprouve un grand intérêt pour l'Art, notamment la musique, la mode et j'ai toujours aimé dessiner.
                    Je me suis découvert une passion pour l'informatique, la programmation plus précisément au lycée, 
                    c'est comme ça que tout naturellement, je me suis tourné vers le développement web qui était un très bon compromis entre l'art et la programmation.
                    </p>

                    <a href="files/CV.pdf" download="EnzoLeMoal.pdf" className="flex gap-5 items-center text-2xl cursor-pointer bg-transparent p-1 transition hover:scale-125"><Image src={WhiteStar} alt="star logo" height={50}/>Télécharger mon CV<Image src={WhiteStar} alt="star logo" height={50}/></a>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}