"use client";

import { useRef, useEffect } from "react";
import Working from "@/components/Working";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays correctly and loops
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });

      // Handle when video ends to restart it
      const handleEnded = () => {
        videoElement.currentTime = 0;
        videoElement.play().catch((error) => {
          console.log("Video replay error:", error);
        });
      };

      videoElement.addEventListener("ended", handleEnded);

      return () => {
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  return (
    <>
      <Working />
      <div className="w-full bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-8xl mx-auto">
          {/* Large Centered Owner Image */}
          <div className="flex justify-center mb-12 md:mb-10">
            <div className="relative w-full max-w-2xl h-100 md:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/owner.png"
                alt="Alex - Founder of Safe Piano Movers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl text-center font-bold text-gray-800 mb-6">
            ALEX
          </h2>
          {/* Video and Story Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-20">
            {/* Video Section on Left */}

            {/* Text Content on Right */}
            <div className="w-full lg:w-1/2 ms-5 md:ms-20">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3">
                OUR STORY
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                After years of working with various moving companies and gaining
                extensive hands-on experience, Alex founded Safe Piano Movers
                alongside family and trusted team members. With a strong
                foundation built on expertise and dedication, the company has
                successfully moved hundreds of pianos across California.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-700 italic">
                  "Our commitment to excellence and customer satisfaction drives
                  everything we do."
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className=" p-6  ">
                <div className="w-full mx-auto">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto x"
                  >
                    <source src="/truck.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* ALL MEN ARE SAME Section */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              ALL MEN ARE SAME ! ?
            </h2>

            <div className="bg-red-50 p-6 md:p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">
                ABSOLUTELY NOT!
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                What makes us different from other movers is our dedication to
                safety, punctuality, and professionalism. We use advanced
                hydraulic dollies with lifting capacity of up to 4,000 pounds,
                ensuring we can handle even the heaviest Safes, Pianos, Vending
                Machines with ease. Unlike others, we are always on time, offer
                24/7 emergency services, and maintain clear communication
                throughout the process. Our team works together
                seamlessly—sometimes with four movers if required—and we come
                fully equipped with our own truck, and industry-grade tools. To
                ensure maximum safety, we use multiple specialized ramps,
                including two 14-ft ramps, an 8-ft ramp, a 7-ft ramp, and
                additional ramps for single steps, making stair moves secure and
                efficient. This level of preparation and care sets us apart,
                guaranteeing that every order is packed, secured, and
                transported with the highest standard of safety and precision.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Safety First
              </h4>
              <p className="text-gray-700">
                Advanced equipment and techniques to ensure your valuables are
                protected
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Always On Time
              </h4>
              <p className="text-gray-700">
                Punctuality is our promise - we value your time as much as you
                do
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                24/7 Service
              </h4>
              <p className="text-gray-700">
                Emergency services available round the clock for your
                convenience
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
