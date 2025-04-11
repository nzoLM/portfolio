import Image from 'next/image';
import CrossStar from '../../public/cross-star-white.svg';
import Hamburger from '../../public/Hamburger.svg';
import HamburgerWhite from '../../public/HamburgerWhite.svg';
import {motion} from "motion/react";

export function Navbar(){
    return (
        <nav className="w-full">
            <div className='flex relative items-center p-10 bg-linear-to-b from-[#A79EA1]/20 to-transparent gap-5 w-full text-white justify-between'>
                <div className="lg:w-96">
                    <h1 className='text-3xl lg:text-5xl text-center sm:w-full w-20'>ENZO LE MOAL</h1>
                </div>
                <div className='absolute left-1/2 -translate-x-1/2  m-auto'>
                    <a href="#top">
                        <motion.div whileHover={{scale:2}}>
                            <Image alt="Star logo" className='self-center w-20 h-20' src={CrossStar}/>
                        </motion.div>
                    </a>
                </div>
                <div className='text-xl'>
                    <div className='flex md:hidden'>
                    <motion.div whileHover={{scale:1.5  }}>
                        <Image alt='Hamburger icon' className='self-center w-20 h-20' src={HamburgerWhite}/>
                    </motion.div>
                    </div>
                    <ul className="hidden md:flex gap-3 justify-between sm:justify-around">
                        <li className='hover:text-black transition'><a href="#about">About</a></li>
                        <li className='hover:text-black transition'><a href="#contact">Contacts</a></li>
                        <li className='hover:text-black transition'><a href="#project">Projets</a></li>
                    </ul>
                </div>
            </div>
            
        </nav>
    );
}