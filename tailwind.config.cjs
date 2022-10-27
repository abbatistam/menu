/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-principal' : '#1E2742',
        'first-color' : '#F9E0E2',
        'middle-color' : '#FCBABA',
        'last-color' : '#FB7D8A',
        'califacation-color' : '#E45362',
    },
  },
  plugins: [],
}
}
