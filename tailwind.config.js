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
        "quaternary": "#FF00FF",
        "darkBackground": "#1A1A1A",
        "darkText": "#FFFFFF",
        "lightBackground": "#FFFFFF",
        "lightText": "#1A1A1A",

      },
    },
  },
  plugins: [],
}