"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function CaseStudy() {
    const results = [
    { stat: "56%", label: "Increase in Retention" },
    { stat: "40K+", label: "New Members Joined" },
    { stat: "2.5x", label: "Faster Load Times" },
  ];
  const deliverables = [
    {
      title: "A User-Friendly Website",
      desc: "We built a portal for customers to submit their purchase proof and product serial numbers in a custom interface. This portal also allows them to see the points they have gathered and gaming key download after purchases are validated. There is also an interface for the users that joined the program, but not purchased yet.",
    },
    {
      title: "Program Communication",
      desc: "We ensured that retailers and resellers can refer HP’s program in their own newsletters associated with HP products.",
    },
    {
      title: "Retargeting",
      desc: "We created a retargeting campaign that shows ads across the web to people who have previously visited the website, using metrics such as time-on-page and video views to suggest interest in HP printing or gaming products.",
    },
    {
      title: "Nurturing Communication",
      desc: "We set up automatic email messaging for information about enrolment, the level of points, required action, successful submissions and product validation.",
    },
  ];
  return (
    <>
    <section id="casestudy">
<section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20 md:py-32 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto shadow-2xl">
  {/* Text Section */}
  <motion.div
    className="md:w-1/2 z-10 text-center md:text-left"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <p className="uppercase tracking-widest text-indigo-300 font-semibold mb-4">
      Web Marketing
    </p>

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
      HP Customer Loyalty Program Case Study
    </h1>

    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
      HP was looking to implement a new global reward program to increase brand loyalty.
    </p>

    <p className="text-gray-400 mb-6">
      We built a user-friendly website and an advanced retargeting campaign using data, analytics, and email marketing.
    </p>

    <h3 className="text-lg sm:text-xl font-semibold text-indigo-300 mb-8">
      The result: <span className="text-white">40,000 active reward members in 6 months</span>
    </h3>

    <a
      href="#contact"
      className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
    >
      Request A Quote
    </a>
  </motion.div>

  {/* Image Section */}
  <motion.div
    className="relative md:w-1/2 mt-12 md:mt-0 flex flex-col sm:flex-row md:flex-col gap-6 justify-center items-center md:items-end"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9 }}
  >
    {/* Main Image */}
    <div className="relative w-64 sm:w-1/2 md:w-3/4 aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-r from-white/60 via-white/30 to-transparent p-[2px] shadow-xl hover:scale-[1.03] transition-transform">
      <Image
        src="https://cdni.iconscout.com/illustration/premium/thumb/web-service-illustration-svg-download-png-7558166.png"
        alt="HP web design illustration"
        fill
        className="object-cover rounded-2xl"
      />
    </div>

    {/* Smaller Overlay Image */}
    <div className="relative w-44 sm:w-1/3 md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-400/40 to-blue-300/30 p-[2px] shadow-lg hover:scale-[1.03] transition-transform md:-mt-20 md:-mr-10">
      <Image
        src="https://png.pngtree.com/png-vector/20200312/ourmid/pngtree-modern-flat-design-concept-of-web-hosting-services-database-storage-data-png-image_2157850.jpg"
        alt="HPOA Web Project"
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  </motion.div>

  {/* Decorative Glow */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-indigo-700/20 via-transparent to-purple-700/30 blur-3xl pointer-events-none" />
</section>

    
  <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 py-24 px-6 text-white">
      {/* Floating gradient glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.4),_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-white-400 text-transparent">
            The Challenge
          </h2>
          <p className="text-gray-200 mb-8 leading-relaxed text-lg">
            HP faced several difficulties when implementing its rewards program globally, such as:
          </p>

          <div className="backdrop-blur-md bg-white/10 text-white-400 rounded-2xl p-6 space-y-4 border border-white/10 shadow-xl">
            {[
              "Complex Brand Architecture",
              "High Costs",
              "Extensive Digital Portfolio",
              "Lack Of Awareness — HP’s audience was initially unaware of the reward program that offered points and bonuses for every purchase.",
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

        {/* Right image / vector */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[450px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Challenges vector"
            fill
            className="object-contain drop-shadow-[0_0_20px_rgba(147,197,253,0.5)]"
          />
        </motion.div>
      </div>
    </section>


    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 py-24 px-6 text-white">
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(147,197,253,0.4),_transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            The Solution
          </h2>
          <p className="text-gray-200 mb-8 leading-relaxed text-lg">
            LUMIXYNC built a connected online program that provides instant bonuses to customers.
          </p>

          <div className="space-y-6">
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/20 transition"
              >
                <h3 className="text-xl font-semibold text-white-300 mb-2">{item.title}</h3>
                <p className="text-gray-100 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right-side dual images with gradient border */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] flex flex-col justify-between space-y-8"
        >
          
          {/* Bottom image with gradient border */}
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-transparent via-white/50 to-white/80 shadow-2xl">
            <div className="relative w-full h-52 rounded-2xl overflow-hidden">
              <Image
                src="https://cdni.iconscout.com/illustration/premium/thumb/web-service-illustration-svg-download-png-7558166.png"
                alt="HP Solution Bottom Image"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-transparent via-white/50 to-white/80 shadow-2xl">
            <div className="relative w-full h-52 rounded-2xl overflow-hidden">
              <Image
                src="https://cdni.iconscout.com/illustration/premium/thumb/web-service-illustration-svg-download-png-7558166.png"
                alt="HP Solution Bottom Image"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="relative mt-16 text-center">
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-indigo-950 font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition"
        >
          Tell Us About Your Project
        </motion.a>
      </div>
    </section>

            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 py-24 px-6 text-white">
      {/* Subtle glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(147,197,253,0.4),_transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 tracking-tight bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
        >
          The Results
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="relative p-[2px] rounded-2xl bg-gradient-to-tr from-blue-400/60 via-purple-400/40 to-transparent shadow-2xl hover:shadow-blue-400/40 transition"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full flex flex-col justify-center">
                <p className="text-5xl font-extrabold mb-3 text-white drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]">
                  {r.stat}
                </p>
                <p className="text-gray-200 text-lg">{r.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white py-16 text-center">
      <h3 className="text-2xl font-semibold mb-4">Want results like these?</h3>
      <p className="mb-6 text-gray-200">
        Let’s build a high-performing digital experience for your brand.
      </p>
      <Link
        href=""
        className="bg-white text-indigo-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition"
      >
        Let’s Talk
      </Link>
    </section>

     </section>
   


  </>
  );
}



export default CaseStudy;