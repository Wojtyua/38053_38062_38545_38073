/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-1": "url(./src/assets/Burgir-A1.png)",
        "image-2": "url(./src/assets/Burgir-A2.png)",
      },
      colors: {
        text: "#070906",
        background: "#f7f9f6",
        primary: "#7ca064",
        secondary: "#adcdc0",
        accent: "#8db9b6",
      },
    },
  },
  plugins: [],
};
