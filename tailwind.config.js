/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"], 
  theme: {
    extend: {
      borderColor:{
        'blue-m':{
          0:'#0C4DA2'
        }
      },
      backgroundColor:{
        'blue-m':{
          0:'#0C4DA2'
        }
      }
    },
  },
  plugins: [],
}