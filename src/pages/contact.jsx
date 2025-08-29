import React, { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Clock,
  Map,
  Piano,
  Shield,
  Zap,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus(
        "Thank you for your message! We will contact you within 24 hours."
      );
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        serviceType: "",
      });
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>
          Contact Us - Safe Piano Mover | Professional Piano Moving Services
        </title>
        <meta
          name="description"
          content="Contact Safe Piano Mover for professional piano moving services in California. Available 24/7, 365 days a year. Get your free quote today!"
        />
        <meta
          name="keywords"
          content="piano movers, contact, California, Hollywood, piano moving services"
        />
      </Head>

      <main className="min-h-screen bg-white ">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with California's most trusted piano moving
              professionals. We're here to help you 24/7, 365 days a year.
            </p>
          </div>
        </section>

        <div className="container mx-auto md:px-10 md:py-20 px-2 py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-black mb-8 text-center">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  {/* Company Name */}

                  {/* Phone */}
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Phone className="text-green-600 w-6 h-6" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-black">Phone</h4>
                      <a
                        href="tel:+17472459992"
                        className="text-green-600 hover:text-green-700 font-medium text-lg"
                      >
                        (747) 245-9992
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Mail className="text-green-600 w-6 h-6" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-black">Email</h4>
                      <a
                        href="mailto:safepianomover@gmail.com"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        safepianomover@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Globe className="text-green-600 w-6 h-6" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-black">Website</h4>
                      <a
                        href="https://www.safepianomover.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        www.safepianomover.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <MapPin className="text-green-600 w-6 h-6" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-black">Location</h4>
                      <p className="text-green-600 font-medium">
                        Hollywood, CA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Hours & Area */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-bold text-black mb-2">
                        Working Hours
                      </h4>
                      <p className="text-green-600 font-semibold">24/7</p>
                      <p className="text-gray-600">365 Days a Year</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Map className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-bold text-black mb-2">
                        Service Area
                      </h4>
                      <p className="text-green-600 font-semibold">California</p>
                      <p className="text-gray-600">Statewide Coverage</p>
                    </div>
                  </div>
                </div>

                {/* Emergency Notice */}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-black mb-8 text-center">
                Request a Free Quote
              </h2>

              {submitStatus && (
                <div className="mb-6 p-4 bg-green-50 border border-green-600 rounded-lg">
                  <p className="text-green-700 font-semibold">{submitStatus}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6 ">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-black mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-black mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Type of Piano
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors text-black"
                  >
                    <option value="">Select piano type</option>
                    <option value="upright">Upright Piano</option>
                    <option value="grand">Grand Piano</option>
                    <option value="baby-grand">Baby Grand Piano</option>
                    <option value="digital">Digital Piano</option>
                    <option value="spinet">Spinet Piano</option>
                    <option value="console">Console Piano</option>
                    <option value="studio">Studio Piano</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Please describe your piano moving needs, including pickup and delivery locations, stairs involved, tight spaces, timeline, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message & Get Free Quote"
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We typically respond within 1 hour during
                  business hours.
                </p>
              </form>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">
                Why Choose Safe Piano Mover?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're California's premier piano moving specialists, trusted by
                families and professionals across the state.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <Piano className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">
                  Piano Specialists
                </h3>
                <p className="text-gray-600">
                  Exclusively focused on piano moving with specialized equipment
                  and techniques for all piano types.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">
                  Fully Insured
                </h3>
                <p className="text-gray-600">
                  Complete insurance coverage for your valuable instrument
                  during transport and storage.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">
                  24/7 Availability
                </h3>
                <p className="text-gray-600">
                  Emergency and scheduled moves available around the clock,
                  every day of the year.
                </p>
              </div>
            </div>

            {/* Contact Image */}
            <div className="text-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/contact.png"
                  alt="Safe Piano Mover team ready to help with your piano moving needs"
                  className="object-cover w-full h-full"
                  style={{ maxHeight: "600px" }}
                />
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-16 bg-gray-50 border-2 border-green-600 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <AlertCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-black">
                Need Emergency Piano Moving?
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Last-minute moves, urgent relocations, or emergency piano removal
              services available now!
            </p>
            <a
              href="tel:+17472459992"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors transform hover:scale-105"
            >
              Call Now: (747) 245-9992
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
