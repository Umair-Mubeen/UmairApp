"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Services() {
  const services = [
    { title: "Web Design", desc: "Beautiful, responsive, and user-focused web design that leaves a lasting impression." },
    { title: "Web Development", desc: "Full-stack solutions using modern frameworks like Next.js, React, and Node.js." },
    { title: "UI/UX Design", desc: "Interactive, human-centered designs that enhance engagement and satisfaction." },
    { title: "E-Commerce Solutions", desc: "Custom online stores with secure payments, seamless checkout, and conversion focus." },
    { title: "SEO Optimization", desc: "Boost rankings, visibility, and traffic with strategic SEO implementation." },
    { title: "Web Maintenance", desc: "Ongoing updates, security, and performance optimization for peace of mind." },
    { title: "Brand Identity", desc: "Craft a cohesive, memorable identity that connects with your audience." },
    { title: "API Integration", desc: "Seamlessly connect systems and apps through reliable API solutions." },
    { title: "Performance Optimization", desc: "Faster load times, optimized code, and superior user experience delivery." },
  ];

  return (
    <section
      id="services"
      aria-label="Our Digital Services"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24 text-white text-center overflow-hidden
      scroll-smooth selection:bg-purple-600 selection:text-white"
    >
      {/* 🌟 RIGHT-SIDE GRADIENT GLOW (Same style as your other sections) */}
      <div
        className="absolute -right-32 top-40 w-[480px] h-[480px]
        bg-gradient-to-tr from-indigo-700/40 via-purple-600/30 to-blue-500/20
        blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Light radial overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.07),_transparent_70%)] z-0"
        aria-hidden="true"
      />

      {/* Section Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
          Our Services
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Everything you need to design, build, and grow your digital presence — crafted with creativity, performance, and precision.
        </p>
      </motion.header>

      {/* Swiper Carousel */}
      <motion.div
        className="relative z-10 max-w-6xl w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.article
                whileHover={{ scale: 1.06, y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 15 }}
                className="group relative p-10 bg-white/10 border border-white/20 rounded-2xl shadow-lg backdrop-blur-xl
                hover:border-blue-400/60 hover:shadow-[0_0_45px_rgba(59,130,246,0.35)] hover:bg-white/15
                transition-all duration-500 flex flex-col justify-center items-center text-center h-72"
                aria-label={service.title}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-xs">
                  {service.desc}
                </p>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Navigation Arrows */}
        <div
          className="swiper-button-prev !text-white !font-extrabold !text-4xl hover:scale-125 transition-transform duration-300 
          hover:text-blue-300"
          aria-label="Previous slide"
        />
        <div
          className="swiper-button-next !text-white !font-extrabold !text-4xl hover:scale-125 transition-transform duration-300 
          hover:text-blue-300"
          aria-label="Next slide"
        />
      </motion.div>
    </section>
  );
}

export default Services;
