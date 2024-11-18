/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC00C",
        secondary: "#FFD55C",
        base: "#4E4E4E",
      },
    },
  },
  plugins: [],
}