module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-home": "url('./assets/background.jpg')",
      },
    },
    fontFamily: {
      cursive: "Lobster, cursive",
      sanserif: "Poppins, sans-serif",
      mono: "Space Mono, monospace",
    },
    dropShadow: {
      "3xl": "-3px 0px 12px rgb(67, 56, 202)",
    },
  },
  plugins: [],
};
