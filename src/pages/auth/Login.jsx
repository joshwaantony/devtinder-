

import React, { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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

      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
        <h1 className="text-white text-3xl font-extrabold mb-2 text-center">
   Welcome Back
        </h1>
        <p className="text-[#C0CFE0] mb-6 text-center text-sm">
            Sign in to continue your developer journey
        </p>

        {/* Social Buttons */}
        <div className="flex space-x-3 mb-6">
          <button className="flex-1 flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2.5 font-semibold shadow-lg hover:opacity-90 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.6 0-11.994 5.395-11.994 12.065 0 5.34 3.475 9.88 8.302 11.482.5.091.682-.216.682-.481 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.177-1.11-1.491-1.11-1.491-.909-.635.069-.622.069-.622 1.004.071 1.532 1.032 1.532 1.032.893 1.528 2.341 1.088 2.91.833.09-.647.349-1.088.634-1.34-2.221-.254-4.555-1.113-4.555-4.954 0-1.094.39-1.989 1.029-2.689-.104-.253-.446-1.274.098-2.655 0 0 .841-.271 2.754 1.025A9.567 9.567 0 0 1 12 5.875c.85.004 1.706.115 2.505.337 1.915-1.296 2.755-1.025 2.755-1.025.546 1.381.203 2.402.1 2.655.641.7 1.029 1.595 1.029 2.689 0 3.85-2.336 4.697-4.56 4.946.359.31.678.919.678 1.852 0 1.337-.012 2.419-.012 2.748 0 .267.18.577.688.479C17.135 18.536 20 14.77 20 10.342 20 4.792 15.5.297 12 .297z" />
            </svg>
            GitHub
          </button>
          <button className="flex-1 flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-red-400 to-yellow-400 text-white py-2.5 font-semibold shadow-lg hover:opacity-90 transition">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path
                fill="#4285F4"
                d="M21.35 11.1H12v2.76h5.42c-.23 1.28-.89 2.36-1.87 3.1v2.56h3.02c1.86-1.73 2.95-4.28 2.95-7.36z"
              />
              <path
                fill="#34A853"
                d="M12 22c2.7 0 4.96-.89 6.61-2.43l-3.23-2.37c-.89.6-2.02.97-3.38.97-2.6 0-4.81-1.76-5.6-4.13H1.05v2.41A10 10 0 0 0 12 22z"
              />
              <path
                fill="#FBBC05"
                d="M4.4 12.04A5.99 5.99 0 0 1 3.67 9.98v-2.41H1.05A10.01 10.01 0 0 0 0 10c0 1.56.37 3.04 1.05 4.31l3.35-2.27z"
              />
              <path
                fill="#EA4335"
                d="M10 4c1.48 0 2.81.51 3.85 1.5l2.88-2.88A9.96 9.96 0 0 0 10 0C6.13 0 2.76 2.29 1.05 5.69l3.35 2.41C5.19 6.56 7.43 4.8 10 4z"
              />
            </svg>
            Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-white/20" />
          <span className="mx-3 text-white/50 text-sm">or continue with</span>
          <hr className="flex-grow border-white/20" />
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
         
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-3 px-4 bg-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full py-3 px-4 bg-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-white/70 hover:text-white"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <span className="flex justify-end text-[#2A80FF] font-bold cursor-pointer">Forgot Password</span>
        </div>

        {/* Submit Button */}
        <button className="w-full mt-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg hover:scale-105 transition transform">
        Sign In
        </button>

        {/* Footer */}
        <p className="mt-5 text-center text-white/70 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-cyan-400 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
