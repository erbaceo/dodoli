/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Clean neutrals — white canvas (Smallable/Joybebe style)
        'n-50':  '#FFFFFF',
        'n-100': '#F5F5F5',
        'n-200': '#E5E5E5',
        'n-300': '#CCCCCC',
        'n-400': '#888888',
        'n-500': '#555555',
        // Brand accents — kept for identity
        'moka':  '#6B4C35',
        'moka-d':'#3E2B1E',
        'gold':  '#B8955A',
        'sage':  '#7E907A',
        'blush': '#F0D5CE',
        // Utility
        'dark':  '#1A1A1A',
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
