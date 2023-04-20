/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '1700': '1700px',
      },
      height: {
        '450': '450px',
      },
      minHeight: {
        '80': '80px',
      },
      minWidth: {
        '350': '350px',
        '280': '280px'
      }
    },
  },
  plugins: [],
}

