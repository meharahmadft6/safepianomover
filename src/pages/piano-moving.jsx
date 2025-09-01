import React from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import PianoMoved from "../components/Pianomoved";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Calendar,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function PianoMoving() {
  const pianoTypes = [
    {
      id: 6,
      title: "Grand Piano",
      description:
        "Grand pianos are characterized by the way they are constructed. The strings and soundboard lay horizontally and the hammer that strikes the string swings up and then falls back to rest. Grand pianos generally offer more sound projection and faster key repetition than vertical pianos.",
      image: "/p6.png",
      features: [
        "Horizontal construction",
        "Superior sound projection",
        "Faster key repetition",
      ],
    },
    {
      id: 2,
      title: "Console Piano",
      description:
        "Consoles are generally between 40” and 44” tall. They usually have high furniture value and are suited for home use. Most have full size actions although some manufacturers will compress the actions to reduce cost.",
      image: "/p2.png",
      features: [
        "40-44 inches tall",
        "High furniture value",
        "Ideal for home use",
      ],
    },
    {
      id: 3,
      title: "Studio Piano",
      description:
        "Studio pianos are between 45” and 47” tall. These are a popular choice for schools and churches. Recently some cabinet designs have made these more popular for home use as well.",
      image: "/p3.png",
      features: [
        "45-47 inches tall",
        "Popular for institutions",
        "Modern home designs",
      ],
    },
    {
      id: 4,
      title: "Upright Piano",
      description:
        "Upright pianos are generally 48” and over. These pianos are the choice of players looking for grand piano type sound without taking up as much space.",
      image: "/up.png",
      features: ["48+ inches tall", "Grand piano sound", "Space-efficient"],
    },
    {
      id: 5,
      title: "Digital Piano",
      description:
        "Digital pianos come in many styles. From slim upright designs to a range of grand piano sizes, there is a digital for most price points and feature needs. High quality digital pianos offer a tremendous value with progressive hammer actions which require no regulating and concert grand quality sound without tuning.",
      image: "/p5.png",
      features: [
        "Various styles",
        "No tuning required",
        "Volume control options",
      ],
    },
    {
      id: 1,
      title: "Spinet Piano",
      description:
        "The smallest of the vertical pianos, these usually are 36” to 39” tall. The piano actions are compressed and are attached to the keys by a rod mechanism. These pianos are harder to service and regulate and are not currently being manufactured.",
      image: "/p1.png",
      features: ["36-39 inches tall", "Compressed actions", "Rod mechanism"],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Piano Moving Services | Professional Piano Movers in California
        </title>
        <meta
          name="description"
          content="Expert piano moving services for all types of pianos. Specialized handling for spinet, console, studio, upright, digital, and grand pianos across California."
        />
        <meta
          name="keywords"
          content="piano moving, piano movers, grand piano moving, upright piano moving, California piano movers"
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section
          className="relative h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/bg.png)" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 drop-shadow-lg">
              Piano Moving
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Specialized moving services for all types of pianos
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Expert Piano Moving Services
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We specialize in piano moving across California, making it our
                top priority above all other services. We move all types of
                pianos safely and securely—your instrument is always in expert
                hands.
              </p>
            </div>
          </div>
        </section>

        {/* Piano Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Types of Pianos We Move
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our team is experienced in handling all piano types with
                specialized equipment and techniques
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {pianoTypes.map((piano, index) => (
                <div
                  key={piano.id}
                  className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="md:flex">
                    {/* Piano Image */}
                    <div className="md:w-2/5 h-64 md:h-auto bg-white overflow-hidden">
                      <img
                        src={piano.image}
                        alt={`${piano.title} - Professional piano moving`}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Piano Content */}
                    <div className="md:w-3/5 p-8">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {piano.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {piano.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {piano.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <PianoMoved />

        {/* Consultation Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="mx-auto text-center">
              <div className="bg-gray-50 rounded-2xl shadow-2xl p-12 border border-gray-200">
                <Calendar className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-2xl md:text-5xl font-bold text-black mb-4">
                  Need Professional Piano Moving?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Contact us for a free consultation and let our piano
                  specialists handle your instrument with the care it deserves.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link
                    href="/contact"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+17472459992"
                    className="bg-black text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call for Free Consultation</span>
                  </a>
                </div>

                {/* Contact Info Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                    <Phone className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-black mb-1">Phone</h4>
                    <a
                      href="tel:+17472459992"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      (747) 245-9992
                    </a>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                    <Mail className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-black mb-1">Email</h4>
                    <a
                      href="mailto:safepianomover@gmail.com"
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      safepianomover@gmail.com
                    </a>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                    <Globe className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-black mb-1">Website</h4>
                    <a
                      href="https://www.safepianomover.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      www.safepianomover.com
                    </a>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                    <MapPin className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-black mb-1">Location</h4>
                    <p className="text-green-600 font-medium">Hollywood, CA</p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Free Estimates</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">
                        Fully Licensed & Insured
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">
                        24/7 Emergency Service
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
