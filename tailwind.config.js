/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./src/css/style.css -o ./public/css/style.css --watch