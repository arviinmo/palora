module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1460px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        Yeseva: ["'Yeseva One'", "cursive"],
        Poppins: ["Poppins", "sans-serif"]
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
