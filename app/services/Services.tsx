"use client";

export function Services() {
  const services = [
    {
      title: "Web Design",
      desc: "Beautiful, responsive, and user-focused web design that leaves a lasting impression.",
    },
    {
      title: "Web Development",
      desc: "Full-stack solutions with modern frameworks like Next.js, React, and Node.js.",
    },
    {
      title: "Brand Identity",
      desc: "We craft consistent brand experiences that strengthen your market presence.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col items-center justify-center text-center p-10 text-white"
      style={{ background: "var(--lumixync-gradient)" }}
    >
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-blue-300">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 bg-white/10 border border-blue-400/30 rounded-2xl shadow-lg backdrop-blur-sm hover:bg-white/20 hover:border-blue-300 transition"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              {service.title}
            </h2>
            <p className="text-gray-200 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
          Explore More
        </button>
      </div>
    </section>
  );
}

export default Services;
