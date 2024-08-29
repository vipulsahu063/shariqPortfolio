// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define your custom font family here
        'WorkSans': ['Work Sans', 'sans-serif'],
        'CinzelDecorative': ['Cinzel Decorative', 'serif'], // Example with a custom font
      },
    },
  },
  plugins: [],
}
