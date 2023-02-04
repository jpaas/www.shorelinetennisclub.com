/** @type {import('tailwindcss').Config} */

const colors = {
  indigoDye: "#08415c",
  keyLimePie: "#cad32e",
  light: "#fff",
  magicMint: "#b5ffe1",
  orangeSoda: "#fe5e41",
}

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: colors.magicMint,
        navHeaderBackgroundOverlay: "#08415cf2", // indigoDye with 95% opacity
        surface: colors.light,
        text: colors.indigoDye,
        textLink: colors.orangeSoda,
        textNavHeader: colors.light,
      },
    },
  },
}