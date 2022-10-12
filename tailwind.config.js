/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-color': '#fff',
        'secondary-color': '#C89C59',
        'text-color': '#02293E',
      },
      fontFamily: {
        'font-poppins': ["'Poppins', 'sans-serif'"],
        'font-minerva': ["'Minerva-Modern', 'sans-serif'"],
      },
    },
  },
  plugins: [],
}
