/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        'primary-cherry-pink': '#EDAFB8',
        'primary-champagne-pink': '#F7E1D7',
        'primary-timberwolf': '#DEDBD2',
        'primary-ash-gray': '#B0C4B1',
        'primary-outer-space': '#4A5759',
      },
      translate: {
        'btn-card': '-50%',
      },
    },
    fontFamily: {
      'lexend-deca': ['Lexend Deca', 'sans-serif'],
      arima: ['Arima', 'cursive'],
    },
  },
};
