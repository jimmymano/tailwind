/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {fontSize:{jimmy:'5rem'}, 
    colors:{
      primary:'#71DBD4',
      secondary:{
        100:'#FFD319',
        200:'#FF901F',
      },
      synth:{
        orange:'#FF6C11',
        red:'#FF3864',
        aqua:'#2DE2E6',
        darkblue:'#261447 ',
        darkerblue:'#0D0221',
        pink:'#F6019D',
        fuschia:'#C724B1',
      },},
      letterSpacing:{
        big:'.75rem'
      },
    fontFamily:{
      vcr:['vcr','sans-serif'],
      pacman:['pacman','sans-serif'],
      outrun:['outrun','sans-serif'],
      brat:['brat','sans-serif'],
      lazer84:['lazer84','sans-serif'],
      indelible:['indelible','sans-serif'],
      roadrage:['roadrage','sans-serif'],
      streamster:['streamster','sans-serif'],
      commando:['commando','sans-serif'],
      flashback:['flashback','sans-serif'],
      rocket:['rocket','sans-serif'],
      edit:['edit','sans-serif'],
      enikusu:['enikusu','sans-serif'],
    },
  borderWidth:{
    '10': '10px',
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '18': '18px',
    '20': '20px',
  }},
  },
  plugins: [require('tailwind-scrollbar'),],
}

