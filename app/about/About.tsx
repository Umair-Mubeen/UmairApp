"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function About() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -40]);

  const sections = [
    {
      title: "Creative Strategy",
      desc: `We craft insight-driven strategies that connect storytelling, design, and performance — turning ideas into brand growth. Our approach blends deep market understanding with creative thinking, ensuring your brand communicates with clarity, emotion, and purpose. From positioning to content direction, every strategy is built to engage audiences and drive measurable results.`,
      img: "/CS.png",
    },
    {
      title: "Innovative Design",
      desc: `Our design philosophy is built on clarity, emotion, and conversion. We craft visuals that not only look beautiful but serve a strategic purpose — guiding users, elevating your brand, and creating memorable experiences. Every pixel, color, and interaction is intentional. From high-end UI layouts to immersive brand identities, our designs merge aesthetics with performance to help your brand stand out in crowded digital spaces.`,
      img: "/ID.png",
    },
    {
      title: "Modern Tech Stack",
      desc: `We use a powerful, modern technology stack to build fast, scalable, and future-proof digital experiences. From React, Next.js, and TailwindCSS to AWS, databases, automations, and API integrations — everything is engineered for performance and reliability. Whether you're launching a website, dashboard, or custom web application, our tech ensures lightning-fast loading, smooth interactions, and long-term stability.`,
      img: "/Tech.png",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full px-6 md:px-12 py-24 text-white overflow-hidden"
    >
      {/* Top Header */}
      <header className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          About
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          At <span className="font-semibold text-white">LUMIXYNC</span>, we design, develop, and deliver powerful digital experiences by blending{" "}
          <span className="text-white font-semibold">creativity</span>,{" "}
          <span className="text-white font-semibold">strategy</span>, and{" "}
          <span className="text-white font-semibold">technology</span>.
        </motion.p>
      </header>

      {/* Sections */}
      <div className="flex flex-col gap-28 max-w-7xl mx-auto">
        {sections.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 text-justify"
          >
            {/* LEFT: TEXT */}
            <div className="self-center max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {item.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Right Glow */}
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2
                w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px]
                h-[280px] sm:h-[350px] md:h-[420px] lg:h-[480px]
                blur-3xl rounded-full"
              />

              {/* Image */}
              <motion.div
                style={{ y: y1 }}
                className="relative rounded-2xl overflow-hidden 
                w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[460px] xl:w-[500px] 
                aspect-[4/3] max-w-full z-10"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  quality={80}
                  className="object-fill transition-transform duration-700 hover:scale-105 mt-20"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
