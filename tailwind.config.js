// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        peach: '#FAE3EB',
        peach500: '#FAD2D0',
        peach400: '#D7C6DA',
        peach300: '#AAADC9',
        ocean: '#1647FB',
        ocean500: '#0073FF',
        ocean400: '#008Cff',
        ocean300: '#009BF0',
        ocean200: '#D3E3FC',
        oceanDark: '#1E266D',
        banana: '#FEEFC4',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
