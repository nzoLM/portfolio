"use client";

import { Navbar } from "@/app/navbar";
import { Hero } from "@/app/hero";
import { Project } from "@/app/project";
import { About } from "@/app/about";
import { Technologies } from "@/app/technologies";
import { Contact } from "@/app/contact";
import { Footer } from "@/app/footer";

export default function Home() {

  return (
    <div className="fontWacks bg-primary overflow-hidden">
      <Navbar />
      <div id="top" className="min-h-screen flex flex-col text-foreground">
        <Hero />
      </div>
      <div className="bg-linear-to-b from-primary to-background h-40"></div>
      <About />
      <div className="bg-linear-to-b from-background to-primary h-40"></div>
      <Project />
      <div className="bg-linear-to-b from-primary to-background h-40"></div>
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
