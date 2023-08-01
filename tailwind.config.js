/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainColor: "#0B2A4A",
        secondaryColor: "#F18A02",
        darkBg: "#15151a",
        darkerBg: "#1a1a24",
      },
      width: {
        half: "49%",
        third: "32%",
        fourth: "23%",
        fifth: "19%",
      },
      minWidth: {
        half: "49%",
      },
      maxWidth: {
        half: "49%",
      }
    },
  },
  plugins: [],
};
