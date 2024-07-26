/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
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

