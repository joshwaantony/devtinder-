



import React from "react";

function Sec5() {
  return (
    <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 py-24 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-sky-400/30 rounded-full blur-3xl animate-spin-slow"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4 animate-float1">
          Ready to Find Your Dev Community?
        </h2>

        {/* Subtitle */}
        <p className="text-purple-200 text-lg md:text-xl mb-10 animate-float2">
          Join thousands of developers who are already connecting, learning, and building amazing things together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Primary Button */}
          <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-2xl hover:scale-105 transition transform duration-300">
            <span className="text-xl">🚀</span>
            <span>Start Your Journey</span>
          </button>

          {/* Secondary text */}
          <span className="text-white/80 text-sm md:text-base animate-float3">✨ Free to join</span>
        </div>
      </div>
    </section>
  );
}

export default Sec5;






