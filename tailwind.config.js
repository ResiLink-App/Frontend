/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bc: "#0000BF",
        bc2: "#ffc433",
      },
      fontFamily: {
        Plus: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
