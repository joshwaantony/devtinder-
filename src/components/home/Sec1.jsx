




import React, { useState } from "react";

function Sec1() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-[#3B58DD] via-[#5F8DFF] to-[#8EC2FF] text-white pt-28 pb-24 px-6 overflow-hidden min-h-[90vh]">
      {/* Animated glowing orbs */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-pink-400/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-28 -right-24 w-[400px] h-[400px] bg-sky-400/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-1/3 w-[220px] h-[220px] bg-purple-400/25 rounded-full blur-2xl animate-float1"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Glassmorphic hero card */}
        <div className="backdrop-blur-lg bg-white/20 border border-white/10 rounded-3xl px-10 py-12 shadow-2xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Meet Your Next <span className="text-pink-300">Dev Match</span>
          </h1>
          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Discover developers who code like you, for partnerships, learning, or team-building—devTinder makes real tech connections.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-semibold shadow-xl text-white hover:scale-105 hover:bg-opacity-90 transition-transform duration-200">
              🚀 Start Matching
            </button>
            <button className="px-8 py-4 rounded-full bg-white text-blue-800 font-semibold shadow-lg hover:bg-gray-100 transition-transform duration-200 hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Image with Popup */}
          <div className="flex justify-center animate-float3">
            <img
              src="/hero-image.png"
              alt="Dev Match"
              className="rounded-3xl shadow-2xl w-full max-w-2xl object-cover cursor-pointer border-4 border-white/30 hover:scale-105 transition-transform duration-200"
              onClick={() => setShowPopup(true)}
              style={{ boxShadow: "0 10px 34px 0 rgba(59,88,221,0.15)" }}
            />
          </div>
          {/* Popup modal */}
          {showPopup && (
            <div
              className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center transition-all"
              onClick={() => setShowPopup(false)}
            >
              <div className="relative p-3 rounded-2xl bg-white/80 shadow-2xl backdrop-blur-xl flex items-center justify-center animate-scalein">
                <img
                  src="/hero-image.png"
                  alt="Enlarged Dev Match"
                  className="w-[90vw] max-w-3xl h-auto rounded-2xl shadow-xl"
                  onClick={e => e.stopPropagation()}
                  style={{ boxShadow: "0 20px 48px 4px rgba(59,88,221,0.15)" }}
                />
                <button
                  className="absolute top-3 right-4 px-3 py-1 rounded font-bold text-blue-700 bg-white/80 hover:bg-white transition"
                  onClick={() => setShowPopup(false)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Optional: Tailwind animation utility (in tailwind.config.js custom keyframes) */}
      <style>{`
        @keyframes scalein { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-scalein { animation: scalein 0.22s cubic-bezier(.4,.08,.73,1.04) forwards; }
      `}</style>
    </section>
  );
}

export default Sec1;
