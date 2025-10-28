"use client";
import Image from "next/image";

export  function About() {
  const values = [
    {
      title: "Creative Strategy",
      desc: "We develop powerful strategies that connect design, storytelling, and performance to amplify your brand presence.",
    },
    {
      title: "Innovative Design",
      desc: "Our visuals are clean, modern, and functional — built to convert, not just impress.",
    },
    {
      title: "Technology with Purpose",
      desc: "Every pixel and line of code serves a purpose — to enhance user experience and drive measurable results.",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left space-y-8 py-20">
  <div className="flex justify-center md:justify-start items-center space-x-3">
    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
      About
    </h1>
    <Image
      src="/icon22.png"
      alt="Logo"
      width={500}
      height={45}
      className="w-auto h-100 md:h-12 items-center bg-transparent z-20"
    />
  </div>

  <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
    We design, develop, and deliver digital experiences that shape the
    future of brands. With a perfect balance of creativity and strategy,
    Lumixync transforms ideas into powerful, high-performing digital
    realities.
  </p>

  <div className="grid md:grid-cols-3 gap-8 mt-12">
    {values.map((v, i) => (
      <div
        key={i}
        className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white-400/20 hover:border-white-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-start space-x-5"
      >
        {v.logo && (
          <Image
            src={v.logo}
            alt={`${v.title} logo`}
   
  className="w-auto h-10 md:h-12 relative z-20 brightness-125 contrast-125"
          />
        )}
        <div>
          <h3 className="text-2xl md:text-2xl font-extrabold leading-tight mb-6">
            {v.title}
          </h3>
          <p className="text-gray-200 leading-relaxed">{v.desc}</p>
        </div>
      </div>
    ))}
  </div>

  <button className="mt-12 bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300">
    Learn More
  </button>
</div>

     </section>
  );
}

export default About;