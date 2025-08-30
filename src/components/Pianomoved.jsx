"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const PianoMoved = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 15000; // 15 seconds
    const increment = 1300 / (duration / 20); // Calculate increment per interval

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= 1300) {
        setCount(1300);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div ref={componentRef} className="relative w-full h-96">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-90">
        <div className="w-full h-full bg-[url('/pianosmoved.png')] bg-cover bg-center"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-end justify-end  h-full text-center px-4">
        {/* Counter */}
        <div className="bg-white/10 backdrop-blur-md rounded p-8 md:p-10 mb-3 border border-white/20 shadow-2xl">
          <div className="text-6xl md:text-8xl font-bold text-white mb-4">
            {count.toLocaleString()}+
          </div>
          <p className="text-xl text-white/90 font-medium">
            Successful Piano Relocations
          </p>
        </div>

        {/* Website URL */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent"></div>
    </div>
  );
};

export default PianoMoved;
