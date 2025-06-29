"use client";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ContactUs } from "./email";
import { motion } from "motion/react";

export function Contact(){


    return(
        <div className="bg-[url(../../public/Star-Field.png)] bg-cover text-black analogist overflow-x-hidden">
            <div className="bg-linear-to-b to-transparent from-black h-20"></div>

            <div id="contact" className='flex flex-col lg:flex-row justify-center items-center min-h-screen '>
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{opacity: 1, x: 0}}
                transition={{x:{type: "spring", damping: 10, duration: 1}}}
                viewport={{ once: true, amount: 0.5 }}
                 className="w-full flex justify-center text-center">
                    <ContactUs/>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{opacity: 1, x: 0}}
                transition={{x:{type: "spring", damping: 10, duration: 1}}}
                viewport={{ once: true, amount: 0.5 }}
                 className="text-2xl lg:w-1/2 lg:m-auto self-center p-10">
                    <ul className="flex flex-col justify-around lg:items-left items-center flex-wrap m-auto gap-5 w-fit">
                        <motion.li transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                        duration: 0.3,
                        }} whileHover={{scaleX : 1.2}} className="w-fit"><a href="https://github.com/nzoLM" className="flex gap-5"><FaGithub/>Github</a></motion.li>
                        <motion.li transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                        duration: 0.3,
                        }} whileHover={{scaleX : 1.2}} className="w-fit"><a className="flex gap-5" href="https://www.linkedin.com/in/enzo-le-moal"><FaLinkedinIn/>LinkedIn</a></motion.li>
                        <motion.li transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                        duration: 0.3,
                        }} whileHover={{scaleX : 1.2}} className="flex gap-2 "><a className="text-2xl" href="">lemoalenzo05@gmail.com</a></motion.li>
                        <motion.li transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                        duration: 0.3,
                        }} whileHover={{scaleX : 1.2}} className="w-fit">Paris, France</motion.li>
                    </ul>   
                </motion.div>  
            </div>
                  <div className="bg-linear-to-b from-transparent to-black h-40"></div>
            
        </div>
    )
}