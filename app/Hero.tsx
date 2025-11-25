"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";

// Lazy load sections
const WebSection = dynamic(() => import("./WebSection").then(mod => mod.WebSection), { ssr: false });
const AgencySection = dynamic(() => import("./AgencySection").then(mod => mod.AgencySection), { ssr: false });
const FeaturedProjects = dynamic(() => import("./FeaturedProjects").then(mod => mod.FeaturedProjects), { ssr: false });
const WebExperienceSection = dynamic(() => import("./WebExperienceSection").then(mod => mod.WebExperienceSection), { ssr: false });
const About = dynamic(() => import("./about/About").then(mod => mod.About), { ssr: false });
const Services = dynamic(() => import("./services/Services").then(mod => mod.Services), { ssr: false });
const CaseStudy = dynamic(() => import("./CaseStudy/CaseStudy"), { ssr: false });
const Contact = dynamic(() => import("./contact/Contact").then(mod => mod.Contact), { ssr: false });
const TeamSection = dynamic(() => import("./team/TeamSection").then(mod => mod.TeamSection), { ssr: false });
const Fview = dynamic(() => import("./Fview").then(mod => mod.Fview), { ssr: false });

export default function Hero() {
  const themes = [
    //"bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#1a1a1a]"
    //"bg-gradient-to-br from-[#1a1b20] via-[#1f2026] to-[#212229]"
    //"bg-gradient-to-br from-[#05050A] via-[#0A0F1A] to-[#0F0A1A]"
    //"bg-gradient-to-br from-[#06060F] via-[#0B0A20] to-[#120A2A]"
    "bg-gradient-to-br from-[#04040A] via-[#0A0D1A] to-[#111122]"
  ];

  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % themes.length);
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
    
    
    <main
      className={`w-full overflow-x-hidden text-white transition-colors duration-700 ${themes[themeIndex]}`}
    >
    <Section>
          <WebSection />
        </Section>

        <Section>
          <AgencySection />
        </Section>

        <Section>
          <FeaturedProjects />
        </Section>

        <Section>
          <WebExperienceSection />
        </Section>

        <Section>
          <About />
        </Section>

        <Section>
          <Services />
        </Section>

        <Section>
          <CaseStudy />
        </Section>

        <Section>
          <Contact />
        </Section>


        <Section>
          <Fview />
        </Section>
      </main>
    </>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="overflow-visible">
      <div className="w-full h-[1px] border border-[rgba(168,85,255,0.25)]" />
      {children}
    </section>
  );
}
