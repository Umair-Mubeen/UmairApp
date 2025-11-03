import { motion, useScroll, useTransform } from "framer-motion";
export function AgencySection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -40]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 text-white overflow-hidden">
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
          
          {/* Right Column - Four Square Floating Images with Captions */}
<div className="relative h-[90vh] md:h-[100vh] flex items-center justify-center">
  {/* Background gradient glow */}
  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700/30 via-purple-600/20 to-blue-500/20 blur-3xl rounded-full"></div>

  {/* Grid container */}
  <div className="grid grid-cols-2 gap-6 md:gap-10 z-10">
    {/* Image 1 - E-Commerce Solutions */}
    <motion.div
      style={{ y: y1 }}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative group overflow-hidden rounded-2xl shadow-2xl border border-white/10 w-40 h-40 md:w-64 md:h-64"
    >
      <img
        src="https://images.unsplash.com/photo-1677693972403-db681288b5da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670"
        alt="E-Commerce Development"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rotate-2"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
        <p className="text-white text-sm md:text-base font-medium mb-3">E-Commerce Development</p>
      </div>
    </motion.div>

    {/* Image 2 - Custom Web Portals */}
    <motion.div
      style={{ y: y1 }}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="relative group overflow-hidden rounded-2xl shadow-2xl border border-white/10 w-40 h-40 md:w-64 md:h-64"
    >
      <img
        src="https://www.applications-platform.com/wp-content/uploads/2019/10/Web-portals-dashboard.png"
        alt="Web Portals"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 -rotate-2"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
        <p className="text-white text-sm md:text-base font-medium mb-3">Custom Web Portals</p>
      </div>
    </motion.div>

    {/* Image 3 - SaaS Solutions */}
    <motion.div
      style={{ y: y1 }}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.4 }}
      className="relative group overflow-hidden rounded-2xl shadow-2xl border border-white/10 w-40 h-40 md:w-64 md:h-64"
    >
      <img
        src="https://images.unsplash.com/photo-1621036579842-9080c7119f67?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670"
        alt="SaaS Solutions"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rotate-1"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
        <p className="text-white text-sm md:text-base font-medium mb-3">SaaS & Cloud Platforms</p>
      </div>
    </motion.div>

    {/* Image 4 - Enterprise Solutions */}
    <motion.div
      style={{ y: y1 }}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.6 }}
      className="relative group overflow-hidden rounded-2xl shadow-2xl border border-white/10 w-40 h-40 md:w-64 md:h-64"
    >
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740"
        alt="Enterprise Web Apps"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 -rotate-3"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
        <p className="text-white text-sm md:text-base font-medium mb-3">Enterprise Web Solutions</p>
      </div>
    </motion.div>
  </div>

  {/* Floating glow effect */}
  <div className="absolute -bottom-12 right-8 w-44 h-44 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
</div>

          

      </div>

    </section>
  );
}
