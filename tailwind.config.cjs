module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Gilroy",
          "GilroyBold",
          "GilroyMedium",
          "sans-serif",
        ],
      },
      backgroundImage: {
        'movie-bg': "url('/static/jpg/avengers.jpg')",
      }
    },
  },
}