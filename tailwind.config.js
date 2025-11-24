/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-purple": {
          DEFAULT: "#a855f7",
          light: "#b26fff",
          dark: "#9b5eff",
        },
        "dark-bg": {
          DEFAULT: "#0f0f15",
          light: "#14141a",
        },
      },
      fontFamily: {
        futuristic: ["Rajdhani", "Exo 2", "sans-serif"],
        body: ["DM Sans", "Poppins", "system-ui", "sans-serif"],
        hero: ["Rajdhani", "Exo 2", "sans-serif"],
        neon: ["Orbitron", "Bebas Neue", "Rajdhani", "Exo 2", "sans-serif"],
      },
      boxShadow: {
        "neon-sm":
          "0 0 5px rgba(178, 111, 255, 0.4), 0 0 10px rgba(178, 111, 255, 0.3), 0 0 15px rgba(178, 111, 255, 0.2)",
        "neon-md":
          "0 0 10px rgba(178, 111, 255, 0.5), 0 0 20px rgba(178, 111, 255, 0.4), 0 0 30px rgba(178, 111, 255, 0.3)",
        "neon-lg":
          "0 0 15px rgba(178, 111, 255, 0.6), 0 0 30px rgba(178, 111, 255, 0.5), 0 0 45px rgba(178, 111, 255, 0.4)",
        "neon-xl":
          "0 0 20px rgba(178, 111, 255, 0.7), 0 0 40px rgba(178, 111, 255, 0.6), 0 0 60px rgba(178, 111, 255, 0.5)",
        "neon-hover":
          "0 0 20px rgba(192, 132, 252, 0.6), 0 0 40px rgba(192, 132, 252, 0.5), 0 0 60px rgba(192, 132, 252, 0.4)",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.2)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
