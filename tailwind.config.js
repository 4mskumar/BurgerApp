/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: 
      {
       'cursive': ["Great Vibes", 'cursive'],
       'oswald' : ["Oswald", 'sans-serif'],
       'lintin' : ["Lilita One", 'sans-serif']
      },
      colors: {
        'slate' : '#1e1e1e'
      }
    },
  },
  plugins: [],
}