"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-center p-10 text-white"
      style={{ background: "var(--lumixync-gradient)" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-300">
          Get in Touch
        </h1>
        <p className="text-gray-200 mb-10 max-w-xl mx-auto">
          Let’s discuss your ideas, projects, or collaborations.  
          We’d love to hear from you — every message matters to us.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-md bg-white/10 border border-blue-400/30 rounded-2xl p-8 backdrop-blur-sm shadow-xl"
      >
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
          transition={{ duration: 0.2 }}
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full bg-transparent border border-blue-500/40 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none mb-4"
        />

        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
          transition={{ duration: 0.2 }}
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-transparent border border-blue-500/40 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none mb-4"
        />

        <motion.textarea
          whileFocus={{ scale: 1.02, borderColor: "#60a5fa" }}
          transition={{ duration: 0.2 }}
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="w-full bg-transparent border border-blue-500/40 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none mb-4"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={submitted}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            submitted
              ? "bg-green-500 text-white cursor-default"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {submitted ? "Message Sent!" : "Send Message"}
        </motion.button>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        className="mt-16 space-y-3 text-gray-300 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p>📧 contact@lumixync.com</p>
        <p>📞 +92 300 1234567</p>
        <p>🌐 www.lumixync.netlify.app</p>
      </motion.div>

      <p className="mt-10 text-xs text-gray-400">
        © {new Date().getFullYear()} Lumixync. All rights reserved.
      </p>
    </section>
  );
}

export default Contact;
