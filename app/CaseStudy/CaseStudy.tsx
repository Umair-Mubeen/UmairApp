"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
    <section id="casestudy" ref={sectionRef} className="text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Text */}
        <motion.div
          className="md:w-1/2 z-10 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-widest text-indigo-300 font-semibold mb-4">
            Web Marketing
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            HP Customer Loyalty Program Case Study
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
            HP needed a global rewards program to strengthen loyalty and repeat purchases.
          </p>

          <p className="text-gray-400 mb-6">
            We delivered a modern web portal, multi-channel communication, and advanced retargeting for measurable impact.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-indigo-300 mb-8">
            Result: <span className="text-white">40,000+ active members in 6 months</span>
          </h3>

          <Link
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-transform hover:scale-105"
          >
            Request a Quote
          </Link>
        </motion.div>

        {/* Hero Images */}
        <motion.div
          className="relative md:w-1/2 mt-12 md:mt-0 flex flex-col sm:flex-row md:flex-col gap-6 justify-center items-center md:items-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Primary Hero Image (LCP) */}
          <div className="relative w-full sm:w-3/4 md:w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-r from-white/60 via-white/30 to-transparent p-[2px] shadow-xl hover:scale-[1.03] transition-transform">
            <Image
              src="/HP.webp"
              alt="HP Customer Loyalty Portal"
              fill
              priority
              quality={75}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 500px"
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Secondary Image */}
          <div className="relative w-32 sm:w-40 md:w-48 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-400/40 to-blue-300/30 p-[2px] shadow-lg hover:scale-[1.03] transition-transform -mt-16 md:-mt-20 md:-mr-10">
            <Image
              src="/WebProject.webp"
              alt="HP Project Snapshot"
              fill
              quality={70}
              loading="lazy"
              sizes="(max-width: 640px) 40vw, 200px"
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-indigo-700/20 via-transparent to-purple-700/30 blur-3xl pointer-events-none" />
      </section>

      {/* Challenge Section */}
      <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-indigo-950 via-purple-900 to-blue-900">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.4),_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              The Challenge
            </h2>
            <p className="text-gray-200 mb-8 leading-relaxed text-lg">
              HP needed a scalable rewards platform that could handle multiple regions, languages, and retailer integrations.
            </p>
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 space-y-4 border border-white/10 shadow-xl">
              {[
                "Complex brand architecture across regions",
                "High implementation costs",
                "Diverse digital ecosystem",
                "Low initial awareness of the rewards program",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
                  <p className="text-gray-100">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

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
              quality={70}
              loading="lazy"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
              className="object-contain drop-shadow-[0_0_20px_rgba(147,197,253,0.5)] rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative overflow-hidden py-24 px-6 text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(147,197,253,0.4),_transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              The Solution
            </h2>
            <p className="text-gray-200 mb-8 leading-relaxed text-lg">
              Lumixync developed an integrated web ecosystem that automated validation, rewards, and communications.
            </p>
            <div className="space-y-6">
              {deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/20 transition"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] flex flex-col justify-between space-y-8"
          >
            {[1, 2].map((i) => (
              <div
                key={i}
                className="p-[2px] rounded-2xl bg-gradient-to-r from-transparent via-white/50 to-white/80 shadow-2xl"
              >
                <div className="relative w-full h-52 rounded-2xl overflow-hidden">
                  <Image
                    src="/HPSolution.webp"
                    alt={`HP Solution Preview ${i}`}
                    fill
                    quality={70}
                    loading="lazy"
                    sizes="(max-width: 640px) 90vw, 500px"
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="relative mt-16 text-center">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-indigo-950 font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition"
          >
            Tell Us About Your Project
          </motion.a>
        </div>
      </section>

      {/* Results */}
      <section className="relative overflow-hidden py-24 px-6 text-white text-center">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(147,197,253,0.4),_transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
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
                className="relative p-[2px] rounded-2xl bg-gradient-to-tr from-blue-400/60 via-purple-400/40 to-transparent shadow-2xl hover:shadow-blue-400/40 transition"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full flex flex-col justify-center">
                  <p className="text-5xl font-extrabold mb-3 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]">
                    {r.stat}
                  </p>
                  <p className="text-gray-200 text-lg">{r.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-white py-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">Want results like these?</h3>
        <p className="mb-6 text-gray-200">
          Let’s build a high-performing digital experience for your brand.
        </p>
        <Link
          href="#contact"
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition"
        >
          Let’s Talk
        </Link>
      </section>
    </section>
  );
}

export default CaseStudy;
