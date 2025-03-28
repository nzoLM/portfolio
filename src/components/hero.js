import Star from "../../public/wide.svg";
import Image from 'next/image';
import {motion} from "motion/react";

export function Hero(){
    return(
        <div className="flex flex-col-reverse lg:flex-row grow text-black items-center justify-center bg-[#A79EA1]">
            <div className="w-1/2 p-10 flex items-center justify-center">
                <Image alt="Star icon" src={Star} className="lg:w-3/5 w-full items-center"/>
            </div>
            <div className="text-center lg:text-right lg:w-1/2 h-full p-5">
                <h1 className="text-5xl lg:text-7xl">DÉVELOPPEUR WEB - FULL STACK</h1>
                <h4 className="text-xl analogist">En recherche d&apos;alternance,<br /> Durée 14 mois,<br /> Rythme 3 semaines entreprise, 1 semaine formation</h4>
            </div>
        </div>
    )
}