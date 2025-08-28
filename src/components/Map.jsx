// components/Map.jsx
import Image from "next/image";
const Map = () => {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden rounded-[40px] md:rounded-[60px] lg:rounded-[80px] bg-white">
      {/* Background Map Image with Dots */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/map.png"
          alt="USA Map Background"
          fill
          className="object-cover"
          priority
        />

        {/* Blinking Green Dots */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
        <div
          className="absolute top-2/5 left-2/5 w-4 h-4 bg-green-500 rounded-full animate-ping"
          style={{ animationDelay: "0.7s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-4 h-4 bg-green-500 rounded-full animate-ping"
          style={{ animationDelay: "1.4s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-green-500 rounded-full animate-ping"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-green-500 rounded-full animate-ping"
          style={{ animationDelay: "1.1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-500 rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 md:mt-0 mt-50">
        <div className="flex justify-start">
          {/* Content Box at Top Left */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 max-w-md md:max-w-lg lg:max-w-xl transform hover:scale-102 transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              MORE THAN <span className="text-green-500">1300 MOVES</span>{" "}
              WITHIN CALIFORNIA
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              We've assisted over 1,300 satisfied clients in their relocations.
            </p>
            <div>
              <a href="mailto:safepianomover@gmail.com">
                <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md">
                  GET A QUOTE!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
