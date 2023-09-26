/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      noto: ["Noto Sans", "sans - serif"],
      emoji: ["Noto Color Emoji", "sans - serif"],
      cursiveH: ["Croissant One", 'cursive'],
      mono:['Nova Mono', 'monospace']
    },
    extend: {},
  },
  plugins: [],
};

