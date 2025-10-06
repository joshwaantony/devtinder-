

import React from "react";

function Sec3() {
  const steps = [
    {
      num: "1",
      color: "from-pink-400 to-pink-300",
      title: "Create Your Dev Profile",
      desc: "Showcase your skills, favorite technologies, current projects, and what you’re looking for in the dev community.",
    },
    {
      num: "2",
      color: "from-sky-400 to-sky-300",
      title: "Discover & Match",
      desc: "Explore through developer profiles. Like someone? If they like you back, it’s a match! Start building meaningful connections.",
    },
    {
      num: "3",
      color: "from-green-400 to-green-300",
      title: "Connect & Collaborate",
      desc: "Chat with your matches, share projects, pair program, or just talk about the latest tech trends. The possibilities are endless.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#6A5ACD] to-[#4C3F9E] py-24 px-6 overflow-hidden">
      {/* Decorative Wave Background */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-40 text-purple-400/20"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,256L48,224C96,192,192,128,288,101.3C384,75,480,85,576,117.3C672,149,768,203,864,213.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-sky-400/20 blur-[130px] rounded-full"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Left: Steps */}
        <div className="flex-1 space-y-10">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
            How It Works
          </h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-md">
            Discover developers, match, and start building something amazing
            together.
          </p>

          <div className="relative pl-6">
            {/* Connector line */}
            <div className="absolute left-3 top-4 bottom-4 w-[2px] bg-white/20"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex gap-4 mb-10 group transition-all hover:-translate-y-1"
              >
                {/* Step Number */}
                <div
                  className={`bg-gradient-to-br ${step.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform`}
                >
                  {step.num}
                </div>
                {/* Text */}
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">
                    {step.title}
                  </h4>
                  <p className="text-indigo-200 text-sm md:text-base leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Enhanced Image */}
        <div className="flex-1 flex justify-center relative">
          {/* Gradient Halo */}
          <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-pink-400/40 to-sky-400/30 blur-3xl animate-pulse"></div>

          {/* Glow ring */}
          <div className="absolute w-[320px] h-[320px] rounded-full border border-white/30 backdrop-blur-lg animate-spin-slow"></div>

          {/* Image */}
          <img
            src="/stayhome.png"
            alt="How It Works Illustration"
            className="relative z-10 rounded-[2rem] shadow-2xl max-w-[420px] w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Sec3;
