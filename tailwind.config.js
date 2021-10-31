module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        BroLink: ["BroLink"],
      },
      colors: {
        darkOrange: "#CE4912",
        orange: "#FF9D0A",
        darkBlue: "#042C71",
        blue: "#084387",
        lightBlue: "#29ABE2",
        gray: "#B3B3B3",
        darkGray: "#333333",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
