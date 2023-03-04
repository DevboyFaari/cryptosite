/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"rgb(3,3,65, .7);",
      },
      fontFamily:{
        body:['Nunito'],
      }
    },
  },
  plugins: [],
}
