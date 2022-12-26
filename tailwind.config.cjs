/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        allerta:["Allerta Stencil","cursive"]
      },
      keyframes:{
        waveHand:{
          '0%':{transform:'rotate(0.0deg)'},
          '15%':{transform:'rotate(14.0deg)'},
          '30%':{transform:'rotate(-8.0deg)'},
          '40%':{transform:'rotate(14.0deg)'},
          '50%':{transform:'rotate(-4.0deg)'},
          '60%':{transform:'rotate(10.0deg)'},
          '70%':{transform:'rotate(0.0deg)'},
          '100%':{transform:'rotate(0.0deg)'},
        }
      },
      animation:{
        waveHand:'waveHand 1.5s infinite'
      },
      screens:{
        '4xl':'2000px',
        'btnMd':'767px',
        'btnLg':'883px'
      },
      zIndex:{
        '1':'1'
      }
    },
  },
  plugins: [],
}