import {Tektur} from "next/font/google";
import {Navbar} from "@/components/navbar";
import {Hero} from "@/components/hero";
import {Project} from "@/components/project";
import {About} from "@/components/about";
import { Technologies } from "@/components/technologies";
import { Contact } from "@/components/contact";
export default function Home() {
  return (
    <div className="fontWacks bg-[#A79EA1]">
      <div id="top" className="min-h-screen max-h-screen flex flex-col ">
        <Navbar/>
        <Hero/>
      </div>
      <div className="bg-linear-to-b from-[#A79EA1] to-black h-40"></div>
      <About/>
      <div className="bg-linear-to-b from-black to-[#A79EA1] h-40"></div>
      <Project/>
      <div className="bg-linear-to-b from-[#A79EA1] to-black h-40"></div>
      <Technologies/>
      <Contact/>
    </div>
  );
}
