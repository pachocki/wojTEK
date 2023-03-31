/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "3xl":{min: "2001px"},
      "2xl": { "min": "1451px" , "max":"2000px"},

      "xl": { max: "1450px" },

      "lg": { max: "1050px" },

      "md": { max: "768px" },

      "sm": { max: "640px" },

      "xs": { max: "390px" },
    },
    backgroundImage: {
      'gradient-hero': 'linear-gradient(142.4deg, rgb(139, 98, 208) 5%, rgb(126, 124, 223) 28.2%, rgb(109, 207, 236) 62.5%, rgb(176, 239, 244) 89.1%);',
      "paper": "url('../src/assets/blackpaper.png')",
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}