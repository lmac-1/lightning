/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightning-green": "#258F67",
        "lightning-green-dark": "#11412E",
        //"lightning-blue": "#5e9ed6",
        "lightning-mustard": "#EFC368",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      animation: {
        // Bounces 3 times and returns to position (3.5 seconds)
        "bounce-short": "bounce 1s ease-in-out 3.5",
      },
    },
  },
  plugins: [],
};
