




// import React, { useState } from "react";
// import {
//   FaUser,
//   FaMapMarkerAlt,
//   FaBriefcase,
//   FaPhone,
//   FaGraduationCap,
//   FaHashtag,
//   FaInfoCircle,
//   FaGithub,
//   FaLinkedin,
//   FaGlobe,
//   FaTwitter,
//   FaTimes,
// } from "react-icons/fa";

// export default function Profile() {
//   const [showPhotoPreview, setShowPhotoPreview] = useState(null);
//   const [gender, setGender] = useState("");
//   const [experience, setExperience] = useState("");
//   const [skills, setSkills] = useState([]);
//   const [newSkill, setNewSkill] = useState("");

//   const addSkill = () => {
//     if (newSkill && !skills.includes(newSkill)) {
//       setSkills([...skills, newSkill]);
//       setNewSkill("");
//     }
//   };

//   const removeSkill = (skillToRemove) => {
//     setSkills(skills.filter((skill) => skill !== skillToRemove));
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B82F6] overflow-hidden">
//       {/* Floating animated blobs */}
//       <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl animate-spin-slow"></div>
//       <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-3xl animate-spin-slow"></div>
//       <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-2xl animate-float1"></div>
//       <div className="absolute bottom-[25%] left-[10%] w-[200px] h-[200px] bg-yellow-400/20 rounded-full blur-2xl animate-float2"></div>

//       {/* Floating particles */}
//       {[...Array(25)].map((_, i) => (
//         <span
//           key={i}
//           className="absolute w-2 h-2 bg-white/20 rounded-full animate-drift"
//           style={{
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             animationDuration: `${4 + Math.random() * 6}s`,
//           }}
//         />
//       ))}

//       <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 overflow-y-auto max-h-[90vh]">
//         <h1 className="text-white text-3xl font-extrabold mb-2 text-center">
//           Complete Your Profile
//         </h1>
//         <p className="text-white/70 text-center mb-8">
//           Add details to make your profile stand out
//         </p>

//         {/* Profile Photo */}
//         <div className="mb-6">
//           <label className="block text-white font-semibold mb-2 flex items-center gap-2">
//             <FaUser /> Profile Photo
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) =>
//               setShowPhotoPreview(URL.createObjectURL(e.target.files[0]))
//             }
//             className="w-full py-3 px-4 rounded-xl bg-white/20 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition cursor-pointer"
//           />
//           {showPhotoPreview && (
//             <img
//               src={showPhotoPreview}
//               alt="Preview"
//               className="mt-4 w-24 h-24 rounded-full object-cover border-2 border-white/20"
//             />
//           )}
//           <p className="text-white/50 text-sm mt-1">
//             Drag & drop or click to browse. PNG, JPG, GIF up to 100MB.
//           </p>
//         </div>

//         {/* Gender & Age */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <label className="block text-white font-semibold mb-2 flex items-center gap-2">
//               <FaUser /> Gender
//             </label>
//             <select
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             >
//               <option value="">Select gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-white font-semibold mb-2 flex items-center gap-2">
//               <FaUser /> Age
//             </label>
//             <input
//               type="number"
//               value={25}
//               readOnly
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             />
//           </div>
//         </div>

//         {/* Location & Headline */}
//         <div className="mb-6">
//           <label className="block text-white font-semibold mb-2 flex items-center gap-2">
//             <FaMapMarkerAlt /> Location
//           </label>
//           <input
//             type="text"
//             value="San Francisco, CA"
//             className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-white font-semibold mb-2 flex items-center gap-2">
//             <FaBriefcase /> Headline
//           </label>
//           <input
//             type="text"
//             value="Full Stack Developer | React Enthusiast"
//             className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//           />
//         </div>

//         {/* Phone & Experience */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <label className="block text-white font-semibold mb-2 flex items-center gap-2">
//               <FaPhone /> Phone Number
//             </label>
//             <input
//               type="text"
//               value="+1 (555) 123-4567"
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             />
//           </div>
//           <div>
//             <label className="block text-white font-semibold mb-2 flex items-center gap-2">
//               <FaGraduationCap /> Experience Level
//             </label>
//             <select
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             >
//               <option value="">Select your experience level</option>
//               <option value="junior">Junior</option>
//               <option value="mid">Mid-level</option>
//               <option value="senior">Senior</option>
//             </select>
//           </div>
//         </div>

//         {/* Skills */}
//         <div className="mb-6">
//           <label className="block text-white font-semibold mb-2 flex items-center gap-2">
//             <FaHashtag /> Skills & Technologies
//           </label>
//           <div className="flex gap-2 mb-2">
//             <input
//               type="text"
//               placeholder="Add a skill (e.g., React, Python)"
//               value={newSkill}
//               onChange={(e) => setNewSkill(e.target.value)}
//               className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             />
//             <button
//               type="button"
//               onClick={addSkill}
//               className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition transform"
//             >
//               Add
//             </button>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {skills.map((skill, idx) => (
//               <span
//                 key={idx}
//                 className="px-3 py-1 rounded-full bg-white/20 text-white text-sm flex items-center gap-1"
//               >
//                 {skill}{" "}
//                 <FaTimes
//                   className="cursor-pointer"
//                   onClick={() => removeSkill(skill)}
//                 />
//               </span>
//             ))}
//           </div>

//           {/* ✨ Animated gradient glow effect */}
//           <p className="mt-3 text-sm bg-gradient-to-r from-[#40CFFA] via-[#8B5CF6] to-[#FF6EC7] bg-[length:200%_auto] text-transparent bg-clip-text animate-shine">
//             Popular skills: JavaScript, TypeScript, Python, Java, Go, Rust, React, Angular, Vue.js, Next.js, Node.js,
//             Express, Django, Flask, Spring Boot, PostgreSQL, MongoDB, Redis, Docker, Kubernetes
//           </p>
//         </div>

//         {/* Bio */}
//         <div className="mb-6">
//           <label className="block text-white font-semibold mb-2 flex items-center gap-2">
//             <FaInfoCircle /> Bio
//           </label>
//           <textarea
//             placeholder="Tell us about yourself..."
//             className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none h-24"
//           />
//         </div>

//         {/* Social Links */}
//         <div className="space-y-4 mb-6">
//           <label className="block text-white font-semibold mb-2">
//             Social Links
//           </label>
//           <div className="flex gap-2">
//             <FaGithub className="text-white/70 mt-3" />
//             <input
//               type="text"
//               placeholder="GitHub: https://github.com/username"
//               className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             />
//           </div>
//           <div className="flex gap-2">
//             <FaLinkedin className="text-white/70 mt-3" />
//             <input
//               type="text"
//               placeholder="LinkedIn: https://linkedin.com/in/username"
//               className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             />
//           </div>
//           <div className="flex gap-2">
//             <FaGlobe className="text-white/70 mt-3" />
//             <input
//               type="text"
//               placeholder="Portfolio: https://yourportfolio.com"
//               className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             />
//           </div>
//           <div className="flex gap-2">
//             <FaTwitter className="text-white/70 mt-3" />
//             <input
//               type="text"
//               placeholder="Twitter: https://twitter.com/username"
//               className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#40CFFA] via-[#3B58DD] to-[#FF6EC7] shadow-lg hover:scale-105 transition transform mb-4">
//           Create Account
//         </button>

//         <p className="text-white/70 text-center text-sm">
//           Already have an account?{" "}
//           <a href="#" className="text-[#40CFFA] font-semibold hover:underline">
//             Sign in
//           </a>
//         </p>
//         <p className="text-white/50 text-xs text-center mt-2">
//           By creating an account, you agree to our{" "}
//           <span className="underline">Terms of Service</span> and{" "}
//           <span className="underline">Privacy Policy</span>.
//         </p>
//       </div>
//     </div>
//   );
// }







// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaUser,
//   FaMapMarkerAlt,
//   FaBriefcase,
//   FaPhone,
//   FaGraduationCap,
//   FaHashtag,
//   FaInfoCircle,
//   FaGithub,
//   FaLinkedin,
//   FaGlobe,
//   FaTwitter,
//   FaTimes,
// } from "react-icons/fa";
// import api from "../../api/axios";

// export default function Profile() {
//   const navigate = useNavigate();

//   // ✅ All input states
//   const [photo, setPhoto] = useState(null);
//   const [showPhotoPreview, setShowPhotoPreview] = useState(null);
//   const [gender, setGender] = useState("");
//   const [experience, setExperience] = useState("");
//   const [skills, setSkills] = useState([]);
//   const [newSkill, setNewSkill] = useState("");
//   const [location, setLocation] = useState("");
//   const [headline, setHeadline] = useState("");
//   const [phone, setPhone] = useState("");
//   const [bio, setBio] = useState("");
//   const [github, setGithub] = useState("");
//   const [linkedin, setLinkedin] = useState("");
//   const [portfolio, setPortfolio] = useState("");
//   const [twitter, setTwitter] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ✅ Add & Remove Skills
//   const addSkill = () => {
//     if (newSkill && !skills.includes(newSkill)) {
//       setSkills([...skills, newSkill]);
//       setNewSkill("");
//     }
//   };
//   const removeSkill = (skillToRemove) => {
//     setSkills(skills.filter((skill) => skill !== skillToRemove));
//   };

//   // ✅ Handle submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("gender", gender);
//       formData.append("experience", experience);
//       formData.append("location", location);
//       formData.append("headline", headline);
//       formData.append("phone", phone);
//       formData.append("bio", bio);
//       formData.append("github", github);
//       formData.append("linkedin", linkedin);
//       formData.append("portfolio", portfolio);
//       formData.append("twitter", twitter);
//       formData.append("skills", JSON.stringify(skills));
//       if (photo) formData.append("photo", photo);

//       const res = await api.post("/profile/complete", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert(res.data.message || "Profile completed successfully!");
//       navigate("/dashboard"); // redirect after success
//     } catch (err) {
//       console.error("Error completing profile:", err.response || err);
//       alert(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B82F6] overflow-hidden">
//       {/* Background animations */}
//       <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl animate-spin-slow"></div>
//       <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-3xl animate-spin-slow"></div>

//       <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 overflow-y-auto max-h-[90vh]">
//         <h1 className="text-white text-3xl font-extrabold mb-2 text-center">
//           Complete Your Profile
//         </h1>
//         <p className="text-white/70 text-center mb-8">
//           Add details to make your profile stand out
//         </p>

//         <form onSubmit={handleSubmit}>
//           {/* Photo Upload */}
//           <div className="mb-6">
//             <label className="block text-white font-semibold mb-2 flex items-center gap-2">
//               <FaUser /> Profile Photo
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => {
//                 setPhoto(e.target.files[0]);
//                 setShowPhotoPreview(URL.createObjectURL(e.target.files[0]));
//               }}
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20"
//             />
//             {showPhotoPreview && (
//               <img
//                 src={showPhotoPreview}
//                 alt="Preview"
//                 className="mt-4 w-24 h-24 rounded-full object-cover border-2 border-white/20"
//               />
//             )}
//           </div>

//           {/* Gender & Experience */}
//           <div className="grid grid-cols-2 gap-4 mb-6">
//             <div>
//               <label className="block text-white mb-2">Gender</label>
//               <select
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//                 className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20"
//               >
//                 <option value="">Select gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-white mb-2">Experience</label>
//               <select
//                 value={experience}
//                 onChange={(e) => setExperience(e.target.value)}
//                 className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20"
//               >
//                 <option value="">Select experience</option>
//                 <option value="junior">Junior</option>
//                 <option value="mid">Mid-level</option>
//                 <option value="senior">Senior</option>
//               </select>
//             </div>
//           </div>

//           {/* Location */}
//           <div className="mb-6">
//             <label className="block text-white mb-2">Location</label>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               placeholder="Enter your city"
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20"
//             />
//           </div>

//           {/* Headline */}
//           <div className="mb-6">
//             <label className="block text-white mb-2">Headline</label>
//             <input
//               type="text"
//               value={headline}
//               onChange={(e) => setHeadline(e.target.value)}
//               placeholder="e.g. Frontend Developer | React Expert"
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20"
//             />
//           </div>

//           {/* Phone */}
//           <div className="mb-6">
//             <label className="block text-white mb-2">Phone</label>
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="+91 98765 43210"
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20"
//             />
//           </div>

//           {/* Skills */}
//           <div className="mb-6">
//             <label className="block text-white font-semibold mb-2">
//               Skills & Technologies
//             </label>
//             <div className="flex gap-2 mb-2">
//               <input
//                 type="text"
//                 placeholder="Add skill"
//                 value={newSkill}
//                 onChange={(e) => setNewSkill(e.target.value)}
//                 className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20"
//               />
//               <button
//                 type="button"
//                 onClick={addSkill}
//                 className="py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold"
//               >
//                 Add
//               </button>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {skills.map((skill, idx) => (
//                 <span
//                   key={idx}
//                   className="px-3 py-1 rounded-full bg-white/20 text-white text-sm flex items-center gap-1"
//                 >
//                   {skill}{" "}
//                   <FaTimes
//                     className="cursor-pointer"
//                     onClick={() => removeSkill(skill)}
//                   />
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Bio */}
//           <div className="mb-6">
//             <label className="block text-white mb-2">Bio</label>
//             <textarea
//               value={bio}
//               onChange={(e) => setBio(e.target.value)}
//               placeholder="Tell us about yourself..."
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 resize-none h-24"
//             />
//           </div>

//           {/* Social Links */}
//           <div className="space-y-4 mb-6">
//             <input
//               type="text"
//               placeholder="GitHub"
//               value={github}
//               onChange={(e) => setGithub(e.target.value)}
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20"
//             />
//             <input
//               type="text"
//               placeholder="LinkedIn"
//               value={linkedin}
//               onChange={(e) => setLinkedin(e.target.value)}
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20"
//             />
//             <input
//               type="text"
//               placeholder="Portfolio"
//               value={portfolio}
//               onChange={(e) => setPortfolio(e.target.value)}
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20"
//             />
//             <input
//               type="text"
//               placeholder="Twitter"
//               value={twitter}
//               onChange={(e) => setTwitter(e.target.value)}
//               className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#40CFFA] via-[#3B58DD] to-[#FF6EC7] shadow-lg hover:scale-105 transition transform"
//           >
//             {loading ? "Saving..." : "Create Account"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }





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
import api from "../../api/axios";

export default function Profile() {
  // ✅ States
  const [showPhotoPreview, setShowPhotoPreview] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [location, setLocation] = useState("");
  const [headline, setHeadline] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [twitter, setTwitter] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Add skill
  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  // ✅ Remove skill
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  // ✅ Handle API call
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("gender", gender);
      formData.append("experience", experience);
      formData.append("skills", JSON.stringify(skills));
      formData.append("location", location);
      formData.append("headline", headline);
      formData.append("phone", phone);
      formData.append("bio", bio);
      formData.append("github", github);
      formData.append("linkedin", linkedin);
      formData.append("portfolio", portfolio);
      formData.append("twitter", twitter);

      if (photoFile) {
        formData.append("photo", photoFile);
      }

      const res = await api.post("auth/profile-complete", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(res.data.message || "✅ Profile completed successfully!");
      console.log("Profile response:", res.data);

      // Redirect after success (optional)
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B82F6] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-2xl animate-float1"></div>
      <div className="absolute bottom-[25%] left-[10%] w-[200px] h-[200px] bg-yellow-400/20 rounded-full blur-2xl animate-float2"></div>

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
            onChange={(e) => {
              setPhotoFile(e.target.files[0]);
              setShowPhotoPreview(URL.createObjectURL(e.target.files[0]));
            }}
            className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition cursor-pointer"
          />
          {showPhotoPreview && (
            <img
              src={showPhotoPreview}
              alt="Preview"
              className="mt-4 w-24 h-24 rounded-full object-cover border-2 border-white/20"
            />
          )}
        </div>

        {/* Gender & Experience */}
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
              <FaGraduationCap /> Experience Level
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            >
              <option value="">Select experience</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid-level</option>
              <option value="senior">Senior</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 flex items-center gap-2">
            <FaMapMarkerAlt /> Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Your location"
            className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>

        {/* Headline */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 flex items-center gap-2">
            <FaBriefcase /> Headline
          </label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            placeholder="Your professional headline"
            className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 flex items-center gap-2">
            <FaPhone /> Phone
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
            className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>

        {/* Skills */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 flex items-center gap-2">
            <FaHashtag /> Skills
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a skill"
              className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none"
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
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-white/20 text-white text-sm flex items-center gap-1"
              >
                {skill}
                <FaTimes
                  onClick={() => removeSkill(skill)}
                  className="cursor-pointer"
                />
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 flex items-center gap-2">
            <FaInfoCircle /> Bio
          </label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself"
            className="w-full py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none h-24 resize-none"
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
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              placeholder="GitHub: https://github.com/username"
              className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <FaLinkedin className="text-white/70 mt-3" />
            <input
              type="text"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="LinkedIn: https://linkedin.com/in/username"
              className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <FaGlobe className="text-white/70 mt-3" />
            <input
              type="text"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              placeholder="Portfolio: https://yourportfolio.com"
              className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <FaTwitter className="text-white/70 mt-3" />
            <input
              type="text"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="Twitter: https://twitter.com/username"
              className="flex-1 py-3 px-4 rounded-xl bg-white/20 text-white border border-white/20 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#40CFFA] via-[#3B58DD] to-[#FF6EC7] shadow-lg hover:scale-105 transition transform mb-4 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Create Account"}
        </button>

        <p className="text-white/70 text-center text-sm">
          Already have an account?{" "}
          <a href="#" className="text-[#40CFFA] font-semibold hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
