/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-color": "#304057",
        "dark-color-2": "#151515",
        "light-dark-color": "#6D6D6D"
      }
    },
  },
  plugins: [],
}
