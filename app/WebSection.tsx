import { motion } from "framer-motion";

export function WebSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden pt-32 sm:pt-36 md:pt-40 px-6 sm:px-8 md:px-12">

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
        
        {/* Left - Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="uppercase tracking-widest text-blue-300 font-semibold mb-3 text-sm sm:text-base">
            Premium Web Design Agency
          </p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Grow Brands <br className="hidden sm:block" /> Online
          </motion.h1>

          <p className="text-base sm:text-lg text-gray-300 mb-8">
            Custom Websites, Branding & Digital Marketing
          </p>

          <motion.button
            className="bg-blue-500 hover:bg-blue-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold text-base sm:text-lg"
            whileHover={{ scale: 1.05 }}
          >
            Request a Quote
          </motion.button>
        </div>

        {/* Right - Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="rotate-0 sm:rotate-3 overflow-hidden rounded-2xl shadow-xl w-full sm:w-[80%] md:w-[550px] lg:w-[600px] max-w-[90%]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Showcase"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-3 sm:gap-8 text-gray-400 text-xs sm:text-sm text-center md:text-left">
        {/* <p>⭐ 5 Star DesignRush Reviews</p>
        <p>🏆 Best Digital Agency of 2025 - Forbes</p> */}
      </div>
    </section>
  );
}

export default WebSection;
