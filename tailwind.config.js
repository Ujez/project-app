module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Abril: ["Abril"],
      Josefine: ["Josefine"],
      Quart: ["Quart"],
    },
    colors: {
      'blue': '#1fb6ff',
    },

    fontSize: {
      xs: ".75rem",
    },
    screens: {
      smaller: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [],
};
