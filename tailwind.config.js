/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MilkL: ["MilkL", "sans-serif"],
        MilkB: ["MilkB", "sans-serif"],
        MilkR: ["MilkR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
