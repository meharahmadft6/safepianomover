"use client";

import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Alex and his team at Safe Piano Movers were amazing! They arrived exactly on time, wrapped my piano with so much care, and delivered it safely without a scratch. Best movers in California!",
      author: "Brian Walker",
      platform: "Google",
    },
    {
      id: 2,
      rating: 5,
      text: "I was worried about moving my grand piano, but Alex handled everything perfectly. Professional, punctual, and very skilled. If you need your piano moved safely in California, this is the company to call!",
      author: "Paul Martin",
      platform: "Google",
    },
    {
      id: 3,
      rating: 5,
      text: "Excellent service! My upright piano was delivered right on schedule and in perfect condition. Alex and his crew made the whole process stress-free. Highly recommend Safe Piano Movers!",
      author: "Eric Nelson",
      platform: "Google",
    },
    {
      id: 4,
      rating: 5,
      text: "Safe Piano Movers is top-notch! Alex kept me updated, showed up on time, and handled my piano with extreme care. I've used movers before, but this was by far the best experience in California.",
      author: "Jessica H.",
      platform: "Google",
    },
    {
      id: 5,
      rating: 5,
      text: "I had my piano moved across the Bay Area, and Alex delivered exactly as promised. No delays, no damage, and very professional. I'll definitely use Safe Piano Movers again!",
      author: "Calvin Hayden",
      platform: "Google",
    },
    {
      id: 6,
      rating: 5,
      text: "Amazing experience! Alex and his team know what they're doing. They secured my piano, transported it safely, and arrived right on time. Truly the safest way to move a piano in California!",
      author: "Steve Smith",
      platform: "Google",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        fill={i < rating ? "#FBBF24" : "none"}
        stroke={i < rating ? "#FBBF24" : "#D1D5DB"}
        className="flex-shrink-0"
      />
    ));
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-[400px] mx-4 border border-gray-100 flex-shrink-0">
      {/* Platform Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {testimonial.platform}
        </div>
        <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-700 leading-relaxed mb-6 text-base italic">
        "{testimonial.text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">
            {testimonial.author}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
              CLIENT VOICES
            </h2>
          </div>

          {/* Marquee Container */}
          <div className="relative">
            {/* First Row - Left to Right */}
            <div className="flex animate-marquee-left mb-8">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard
                  key={`left-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of satisfied customers who trust us with their
              precious pianos
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r cursor-pointer from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Your Free Quote
              </button>
            </Link>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee-left {
            animation: marquee-left 10s linear infinite;
            display: flex;
            width: max-content;
          }

          /* Show two cards at a time on desktop */
          @media (min-width: 1024px) {
            .animate-marquee-left {
              width: 200%;
            }
          }

          /* Pause animation on hover */
          .animate-marquee-left:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </>
  );
};

export default ClientTestimonials;
