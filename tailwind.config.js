
    /** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
    	"./src/**/*.{vue,ts,jsx, tsx}"
  ],
  theme: {
    extend: {
      screens:{
        mobile: '375px',
        tablet: '750px',
        desktop: '1440px',
      },
      colors:{
        Red: "hsl(14, 86%, 42%)",
        Green: "hsl(159, 69%, 38%)",
        Rose:{
          50: "hsl(20, 50%, 98%)",
          100: "hsl(13, 31%, 94%)",
          300: "hsl(14, 25%, 72%)",
          400: "hsl(7, 20%, 60%)",
          500: "hsl(12, 20%, 44%)",
          900: "hsl(14, 65%, 9%)",
        },
      },
    
      fontFamily:{
        redHat: ['"Red Hat Text"','sans-serif'],
      },
    
    
    },
  },
  plugins: [],
}
    