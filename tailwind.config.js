/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      black: "#000112",
      very_dark_gray: "#20212C",
      dark_gray: "#2B2C37",
      lines_dark: "#3E3F4E",
      medium_gray: "#828FA3",
      light_gray: "#F4F7FD",
      lines_light: "#E4EBFA",
      white: "#FFFFFF",
      purple: "#635FC7",
      purple_hover: "#A8A4FF",
      red: "#EA5555",
      red_hover: "#FF9898",
    },
    extend: {},
  },

  plugins: [],
};
