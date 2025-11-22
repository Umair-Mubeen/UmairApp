"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function FeaturedProjects() {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -80]); // RIGHT glow parallax

  return (
    <section
      id="featured-projects"
      aria-label="Featured Website Design Projects"
      className="relative min-h-screen text-white flex flex-col items-center justify-center px-6 py-24 overflow-hidden
      scroll-smooth selection:bg-purple-600 selection:text-white"
    >
      {/* 🔥 FULL HEIGHT RIGHT SIDE GLOW */}
      <motion.div
        style={{ y: y2 }}
        className="absolute right-0 top-0 h-full 
        w-[400px] sm:w-[500px] md:w-[650px] lg:w-[750px]
        blur-[120px] opacity-70 pointer-events-none"
      />

      {/* Title Section */}
      <div className="relative z-10 text-center mb-10 max-w-3xl mx-auto px-2">
        <p className="text-blue-300 font-semibold uppercase tracking-widest mb-2">
          Our Work
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Featured Website Design Projects
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          Explore custom B2C, B2B, and eCommerce solutions optimized for performance,
          engagement, and conversions — crafted to elevate your brand.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="relative z-10 flex items-center justify-center w-full mt-10 lg:mt-0">
        <nav
          aria-label="Project Categories"
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
        >
          {["Featured", "B2B", "B2C", "Ecommerce"].map((tab, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base font-medium tracking-wide transition-all 
                ${
                  index === 0
                    ? "border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                    : "border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                }`}
              aria-pressed={index === 0}
            >
              {tab}
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Floating Project Images */}
      <div
        className="relative z-10 flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-16"
        aria-label="Featured Project Thumbnails"
      >
        {[
          { src: "/StockImages/B.png", alt: "B2B Website Project" },
          { src: "/StockImages/B2C.png", alt: "B2C Website Project" },
          { src: "/StockImages/Ecommerce.png", alt: "Ecommerce Website Project" },
        ].map((project, index) => (
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative w-[260px] sm:w-[300px] md:w-[340px]
            hover:shadow-2xl group transition-transform duration-500 transform hover:-translate-y-2"
          >
            <div className="relative w-full h-[260px] sm:h-[300px] md:h-[340px]">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                quality={70}
                loading="lazy"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 340px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.figure>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-16 text-center">
        <motion.a
          href="#"
          aria-label="View Services"
          className="inline-block border border-white text-white 
          px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold 
          transition-all duration-300 ease-in-out
          hover:bg-[#2563eb]/20 hover:border-[#3b82f6] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
          focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          View Full Portfolio
        </motion.a>
      </div>
    </section>
  );
}

export default FeaturedProjects;
