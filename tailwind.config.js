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
        inverseText: colors.light,
        navHeaderBackgroundOverlay: "#08415cf2", // indigoDye with 95% opacity
        surface: colors.light,
        tableBackground: "#08415cf2",
        tableHeaderBackground: "#fe5e41f2",
        text: colors.indigoDye,
        textHeading: "#44403c",
        textLink: colors.orangeSoda,
        textNavHeader: colors.light,
      },
    },
  },
}
