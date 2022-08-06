/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    letterSpacing: {
      xl: "5px",
    },
    colors: {
      gray: "#F8F8F8",
      dark: "#222222",
      white: "#fff",
      blue: "#4169E1",
    },
    backgroundColor: {
      gray: "#F8F8F8",
      grayE: "#EEE",
      dark: "#222222",
      blue: "#4169E1",
      darkmode: "#16161a",
      white: "#f2f2f2",
    },
    fontSize: {
      exl: "144px",
      xxl: "72px",
      xl: "44px",
      md: "24px",
      sm: "16px",
      xsm: "12px",
    },

    extend: {},
  },
  plugins: [],
};
