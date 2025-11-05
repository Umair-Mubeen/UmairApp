import { motion } from "framer-motion";

export function FeaturedProjects() {
  return (
    <section className="relative min-h-screen text-white flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      
      {/* Title Section */}
      <div className="text-center mb-10">
        <p className="text-blue-300 font-semibold uppercase tracking-wide">Our Work</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
          Featured Website Design Projects
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          Custom B2C, B2B, and eCommerce solutions optimized for traffic,
          engagement, and conversion.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {["Featured", "B2B", "B2C", "Ecommerce"].map((tab, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`px-6 py-3 rounded-lg border ${
              index === 0 ? "bg-white text-[#000000] font-bold" : "border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white"
            } transition`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Floating Project Images */}
      <div className="relative flex flex-wrap justify-center gap-10 md:gap-16">
        {[ 
          "/FeatureProjects/B2B.png",
          "/FeatureProjects/B2C.png",
          "/FeatureProjects/ECommerce.png"
  
        ].map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="w-[280px] md:w-[320px] transition-transform duration-300 overflow-hidden rounded-2xl shadow-lg"
          >
            <img src={img} alt={`Project ${index + 1}`} className="w-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
