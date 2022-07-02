module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
