"use client";

import { motion } from "framer-motion";
import { Truck, Package, Building, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
const Services = () => {
  const services = [
    {
      id: "01",
      title: "LOCAL MOVING",
      icon: <Truck className="w-8 h-8 md:w-12 md:h-12 text-green-500" />,
      features: [
        "Careful handling of your belongings",
        "Expertise in navigating within the New York City region",
        "In-house moves with items placed where you prefer",
      ],
    },
    {
      id: "02",
      title: "LONG-DISTANCE",
      icon: <Package className="w-8 h-8 md:w-12 md:h-12 text-green-500" />,
      features: [
        "Seamless and secure",
        "Packing and unpacking services",
        "Direct delivery options",
        "Expert handling of valuable items",
        "Comprehensive care",
      ],
    },
    {
      id: "03",
      title: "COMMERCIAL",
      icon: <Building className="w-8 h-8 md:w-12 md:h-12 text-green-500" />,
      features: [
        "Smooth and efficient relocation for businesses",
        "Expertise in handling office equipment and furniture",
        "Minimization of downtime during the move",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleCallClick = () => {
    window.location.href = "tel:7472459992";
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="bg-black text-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-base md:text-lg font-bold text-white tracking-wider">
                  {service.id}
                </span>
                <motion.div
                  whileHover={{
                    rotate: 15,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  className="text-white group-hover:text-green-600 transition-colors duration-300"
                >
                  {service.icon}
                </motion.div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                {service.title}
              </h3>

              <ul className="space-y-2 md:space-y-3">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.4,
                    }}
                    className="text-white text-sm md:text-base leading-relaxed flex items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA Card - Now as the 4th item in a 3-column grid */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 },
            }}
            onClick={handleCallClick}
            className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 md:p-8 shadow-lg cursor-pointer group relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-1"
          >
            {/* Background decoration */}
            <motion.div
              className="absolute -right-4 -top-4 w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center justify-between mb-4 md:mb-6 relative z-10">
                <span className="text-xs md:text-sm font-bold text-green-100 tracking-wider">
                  04
                </span>
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-white"
                >
                  <Phone className="w-8 h-8 md:w-10 md:h-10" />
                </motion.div>
              </div>
              <Link
                href="tel:7472459992"
                className="flex-1 flex flex-col justify-center relative z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                    GET A FREE QUOTE
                  </h3>

                  <div className="inline-flex items-center text-white text-lg md:text-xl font-semibold group-hover:text-green-100 transition-colors duration-300">
                    <span className="mr-3">(747) 245-9992</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </Link>
              <motion.div
                className="mt-4 md:mt-6 w-full h-1 bg-white/20 rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.div
                  className="h-full bg-white rounded-full"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
