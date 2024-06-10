/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepDarkBlue: '#181D31',
        gray: '#797E93',
        green: '#34D391',
        red: '#E8697E',
        lightPurple: '#E8D9EC',
        blue: '#5271FF',
      },
    },
  },
  plugins: [],
}
