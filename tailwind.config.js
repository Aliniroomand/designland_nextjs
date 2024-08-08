/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        lightPink:"#f97fbc61",
        lightPink2:"#FFA1C9",
        mainPink:"RGB(218 119 163)",
        darkPink2:"#E60965",
        darkPurple:"#680747",
        Black:"#141010",
        lightBG:"#a8b1eb",
        lightBG2:"#96cfec",
    },
    dropShadow:{
      "4xl":"-5px 5px 3px #2b2b2b",
      "3xl":"-2px 2px 3px #000 ",
      "8xl":"0 0 1px #000",
      "text":"1px -1px 3px #fff",
    },
    
  },
  plugins: [],
}
}
