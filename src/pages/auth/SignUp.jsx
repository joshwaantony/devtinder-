





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../../api/axios";
import toast from "react-hot-toast";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    emailId: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await api.post("auth/signup", formData);
      console.log("Signup success:", response.data);
      toast.success("Signup successful!");

      // ✅ Redirect to Profile page after successful signup
      setTimeout(() => navigate("/auth/profile"), 800);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B82F6] overflow-hidden">
      {/* Background decorations */}
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

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
        <h1 className="text-white text-3xl font-extrabold mb-2 text-center">
          Create Account
        </h1>
        <p className="text-[#C0CFE0] mb-6 text-center text-sm">
          Sign up and start your journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 py-3 px-4 bg-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 py-3 px-4 bg-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          <input
            type="email"
            name="emailId"
            placeholder="Email Address"
            value={formData.emailId}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-3 px-4 bg-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-white/70 hover:text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full py-3 px-4 bg-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-3 text-white/70 hover:text-white"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg hover:scale-105 transition transform"
          >
            Create Account
          </button>
        </form>

        <p className="mt-5 text-center text-white/70 text-sm">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-cyan-400 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
