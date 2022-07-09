module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      sl: "426px",
      ma: "760px",
      md: "960px",
      lg: "1460px",
    },
    fontSize: {
      xt: ".5rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      fontFamily: {
        Yeseva: ["'Yeseva One'", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {},
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
