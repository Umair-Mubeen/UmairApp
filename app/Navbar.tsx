import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return (
  
            <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-6 bg-transparent z-20">
   <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icon22.png"
            alt="Logo"
            width={300}
            height={4000}
            className="w-auto h-10"
          />
          <span className="text-2xl font-bold tracking-widest text-white">
           
          </span>
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
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
 

    );
}

export default Navbar;