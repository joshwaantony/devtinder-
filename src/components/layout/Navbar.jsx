// import React from "react";

// const Navbar = () => {
//   return <div>
//         <nav className="w-full fixed top-0 left-0 bg-[#7c4dff] bg-opacity-90 backdrop-blur-md shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <span className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
//             ❤️
//           </span>
//           <h1 className="text-white font-bold text-lg">devTinder</h1>
//         </div>

//         {/* Nav Links */}
//         <ul className="hidden md:flex items-center gap-6 text-white font-medium">
//           <li className="hover:text-pink-300 cursor-pointer">Home</li>
//           <li className="hover:text-pink-300 cursor-pointer">Features</li>
//           <li className="hover:text-pink-300 cursor-pointer">How It Works</li>
//           <li className="hover:text-pink-300 cursor-pointer">Tech Stacks</li>
//         </ul>

//         {/* Buttons */}
//         <div className="flex items-center gap-3">
//           <button className="px-4 py-2 rounded-full text-white font-medium border border-white hover:bg-white hover:text-[#7c4dff] transition">
//             Login
//           </button>
//           <button className="px-4 py-2 rounded-full bg-pink-500 text-white font-medium hover:bg-pink-600 transition">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </nav>
//   </div>
// };

// export default Navbar;



import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-gradient-to-r from-[#7664D8] to-[#673D9F] bg-opacity-90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center animate-pulse text-white shadow-lg">
            ❤️
          </span>
          <h1 className="text-white font-extrabold text-xl tracking-wide">devTinder</h1>
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
          <button className="px-5 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-[#673D9F] transition transform hover:scale-105">
            Login
          </button>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:from-pink-600 hover:to-purple-600 transition transform hover:scale-105 shadow-lg">
            Sign Up
          </button>
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
