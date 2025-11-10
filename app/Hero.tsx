"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";


// ✅ Dynamically import non-critical sections for faster initial load
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
  // 🔹 Optional: theme switcher for background gradient transitions
  const themes = [
    "bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900",
    //"bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]"

  ];
  const [themeIndex, setThemeIndex] = useState(0);

  // Smooth background change every 45 seconds (optional aesthetic)
  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % themes.length);
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`min-h-screen w-full overflow-x-hidden text-white transition-all duration-700 ${themes[themeIndex]}`}
    >
      {/* Navbar stays persistent */}
      <Navbar />

      {/* Sections — each wrapped in a border divider */}
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
        <TeamSection />
      </Section>

      <Section>
        <Fview />
      </Section>
    </main>
  );
}

// ✅ Reusable wrapper for section spacing & border divider
function Section({ children }: { children: React.ReactNode }) {
  return <section className="border-t border-white/20">{children}</section>;
}
