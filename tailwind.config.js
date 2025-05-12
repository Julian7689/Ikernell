/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/routes/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        interTight: ['"Inter Tight"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        ikernell: {
          yellow: '#f8f4c4',
          yellowHover: '#f1eeb7',
          dark: '#000000',
          grayText: '#9ca3af', // gray-400
        },
      },
    },
  },
  plugins: [],
};