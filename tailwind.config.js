/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        textBg: "url('/images/flash-cards.png')",
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
