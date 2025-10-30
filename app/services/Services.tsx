"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function Services() {
  const services = [
    { title: "Web Design", desc: "Beautiful, responsive, and user-focused web design that leaves a lasting impression." },
    { title: "Web Development", desc: "Full-stack solutions with modern frameworks like Next.js, React, and Node.js." },
    { title: "UI/UX Design", desc: "Interactive, human-centered designs that enhance user engagement and satisfaction." },
    { title: "E-Commerce Solutions", desc: "Custom online stores with secure payment gateways and seamless checkout." },
    { title: "SEO Optimization", desc: "Boost visibility, rankings, and organic traffic with proven SEO strategies." },
    { title: "Web Maintenance", desc: "Continuous updates, security patches, and performance optimization for your site." },
    { title: "Brand Identity", desc: "Build a cohesive, memorable brand identity that resonates with your audience." },
    { title: "API Integration", desc: "Connect apps and systems seamlessly through modern API solutions." },
    { title: "Performance Optimization", desc: "Lightning-fast loading times and optimized code for a superior user experience." },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 text-white text-center overflow-hidden"
    >
      {/* Section Title */}
      <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold leading-tight mb-12">
        Our <span className="text-white-400">Services</span>
      </h1>

      {/* Swiper Carousel */}
      <div className="relative z-10 max-w-6xl w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-10 border-white-400"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-white/10 border border-white-400/20 rounded-2xl shadow-lg backdrop-blur-md hover:bg-white/20 hover:border-white-300 transition duration-300 flex flex-col justify-center items-center text-center w-full h-72">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {service.title}
                </h2>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base max-w-xs">
                  {service.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 mt-12">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition">
          Explore More Services
        </button>
      </div>
    </section>
  );
}

export default Services;
