/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./content/**/*.{js,vue,ts,md,}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_1920/v1661585212/CHEF%20BREAKFAST/Baner5.1_6_dbr55l.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
