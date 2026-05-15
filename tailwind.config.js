/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Neutrals — the whole canvas
        'n-50':  '#FDFBF8',
        'n-100': '#F8F4EE',
        'n-200': '#EDE6DA',
        'n-300': '#DDD3C2',
        'n-400': '#C8BAA4',
        'n-500': '#A8937A',
        // Accents
        'moka':  '#6B4C35',
        'moka-d':'#3E2B1E',
        'gold':  '#B8955A',
        'sage':  '#7E907A',
        'blush': '#D9B8B0',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        bodoni:    ['"Bodoni Moda"', 'serif'],
        sans:      ['"Montserrat"', 'sans-serif'],
        light:     ['"Poppins"', 'sans-serif'],
      },
      letterSpacing: {
        'px4':  '0.04em',
        'px8':  '0.08em',
        'px16': '0.16em',
        'px24': '0.24em',
        'px32': '0.32em',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}
