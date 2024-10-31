/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",

      md: "758px",

      lg: "1024px",

      xl: "1580px",

      "2xl": "1636px",
    },
  },
  plugins: [],
};
