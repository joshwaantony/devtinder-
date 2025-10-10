



import React from "react";
import { Menu, Code } from "lucide-react"; // Using Code icon for dev theme
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-gradient-to-r from-[#7664D8] to-[#673D9F] bg-opacity-90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {/* Animated Code Icon */}
            <Code className="w-7 h-7 text-white animate-spin-slow hover:animate-spin cursor-pointer transition-transform" />
            {/* Animated Text */}
            <span className="text-white font-extrabold text-xl tracking-wide hover:scale-105 transition-transform animate-pulse">
              devTinder
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {["Home", "Features", "How It Works", "Tech Stacks"].map((link) => (
            <li
              key={link}
              className="relative group cursor-pointer hover:text-pink-300 transition"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-pink-300 transition-all duration-300 group-hover:w-full rounded"></span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/auth/login"
            className="px-5 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-[#673D9F] transition transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:from-pink-600 hover:to-purple-600 transition transform hover:scale-105 shadow-lg"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <Menu size={28} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
