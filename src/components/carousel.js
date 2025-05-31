import React, { useState } from "react";
import Image from "next/image";
import ArrowBlack from '../../public/arrow-custom-black.svg';
import { motion, AnimatePresence } from "framer-motion"; // <-- Utilise framer-motion natif

export function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Animation variants pour les slides
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <div className="relative w-full h-full max-w-3xl mx-auto overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full min-h-[350px] flex items-center justify-center">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full flex flex-col items-center"
          >
            <h3 className="text-xl my-5">{currentIndex + 1} / {slides.length}</h3>
            {slides[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.button
        initial={{ scaleX: 1 }}
        whileHover={{ scaleX: 1.2 }}
        transition={{ type: "spring", stiffness: 250, damping: 10, duration: 0.2 }}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 p-2 cursor-pointer z-10"
        onClick={prevSlide}
      >
        <Image alt="Star logo" src={ArrowBlack} className="w-10 h-10 md:w-16 md:h-16" />
      </motion.button>
      <motion.button
        initial={{ scaleX: 1 }}
        whileHover={{ scaleX: 1.2 }}
        transition={{ type: "spring", stiffness: 250, damping: 10, duration: 0.2 }}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 p-2 cursor-pointer z-10"
        onClick={nextSlide}
      >
        <Image alt="Star logo" src={ArrowBlack} className="w-10 h-10 md:w-16 md:h-16 rotate-180" />
      </motion.button>
    </div>
  );
}
