"use client";
import React from "react";

const Marque = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white py-6">
      {/* Top Line */}

      <div className="flex w-max animate-marquee whitespace-nowrap">
        {/* Repeat text multiple times for seamless infinite loop */}
        {[...Array(20)].map((_, index) => (
          <span
            key={index}
            className="text-black text-4xl md:text-7xl font-semibold mx-12"
          >
            WHAT WE DO
          </span>
        ))}
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 90s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marque;
