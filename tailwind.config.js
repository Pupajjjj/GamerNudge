/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0C',
        secondary: '#1C1C1E',
        accent: {
          DEFAULT: '#00FF41',
          hover: '#00CC33'
        }
      }
    },
  },
  plugins: [],
}