/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#654EB0",
        darkest: "#101935",
        dark: "#334069",
        mid: "#564787",
        light: "#E5E0F5",
        lightest: "#e7f1fc"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

