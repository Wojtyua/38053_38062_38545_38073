/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#070906",
        textLight: "#303d29",
        background: "#f7f9f6",
        primary: "#7ca064",
        secondary: "#adcdc0",
        accent: "#8db9b6",
        secondaryLight: "#dfece7",
      },
    },
  },
  plugins: [],
};
