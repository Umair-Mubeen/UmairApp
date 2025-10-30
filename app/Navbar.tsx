"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "casestudy","Team", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0b1b4b]/80 backdrop-blur-md border-b border-white/10">
      <nav className="flex justify-between items-center px-6 py-5 md:py-4">
        {/* Logo */}
        <motion.div whileHover={{ rotate: -5, scale: 1.05 }}>
          <Link href={"/"}>
          <Image
            src="/web.png"
            alt="Logo"
            width={160}
            height={40}
            className="w-auto h-10"
          />
          </Link>
          
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {[
            { id: "about", label: "About", href: "#about" },
            { id: "services", label: "Services", href: "#services" },
            { id: "casestudy", label: "CaseStudy", href: "#casestudy" },
            { id: "team", label: "Team", href: "#team" },
            { id: "contact", label: "Contact", href: "#contact" },
          ].map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer transition-colors ${
                active === item.id ? "text-white-400" : "text-white"
              }`}
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <motion.ul
            className="absolute top-20 left-0 w-full bg-[#0b1b4b]/95 flex flex-col items-center gap-6 py-8 text-white font-medium md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {["About", "Services", "CaseStudy", "Team", "Contact"].map((label, index) => (
              <motion.li
                key={label}
                whileHover={{ scale: 1.1, color: "#60A5FA" }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setMenuOpen(false)}
              >
                <a href={`#${label.toLowerCase()}`}>{label}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
