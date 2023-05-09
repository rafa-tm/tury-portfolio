/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Bai Jamjuree", "sans-serif"],
      },
      colors: {
        "primary": "#00FF87",
        "secondary": "#60EFFF",
        "tertiary": "#FF6E00",
        "darkBackground": "#1A1A1A",
        "darkBackground-100": "#2B2B2B",
        "darkText": "#FFFFFF",
        "lightBackground": "#FFFFFF",
        "lightBackground-100": "#F2F2F2",
        "lightText": "#1A1A1A",
      },
      animation: {
        scale: "scale 2s ease-in-out infinite",
        bounce: "bounce 2s ease-in-out infinite",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}