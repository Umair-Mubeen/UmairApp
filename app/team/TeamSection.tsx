"use client";
import Link from "next/link";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const teamMembers = [
  { name: "Gohar Rind", role: "CEO", image: "/team.jpg", socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" } },
  { name: "Ahmer Zafar", role: "CTO", image: "/team.jpg", socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" } },
  { name: "Umair Mubeen", role: "Developer", image: "/team.jpg", socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" } },
  { name: "Sharukh Mohsin", role: "Graphic Designer", image: "/team.jpg", socials: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" } },
];

export function TeamSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-3 pb-5">
  <Image
    src="/web.png"
    alt="Logo"
    width={250}
    height={45}
    className="w-auto bg-transparent z-20"
  />
  <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
    Team
  </h1>
</div>

          
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group relative overflow-hidden rounded-xl shadow-lg">
              {/* Profile Image */}
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
              />

              {/* Gradient overlay with social icons */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                {/* Social icons container slightly above bottom */}
                <div className="flex gap-4 mb-16"> {/* Increased bottom margin */}
                  {member.socials.facebook && <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-blue-500"><FaFacebookF /></a>}
                  {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-blue-400"><FaTwitter /></a>}
                  {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-blue-700"><FaLinkedinIn /></a>}
                  {member.socials.instagram && <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-pink-500"><FaInstagram /></a>}
                </div>
              </div>

              {/* Name & Role over the image */}
              <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-center py-2">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
