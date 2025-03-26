import { DiPhp, DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import Image from "next/image";
import Star from "../../public/white-star.svg";
import { useEffect, useState } from "react";

export function Technologies() {

  return (
    <div className="relative min-h-screen max-h-screen flex flex-col gap-20 bg-black">
      <h1 className="text-6xl p-20">Technologies</h1>
        <DiPhp className="absolute z-10 top-1/4 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2"/>
        <DiJavascript1 className="absolute z-10 top-1/2 left-1/3 w-24 h-24 -translate-y-1/2"/>
        <Image src={Star} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"/>
        <Image src={Star} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 h-128 opacity-30"/>
        <RiTailwindCssFill className="absolute z-10 top-1/2 right-1/3 -translate-y-1/2 w-24 h-24"/>
        <FaReact className="absolute z-10 w-24 h-24 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
    </div>
  );
}
