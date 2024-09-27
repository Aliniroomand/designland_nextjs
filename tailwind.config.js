/** @type {import('tailwindcss').Config} */
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
    backgroundImage: {
      'darkBG2': 'linear-gradient(124.18deg,rgb(2, 44, 34) 0%, rgb(5, 150, 105) 66.6%)',
      "darkBG3":"linear-gradient(274.17deg, #059669 5.71%,#022C22 73.06%)",

    },
    dropShadow:{
      "4xl":"-5px 5px 3px #2b2b2b",
      "3xl":"-2px 2px 3px #000 ",
      "8xl":"0 0 1px #000",
      "text":"1px -1px 3px #fff",
    },
    boxShadow:{
      "bottom_left":"-3px 3px 3px #00000077 ",
      "darkBox":"0px 1px 2px rgba(0, 0, 0, 1), 0px 2px 6px rgba(0, 0, 0, 0.5)",
    }
    
  },
  plugins: [],
}
}
