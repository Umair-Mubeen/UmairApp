import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO + Social metadata
export const metadata: Metadata = {
  title: "LUMIXYNC | Creative Web Design Agency",
  description:
    "LUMIXYNC builds high-performance, beautifully designed websites and digital experiences to help brands grow online.",
  metadataBase: new URL("https://www.lumixync.com"), // ensures absolute URLs for images

  openGraph: {
    title: "LUMIXYNC — Creative Web Design Agency",
    description:
      "Modern, high-performance websites and digital experiences built to scale your brand.",
    url: "https://www.lumixync.com",
    siteName: "LUMIXYNC",
    images: [
      {
        url: "https://www.lumixync.com/web.webp",
        width: 1200,
        height: 630,
        alt: "LUMIXYNC Logo and Website Preview",
      },
    ],
    type: "website",
  },

  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
