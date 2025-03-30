import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ContactUs } from "./email";

export function Contact(){


    return(
        <div className="bg-[url(../../public/Star-Field.png)] bg-cover text-black analogist">
            <div className="bg-linear-to-b to-transparent from-black h-20"></div>

            <div id="contact" className='flex flex-col lg:flex-row justify-center items-center min-h-screen '>
                <div className="w-full flex justify-center text-center">
                    <ContactUs/>
                </div>
                <div className="text-2xl lg:w-1/2 lg:m-auto self-center text-left p-10">
                    <ul className="flex lg:flex-col justify-around flex-wrap m-auto gap-5 w-fit">
                        <li className="w-fit hover:scale-x-150 transition duration-250"><a href="https://github.com/nzoLM" className="flex gap-5"><FaGithub/>Github</a></li>
                        <li className="w-fit hover:scale-x-150 transition duration-250"><a className="flex gap-5" href="https://www.linkedin.com/in/enzo-le-moal"><FaLinkedinIn/>LinkedIn</a></li>
                        <li className="flex gap-2 "><a className="text-2xl" href="">lemoalenzo05@gmail.com</a></li>
                        <li className="w-fit">Paris, France</li>
                    </ul>   
                </div>  
            </div>
                  <div className="bg-linear-to-b from-transparent to-black h-40"></div>
            
        </div>
    )
}