import Image from "next/image";
import Link from "next/link";

const OtherServices = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/otherservices.png"
          alt="Handyman Services Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Dark overlay for better text contrast - placed above image but below text */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Content */}
      <div className="relative text-center text-white  max-w-4xl">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 ">
          DISCOVER OUR OTHER SERVICES
        </h1>
        <Link
          href="/services"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300"
        >
          MORE INFO
        </Link>
      </div>
    </section>
  );
};

export default OtherServices;
