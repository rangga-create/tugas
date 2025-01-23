/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage:{
        "header":"url('../img/Purple Watercolor.jpeg')"
      },
      colors:{
        "gold":"#daa520",
      },
      boxShadow: {
        'goldd': '0px 4px 6px rgba(255, 223, 0, 0.5)', //  emas
        'soft': '2px 2px 6px rgba(255, 255, 255, 0.7)',//lembut putih
      },
    },
  },
  plugins: [],
}

