/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#3b0764',
          800: '#4c1d95',
          600: '#7c3aed',
          400: '#a78bfa',
        },
      },
    },
  },
  plugins: [],
};