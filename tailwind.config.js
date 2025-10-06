/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%': { transform: 'translate(0px, 0px)' },
          '25%': { transform: 'translate(15px, -10px)' },
          '50%': { transform: 'translate(-10px, 15px)' },
          '75%': { transform: 'translate(10px, -5px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
      },
      animation: {
        float1: 'float1 6s ease-in-out infinite',
        float2: 'float2 8s ease-in-out infinite',
        float3: 'float3 10s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}




