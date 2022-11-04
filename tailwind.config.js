/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //tests color (some are in the light mode)
        'light-blue': '#31E1F7',
        'teal-perso':"#68A7AD",
        'teal-2'  : "#53d39c",
        'green-01'  : "#4abd8c",
        'dark-purple': '#400D51',
        'mid-purple': '#D800A6',
        'salmon': '#FF7777',
        'sable': '#E5CB9F',
        'light-sable': '#EEE4AB',
        'rose-poudre': '#fad8d8',
        'rose-pale': '#FFE2E2',
        'white-rose': '#F6F6F6',
        'purp-poudre': '#8785A2',
        'blue-01': '#446dcf',
        'blue-02': '#2049ac',
        //tests color (some are in the dark mode)
        'purp-mid': '#8E05C2',
        'purp-up': '#700B97',
        'purp-upper': '#3E065F',
        'purp-low': '#E80F88',
        'green-mid':'#425F57',
        'green-up':'#4E6C50',
        'green-upper':'#395144',
        'green-low':'#749F82',
        'green-lowest':'#BCEAD5',
        'green-lowest-2':'#DEF5E5',
        'white-green': '#DEF5E5',
        'orange-mid':'#FF9F29',
        'orange-up':'#EF5B0C',
        'orange-low':'#FFB562',
      },
    },
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],
};
