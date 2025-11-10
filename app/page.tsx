import type { Metadata } from "next";
import Hero from "./Hero"; // import your client component

export const metadata: Metadata = {
  title: "LUMIXYNC — Creative Web Design Agency",
  description:
    "We build modern, high-performance websites and digital experiences that help brands grow online.",
  openGraph: {
    title: "LUMIXYNC — Creative Web Design Agency",
    description:
      "We build modern, high-performance websites and digital experiences that help brands grow online.",
    url: "https://www.lumixync.com",
    siteName: "LUMIXYNC",
    images: [
      {
        url: "https://www.lumixync.com/WebLogo.png", // 🖼️ your preview image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Lumixync Logo and Website Preview",
      },
    ],
    type: "website",
  },
 
  
};

export default function Page() {
  return <Hero />; // render client-side component
}

