"use client";
import Image from 'next/image';
import CrossStar from '../../public/cross-star-white.svg';
import HamburgerWhite from '../../public/HamburgerWhite.svg';
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!hasScrolledOnce && currentScrollY > 10) {
        setHasScrolledOnce(true);
      }

      if ( currentScrollY < 50) {
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
  }, [lastScrollY, hasScrolledOnce]);
  
  return (
    <motion.nav
    animate={hasScrolledOnce ? { y: showNavbar ? -15 : -150 } : { y: 0 }}
    transition={{y:{ type: "spring", stiffness: 100, damping: 12 }}}
    className="fixed top-0 left-0 w-full h-46 lg:h-fit z-50"
    >
      <div className='flex relative items-center p-10 bg-gradient-to-b from-black to-transparent gap-5 w-full text-white justify-between'>
        <div className="lg:w-96">
          <motion.h1 initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                animated={{opacity: 1, x:0}}
                transition={{duration: 2, bounce: 0.6, type: "spring"}}
                viewport={{ once: true, amount: 0.5 }} 
                className='text-3xl lg:text-5xl text-center sm:w-full w-20'>ENZO LE MOAL</motion.h1>
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 m-auto'>
          <a href="#top" onClick={() => setIsOpen(false)}>
          <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.6 }} // hover plus subtil que x2, mais modifiable
          transition={{
            y: {
              duration: 2,
              type: "spring",
              bounce: 0.6,
              stiffness: 80,
            },
            scale: {
              type: "spring",
              stiffness: 300,
              damping: 10,
              duration: 0.3,
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image alt="Star logo" className="self-center w-20 h-20" src={CrossStar} />
        </motion.div>

          </a>
        </div>
        <div className='text-xl'>
          <div className='flex md:hidden cursor-pointer' onClick={handleToggle}>
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.6 }}
            transition={{
              x: {
                duration: 2,
                type: "spring",
                bounce: 0.6,
                stiffness: 80,
              },
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 10,
                duration: 0.3,
              },
            }}
            viewport={{ once: true, amount: 0.5 }} 
             className='w-20 h-20' >
              <Image alt='Hamburger icon' className='self-center w-full h-full' src={HamburgerWhite}/>
            </motion.div>
          </div>
          <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          animated={{opacity: 1, x:0}}
          transition={{duration: 2, bounce: 0.6, type: "spring"}}
          viewport={{ once: true, amount: 0.5 }} 
           className="hidden md:flex md:gap-5 lg:gap-10 lg:text-2xl text-center">
            <ul className="flex gap-3 justify-between sm:justify-around">
              <li className='hover:text-black transition'><a href="#about">À propos</a></li>
              <li className='hover:text-black transition'><a href="#contact">Contacts</a></li>
              <li className='hover:text-black transition'><a href="#project">Projets</a></li>
            </ul>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{duration: 0.5, bounce: 0.6, type: "spring"}}
              className='absolute top-full right-0 w-fit max-h-screen pl-10 p-10 pr-0 z-10'
            >
              <ul className="flex flex-col gap-3 text-right text-2xl text-white w-80">
                <li onClick={handleToggle} className='hover:text-black transition bg-gradient-to-l from-[#7c7672] to-transparent'><a className='block w-full p-5' href="#about">About</a></li>
                <li onClick={handleToggle} className='hover:text-black transition bg-gradient-to-l from-[#7c7672] to-transparent'><a className='block w-full p-5' href="#contact">Contacts</a></li>
                <li onClick={handleToggle} className='hover:text-black transition bg-gradient-to-l from-[#7c7672] to-transparent'><a className='block w-full p-5' href="#project">Projets</a></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
