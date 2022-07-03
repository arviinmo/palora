module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'sl': '426px',
      'ma': '760px',
      'md': '960px',
      'lg': '1460px',
    },
    extend: {
      fontFamily: {
        Yeseva: ["'Yeseva One'", "cursive"],
        Poppins: ["Poppins", "sans-serif"]
      },
      colors: {

      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
