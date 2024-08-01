/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    // "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {},


    backgroundImage: {
      'heroImg': "url('/assets/heroImg.jpg')",

    }
  },
  plugins: [
    require('daisyui'),
  ],
 
}

