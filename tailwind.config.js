/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Scans the index.html file
    "./src/**/*.{js,ts,jsx,tsx}",  // Scans all JS/TS/JSX/TSX files inside the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Add Poppins font to the sans family
      },
    },
  },
  plugins: [],
};
