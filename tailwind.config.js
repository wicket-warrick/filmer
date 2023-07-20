/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        placeFilm: "var(--font-family)",
      },
      colors: {
        placeFilmGreen1: "var(--color-primary)",
        placeFilmGreen2: "var(--color-secondary)",
        placeFilmGreen3: "var(--color-third)",
      },
    },
  },
  plugins: [],
};
