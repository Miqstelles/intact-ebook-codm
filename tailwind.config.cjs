/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      sora: ['Sora', 'sans-serif']
    },
    extend: {
      colors: {
        'gr-100': '#A7FF98',
        'dark': '#030007',
        'prp-200': '#0E0816',
        'prp-300': '#231633'
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down .5s ease-out'
      }
    },
  },
  plugins: [],
}
