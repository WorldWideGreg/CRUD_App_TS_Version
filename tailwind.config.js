/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#31E1F7',
        'teal-perso':"#68A7AD",
        'teal-2'  : "#53d39c",
        'green-1'  : "#4abd8c",
        'dark-purple': '#400D51',
        'mid-purple': '#D800A6',
        'salmon': '#FF7777',
        'sable': '#E5CB9F',
        'light-sable': '#EEE4AB',
        'rose-poudre': '#FFC7C7',
        'rose-pale': '#FFE2E2',
        'white-rose': '#F6F6F6',
        'purp-poudre': '#8785A2',
        'blue-01': '#446dcf',
        'blue-02': '#2049ac',

      },
    },
  },
  plugins: [],
};
