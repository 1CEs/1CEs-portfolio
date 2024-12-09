/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white": {
          DEFAULT: "#FFFFFF",
          100: "#EEEEEE"
      },
      "black": "000",
      "primary": {
          DEFAULT: "#d4d0c7",
          100: "#adaaa3",
          "active": "#bcb9b1"
      },
    }
  },
  plugins: [],
}

