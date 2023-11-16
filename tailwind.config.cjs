const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "main-blue": "rgba(29,200,215,1)",
        "main-blue-20": "rgba(29,200,215,.2)",
        "main-blue-05": "rgba(29,200,215,.05)",
      },
    },
  },
  plugins: [],
};
