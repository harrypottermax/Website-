/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FEF6F0",
        peach: "#FFE5D2",
        mint: "#DDF6E3",
        blue: "#D2EAFE",
        pink: "#FFD6EC",
        lilac: "#E5D2FF",
        yellow: "#FFF7CC"
      },
      fontFamily: {
        sans: ["Nunito", "Inter", "sans-serif"]
      }
    }
  },
  plugins: []
}