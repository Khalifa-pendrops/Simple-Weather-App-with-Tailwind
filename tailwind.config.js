/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-xs": { max: "760px" },
      },
      fontSize: {
        customText: ".4rem",
        customText2: ".2rem",
        customText3: ".7rem",
        customText4: ".1rem",
      },
    },
  },
  plugins: [],
};
