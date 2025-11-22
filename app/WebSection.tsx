"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function WebSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -40]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section
      id="web"
      aria-label="Web Design and Branding Section"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 text-white overflow-hidden 
      scroll-smooth selection:bg-purple-600 selection:text-white"
    >
      {/* ⭐ RIGHT-SIDE FULL BACKGROUND GLOW */}
      <motion.div
        style={{ y: y2 }}
        aria-hidden="true"
        className="absolute right-0 top-0 h-full
        w-[380px] sm:w-[480px] md:w-[620px] lg:w-[700px]
        opacity-70 pointer-events-none"
      />

 
      {/* Main Layout */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-20 items-center z-10 py-24 sm:py-28 lg:py-36">
        
        {/* Left: Text */}
        <div className="text-center lg:text-left max-w-md sm:max-w-xl lg:max-w-2xl mx-auto lg:mx-0 px-2 sm:px-4">
          <motion.p
            className="uppercase tracking-[0.2em] text-white/70 mb-3 sm:mb-4 text-[10px] sm:text-xs md:text-sm font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Premium Web Design Agency
          </motion.p>

          <motion.h1
            className="font-extrabold text-2xl sm:text-3xl md:text-2xl lg:text-6xl leading-[1.15] mb-4 sm:mb-6 break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Grow Brands <br className="hidden sm:block" /> Online
          </motion.h1>

          <motion.p
            className="text-gray-300 mb-8 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-0 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Custom Websites, Branding & Digital Marketing that amplify your digital presence.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.a
              href="#contact"
              aria-label="Request a Quote"
              className="inline-block border border-white text-white 
               px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold 
               transition-all duration-300 ease-in-out
               hover:bg-[#2563eb]/20 hover:border-[#3b82f6] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
               focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              Request a Quote
            </motion.a>

            <motion.a
              href="#"
              aria-label="View Portfolio"
              className="inline-block border border-white text-white 
               px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold 
               transition-all duration-300 ease-in-out
               hover:bg-[#2563eb]/20 hover:border-[#3b82f6] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
               focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              View Portfolio
            </motion.a>
          </div>
        </div>

        {/* Right: Floating Optimized Image */}
        <div className="relative flex items-center justify-center w-full mt-10 lg:mt-0">

          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative group overflow-hidden
              w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[550px] xl:w-[600px]
              aspect-[4/3] md:aspect-[5/4] lg:aspect-[16/10]
              max-w-full z-10 transition-all duration-700"
          >
            <Image
              src="/StockImages/GrowBrands.png"
              alt="We Grow Brands Online"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 550px"
              quality={70}
              loading="lazy"
              className="object-cover md:object-contain xl:object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Small bottom glow */}
          <motion.div
            style={{ y: y2 }}
            aria-hidden="true"
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
