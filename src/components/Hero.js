import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative bg-black">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Mobile Image Container - No spacing from navbar */}
        <div className="relative w-full h-[60vh]">
          <Image
            src="/mobile-hero.png"
            alt="Professional movers handling boxes"
            fill
            className="object-cover opacity-90"
            priority
          />
          {/* Dark overlay for mobile image */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Mobile Text Content - Below the image */}
        <div className="relative z-10 bg-black px-6 py-12 text-center">
          <div className="text-white max-w-lg mx-auto">
            <h1 className="text-2xl font-black leading-tight text-stroke mb-2">
              BEST PIANO MOVERS
            </h1>
            <h2 className="text-2xl font-black mb-6 leading-tight text-stroke">
              IN CALIFORNIA
            </h2>

            <p className="text-lg mb-8 font-medium">
              Get an Instant Quote from us in just 3 Minutes!
            </p>
            <Link href="tel:7472459992" className="mb-4 inline-block">
              <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 uppercase">
                CALL US NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div className="hidden md:block relative w-full h-screen">
        {/* Desktop Background Image */}
        <Image
          src="/hero.png"
          alt="Professional movers handling boxes"
          fill
          className="object-cover opacity-90"
          priority
          sizes="100vw"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Desktop Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center md:text-left">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between h-full">
              {/* Left side - Text content */}
              <div className="flex-1 text-white max-w-2xl md:mt-5 md:ms-10">
                <h1 className="text-7xl font-black leading-tight text-stroke">
                  BEST PIANO MOVERS
                </h1>
                <h2 className="text-7xl font-black mb-6 leading-tight text-stroke">
                  IN CALIFORNIA
                </h2>

                <p className="text-2xl mb-8 font-medium">
                  Get an Instant Quote from us in just 3 Minutes!
                </p>

                <Link href="tel:7472459992" className="mb-4 inline-block">
                  <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 uppercase">
                    CALL US NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
