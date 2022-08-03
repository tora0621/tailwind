module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        tiny: '1.5rem',
      },
      fontFamily: {
        base: `'Roboto', sans-serif`,
      },
      padding: {
        large: '44rem',
      },
    },
  },
  plugins: [],
};
