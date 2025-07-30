/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        popcorn: {
          50: '#fef7e0',
          100: '#fdebb1',
          200: '#fbd980',
          300: '#f9c74f',
          400: '#f7b51e',
          500: '#e09c00',
          600: '#ad7a00',
          700: '#7a5800',
          800: '#473600',
          900: '#141400',
        }
      }
    },
  },
  plugins: [],
}
