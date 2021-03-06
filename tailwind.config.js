module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      
    },
    extend: {
      fontFamily: {
        BroLink: ["BroLink"],
        Acumin:['Acumin']
      },
      
      colors: {
        CdarkOrange: "#CE4912",
        Corange: "#FF9D0A",
        CdarkBlue: "#042C71",
        Cblue: "#084387",
        ClightBlue: "#29ABE2",
        Cgray: "#B3B3B3",
        CdarkGray: "#333333",
        CdarkRed:'#A02B4F'
      },
      backgroundImage: {
        'slide1': "url('/assets/brand_image.jpg')",
        "techHeader":'url(/assets/TechnologiesHeader.png)'
      },
    },
    
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
