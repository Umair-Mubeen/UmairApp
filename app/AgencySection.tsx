import { motion, useScroll, useTransform } from "framer-motion";
export function AgencySection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -40]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      <div className="absolute top-6 left-0 w-full flex justify-center md:justify-start gap-6 z-10 px-6 md:px-12">
        <div className="flex items-center gap-6 overflow-x-auto py-3 md:py-0">
          {['Sony', 'HP', 'P&G', 'NFL', 'Forbes'].map((name) => (
            <div key={name} className="flex-shrink-0 opacity-80 bg-white/5 px-4 py-2 rounded-md text-sm md:text-base">
              {name}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        {/* Left Column - Text */}
        <div className="pt-20 md:pt-40 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            Creative Web Agency Delivering Custom Solutions
          </h2>
          <p className="text-gray-300 mb-6">
            We craft beautiful, high-performance websites with a focus on measurable results. Our process is collaborative, transparent, and tailored to your brand.
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-400">✔</span>
              <span>Custom design tailored to your brand and goals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-400">✔</span>
              <span>Fast, SEO-friendly development using modern stacks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-green-400">✔</span>
              <span>Ongoing support and performance optimization</span>
            </li>
          </ul>

          <div className="mt-2">
            <a href="#contact" className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-md font-semibold">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Column - Floating Images */}
        <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
          <motion.img
            style={{ y: y1 }}
            src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80"
            alt="Mockup 1"
            className="absolute w-56 md:w-80 rounded-xl shadow-2xl object-cover rotate-3 top-8 right-12"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.img
            style={{ y: y2 }}
            src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80"
            alt="Mockup 2"
            className="absolute w-72 md:w-96 rounded-2xl shadow-2xl object-cover -rotate-2 top-20 right-0"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          />

          <motion.img
            style={{ y: y1 }}
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
            alt="Mockup 3"
            className="absolute w-48 md:w-64 rounded-lg shadow-xl object-cover -rotate-6 bottom-6 left-6"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Subtle gradient overlay to match hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 opacity-30 pointer-events-none" />
    </section>
  );
}
