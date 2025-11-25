"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative text-white flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* ⭐ RIGHT-SIDE FULL BACKGROUND GLOW (EXACT MATCH WITH TEAM SECTION) */}
      <div
        className="
          absolute right-0 top-0 h-full
          w-[380px] sm:w-[480px] md:w-[620px] lg:w-[750px]
          blur-[120px] opacity-60 pointer-events-none
        "
      />

      {/* Soft radial overlay */}
      <div className="absolute inset-0" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl md:text-5xl font-bold text-center mb-4 z-10"
      >
        Take the Smart Route to <br />
        <span className="text-blue-300">Digitizing Your Business Growth</span>
      </motion.h2>

      <p className="relative text-lg md:text-xl text-gray-300 text-center mb-14 z-10">
        Start A Conversation With Us
      </p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10 w-full max-w-3xl 
          bg-white/10 backdrop-blur-xl 
          rounded-2xl 
          shadow-xl p-10 
          grid grid-cols-1 md:grid-cols-2 gap-6 border border-white
        "
      >
        {/* Input Fields */}
        {[
          { label: "Name*", name: "name", type: "text", placeholder: "Your Name" },
          { label: "Company Name*", name: "company", type: "text", placeholder: "Company Name" },
          { label: "Email*", name: "email", type: "email", placeholder: "you@example.com" },
          { label: "Phone*", name: "phone", type: "tel", placeholder: "+" },
        ].map((field, i) => (
          <div key={i}>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              {field.label}
            </label>
            <input
              required
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              placeholder={field.placeholder}
              onChange={handleChange}
              className="
                w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 
                text-white focus:outline-none 
                focus:ring-2 focus:ring-blue-500/60 focus:border-blue-400 
                placeholder-gray-400
              "
            />
          </div>
        ))}

        {/* Message Field */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-200 mb-1">
            Your Message*
          </label>
          <textarea
            required
            rows={4}
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            className="
              w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 
              text-white focus:outline-none 
              focus:ring-2 focus:ring-blue-500/60 focus:border-blue-400 
              placeholder-gray-400
            "
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="
              bg-white-600/90 text-white font-semibold px-10 py-3 rounded-full shadow-lg 
              hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.45)] 
              transition
            "
          >
            Submit
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}

export default Contact;
