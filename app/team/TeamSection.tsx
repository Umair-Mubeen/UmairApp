"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Kathryn Murphy",
    role: "Chief Executive Officer",
    image: "/Team/ceo.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Aston Turner",
    role: "Chief Technical Operator",
    image: "/Team/cto.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Peter Handscomb",
    role: "Full Stack Developer",
    image: "/Team/developer.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Jason Behrendorff",
    role: "Graphic Designer",
    image: "/Team/gdesigner.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      aria-label="Meet Our Team"
      className="py-16 text-white relative overflow-hidden"
    >
      {/* ⭐ RIGHT SIDE FULL BACKGROUND GLOW */}
      <div
        className="absolute right-0 top-0 h-full
        w-[380px] sm:w-[480px] md:w-[620px] lg:w-[750px]
        bg-gradient-to-tr from-indigo-700/40 via-purple-600/30 to-blue-500/20
        blur-[120px] opacity-60 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-3 pb-10">
          <Image
            src="/WebLogo.png"
            alt="Lumixync Logo"
            width={200}
            height={50}
            priority
            quality={80}
            className="w-auto bg-transparent mt-3"
          />
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Team
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-[1.03]"
            >
              {/* Profile Image */}
              <div className="relative w-full h-[380px] sm:h-[420px] md:h-[440px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 300px"
                  quality={70}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay & Social Icons */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl">
                <div className="flex gap-4 mb-16">
                  {member.socials.facebook && (
                    <a
                      href={member.socials.facebook}
                      className="text-white text-lg hover:text-blue-500 transition-colors"
                      aria-label={`${member.name} on Facebook`}
                    >
                      <FaFacebookF />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="text-white text-lg hover:text-blue-400 transition-colors"
                      aria-label={`${member.name} on Twitter`}
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="text-white text-lg hover:text-blue-600 transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <FaLinkedinIn />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      className="text-white text-lg hover:text-pink-500 transition-colors"
                      aria-label={`${member.name} on Instagram`}
                    >
                      <FaInstagram />
                    </a>
                  )}
                </div>
              </div>

              {/* Name & Role */}
              <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm text-white text-center py-3">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
