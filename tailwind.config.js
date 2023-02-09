/** @type {import('tailwindcss').Config} */

const colors = {
  indigoDye: {
    100: "#08415c",
    300: "#1D6384",
    500: "#3E89AC",
    700: "#69B2D5",
    900: "#08415C",
  },
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
        button: { ...colors.indigoDye },
        inverseText: colors.light,
        navHeaderBackgroundOverlay: "#08415cf2", // indigoDye with 95% opacity
        surface: colors.light,
        tableBackground: "#08415cf2",
        tableHeaderBackground: "#fe5e41f2",
        text: colors.indigoDye[100],
        textHeading: "#44403c",
        textLink: colors.orangeSoda,
        textNavHeader: colors.light,
      },
    },
  },
}
