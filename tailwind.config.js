module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'Arial', 'sans-serif'],
      BroLink: ["BroLink"],
      Acumin:['Acumin']
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    lineHeight: {
      'none': '1',
      'tight': '1.25',
      'normal': '1.5',
      'loose': '2',
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}
