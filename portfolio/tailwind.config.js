/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'rebeccapurple': '#663399', 
      },
      fontSize: {
        '9xl': '8rem', 
        '10xl': '10rem', 
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

