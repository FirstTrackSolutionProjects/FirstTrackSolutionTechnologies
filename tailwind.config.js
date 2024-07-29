/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBeige:'#d7b4ae',
        darkPurple:'#9d99bc',
        darkYellow:'#fff27a',
        whatsapp:'#25D366'
      },
      borderColor: theme => ({
        'flap1': '#d7b4ae',
        'flap2':'#9d99bc',
        'flap4':'#fff27a', // Define a custom border color
      }),
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
        "playfair":['Playfair Display', 'serif'],
    } 

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

