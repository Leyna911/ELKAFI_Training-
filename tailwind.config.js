/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",   
        secondary: "#171515",
        tertiary: "#5928E5",
        quaternary:"#",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily:{
        
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        'xs': "640px",
        
      },
      backgroundImage: {
       
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

