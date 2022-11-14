/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        darkBgPage2:
          "linear-gradient(17deg, rgba(41, 41, 41, 0.02) 0%, rgba(41, 41, 41, 0.02) 48%,rgba(10, 10, 10, 0.02) 48%, rgba(10, 10, 10, 0.02) 59%,rgba(164, 164, 164, 0.02) 59%, rgba(164, 164, 164, 0.02) 73%,rgba(79, 79, 79, 0.02) 73%, rgba(79, 79, 79, 0.02) 93%,rgba(42, 42, 42, 0.02) 93%, rgba(42, 42, 42, 0.02) 100%),linear-gradient(42deg, rgba(124, 124, 124, 0.02) 0%, rgba(124, 124, 124, 0.02) 15%,rgba(116, 116, 116, 0.02) 15%, rgba(116, 116, 116, 0.02) 23%,rgba(41, 41, 41, 0.02) 23%, rgba(41, 41, 41, 0.02) 44%,rgba(196, 196, 196, 0.02) 44%, rgba(196, 196, 196, 0.02) 54%,rgba(145, 145, 145, 0.02) 54%, rgba(145, 145, 145, 0.02) 100%),linear-gradient(151deg, rgba(85, 85, 85, 0.02) 0%, rgba(85, 85, 85, 0.02) 12%,rgba(72, 72, 72, 0.02) 12%, rgba(72, 72, 72, 0.02) 28%,rgba(156, 156, 156, 0.02) 28%, rgba(156, 156, 156, 0.02) 33%,rgba(230, 230, 230, 0.02) 33%, rgba(230, 230, 230, 0.02) 50%,rgba(13, 13, 13, 0.02) 50%, rgba(13, 13, 13, 0.02) 100%),linear-gradient(76deg, rgba(25, 25, 25, 0.02) 0%, rgba(25, 25, 25, 0.02) 9%,rgba(183, 183, 183, 0.02) 9%, rgba(183, 183, 183, 0.02) 32%,rgba(19, 19, 19, 0.02) 32%, rgba(19, 19, 19, 0.02) 86%,rgba(129, 129, 129, 0.02) 86%, rgba(129, 129, 129, 0.02) 88%,rgba(174, 174, 174, 0.02) 88%, rgba(174, 174, 174, 0.02) 100%),linear-gradient(90deg, rgb(41, 41, 41),rgb(8, 8, 8));",
        darkBgPage:
          "radial-gradient(circle at 37% 80%, hsla(180,0%,7%,0.1) 0%, hsla(180,0%,7%,0.1) 45%,transparent 45%, transparent 73%,transparent 73%, transparent 100%),radial-gradient(circle at 60% 45%, hsla(180,0%,7%,0.1) 0%, hsla(180,0%,7%,0.1) 67%,transparent 67%, transparent 71%,transparent 71%, transparent 100%),radial-gradient(circle at 23% 84%, hsla(180,0%,7%,0.1) 0%, hsla(180,0%,7%,0.1) 55%,transparent 55%, transparent 97%,transparent 97%, transparent 100%),radial-gradient(circle at 52% 76%, hsla(180,0%,7%,0.1) 0%, hsla(180,0%,7%,0.1) 37%,transparent 37%, transparent 95%,transparent 95%, transparent 100%),radial-gradient(circle at 50% 81%, hsla(180,0%,7%,0.1) 0%, hsla(180,0%,7%,0.1) 79%,transparent 79%, transparent 85%,transparent 85%, transparent 100%),linear-gradient(45deg, rgb(31, 89, 11),rgb(104, 210, 51))",
        lightBgPage:
          "linear-gradient(45deg, rgba(254, 246, 210, 0.53) 0%, rgba(254, 246, 210, 0.53) 14.286%,rgba(221, 240, 216, 0.53) 14.286%, rgba(221, 240, 216, 0.53) 28.572%,rgba(188, 233, 223, 0.53) 28.572%, rgba(188, 233, 223, 0.53) 42.858%,rgba(156, 227, 229, 0.53) 42.858%, rgba(156, 227, 229, 0.53) 57.144%,rgba(123, 220, 235, 0.53) 57.144%, rgba(123, 220, 235, 0.53) 71.42999999999999%,rgba(90, 214, 242, 0.53) 71.43%, rgba(90, 214, 242, 0.53) 85.71600000000001%,rgba(57, 207, 248, 0.53) 85.716%, rgba(57, 207, 248, 0.53) 100.002%),linear-gradient(135deg, rgb(246, 99, 200) 0%, rgb(246, 99, 200) 12.5%,rgb(223, 98, 196) 12.5%, rgb(223, 98, 196) 25%,rgb(199, 97, 192) 25%, rgb(199, 97, 192) 37.5%,rgb(176, 96, 188) 37.5%, rgb(176, 96, 188) 50%,rgb(152, 95, 184) 50%, rgb(152, 95, 184) 62.5%,rgb(129, 94, 180) 62.5%, rgb(129, 94, 180) 75%,rgb(105, 93, 176) 75%, rgb(105, 93, 176) 87.5%,rgb(82, 92, 172) 87.5%, rgb(82, 92, 172) 100%)",
        headerDark:
          "radial-gradient(circle at center center, rgba(33,33,33,0),rgb(0,0,0)),repeating-linear-gradient(135deg, rgb(0,0,0) 0px, rgb(0,0,0) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(45deg, rgb(16,16,16) 0px, rgb(16,16,16) 5px,transparent 5px, transparent 6px),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0));",
        headerLight:
          "radial-gradient(circle at center center, rgba(33,33,33,0),rgb(33,33,33)),repeating-linear-gradient(135deg, rgb(33,33,33) 0px, rgb(33,33,33) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(45deg, rgb(56,56,56) 0px, rgb(56,56,56) 5px,transparent 5px, transparent 6px),linear-gradient(90deg, rgb(33,33,33),rgb(33,33,33))",
        buttonSky: "../public/images/sky.png",
        buttonNature: "../public/images/nature.png",
      },

      colors: {
        //tests color (some are in the light mode)
        "light-blue": "#31E1F7",
        "teal-perso": "#68A7AD",
        "teal-2": "#53d39c",
        "green-01": "#4abd8c",
        "dark-purple": "#400D51",
        "mid-purple": "#D800A6",
        salmon: "#FF7777",
        sable: "#E5CB9F",
        "light-sable": "#EEE4AB",
        "rose-poudre": "#fad8d8",
        "rose-pale": "#FFE2E2",
        "white-rose": "#F6F6F6",
        "purp-poudre": "#8785A2",
        "blue-01": "#446dcf",
        "blue-02": "#2049ac",
        //tests color (some are in the dark mode)
        "purp-mid": "#8E05C2",
        "purp-up": "#700B97",
        "purp-upper": "#3E065F",
        "purp-low": "#E80F88",
        "green-mid": "#425F57",
        "green-up": "#4E6C50",
        "green-upper": "#395144",
        "green-low": "#749F82",
        "green-lowest": "#BCEAD5",
        "green-lowest-2": "#DEF5E5",
        "white-green": "#DEF5E5",
        "orange-mid": "#FF9F29",
        "orange-up": "#EF5B0C",
        "orange-low": "#FFB562",
        //NewPurps
        "purp-01": "#A856C9",
        "purp-02": "#8C4AAD",
        "purp-03": "#703D91",
        "purp-04": "#553176",
        "purp-05": "#39255A",
        "purp-06": "#1D183E",
        "purp-07": "#010C22",
        "purp-08": "#5F034A",
        "purp-09": "#234160",
        //greyscales
        "grey-01": "#030303",
        "grey-02": "#0B0B0B",
        "grey-03": "#000000",
        "grey-04": "#050505",
        "grey-05": "#080808",
        "grey-06": "#0E0E0E",
        "grey-07": "#131313",
        "grey-08": "#101010",
      },
    },
    variants: {
      extend: {},
    },
  },

  plugins: [require("tailwindcss-ripple")()],
};
