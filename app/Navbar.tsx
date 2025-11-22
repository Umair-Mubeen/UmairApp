"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const mobileMenuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const sections = ["home", "about", "services", "casestudy", "team", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!menuOpen) return;
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      setMenuOpen(false);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "casestudy", label: "Case Study", href: "#casestudy" },
    { id: "team", label: "Team", href: "#team" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    
   <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">

  <nav
    className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 border border-[rgba(168,85,255,0.25)]"
    aria-label="Main navigation"
  >
        {/* Logo */}
        <motion.div whileHover={{ rotate: -5, scale: 1.04 }}>
          <Link href="/" aria-label="Homepage">
            <Image
              src="/WebLogo.png"
              alt="Lumixync logo"
              width={160}
              height={40}
              priority
              className="w-auto h-10"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-white font-medium items-center">
          {navItems.map((item) => (
            <motion.li key={item.id} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={active === item.id ? "page" : undefined}
                className={`cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-1 ${
                  active === item.id ? "text-blue-300" : "text-white/95"
                }`}
              >
                {item.label}
              </a>
            </motion.li>
          ))}

          {/* CTA */}
            <motion.a
    href="#contact"
    aria-label="Request a Quote"
    className="inline-block border border-white text-white 
               px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold 
               transition-all duration-300 ease-in-out
               hover:bg-[#2563eb]/20 hover:border-[#3b82f6] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
               focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50"
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.97 }}
  >
    Request a Quote
  </motion.a>
 
        </ul>

        {/* Mobile Menu Button */}
        <button
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
          className="md:hidden p-2 rounded-md text-white hover:text-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
            id="mobile-menu"
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="absolute top-[64px] left-0 w-full bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#1a1a1a] flex flex-col items-center gap-4 py-6 text-white font-medium md:hidden border-t border-white/5 shadow-lg"
          >
            {navItems.map((item, index) => (
              <motion.li key={item.id} whileHover={{ scale: 1.03 }} transition={{ delay: index * 0.03 }}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block w-full text-center py-3 ${
                    active === item.id ? "text-blue-200 font-semibold" : "text-white/95"
                  }`}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}

            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block w-11/12 mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md"
              >
                Request a Quote
              </a>
            </li>
          </motion.ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
