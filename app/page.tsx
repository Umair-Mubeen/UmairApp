"use client";
import { useState } from "react";
import { AgencySection } from "./AgencySection";
import { Navbar } from "./Navbar";
import { WebSection } from "./WebSection";
import { FeaturedProjects } from "./FeaturedProjects";
import { WebExperienceSection } from "./WebExperienceSection";
import { Fview } from "./Fview";
import { About } from "./about/About";
import { Services } from "./services/Services";
import { Contact } from "./contact/Contact";
import CaseStudy from "./CaseStudy/CaseStudy";
import {TeamSection} from './team/TeamSection'
export default function Hero() {
  
  const themes = [
    "bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900",
    "bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-700",
  ];
   const [themeIndex, setThemeIndex] = useState(0);
     return (
    <>
    
<main className={`min-h-screen w-full overflow-x-hidden text-white transition-all duration-700 ${themes[themeIndex]}`}>    
          <Navbar />


        <div className="border-t border-white/20">
          <WebSection />
        </div>

        <div className="border-t border-white/20">
          <AgencySection />
          
        </div>

        <div className="border-t border-white/20">
          <FeaturedProjects />
        </div>

        <div className="border-t border-white/20">
          <WebExperienceSection />
        </div>

        <div className="border-t border-white/20">
          <About />
        </div>

        <div className="border-t border-white/20">
          <Services />
        </div>

        <div className="border-t border-white/20">
          <CaseStudy />
        </div>

        <div className="border-t border-white/20">
          <Contact />
        </div>
        <div className="border-t border-white/20">
       
         <TeamSection/>
         </div>


        <div className="border-t border-white/20">
          <Fview />
        </div>

             </main>
    </>
  );
}


// git pull origin master
// npm run build
// pm2 restart lumixync