"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AgencySection } from "./AgencySection";

/*
  This file contains two components:
  - default export: Hero (already present)
  - named export: AgencySection (new)

  Save as: src/components/HeroAndAgency.jsx (or split into two files: Hero.jsx and AgencySection.jsx)
*/

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-6 bg-transparent z-20">
        <h1 className="text-2xl font-bold tracking-widest text-white">Ahmer Web Services</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <motion.ul
            className="absolute top-20 left-0 w-full bg-indigo-950 bg-opacity-95 flex flex-col items-center gap-6 py-8 text-white font-medium md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <li className="hover:text-blue-400 cursor-pointer" onClick={() => setMenuOpen(false)}>Home</li>
            <li className="hover:text-blue-400 cursor-pointer" onClick={() => setMenuOpen(false)}>About</li>
            <li className="hover:text-blue-400 cursor-pointer" onClick={() => setMenuOpen(false)}>Services</li>
            <li className="hover:text-blue-400 cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</li>
          </motion.ul>
        )}
      </nav>

      {/* Hero Section */}
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
          <p>🏆 Best Digital Agency of 2024 - Forbes</p>
        </div>
      </section>

      <AgencySection/>
    </>
  );
}

