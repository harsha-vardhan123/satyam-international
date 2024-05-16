/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: {
          DEFAULT:"1rem",
          sm:"3rem",
        },
      },
      gridTemplateColumns: {
        '400px': '400px',
        '800px': '800px',
      },
    },
  },
  plugins: [],
}