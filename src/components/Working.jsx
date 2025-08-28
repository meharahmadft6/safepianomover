"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Working = () => {
  // Generate array of image numbers
  const imageNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
  const reverseImageNumbers = [...imageNumbers].reverse();

  // Create multiple copies for seamless loop
  const firstRowImages = [...imageNumbers, ...imageNumbers, ...imageNumbers];
  const secondRowImages = [
    ...reverseImageNumbers,
    ...reverseImageNumbers,
    ...reverseImageNumbers,
  ];

  return (
    <section className="py-0 bg-white overflow-hidden">
      {/* First Row - Left to Right (1-9) */}
      <div className="relative mb-0 overflow-hidden w-full">
        <motion.div
          animate={{ x: [0, -100 / 3 + "%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-[300vw]"
        >
          {firstRowImages.map((num, index) => (
            <div
              key={`first-${index}`}
              className="relative flex-shrink-0 w-[25vw] md:w-[25vw]"
            >
              <div className="relative aspect-[3/4] md:aspect-[4/3] w-full">
                <Image
                  src={`/${num}.png`}
                  alt={`Moving service photo ${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 25vw"
                  priority={index < 4}
                />

                {/* Overlay with number */}
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg">
                    <span className="text-xl md:text-2xl font-bold text-gray-800">
                      {num}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left (9-1) */}
      <div className="relative overflow-hidden w-full mt-2 md:mt-0">
        <motion.div
          animate={{ x: [-100 / 3 + "%", 0] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-[300vw]"
        >
          {secondRowImages.map((num, index) => (
            <div
              key={`second-${index}`}
              className="relative flex-shrink-0 w-[25vw] md:w-[25vw]"
            >
              <div className="relative aspect-[3/4] md:aspect-[4/3] w-full">
                <Image
                  src={`/${num}.png`}
                  alt={`Moving service photo ${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 25vw"
                  priority={index < 4}
                />

                {/* Overlay with number */}
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg">
                    <span className="text-xl md:text-2xl font-bold text-gray-800">
                      {num}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Working;
