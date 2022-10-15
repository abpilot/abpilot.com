/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: '#5271ff',
        accentBlue: '#5271ff',
        lightRed: 'hsl(0, 100%, 63%)',
      }   
    },
    variants: {
      extend: {
        backgroundImage:['dark']
      }
    }
  },
  plugins: [],
}
