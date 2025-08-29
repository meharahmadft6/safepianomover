import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-black px-4 md:px-10 relative overflow-hidden">
        {/* Decorative background elements */}

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold bg-green-600 bg-clip-text text-transparent">
                  Safe Piano Mover
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  Professional piano moving services in Hollywood, CA and
                  surrounding areas. We handle your instrument with the care and
                  expertise it deserves.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center group hover:text-green-600 transition-colors duration-300">
                  <div className="mr-4 p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-lg font-medium">(747) 245-9992</span>
                </div>
                <div className="flex items-center group hover:text-blue-600 transition-colors duration-300">
                  <div className="mr-4 p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-lg font-medium">
                    safepianomover@gmail.com
                  </span>
                </div>
                <div className="flex items-center group hover:text-purple-600 transition-colors duration-300">
                  <div className="mr-4 p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                    <Globe className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-lg font-medium">
                    www.safepianomover.com
                  </span>
                </div>
                <div className="flex items-center group hover:text-red-600 transition-colors duration-300">
                  <div className="mr-4 p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="text-lg font-medium">Hollywood, CA</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-800">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/piano-moving", label: "Piano Moving" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative text-gray-700 hover:text-green-500 px-2 py-2 text-lg font-medium transition-all duration-300 group inline-block"
                    >
                      {link.label}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Info */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-800">
                Business Information
              </h4>
              <div className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                  <p className="text-sm font-bold text-white leading-relaxed">
                    ALL RIGHTS RESERVED © 2025
                    <span className="block text-green-400 mt-1">
                      SAFE PIANO MOVER
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-500">
                <p className="text-sm text-black font-medium">
                  Professional Piano Moving Services Since 2015
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="text-center lg:text-left">
                <p className="text-gray-600 text-lg font-medium">
                  Trusted by musicians and institutions across Los Angeles
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Fully licensed, bonded, and insured
                </p>
              </div>

              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", color: "hover:text-blue-600" },
                  { icon: Instagram, href: "#", color: "hover:text-pink-600" },
                  { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 bg-white rounded-full shadow-md text-gray-600 ${social.color} transition-all duration-300 hover:shadow-lg hover:scale-110`}
                    >
                      <span className="sr-only">{social.icon.name}</span>
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Image Section */}
      <div
        className="w-full h-24 md:h-32 lg:h-40 bg-center bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url('/footer-end.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </>
  );
};

export default Footer;
