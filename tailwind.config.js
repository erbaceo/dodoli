/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ivory:    '#FAF7F2',
        panna:    '#F5EFE4',
        latte:    '#EDE4D4',
        avorio:   '#E8DCC8',
        moka:     '#7C5C42',
        'moka-dark': '#5A3F2B',
        salvia:   '#8A9A85',
        'salvia-light': '#B5C4B1',
        cipria:   '#E8C5B8',
        'cipria-light': '#F2DDD6',
        gold:     '#C9A96E',
        'gold-dark': '#A07840',
      },
      fontFamily: {
        display:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        heading:  ['"Bodoni Moda"', '"Playfair Display"', 'serif'],
        body:     ['"Montserrat"', 'sans-serif'],
        light:    ['"Poppins"', 'sans-serif'],
        caption:  ['"Lato"', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.35em',
        'wide-xl': '0.2em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-left': 'slideLeft 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
