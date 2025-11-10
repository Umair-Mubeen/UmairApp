"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  const values = [
    {
      title: "Creative Strategy",
      desc: "We craft insight-driven strategies that connect storytelling, design, and performance — turning ideas into brand growth.",
    },
    {
      title: "Innovative Design",
      desc: "Our visuals blend beauty and purpose — clean, modern, and designed to convert at every interaction.",
    },
    {
      title: "Modern Tech Stack",
      desc: "From React to AWS, we engineer seamless digital experiences powered by scalable, high-performing technology.",
    },
  ];

  const images = [
    { src: "/About/CS.png", alt: "Creative Strategy Showcase" },
    { src: "/About/ID.png", alt: "Innovative Design Showcase" },
    { src: "/About/TP.png", alt: "Modern Tech Stack Showcase" },
  ];

  return (
    <section
      id="about"
      aria-label="About Lumixync"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24 text-white overflow-hidden 
      bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 scroll-smooth selection:bg-purple-600 selection:text-white"
    >
      {/* Background Glow Overlay */}
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08),_transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center mb-16"
      >
        <div className="flex justify-center items-center space-x-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-400 drop-shadow-lg">
            About
          </h1>
          <Image
            src="/web.webp"
            alt="Lumixync logo"
            width={130}
            height={45}
            priority
            quality={80}
            className="w-auto h-auto"
          />
        </div>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold text-white">LUMIXYNC</span>, we design, develop, and deliver powerful digital experiences.  
          By blending <span className="text-blue-400 font-medium">creativity</span>, <span className="text-purple-400 font-medium">strategy</span>, and <span className="text-pink-400 font-medium">technology</span>,  
          we help brands grow online — beautifully and effectively.
        </p>
      </motion.header>

      {/* Core Values */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto relative z-10"
      >
        {values.map((v, i) => (
          <motion.article
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 
            hover:border-blue-400/40 hover:shadow-[0_0_45px_rgba(59,130,246,0.25)] transition-all duration-300"
            aria-label={v.title}
          >
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-200 transition-all">
              {v.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{v.desc}</p>
          </motion.article>
        ))}
      </motion.div>

      {/* Floating Project Images */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-wrap justify-center gap-10 mt-20 z-10"
      >
        {images.map((img, index) => (
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.25, duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
            className="w-[260px] sm:w-[300px] md:w-[340px] rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 border border-white/10"
          >
            <div className="relative w-full h-[200px] sm:h-[240px] md:h-[260px]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={70}
                loading="lazy"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 340px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.figure>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="#services"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-16 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-3 
        rounded-xl font-semibold hover:from-blue-400 hover:to-pink-500 shadow-[0_0_25px_rgba(59,130,246,0.4)] 
        transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-700/40"
      >
        Learn More
      </motion.a>
    </section>
  );
}

export default About;
