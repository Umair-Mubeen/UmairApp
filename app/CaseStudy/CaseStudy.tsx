"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function CaseStudy() {
  const sectionRef = useRef(null);

  const results = [
    { stat: "56%", label: "Increase in Retention" },
    { stat: "40K+", label: "New Members Joined" },
    { stat: "2.5x", label: "Faster Load Times" },
  ];

  const deliverables = [
    {
      title: "A User-Friendly Website",
      desc: "We built a responsive customer portal where users can register purchases, validate serials, and track loyalty points — optimized for speed and engagement.",
    },
    {
      title: "Program Communication",
      desc: "Retailers and resellers were provided with shareable newsletter templates promoting HP’s loyalty program.",
    },
    {
      title: "Retargeting",
      desc: "A tailored remarketing strategy reached potential buyers using engagement metrics like time-on-page and video views.",
    },
    {
      title: "Nurturing Communication",
      desc: "Automated email flows informed customers about enrollment, rewards, and product validation updates in real-time.",
    },
  ];

  return (
    <section id="casestudy" ref={sectionRef} className="text-white relative">

      {/* ===================== HERO SECTION ===================== */}
    <section className="relative overflow-hidden py-20 md:py-32 px-6 md:px-12">

  {/* 🔥 FULL RIGHT SIDE BACKGROUND GLOW */}
  <div
    className="absolute right-0 top-0 h-full 
    w-[420px] sm:w-[550px] md:w-[700px] lg:w-[880px]
    blur-[130px] opacity-60 pointer-events-none"
  />

  {/* 🌫 Soft radial overlay (prevents white flash) */}
  <div
    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06),_transparent_70%)] pointer-events-none"
  />

  {/* CONTENT WRAPPER */}
  <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 z-10">

    {/* ➤ LEFT TEXT SECTION */}
    <motion.div
      className="md:w-3/5 lg:w-1/2 text-center md:text-left"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="uppercase tracking-widest text-indigo-300 font-semibold mb-4">
        Web Marketing
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
        HP Customer Loyalty Program Case Study
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify">
        HP needed a global rewards program to strengthen loyalty and repeat purchases.
      </p>

      <p className="text-gray-400 mb-6 text-justify">
        We delivered a modern web portal, multi-channel communication, and advanced retargeting for measurable impact.
      </p>

      <h3 className="text-xl font-semibold text-indigo-300 mb-8">
        Result:{" "}
        <span className="text-white">40,000+ active members in 6 months</span>
      </h3>

      <motion.a
        href="#contact"
        className="inline-block border border-white text-white px-8 py-3 rounded-xl font-semibold 
        hover:bg-[#2563eb]/20 hover:border-[#3b82f6] transition-all"
        whileHover={{ scale: 1.07 }}
      >
        Request a Quote
      </motion.a>
    </motion.div>

    {/* ➤ RIGHT IMAGE STACK */}
    <motion.div
      className="relative w-full md:w-1/2 flex flex-col items-end gap-6"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
    >
      {/* MAIN IMAGE */}
      <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/HP.webp"
          alt="HP Customer Loyalty Portal"
          fill
          className="object-cover"
        />
      </div>

      {/* TOP RIGHT SMALL IMAGE (floating) */}
      <div className="relative w-36 sm:w-44 md:w-48 aspect-square rounded-2xl overflow-hidden shadow-xl -mt-14 md:-mt-20">
        <Image
          src="/WebProject.webp"
          alt="HP Project Snapshot"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>

  </div>
</section>

      {/* ===================== CHALLENGE SECTION ===================== */}
      <section className="relative overflow-hidden py-24 px-6">

        {/* ⭐ BACKGROUND GLOW RIGHT SIDE */}
        <div
          className="absolute right-0 top-0 h-full 
          w-[380px] sm:w-[500px] md:w-[650px] lg:w-[750px]
          blur-[120px] opacity-60 pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
          
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Challenge
            </h2>

            <p className="text-gray-200 mb-8 leading-relaxed text-lg text-justify">
              HP needed a scalable rewards platform that could handle multiple regions, languages, and retailer integrations.
            </p>

            <div className="bg-white/10 rounded-2xl p-6 space-y-4">
              {[
                "Complex brand architecture across regions",
                "High implementation costs",
                "Diverse digital ecosystem",
                "Low initial awareness of the rewards program",
              ].map((item, i) => (
                <motion.div key={i} className="flex gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
                  <p className="text-gray-100 text-justify">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 md:h-[450px]"
          >
            <Image
              src="/WebSolution.webp"
              alt="HP Web Development Challenges"
              fill
              className="object-contain rounded-xl drop-shadow-xl"
            />
          </motion.div>

        </div>
      </section>

      {/* ===================== SOLUTION SECTION ===================== */}
      <section className="relative overflow-hidden py-24 px-6">

        {/* ⭐ RIGHT SIDE FULL GLOW */}
        <div
          className="absolute right-0 top-0 h-full 
          w-[380px] sm:w-[500px] md:w-[650px] lg:w-[750px]
          blur-[120px] opacity-60 pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Solution
            </h2>

            <p className="text-gray-200 mb-8 leading-relaxed text-lg text-justify">
              Lumixync developed an integrated web ecosystem that automated validation, rewards, and communications.
            </p>

            <div className="space-y-6">
              {deliverables.map((item, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-5">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-100 text-justify">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGES RIGHT */}
          <div className="relative flex items-center justify-center w-full mt-10">

            {/* ⭐ RIGHT SIDE GLOW */}
            <div
              className="absolute right-0 top-0 h-full 
              w-[380px] sm:w-[500px] md:w-[650px] lg:w-[750px]
              blur-[120px] opacity-60 pointer-events-none"
            />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[500px] flex flex-col justify-between space-y-8"
            >
              {[1, 2].map((i) => (
                <div key={i} className="bg-white/20 p-[2px] rounded-2xl">
                  <div className="relative w-full h-52 rounded-2xl overflow-hidden">
                    <Image
                      src="/HPSolution.webp"
                      alt={`HP Solution Preview ${i}`}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </section>

      {/* ===================== RESULTS SECTION ===================== */}
      <section className="relative overflow-hidden py-24 px-6 text-center">

        {/* ⭐ GLASS RIGHT-SIDE GLOW */}
        <div
          className="absolute right-0 top-0 h-full 
          w-[380px] sm:w-[500px] md:w-[650px] lg:w-[750px]
          blur-[120px] opacity-60 pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto z-10">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-12"
          >
            The Results
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
              >
                <p className="text-5xl font-extrabold mb-3">{r.stat}</p>
                <p className="text-gray-200 text-lg">{r.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </section>
  );
}

export default CaseStudy;
