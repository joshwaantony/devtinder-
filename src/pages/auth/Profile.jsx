




import React, { useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPhone,
  FaGraduationCap,
  FaHashtag,
  FaInfoCircle,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaTwitter,
  FaTimes,
} from "react-icons/fa";

export default function Profile() {
  const [showPhotoPreview, setShowPhotoPreview] = useState(null);
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B82F6] overflow-hidden">
      {/* Floating animated blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-2xl animate-float1"></div>
      <div className="absolute bottom-[25%] left-[10%] w-[200px] h-[200px] bg-yellow-400/20 rounded-full blur-2xl animate-float2"></div>

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-drift"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 overflow-y-auto max-h-[90vh]">
        <h1 className="text-white text-3xl font-extrabold mb-2 text-center">
          Complete Your Profile
        </h1>
        <p className="text-white/70 text-center mb-8">
          Add details to make your profile stand out
        </p>

        {/* Profile Photo */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 flex items-center gap-2">
            <FaUser /> Profile Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setShowPhotoPreview(URL.createObjectURL(e.target.files[0]))
            }
            className="w-full py-3 px-4 rounded-xl bg-white/20 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition cursor-pointer"
          />
          {showPhotoPreview && (
            <img
              src={showPhotoPreview}
              alt="Preview"
              className="mt-4 w-24 h-24 rounded-full object-cover border-2 border-white/20"
            />
          )}
          <p className="text-white/50 text-sm mt-1">
            Drag & drop or click to browse. PNG, JPG, GIF up to 100MB.
          </p>
        </div>

        {/* Gender & Age */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
              <FaUser /> Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
              <FaUser /> Age
            </label>
            <input
              type="number"
              value={25}
              readOnly
              className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
        </div>

        {/* Location & Headline */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 flex items-center gap-2">
            <FaMapMarkerAlt /> Location
          </label>
          <input
            type="text"
            value="San Francisco, CA"
            className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 flex items-center gap-2">
            <FaBriefcase /> Headline
          </label>
          <input
            type="text"
            value="Full Stack Developer | React Enthusiast"
            className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>

        {/* Phone & Experience */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
              <FaPhone /> Phone Number
            </label>
            <input
              type="text"
              value="+1 (555) 123-4567"
              className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2 flex items-center gap-2">
              <FaGraduationCap /> Experience Level
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            >
              <option value="">Select your experience level</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid-level</option>
              <option value="senior">Senior</option>
            </select>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 flex items-center gap-2">
            <FaHashtag /> Skills & Technologies
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Add a skill (e.g., React, Python)"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <button
              type="button"
              onClick={addSkill}
              className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition transform"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white/20 text-white text-sm flex items-center gap-1"
              >
                {skill}{" "}
                <FaTimes
                  className="cursor-pointer"
                  onClick={() => removeSkill(skill)}
                />
              </span>
            ))}
          </div>

          {/* ✨ Animated gradient glow effect */}
          <p className="mt-3 text-sm bg-gradient-to-r from-[#40CFFA] via-[#8B5CF6] to-[#FF6EC7] bg-[length:200%_auto] text-transparent bg-clip-text animate-shine">
            Popular skills: JavaScript, TypeScript, Python, Java, Go, Rust, React, Angular, Vue.js, Next.js, Node.js,
            Express, Django, Flask, Spring Boot, PostgreSQL, MongoDB, Redis, Docker, Kubernetes
          </p>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 flex items-center gap-2">
            <FaInfoCircle /> Bio
          </label>
          <textarea
            placeholder="Tell us about yourself..."
            className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none h-24"
          />
        </div>

        {/* Social Links */}
        <div className="space-y-4 mb-6">
          <label className="block text-white font-semibold mb-2">
            Social Links
          </label>
          <div className="flex gap-2">
            <FaGithub className="text-white/70 mt-3" />
            <input
              type="text"
              placeholder="GitHub: https://github.com/username"
              className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
          <div className="flex gap-2">
            <FaLinkedin className="text-white/70 mt-3" />
            <input
              type="text"
              placeholder="LinkedIn: https://linkedin.com/in/username"
              className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
          <div className="flex gap-2">
            <FaGlobe className="text-white/70 mt-3" />
            <input
              type="text"
              placeholder="Portfolio: https://yourportfolio.com"
              className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
          <div className="flex gap-2">
            <FaTwitter className="text-white/70 mt-3" />
            <input
              type="text"
              placeholder="Twitter: https://twitter.com/username"
              className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#40CFFA] via-[#3B58DD] to-[#FF6EC7] shadow-lg hover:scale-105 transition transform mb-4">
          Create Account
        </button>

        <p className="text-white/70 text-center text-sm">
          Already have an account?{" "}
          <a href="#" className="text-[#40CFFA] font-semibold hover:underline">
            Sign in
          </a>
        </p>
        <p className="text-white/50 text-xs text-center mt-2">
          By creating an account, you agree to our{" "}
          <span className="underline">Terms of Service</span> and{" "}
          <span className="underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
