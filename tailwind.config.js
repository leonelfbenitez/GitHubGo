/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily :{
        sans : ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
      require('tw-elements/dist/plugin')
  ],
}
