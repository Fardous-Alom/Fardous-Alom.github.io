// npx tailwindcss -i ./src/input.css -o ./style.css --watch   

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}