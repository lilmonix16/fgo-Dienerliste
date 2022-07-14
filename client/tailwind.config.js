/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ['./index.html',
  './src/**/*.{js,jsx,ts,tsx}',],
  
  // configuration custom theme
  theme: {
    extend: {
      screens: {
        'hover-avail': {'raw': '(hover: hover)'}, // works only if device have hover (not touch device) to use it: hover-avail:hover:<some effect hover>
      },
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
