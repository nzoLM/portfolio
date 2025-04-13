import Image from 'next/image';
import CrossStar from '../../public/cross-star-white.svg';
import HamburgerWhite from '../../public/HamburgerWhite.svg';
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => setIsOpen(!isOpen);

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Tout en haut
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // Scroll vers le bas
        setShowNavbar(false);
        setIsOpen(false);
      } else {
        // Scroll vers le haut
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -150 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 left-0 w-full z-50"
    >
      <div className='flex relative items-center p-10 bg-gradient-to-b from-[#A79EA1] to-transparent gap-5 w-full text-white justify-between'>
        <div className="lg:w-96">
          <h1 className='text-3xl lg:text-5xl text-center sm:w-full w-20'>ENZO LE MOAL</h1>
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 m-auto'>
          <a href="#top">
            <motion.div whileHover={{ scale: 2 }}>
              <Image alt="Star logo" className='self-center w-20 h-20' src={CrossStar} />
            </motion.div>
          </a>
        </div>
        <div className='text-xl'>
          <div className='flex md:hidden'>
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.5 }} className='w-fit' onClick={handleToggle}>
              <Image alt='Hamburger icon' className='self-center w-20 h-20' src={HamburgerWhite} />
            </motion.div>
          </div>
          <div className="hidden md:flex md:gap-5 lg:gap-10 lg:text-2xl text-center">
            <ul className="flex gap-3 justify-between sm:justify-around">
              <li className='hover:text-black transition'><a href="#about">About</a></li>
              <li className='hover:text-black transition'><a href="#contact">Contacts</a></li>
              <li className='hover:text-black transition'><a href="#project">Projets</a></li>
            </ul>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className='absolute top-full right-0 w-fit max-h-screen pl-20 p-10 pr-0 z-10'
            >
              <ul className="flex flex-col gap-3 text-right text-2xl text-white">
                <li onClick={handleToggle} className='hover:text-black transition bg-gradient-to-l from-[#A79EA1] to-transparent p-5 '><a href="#about">About</a></li>
                <li onClick={handleToggle} className='hover:text-black transition bg-gradient-to-l from-[#A79EA1] to-transparent p-5'><a href="#contact">Contacts</a></li>
                <li onClick={handleToggle} className='hover:text-black transition bg-gradient-to-l from-[#A79EA1] to-transparent p-5'><a href="#project">Projets</a></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
