/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "textNormal": "#FFFFFF",
        "textDark": "#090707",
        "link": "#097FD9",
        "para": "#E1E1E1",
        "dark": "#090707",
        "light": "#FFFFFF",
        "sliderBg" : "#0D0D0D",
      }
    },
  },
  plugins: [],
}