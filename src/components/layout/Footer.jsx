





import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#7664D8] to-[#673D9F] text-gray-200 py-14 px-8 overflow-hidden">
      {/* Large floating orbs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-400/20 blur-3xl rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full animate-spin-slow"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h1 className="text-white font-extrabold text-3xl tracking-wide">
            dev<span className="text-pink-400">Tinder</span>
          </h1>
          <p className="text-white/80 text-sm mt-2 max-w-xs">
            Connecting developers worldwide to collaborate, learn, and grow together.
          </p>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {["About", "License", "Contribute", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="relative group hover:text-white transition"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="#"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all transform hover:scale-110"
          >
            <Github size={18} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all transform hover:scale-110"
          >
            <Twitter size={18} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all transform hover:scale-110"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all transform hover:scale-110"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="relative z-10 mt-12 border-t border-white/10 pt-6 text-center text-white/60 text-sm">
        &copy; {new Date().getFullYear()} <span className="font-semibold">devTinder</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
