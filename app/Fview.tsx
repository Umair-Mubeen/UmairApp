import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Fview() {
  return (
         <footer className="pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        
        {/* 1️⃣ Brand Info */}
        <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                 src="/WebLogo.png"
           
            alt="Logo"
                width={300}
                height={4000}
                className="w-auto h-10"
            />
            </Link>

          <p className="text-gray-400 pt-2">
            We craft high-performing, modern websites and digital experiences
            that help your business grow online.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            
            <li  className="hover:text-blue-400 transition">
              <Link href={"/"}>Home </Link>
              </li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#casestudy" className="hover:text-blue-400 transition">CaseStudy</a></li>
          </ul>
        </div>

      

        {/* 3️⃣ Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2">
            <li>Web Design</li>
            <li>Brand Strategy</li>
            <li>SEO Optimization</li>
            <li>eCommerce Solutions</li>
          </ul>
        </div>

        {/* 4️⃣ Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <p className="flex items-center gap-2 text-gray-400 mb-2">
            <Mail size={18} /> support@lumixync.com
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()}  All rights reserved.
      </div>
         </footer>
  );
}
export default Fview;