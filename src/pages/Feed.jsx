





import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Feed() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b82f6] p-4">
      <div className="relative w-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col items-center py-8 px-6 
        transition-transform hover:scale-105 hover:shadow-2xl 
        animate-float-slow">
        {/* Avatar with gradient ring */}
        <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-fuchsia-400 p-1 shadow-lg transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
          <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center shadow-inner">
            {/* Replace with real avatar */}
            <span className="text-4xl text-white font-bold">RA</span>
          </div>
        </div>

        {/* Name and Role */}
        <div className="mt-4 text-center">
          <h2 className="text-white text-2xl font-extrabold capitalize">
            Ruben Andrews
          </h2>
          <p className="text-purple-300 text-sm mt-1">Mid Developer</p>
          <div className="flex justify-center items-center text-sm text-white/60 mt-2 gap-2">
            <span>📍</span>
            <span>New York, USA</span>
            <span>|</span>
            <span>Age 25</span>
          </div>
        </div>

        {/* About Section */}
        <p className="mt-4 text-white/80 text-center text-sm px-4">
          Passionate about shipping delightful products and building with modern
          JavaScript. Always exploring new technologies and frameworks.
        </p>

        {/* Skills */}
        <div className="mt-6 w-full flex flex-col items-center">
          <div className="text-white font-bold text-lg mb-3">Tech Stack</div>
          <div className="flex flex-wrap gap-3 justify-center w-full">
            {["JavaScript", "React", "Node.js", "MongoDB", "TypeScript"].map(
              (skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-400 shadow-md 
                    hover:scale-110 transition-transform animate-pulse-slow"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex gap-6 text-white/60 text-2xl">
          <a
            href="#"
            className="hover:text-cyan-400 transition-transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="hover:text-blue-500 transition-transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-purple-400 transition-transform hover:scale-125"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Optional Footer */}
        <div className="mt-6 w-full border-t border-white/10 pt-4 text-center text-white/50 text-xs">
          Updated: October 2025
        </div>
      </div>

      {/* Custom animations */}
      <style>
        {`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-float-slow {
            animation: floatSlow 6s ease-in-out infinite;
          }

          @keyframes pulseSlow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.05); }
          }
          .animate-pulse-slow {
            animation: pulseSlow 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}







