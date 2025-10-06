
import React from "react";
import { Code, Users, GitBranch } from "lucide-react";

function Sec2() {
  const features = [
    {
      icon: <Code className="w-10 h-10 text-sky-400" />,
      title: "Skill-Based Matching",
      desc: "Get matched based on your programming languages, frameworks, and tech interests. Find developers who speak your code.",
    },
    {
      icon: <Users className="w-10 h-10 text-green-300" />,
      title: "Build Your Network",
      desc: "Connect with developers for pair programming, mentorship, job opportunities, or just to share your coding journey.",
    },
    {
      icon: <GitBranch className="w-10 h-10 text-pink-300" />,
      title: "Project Collaboration",
      desc: "Find the perfect collaborator for your side projects, hackathons, or open source contributions. Code together, grow together.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#6A5ACD] to-[#4C3F9E] py-20 px-6 overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/30 blur-[120px] rounded-full"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
          Why Choose <span className="text-sky-300">devTinder?</span>
        </h2>
        <p className="text-indigo-100 text-base md:text-lg max-w-2xl mb-16">
          Built by developers, for developers. Discover your perfect coding
          match in the tech community.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300 rounded-3xl p-8 flex flex-col items-center text-center hover:-translate-y-2 hover:bg-white/20"
            >
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sec2;
