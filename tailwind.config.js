/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "340px",

      md: "658px",

      lg: "1124px",

      xl: "1580px",

      "2xl": "1636px",
    },
  },
  plugins: [],
};
