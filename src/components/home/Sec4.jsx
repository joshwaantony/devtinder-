
import React, { useState, useEffect } from "react";

const techStacks = [
  "React", "TypeScript", "Node.js", "Python", "Go", "Rust", "Vue.js", "Angular", "Next.js",
  "GraphQL", "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "TailwindCSS", "Flutter",
  "Swift", "Kotlin", "Java", ".NET", "Ruby on Rails"
];

const gradients = [
  "from-pink-400 to-pink-600",
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600",
  "from-yellow-400 to-amber-600",
  "from-purple-400 to-purple-600",
  "from-red-400 to-red-600",
];

const floatClasses = ["animate-float1", "animate-float2", "animate-float3"];

function Sec4() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Initialize positions
    const initial = techStacks.slice(0, 10).map(() => ({
      top: Math.random() * 80,
      left: Math.random() * 80,
    }));
    setPositions(initial);

    // Update positions every 5 seconds
    const interval = setInterval(() => {
      setPositions(prev =>
        prev.map(() => ({
          top: Math.random() * 80,
          left: Math.random() * 80,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#4C3F9E] to-[#2E236E] py-24 px-6 overflow-hidden">
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-sky-400/20 blur-[100px] rounded-full"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
          Popular <span className="text-sky-300">Tech Stacks</span>
        </h2>
        <p className="text-indigo-100 text-lg mb-12 max-w-2xl">
          Connect with developers working on the technologies that power modern innovation.
        </p>

        {/* Tech stack chips */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
          {techStacks.map((stack, index) => (
            <span
              key={stack}
              className={`bg-gradient-to-r ${gradients[index % gradients.length]} text-white/90 backdrop-blur-md shadow-lg shadow-black/20 
              px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 
              hover:scale-110 hover:shadow-xl hover:shadow-purple-500/40 hover:text-white`}
            >
              {stack}
            </span>
          ))}
        </div>

        {/* Floating tags */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {positions.map((pos, i) => (
            <span
              key={i}
              className={`absolute text-white/10 text-lg font-semibold ${floatClasses[i % 3]} transition-all duration-500`}
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
              }}
            >
              {techStacks[i]}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sec4;
