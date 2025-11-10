"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function WebExperienceSection() {
  const slides = [
    {
      src: "/WebSolution.webp",
      title: "Modern Business Websites",
      desc: "High-performance, accessible, and visually stunning experiences built to elevate your brand.",
    },
    {
      src: "/CreatePortfolio.webp",
      title: "Creative Portfolios",
      desc: "Showcase your work beautifully with a sleek, interactive, and fully responsive design.",
    },
    {
      src: "/ESolutions.webp",
      title: "E-Commerce Solutions",
      desc: "Sell smarter with mobile-first, SEO-optimized stores that convert visitors into customers.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="experience"
      aria-label="Custom Web Design Experiences"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 text-white overflow-hidden 
      scroll-smooth selection:bg-purple-600 selection:text-white"
    >
      {/* Left Text Section */}
      <div className="flex-1 max-w-xl text-center md:text-left mb-12 md:mb-0">
        <p
          className="uppercase tracking-widest text-blue-300 font-semibold mb-3"
          aria-label="Expertise Heading"
        >
          Our Expertise
        </p>

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Custom Web Design <br /> for Every Business
        </motion.h2>

        <p className="text-gray-300 mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
          From startups to enterprise — we design and build websites that are
          stunning, fast, and built to convert visitors into loyal customers.
        </p>

            <motion.a
    href="#contact"
    aria-label="View Services"
    className="inline-block border border-white text-white 
               px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold 
               transition-all duration-300 ease-in-out
               hover:bg-[#2563eb]/20 hover:border-[#3b82f6] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
               focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50"
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.97 }}
  >
          Get a Free Consultation
  </motion.a>
      </div>

      {/* Right Auto-Sliding Carousel */}
      <div
        className="flex-1 relative w-full max-w-md md:max-w-lg lg:max-w-2xl h-[50vh] md:h-[400px] lg:h-[500px] 
        rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        aria-label="Web Design Showcase Carousel"
      >
        <AnimatePresence mode="wait">
          {slides.map((slide, i) =>
            i === index ? (
              <motion.figure
                key={i}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                {/* Optimized Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 600px"
                    quality={70}
                    priority={i === 0} // First slide loads immediately for faster LCP
                    loading={i === 0 ? "eager" : "lazy"}
                    className="object-cover object-center transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

                {/* Text Overlay */}
                <figcaption
                  className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent"
                  aria-live="polite"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {slide.desc}
                  </p>
                </figcaption>
              </motion.figure>
            ) : null
          )}
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i
                  ? "bg-blue-400 scale-110"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WebExperienceSection;
