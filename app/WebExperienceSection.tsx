"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function WebExperienceSection() {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      title: "Modern Business Websites",
      desc: "High-performance and visually stunning experiences for your brand.",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
      title: "Creative Portfolios",
      desc: "Showcase your work with elegant, custom web design.",
    },
    {
      src: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1000&q=80",
      title: "eCommerce Solutions",
      desc: "Sell more online with fast, engaging, and mobile-optimized stores.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 text-white overflow-hidden">
      
      {/* Left Text Section */}
      <div className="flex-1 max-w-xl text-center md:text-left mb-12 md:mb-0">
        <p className="uppercase tracking-widest text-blue-300 font-semibold mb-3">
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
        <p className="text-gray-300 mb-6">
          From startups to enterprise — we design and build websites that look
          stunning, perform fast, and convert visitors into loyal customers.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md font-semibold text-lg"
        >
          Get a Free Consultation
        </motion.button>
      </div>

      {/* Right Auto-Sliding Carousel */}
      <div className="flex-1 relative w-full max-w-md md:max-w-lg lg:max-w-2xl h-[50vh] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={slide.src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {slide.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">{slide.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WebExperienceSection;
