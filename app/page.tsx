"use client";
import { AgencySection } from "./AgencySection";
import { Navbar } from "./Navbar";
import { WebSection} from "./WebSection";
import FeaturedProjects from "./FeaturedProject";

export default function Hero() {
  

  return (
    <>
      <Navbar/>
      <WebSection/>
      <AgencySection/>
      <FeaturedProjects/>
    </>
  );
}

