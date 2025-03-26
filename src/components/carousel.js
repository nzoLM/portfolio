import React, { useState } from "react";
import Image from "next/image";
import ArrowBlack from '../../public/arrow-custom-black.svg';

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
          <div
            key={index}
            className={`w-full m-auto flex-shrink-0 transition-all duration-200 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 p-2 cursor-pointer"
        onClick={prevSlide}
      >
      <Image src={ArrowBlack} className="w-20 h-20 hover:scale-x-125 transition-all duration-200"/>
      </button>
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 p-2 cursor-pointer hover:text-white "
        onClick={nextSlide}
      >
        <Image src={ArrowBlack} className="w-20 h-20 rotate-180 hover:scale-x-125 transition-all duration-200"/>
      </button>
    </div>
  );
}
