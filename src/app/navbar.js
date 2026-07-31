"use client";
import { RiMenu4Fill } from 'react-icons/ri';
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from 'react';
import { DragonBallIcon } from '../components/DragonBallIcon';
import { AccessibilityToggle } from '../components/AccessibilityToggle';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!hasScrolledOnce && currentScrollY > 10) {
        setHasScrolledOnce(true);
      }
      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setIsOpen(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, [lastScrollY, hasScrolledOnce]);

  return (
    <motion.nav
      animate={hasScrolledOnce ? { y: showNavbar ? -12 : -150 } : { y: 0 }}
      transition={{ y: { type: "spring", stiffness: 100, damping: 12 } }}
      className="fixed top-0 left-0 w-full lg:h-fit z-50"
    >
      <div className='flex relative items-center p-4 pt-10 sm:p-10 bg-linear-to-b from-black to-transparent gap-5 w-full text-foreground-secondary justify-between'>
        <div className="lg:w-96">
          <motion.h1 initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            animated={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, bounce: 0.6, type: "spring" }}
            viewport={{ once: true, amount: 0.5 }}
            className='text-xl dyslexia-mode:lg:text-3xl dyslexia-mode:sm:text-2xl sm:text-3xl lg:text-5xl text-center sm:w-full w-20'>ENZO LE MOAL</motion.h1>
        </div>
        <div className='absolute left-1/2 -translate-x-1/2 m-auto'>
          <div className='cursor-pointer' onClick={() => { setIsOpen(false); scrollToSection("top"); }}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.3 }}
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
              <DragonBallIcon className="w-20 h-20 text-white transition-colors duration-300 " />
            </motion.div>

          </div>
        </div>
        <div className='flex items-center gap-4 text-sm sm:text-lg md:text-xl'>
          <motion.div className='w-full text-sm md:text-base text-center'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.3 }}
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
            >
            <AccessibilityToggle />
          </motion.div>
          <div className='flex md:hidden cursor-pointer' onClick={handleToggle}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.3 }}
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
              className='w-18 h-18' >
              <RiMenu4Fill alt='Menu icon' className='self-center w-full h-full' />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            animated={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, bounce: 0.6, type: "spring" }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full hidden md:flex md:gap-3 lg:gap-10 lg:text-2xl text-sm md:text-base text-center">
            <ul className="flex gap-3 justify-around">
              <li onClick={() => scrollToSection("about")} className='cursor-pointer hover:text-white/50 transition text-nowrap'>À propos</li>
              <li onClick={() => scrollToSection("project")} className='cursor-pointer hover:text-white/50 transition text-nowrap'>Projets</li>
              <li onClick={() => scrollToSection("contact")} className='cursor-pointer hover:text-white/50 transition text-nowrap'>Contacts</li>
            </ul>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, bounce: 0.6, type: "spring" }}
              className='visible md:hidden absolute top-full right-0 w-fit max-h-screen p-4 pr-0 sm:pl-10 sm:p-10 sm:pr-0 z-10'
            >
              <ul className="flex flex-col gap-3 text-right text-base sm:text-lg lg:text-2xl text-white w-fit sm:w-80">
                <li onClick={() => { handleToggle(); scrollToSection("about"); }} className='cursor-pointer hover:text-black transition bg-linear-to-l from-[#7c7672] to-transparent'><span className='block w-full p-2 sm:p-5'>About</span></li>
                <li onClick={() => { handleToggle(); scrollToSection("project"); }} className='cursor-pointer hover:text-black transition bg-linear-to-l from-[#7c7672] to-transparent'><span className='block w-full p-2 sm:p-5'>Projets</span></li>
                <li onClick={() => { handleToggle(); scrollToSection("contact"); }} className='cursor-pointer hover:text-black transition bg-linear-to-l from-[#7c7672] to-transparent'><span className='block w-full p-2 sm:p-5'>Contacts</span></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
