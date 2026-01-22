
/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        danger: "#A6252A",
        primary: "#0063D01A",
      },
    },
  },
  plugins: [
  ],
};
