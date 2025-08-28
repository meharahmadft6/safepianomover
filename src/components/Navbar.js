import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 z-50">
              <Image
                src="/logo.png"
                alt="Safe Piano Movers Logo"
                width={160}
                height={120}
              />
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-1">
              <Link
                href="/"
                className="relative text-gray-900 hover:text-green-600 px-4 py-2 text-base font-semibold transition-all duration-300 group"
              >
                Home
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                href="/services"
                className="relative text-gray-900 hover:text-green-600 px-4 py-2 text-base font-semibold transition-all duration-300 group"
              >
                Services
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                href="/piano-moving"
                className="relative text-gray-900 hover:text-green-600 px-4 py-2 text-base font-semibold transition-all duration-300 group"
              >
                Piano Moving
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                href="/portfolio"
                className="relative text-gray-900 hover:text-green-600 px-4 py-2 text-base font-semibold transition-all duration-300 group"
              >
                Portfolio
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="relative text-gray-900 hover:text-green-600 px-4 py-2 text-base font-semibold transition-all duration-300 group"
              >
                Contact Us
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Phone Number - Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:7472459992"
              className="group relative border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
            >
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span>(747) 245-9992</span>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-green-600 focus:outline-none p-2 rounded-lg transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white shadow-xl border-t border-gray-200">
            <div className="px-4 py-6 space-y-1">
              <Link
                href="/"
                className="block text-gray-900 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Home</span>
                </div>
              </Link>
              <Link
                href="/services"
                className="block text-gray-900 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Services</span>
                </div>
              </Link>
              <Link
                href="/piano-moving"
                className="block text-gray-900 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Piano Moving</span>
                </div>
              </Link>
              <Link
                href="/portfolio"
                className="block text-gray-900 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Portfolio</span>
                </div>
              </Link>
              <Link
                href="/contact"
                className="block text-gray-900 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Contact Us</span>
                </div>
              </Link>

              {/* Mobile Phone Number */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <a
                  href="tel:7472459992"
                  className="block border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white text-center px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span>Call (747) 245-9992</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
