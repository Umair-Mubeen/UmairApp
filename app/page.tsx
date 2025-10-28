"use client";
import { AgencySection } from "./AgencySection";
import { Navbar } from "./Navbar";
import { WebSection} from "./WebSection";
import {FeaturedProjects} from "./FeaturedProjects";
import {WebExperienceSection} from "./WebExperienceSection";
import {Fview} from './Fview'
import {About} from './about/About';
import {Services} from './services/Services';
import {Contact} from './contact/Contact';

export default function Hero() {
  

  return (
    <>
        <main className="w-full overflow-x-hidden bg-[#0b1b4b] text-white">
            <Navbar/>
            <WebSection/>
            <AgencySection/>
            <FeaturedProjects/>
            <WebExperienceSection/>
            <About />
            <Services />
            
            <Fview/>
        </main>
    </>

  );
}

