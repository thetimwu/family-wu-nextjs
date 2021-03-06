module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        title: ["Akaya Kanadaka"],
        body: ["Lora"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
