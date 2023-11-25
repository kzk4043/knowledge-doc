const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      colors: {
        "main-blue": "rgba(29,200,215,1)",
        "accenet-orange": "rgba(176, 136, 63, 1)",
      },
      textUnderlineOffset: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
