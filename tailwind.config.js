/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      fontFamily: { 
        "lato": ['Lato', 'sans-serif'],
        "inter": ['Inter', 'sans-serif'],
    } 
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

