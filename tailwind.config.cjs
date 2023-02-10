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
            transform: 'translateY(-40px)',
            transition: 'opacity 1s'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            transition: 'opacity 1s'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 1.5s ease-out'
      },
      screens: {
        'md': '800px',
        'lg': '1200px'
      }
    },
  },
  plugins: [],
}
