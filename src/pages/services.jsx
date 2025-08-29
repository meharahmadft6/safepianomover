import React from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
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

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Safe Moving",
      description:
        "With our Safe Moving Services, we move heavy safes with precision, the right tools, and complete care.",
      image: "/s1.png",
      features: [
        "Specialized Equipment",
        "Expert Handling",
        "Secure Transport",
      ],
    },
    {
      id: 2,
      title: "Piano Moving",
      description:
        "Our Piano Moving Services guarantee expert handling, secure transport, and stress-free delivery of your Grand, Upright or any Piano.",
      image: "/s3.png",
      features: [
        "All Piano Types",
        "Professional Team",
        "Damage-Free Guarantee",
      ],
    },
    {
      id: 3,
      title: "Vending Machine Moving",
      description:
        "We specialize in Vending Machine Moving Services, ensuring safe, smooth, and hassle-free transport every time.",
      image: "/s2.png",
      features: ["Commercial Grade", "Quick Setup", "Minimal Downtime"],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Our Services - Safe Piano Mover | Piano, Safe & Vending Machine Moving
        </title>
        <meta
          name="description"
          content="Professional moving services for pianos, safes, and vending machines in California. Expert handling, specialized equipment, and 24/7 availability."
        />
        <meta
          name="keywords"
          content="piano moving, safe moving, vending machine moving, California, professional movers"
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
              Our Services
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Professional moving solutions for your most valuable and delicate
              items
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Specialized Moving Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide expert moving services with specialized equipment and
                experienced professionals
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Service Image */}
                  <div className="h-80 bg-gray-100 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - Professional moving services`}
                      className="w-full h-80 object-fit hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-green-600">
                          <Shield className="w-5 h-5" />
                          <span className="font-semibold">Fully Insured</span>
                        </div>
                        <div className="flex items-center space-x-2 text-green-600">
                          <Clock className="w-5 h-5" />
                          <span className="font-semibold">24/7 Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className=" mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-2xl p-12 border border-gray-200">
                <Calendar className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-black mb-4">
                  Ready to Schedule Your Move?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get your free consultation today and let our experts handle
                  your valuable items with the care they deserve.
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
                    className="bg-black  text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now for Free Consultation</span>
                  </a>
                </div>

                {/* Contact Info Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Phone className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-black mb-1">Phone</h4>
                    <a
                      href="tel:+17472459992"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      (747) 245-9992
                    </a>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Mail className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-black mb-1">Email</h4>
                    <a
                      href="mailto:safepianomover@gmail.com"
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      safepianomover@gmail.com
                    </a>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
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

                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
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
