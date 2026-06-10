export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
      },
      colors: {
        rosa: {
          DEFAULT: "var(--rosa)",
          dark: "var(--rosa-dark)",
          light: "var(--rosa-light)",
        },

        verde: {
          DEFAULT: "var(--verde)",
          dark: "var(--verde-dark)",
          light: "var(--verde-light)",
        },

        cinza: {
          DEFAULT: "var(--cinza)",
          dark: "var(--cinza-dark)",
          light: "var(--cinza-light)",
        },

        branco: {
          DEFAULT: "var(--branco)",
          "off-white": "var(--off-white)",
        },
      },
    },
  },
  plugins: [],
};
