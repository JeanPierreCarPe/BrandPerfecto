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
        "black-primary": "#252525",
        "black-secondary": "#333333",
        "white-primary": "#FFF6F4",
        "white-secondary": "#FBFBFB",
        "white-tertiary": "#FFFFFF",
        "yellow-custom-500": "#F2BE22",
        "yellow-custom-400": "#F4C63E",
        "yellow-custom-300": "#F5CD56",
        "orange-custom-500": "#F29727",
        "orange-custom-400": "#F3A23F",
        "orange-custom-300": "#F5AE57",
        "red-custom-500": "#F24C3D",
        "red-custom-400": "#F46558",
        "red-custom-300": "#F57B70",
      },
      dropShadow:{
        'section': '0px 0px 10px rgba(0,0,0,0.15)',
        'card': '0px 0px 10px rgba(0,0,0,0.10)',
        'input': '0px 0px 5px rgba(0,0,0,0.25)',
      },
      screens: {
        wide: "1440px",
      },
      fontFamily: {
        sans: ["var(--font-ibm-sans)"],
      },
    },
  },
  plugins: [],
};
