import React, { useState } from "react";
import Image from "next/image";
import ArrowBlack from '../../public/arrow-custom-black.svg';
import {motion } from 'motion/react';

export function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-full max-w-3xl mx-auto overflow-hidden">
      <div className="relative flex h-full transition-all duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`relative w-full m-auto flex-shrink-0 transition-all duration-200 ${
              index === currentIndex ? "opacity-100 blur-none scale-x-100" : "opacity-0 blur-lg scale-x-150"
            }`}
          >
            <h3 className="text-xl my-5">{index + 1} / {slides.length}</h3>
            {slide}
          </motion.div>
        ))}
      </div>
      <motion.button
      initial={{scaleX:1}}
      whileHover={{scaleX:1.4}}
      transition={{scaleX:{
        type: "spring",
        stiffness: 250,
        damping: 10,
        duration: 0.3,
          }}}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 p-2 cursor-pointer"
        onClick={prevSlide}
      >
      <Image alt="Star logo" src={ArrowBlack} className="w-15 h-15 md:w-20 md:h-20 "/>
      </motion.button>
      <motion.button
      initial={{scaleX:1}}
      whileHover={{scaleX:1.4}}
      transition={{scaleX:{
        type: "spring",
        stiffness: 250,
        damping: 10,
        duration: 0.3,
          }}}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 p-2 cursor-pointer hover:text-white "
        onClick={nextSlide}
      >
        <Image alt="Star logo" src={ArrowBlack} className="w-15 h-15 md:w-20 md:h-20 rotate-180 "/>
      </motion.button>
    </div>
  );
}
