"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export function AgencySection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -40]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 text-white overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900">
      {/* Top Brand Strip */}
      <div className="absolute top-4 left-0 w-full flex justify-center lg:justify-start gap-4 sm:gap-6 z-10 px-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto py-2 lg:py-0 no-scrollbar">
          {["Sony", "HP", "P&G", "NFL", "Forbes"].map((name) => (
            <div
              key={name}
              className="flex-shrink-0 opacity-80 bg-white/10 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm md:text-base backdrop-blur-md"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Main Layout */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 sm:gap-16 items-center z-10 py-24 sm:py-32 lg:py-40">
        {/* Left Column - Text */}
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 px-2 sm:px-4 md:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Creative Web Agency <br className="hidden sm:block" /> Delivering Custom Solutions
          </motion.h2>

          <motion.p
            className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We craft beautiful, high-performance websites with a focus on measurable results.
            Our process is collaborative, transparent, and tailored to your brand.
          </motion.p>

          <ul className="space-y-3 sm:space-y-4 mb-6 text-sm sm:text-base">
            {[
              "Custom design tailored to your brand and goals",
              "Fast, SEO-friendly development using modern stacks",
              "Ongoing support and performance optimization",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              >
                <span className="mt-0.5 text-green-400 text-lg sm:text-xl">✔</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-4 sm:mt-6">
            <motion.a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg shadow-blue-900/30 transition-transform"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </div>

        {/* Right Column - Floating Image */}
        <div className="relative flex items-center justify-center w-full mt-10 lg:mt-0">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700/40 via-purple-600/30 to-blue-500/20 blur-3xl rounded-full" />

          {/* Floating Showcase Image */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative group overflow-hidden rounded-2xl shadow-2xl border border-white/10 
              w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[550px] xl:w-[600px]
              aspect-[4/3] md:aspect-[5/4] lg:aspect-[16/10]
              max-w-full z-10 transition-all duration-700"
          >
            <img
              src="/WebAgency.webp"
              alt="Custom Web Solutions"
              className="w-full h-full object-cover md:object-contain xl:object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Floating Glow Orb */}
          <motion.div
            style={{ y: y2 }}
            className="absolute -bottom-6 sm:-bottom-8 right-4 sm:right-8 
              w-24 sm:w-36 md:w-44 lg:w-56 
              h-24 sm:h-36 md:h-44 lg:h-56 
              bg-blue-500/20 blur-3xl rounded-full animate-pulse"
          />
        </div>
      </div>
    </section>
  );
}

export default AgencySection;
