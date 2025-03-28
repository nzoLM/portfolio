import Image from 'next/image';
import CrossStar from '../../public/cross-star-white.svg';
import {motion} from "motion/react";

export function Navbar(){
    return (
        <nav className="w-full">
            <div className='flex relative items-center p-5 bg-linear-to-b from-[#A79EA1]/20 to-transparent gap-5 w-full text-white'>
                <div className="w-96">
                    <h1 className='text-3xl lg:text-5xl text-center'>ENZO LE MOAL</h1>
                </div>
                <div className='m-auto'>
                    <a href="#top">
                        <motion.div whileHover={{scale:2}}>
                            <Image alt="Star logo" className='self-center w-20 h-20' src={CrossStar}/>
                        </motion.div>
                    </a>
                </div>
                <div className='text-xl w-96'>
                    <ul className="flex gap-3 justify-end">
                        <li className='hover:text-black transition'><a href="#about">About</a></li>
                        <li className='hover:text-black transition'><a href="#contact">Contacts</a></li>
                        <li className='hover:text-black transition'><a href="#project">Projets</a></li>
                    </ul>
                </div>
            </div>
            
        </nav>
    );
}