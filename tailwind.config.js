/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('images/bg2.png')",
        'bg-signup': "url('images/bg3.jpg')",
        
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

