import { motion } from "framer-motion";

export function WebSection(){
    return (

<section className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-10 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="max-w-3xl z-10 mt-20">
          <p className="uppercase tracking-widest text-blue-300 font-semibold mb-3">
            Premium Web Design Agency
          </p>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Grow Brands <br /> Online
          </motion.h1>
          <p className="text-lg text-gray-300 mb-8">
            Custom Websites, Branding & Digital Marketing
          </p>
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
          >
            Request a Quote
          </motion.button>
        </div>

        <div className="absolute right-6 md:right-10 top-1/4 rotate-6 overflow-hidden rounded-2xl shadow-xl w-[90%] md:w-[600px]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Showcase"
            className="w-full object-cover"
          />
        </div>

        <div className="absolute bottom-10 flex flex-col md:flex-row gap-4 md:gap-10 text-gray-400 text-sm px-6">
          <p>⭐ 5 Star DesignRush Reviews</p>
          <p>🏆 Best Digital Agency of 2025 - Forbes</p>
        </div>
      </section>
   
    )
    ;
}

export default WebSection;