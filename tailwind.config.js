/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf6f2',
          100: '#f5ede4',
          200: '#ead9c7',
          300: '#e0c5aa',
          400: '#d6b18d',
          500: '#c89c70',
          600: '#ba8253',
          700: '#9c6b44',
          800: '#7e563a',
          900: '#604232',
        },
        accent: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'texture': "url('https://images.pexels.com/photos/7130498/pexels-photo-7130498.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'hero': "url('https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }
    },
  },
  plugins: [],
};