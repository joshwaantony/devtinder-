




import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // ✅ Import toast
import api from "../../api/axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ emailId: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔄 Optional loading toast
    const loadingToast = toast.loading("Signing in...");

    try {
      const response = await api.post("auth/signin", formData);

      // ✅ Success toast
      toast.success("Login successful!", {
        id: loadingToast, // replaces loading toast
      });

      console.log("Login success:", response.data);

      // Save token
      localStorage.setItem("token", response.data.token);

      // Redirect after short delay
      setTimeout(() => navigate("/dashboard"), 800);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);

      // ❌ Error toast
      toast.error(
        error.response?.data?.message || "Invalid credentials! Please try again.",
        { id: loadingToast }
      );
    }
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

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
        <h1 className="text-white text-3xl font-extrabold mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-[#C0CFE0] mb-6 text-center text-sm">
          Sign in to continue your developer journey
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="emailId"
            placeholder="Email Address"
            value={formData.emailId}
            onChange={handleChange}
            required
            className="w-full py-3 px-4 bg-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
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

          <span className="flex justify-end text-[#2A80FF] font-bold cursor-pointer">
            Forgot Password
          </span>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg hover:scale-105 transition transform"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 text-center text-white/70 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-cyan-400 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}





