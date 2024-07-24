/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : { // esto crea una clase bg-header
        "header" : "url('bg.jpg')"
      }
    },
  },
  plugins: [],
}

