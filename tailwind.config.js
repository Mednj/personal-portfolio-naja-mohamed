/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        "ink-2": "#0b1728",
        electric: "#17b8ff",
        mint: "#2ee7a4",
      },
      boxShadow: {
        glow: "0 0 45px rgba(23, 184, 255, 0.16)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "slow-pulse": "slowPulse 7s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowPulse: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
