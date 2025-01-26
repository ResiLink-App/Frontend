/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bc: "#0000BF",
        bc2: "#ffc433",
        para: "#343434",
      },
      fontFamily: {
        Plus: ["Plus Jakarta Sans", "sans-serif"],
        Kriss: ["kriss", "sans-serif"],
        Chalty: ["chalty", "sans-serif"],
      },
    },
  },
  plugins: [],
};
