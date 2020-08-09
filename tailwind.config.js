// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        peach: '#fae3eb',
        ocean: '#1647FB',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
